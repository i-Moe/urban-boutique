import Link from "next/link";
import Image from "next/image";
import articles from "@/data/articles";
import Script from "next/script";
import BlogCard from "@/components/BlogCard";

interface Article {
  id: string;
  image: string;
  alt?: string;
  title: string;
  subtitle: string;
}


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
      <div className="container-max-w-5xl">
        <h1 className="text-4xl font-bold text-center mb-12">Blog</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestArticles.map((article, index) => (
             <BlogCard key={article.id} article={article} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
