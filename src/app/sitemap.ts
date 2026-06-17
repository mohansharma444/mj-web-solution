import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.mjwebsolution.com";
  const currentDate = new Date();

  const paths = [
    { url: "", changeFrequency: "weekly" as const, priority: 1.0 },
    { url: "/about", changeFrequency: "monthly" as const, priority: 0.8 },
    { url: "/services", changeFrequency: "weekly" as const, priority: 0.8 },
    { url: "/portfolio", changeFrequency: "weekly" as const, priority: 0.8 },
    { url: "/technologies", changeFrequency: "monthly" as const, priority: 0.7 },
    { url: "/pricing", changeFrequency: "monthly" as const, priority: 0.7 },
    { url: "/blog", changeFrequency: "weekly" as const, priority: 0.7 },
    { url: "/faq", changeFrequency: "monthly" as const, priority: 0.6 },
    { url: "/contact", changeFrequency: "monthly" as const, priority: 0.9 },
    { url: "/privacy-policy", changeFrequency: "yearly" as const, priority: 0.4 },
    { url: "/terms-conditions", changeFrequency: "yearly" as const, priority: 0.4 },
  ];

  return paths.map((p) => ({
    url: `${baseUrl}${p.url}`,
    lastModified: currentDate,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
}
