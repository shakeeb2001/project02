import { buildJsonLd } from "@/lib/seo";

export function JsonLd() {
  const schemas = buildJsonLd();

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={`jsonld-${schema["@type"]}-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
