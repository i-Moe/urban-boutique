import Link from "next/link";
import Image from "next/image";
import articles from "@/data/articles";

const Blog = () => {
  const latestArticles = articles.slice(0, 3); // Pega os 3 últimos artigos

  return (
    <section className="py-11 bg-chillmint">
      <div className="container mx-auto max-w-5xl px-4">
        <h1 className="text-4xl font-bold text-center my-8">Blog</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestArticles.map((article, index) => (
            <div
              key={article.id}
              className="bg-lightcream border border-choco p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Link href={`/blog/${article.id}`} passHref>
                <div className="cursor-pointer">
                  <Image
                    src={article.image}
                    alt={article.alt || `Cover image for ${article.title}`}
                    width={600}
                    height={400}
                    layout="responsive"
                    className="rounded-md"
                    priority={index === 0} // Prioriza o primeiro artigo
                  />
                </div>
              </Link>
              
              <Link href={`/blog/${article.id}`} passHref>
                <h2 className="text-xl font-bold mt-4 hover:underline decoration-choco decoration-[0.8px] underline-offset-4 cursor-pointer">
                  {article.title}
                </h2>
              </Link>
              
              <p className="mt-3 text-gray-600 leading-relaxed">{article.subtitle}</p>
              
              <Link href={`/blog/${article.id}`} passHref>
                <span className="text-vitamin font-bold mt-5 inline-block hover:underline cursor-pointer">
                  Read more →
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
