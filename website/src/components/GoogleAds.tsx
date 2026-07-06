import Script from "next/script";
import { site } from "@/lib/site";

export function GoogleAds() {
  if (!site.ads.id) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${site.ads.id}`}
        strategy="afterInteractive"
      />
      <Script id="google-ads" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${site.ads.id}');
        `}
      </Script>
    </>
  );
}
