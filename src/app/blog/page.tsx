import Link from "next/link";
import Image from "next/image";
import articles from "@/data/articles";

export default function Blog() {
  const latestArticles = articles.slice(0, 6);

  return (
    <section className="py-12 bg-chillmint">
      <div className="container mx-auto max-w-5xl px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Blog</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestArticles.map((article) => (
            <div
              key={article.id}
              className="bg-lightcream border border-choco p-4 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              <Link href={`/blog/${article.id}`}>
                <Image
                  src={article.image}
                  alt={article.title}
                  width={600}
                  height={400}
                  className="rounded-md object-cover"
                />
              </Link>
              
              <Link href={`/blog/${article.id}`}>
                <h2 className="text-xl font-bold mt-4 hover:underline decoration-choco">
                  {article.title}
                </h2>
              </Link>
              
              <p className="mt-3 text-gray-600">{article.subtitle}</p>

              <Link href={`/blog/${article.id}`}>
                <span className="text-vitamin font-bold mt-5 inline-block hover:underline">
                  Read more →
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
