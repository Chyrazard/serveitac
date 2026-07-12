import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingPage } from "@/components/LandingPage";
import { getLocalLanding, localLandingSlugs } from "@/lib/local-landings";
import { localLandingJsonLd, localLandingMetadata } from "@/lib/seo";

type LocalLandingPageProps = {
  params: Promise<{ landing: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return localLandingSlugs.map((landing) => ({ landing }));
}

export async function generateMetadata({ params }: LocalLandingPageProps): Promise<Metadata> {
  const { landing: slug } = await params;
  const landing = getLocalLanding(slug);

  if (!landing) {
    return {};
  }

  return localLandingMetadata(landing);
}

export default async function LocalLandingPage({ params }: LocalLandingPageProps) {
  const { landing: slug } = await params;
  const landing = getLocalLanding(slug);

  if (!landing) {
    notFound();
  }

  return (
    <>
      <LandingPage initialLang="es" landing={landing} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localLandingJsonLd(landing))
        }}
      />
    </>
  );
}
