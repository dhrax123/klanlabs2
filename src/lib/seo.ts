/** One place for every page's search and share metadata. */
export const SITE = {
  url: "https://klanlabs.com",
  name: "KlanLabs",
  email: "hello@klanlabs.com",
  city: "Bengaluru, India",
  tagline: "AI Systems, Automation & Intelligent Business Solutions",
};

type SeoInput = {
  path: string;
  title: string;
  description: string;
  image?: string;
  noindex?: boolean;
};

export function seo({ path, title, description, image = "/og.jpg", noindex }: SeoInput) {
  const url = `${SITE.url}${path}`;
  const img = `${SITE.url}${image}`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large" },
      { property: "og:site_name", content: SITE.name },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:image", content: img },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: img },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export const ld = (data: object) => ({ type: "application/ld+json", children: JSON.stringify(data) });

export const ORG_LD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE.name,
  url: SITE.url,
  email: SITE.email,
  description:
    "KlanLabs builds AI-powered systems, intelligent agents and business automation solutions that help organisations simplify operations and unlock new opportunities.",
  address: { "@type": "PostalAddress", addressLocality: "Bengaluru", addressCountry: "IN" },
};
