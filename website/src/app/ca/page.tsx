import type { Metadata } from "next";
import { LandingPage } from "@/components/LandingPage";
import { catalanMetadata, jsonLd } from "@/lib/seo";

export const metadata: Metadata = catalanMetadata;

export default function CatalanHome() {
  return (
    <>
      <LandingPage initialLang="ca" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd("ca"))
        }}
      />
    </>
  );
}
