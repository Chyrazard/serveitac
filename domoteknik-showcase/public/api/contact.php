<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    header('Allow: POST');
    echo json_encode(['message' => 'Método no permitido.']);
    exit;
}

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
$allowedOrigins = [
    'https://nueva.domoteknik.com',
    'https://domoteknik.com',
    'https://www.domoteknik.com',
];

if ($origin !== '' && !in_array($origin, $allowedOrigins, true)) {
    http_response_code(403);
    echo json_encode(['message' => 'Origen no permitido.']);
    exit;
}

$rawBody = file_get_contents('php://input');
$contentType = $_SERVER['CONTENT_TYPE'] ?? '';
$data = str_contains($contentType, 'application/json')
    ? json_decode($rawBody ?: '{}', true)
    : $_POST;

if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['message' => 'Solicitud no válida.']);
    exit;
}

if (!empty($data['website'])) {
    echo json_encode(['message' => 'Solicitud recibida.']);
    exit;
}

$clientIp = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$rateFile = sys_get_temp_dir() . '/domoteknik-form-' . hash('sha256', $clientIp);
$lastRequest = is_file($rateFile) ? (int) file_get_contents($rateFile) : 0;

if ($lastRequest > 0 && time() - $lastRequest < 20) {
    http_response_code(429);
    echo json_encode(['message' => 'Espera unos segundos antes de volver a enviar.']);
    exit;
}

$clean = static function ($value, int $maxLength = 500): string {
    $text = trim((string) $value);
    $text = str_replace(["\r", "\0"], '', $text);
    return mb_substr($text, 0, $maxLength);
};

$firstName = $clean($data['firstName'] ?? '', 80);
$lastName = $clean($data['lastName'] ?? '', 120);
$phone = $clean($data['phone'] ?? '', 40);
$postalCode = $clean($data['postalCode'] ?? '', 10);
$email = filter_var(trim((string) ($data['email'] ?? '')), FILTER_VALIDATE_EMAIL);
$message = $clean($data['message'] ?? '', 3000);
$privacy = ($data['privacy'] ?? '') === 'accepted';

if ($firstName === '' || $lastName === '' || $phone === '' || !$email || !$privacy) {
    http_response_code(422);
    echo json_encode(['message' => 'Completa todos los campos obligatorios.']);
    exit;
}

if (!preg_match('/^[0-9]{5}$/', $postalCode)) {
    http_response_code(422);
    echo json_encode(['message' => 'Introduce un código postal válido de 5 cifras.']);
    exit;
}

file_put_contents($rateFile, (string) time(), LOCK_EX);

$recipient = 'info@domoteknik.com';
$subject = 'Nueva solicitud de estudio gratuito - ' . $firstName . ' ' . $lastName;
$body = implode("\n", [
    'Nueva solicitud recibida desde la web de Domoteknik',
    '',
    'Nombre: ' . $firstName . ' ' . $lastName,
    'Teléfono: ' . $phone,
    'Código postal: ' . $postalCode,
    'Correo: ' . $email,
    '',
    'Comentario:',
    $message !== '' ? $message : 'Sin comentario.',
    '',
    'Protección de datos: aceptada',
    'Página: ' . ($_SERVER['HTTP_REFERER'] ?? 'No disponible'),
    'Fecha: ' . date('Y-m-d H:i:s T'),
]);

$safeReplyTo = str_replace(["\r", "\n"], '', (string) $email);
$headers = [
    'From: Formulario Domoteknik <no-reply@nueva.domoteknik.com>',
    'Reply-To: ' . $safeReplyTo,
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
    'X-Mailer: Domoteknik Website',
];

$sent = mail(
    $recipient,
    $subject,
    $body,
    implode("\r\n", $headers),
    '-fno-reply@nueva.domoteknik.com'
);

if (!$sent) {
    error_log('Domoteknik contact form: mail() failed');
    http_response_code(500);
    echo json_encode(['message' => 'No pudimos enviar la solicitud. Llámanos al 931 989 521.']);
    exit;
}

echo json_encode(['message' => 'Solicitud enviada correctamente.']);
