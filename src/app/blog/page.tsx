import Link from "next/link";
import Image from "next/image";
import articles from "@/data/articles";
import Script from "next/script";

export default function Blog() {
  const latestArticles = articles.slice(0, 6);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": latestArticles.map((article, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": `https://stayurbanhotel.com/blog/${article.id}`,
      "name": article.title,
    })),
  };

  return (
    <section className="py-12 bg-chillmint">
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />
      <div className="container mx-auto max-w-5xl px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Blog</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestArticles.map((article, index) => (
            <div
              key={article.id}
              className="bg-lightcream border border-choco p-4 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              {/* Imagem do Artigo */}
              <Link href={`/blog/${article.id}`} aria-label={`Read more about ${article.title}`}>
                <Image
                  src={article.image}
                  alt={article.alt || `Cover image for ${article.title}`}
                  width={600}
                  height={400}
                  className="rounded-md object-cover"
                  priority={index === 0}  // Prioriza a primeira imagem
                />
              </Link>
              
              {/* Título do Artigo */}
              <Link href={`/blog/${article.id}`} aria-label={`Go to article: ${article.title}`}>
                <h2 className="text-xl font-bold mt-4 hover:underline decoration-choco">
                  {article.title}
                </h2>
              </Link>
              
              {/* Subtítulo */}
              <p className="mt-3 text-gray-600">{article.subtitle}</p>

              {/* Link "Read More" */}
              <Link href={`/blog/${article.id}`} aria-label={`Continue reading: ${article.title}`}>
                <span className="text-vitamin font-bold mt-5 inline-block hover:underline">
                  Read more <span aria-hidden="true">→</span>
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
