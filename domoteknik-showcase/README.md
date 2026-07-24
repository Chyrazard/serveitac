# Domoteknik Showcase

Tres propuestas de landing page para Domoteknik, construidas con Next.js y
exportadas como sitio estático:

- `/1/`: dirección editorial y estratégica.
- `/2/`: dirección cálida, residencial y minimalista.
- `/3/`: dirección tecnológica, energética y cinética.

## Desarrollo

```bash
npm install
npm run dev
```

## Producción

```bash
npm run build
```

El resultado estático se genera en `out/` y se publica en
`/var/www/domoteknik`. En el VPS actual, PM2 sirve esos archivos internamente
en el puerto `3020`; Traefik/Easypanel publica los dominios y gestiona HTTPS
mediante `deploy/traefik-domoteknik.yaml`. El virtual host Nginx se conserva
como alternativa para servidores sin las restricciones de permisos del host
actual.

## Contacto configurado

- Llamadas: `+34 931 989 521`
- WhatsApp de ventas: `+34 623 974 748`
- Correo: `info@domoteknik.com`

En escritorio se muestra un botón flotante de WhatsApp. En móvil se muestra
una barra fija 50/50 con llamada y WhatsApp.
