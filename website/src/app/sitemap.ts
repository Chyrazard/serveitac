import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = `https://${site.domain}`;
  const lastModified = new Date();

  return [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          es: `${baseUrl}/`,
          ca: `${baseUrl}/ca`
        }
      }
    },
    {
      url: `${baseUrl}/ca`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: {
          es: `${baseUrl}/`,
          ca: `${baseUrl}/ca`
        }
      }
    },
    {
      url: `${baseUrl}/aviso-legal`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3
    },
    {
      url: `${baseUrl}/politica-privacidad`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3
    },
    {
      url: `${baseUrl}/cookies`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3
    }
  ];
}
