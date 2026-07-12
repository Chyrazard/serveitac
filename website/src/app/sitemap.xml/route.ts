import { site } from "@/lib/site";
import { localLandingSlugs } from "@/lib/local-landings";

export const dynamic = "force-static";

const baseUrl = `https://${site.domain}`;

type SitemapEntry = {
  path: string;
  lastModified: string;
};

const entries: SitemapEntry[] = [
  {
    path: "/",
    lastModified: "2026-07-12"
  },
  {
    path: "/ca",
    lastModified: "2026-07-12"
  },
  ...localLandingSlugs.map((slug) => ({
    path: `/${slug}`,
    lastModified: "2026-07-12"
  })),
  {
    path: "/aviso-legal",
    lastModified: "2026-07-06"
  },
  {
    path: "/politica-privacidad",
    lastModified: "2026-07-06"
  },
  {
    path: "/cookies",
    lastModified: "2026-07-06"
  }
];

function sitemapUrl(entry: SitemapEntry) {
  const lines = [
    "  <url>",
    `    <loc>${baseUrl}${entry.path}</loc>`,
    `    <lastmod>${entry.lastModified}</lastmod>`,
    "  </url>"
  ];

  return lines.join("\n");
}

export function GET() {
  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    entries.map(sitemapUrl).join("\n"),
    "</urlset>",
    ""
  ].join("\n");

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800"
    }
  });
}
