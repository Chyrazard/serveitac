"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { site } from "@/lib/site";

type ConversionType = "call" | "whatsapp";

type ConversionLinkProps = {
  href: string;
  type: ConversionType;
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function conversionTarget(type: ConversionType) {
  const label = type === "call" ? site.ads.callLabel : site.ads.whatsappLabel;
  if (!site.ads.id || !label) return null;
  return `${site.ads.id}/${label}`;
}

export function ConversionLink({
  href,
  type,
  className,
  children,
  ariaLabel
}: ConversionLinkProps) {
  function handleClick() {
    const sendTo = conversionTarget(type);
    if (sendTo && typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", { send_to: sendTo });
    }
  }

  const isExternal = href.startsWith("http");

  if (isExternal) {
    return (
      <a
        href={href}
        className={className}
        aria-label={ariaLabel}
        onClick={handleClick}
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} aria-label={ariaLabel} onClick={handleClick}>
      {children}
    </Link>
  );
}
