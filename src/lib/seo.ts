/**
 * SEO & Structured Data Management
 * Generates valid Schema.org metadata (Physician, MedicalClinic, BreadcrumbList)
 * and updates document title, description, canonical link, and OpenGraph tags dynamically.
 */

export interface PageSeoConfig {
  title: string;
  description: string;
  path: string;
  schemaType?: "Physician" | "MedicalClinic" | "MedicalWebPage" | "AboutPage" | "ContactPage";
  breadcrumbs?: { name: string; path: string }[];
}

export function updatePageSeo(config: PageSeoConfig) {
  // Update document title
  document.title = config.title;

  // Update meta description
  let descMeta = document.querySelector('meta[name="description"]');
  if (!descMeta) {
    descMeta = document.createElement("meta");
    descMeta.setAttribute("name", "description");
    document.head.appendChild(descMeta);
  }
  descMeta.setAttribute("content", config.description);

  // Update canonical URL
  const origin = typeof window !== "undefined" ? window.location.origin : "https://dranjalikumari.in";
  const canonicalUrl = `${origin}${config.path}`;
  let canonicalLink = document.querySelector('link[rel="canonical"]');
  if (!canonicalLink) {
    canonicalLink = document.createElement("link");
    canonicalLink.setAttribute("rel", "canonical");
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.setAttribute("href", canonicalUrl);

  // Update OpenGraph
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute("content", config.title);

  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute("content", config.description);

  const ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) {
    ogUrl.setAttribute("content", canonicalUrl);
  } else {
    const meta = document.createElement("meta");
    meta.setAttribute("property", "og:url");
    meta.setAttribute("content", canonicalUrl);
    document.head.appendChild(meta);
  }

  // Update or insert structured data script
  let script = document.getElementById("dynamic-jsonld") as HTMLScriptElement | null;
  if (!script) {
    script = document.createElement("script");
    script.id = "dynamic-jsonld";
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }

  const baseSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Physician",
        "@id": `${origin}/#physician`,
        "name": "Dr. Anjali Kumari",
        "jobTitle": "Gynecologist & Obstetrician",
        "description": "Dr. Anjali Kumari is a Gynecologist and Obstetrician practicing in Patna, Bihar, providing evidence-informed women's healthcare and antenatal consultations.",
        "url": origin,
        "image": `${origin}/images/doctor/anjali-kumari-portrait.svg`,
        "medicalSpecialty": [
          "https://schema.org/Gynecologic",
          "https://schema.org/Obstetric"
        ],
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Patna",
          "addressRegion": "Bihar",
          "postalCode": "800001",
          "addressCountry": "IN"
        },
        "areaServed": {
          "@type": "City",
          "name": "Patna"
        }
      },
      {
        "@type": "MedicalClinic",
        "@id": `${origin}/#clinic`,
        "name": "Dr. Anjali Kumari Practice",
        "url": origin,
        "logo": `${origin}/images/branding/logo.svg`,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Patna",
          "addressRegion": "Bihar",
          "addressCountry": "IN"
        }
      }
    ]
  };

  if (config.breadcrumbs && config.breadcrumbs.length > 0) {
    const breadcrumbSchema = {
      "@type": "BreadcrumbList",
      "itemListElement": config.breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": crumb.name,
        "item": `${origin}${crumb.path}`
      }))
    };
    (baseSchema["@graph"] as any[]).push(breadcrumbSchema);
  }

  script.textContent = JSON.stringify(baseSchema, null, 2);
}
