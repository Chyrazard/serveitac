import Image from "next/image";

export function Brand({
  dark = false,
  compact = false,
  href = "#inicio",
}: {
  dark?: boolean;
  compact?: boolean;
  href?: string;
}) {
  return (
    <a
      href={href}
      className={`brand ${dark ? "brand-dark" : ""} ${
        compact ? "brand-compact" : ""
      }`}
      aria-label="Domoteknik, volver al inicio"
    >
      <Image
        src="/images/domoteknik-logo.png"
        alt="Domoteknik"
        width={490}
        height={171}
        priority
      />
    </a>
  );
}
