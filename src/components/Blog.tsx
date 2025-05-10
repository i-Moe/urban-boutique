import Link from "next/link";
// import Image from "next/image";
import BlogCard from "./BlogCard";
import articles from "@/data/articles";

interface Article {
  id: string;
  image: string;
  alt?: string;
  title: string;
  subtitle: string;
}


const Blog = () => {
  const latestArticles = articles.slice(0, 3); // Pega os 3 últimos artigos

  return (
    <section id="blog" className="py-11 bg-chillmint">
      <div className="container-max-w-5xl">
        <h1 className="text-4xl font-bold text-center my-8">Blog</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestArticles.map((article, index) => (
             <BlogCard key={article.id} article={article} index={index} />
          ))}
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          <Link
            href="/blog"
            className="text-lightcream text-lg border border-ligtcream shadow-md px-6 py-3 rounded-full font-semibold hover:bg-lightcream hover:text-chillmint transition duration-300"
          >
            Check more articles
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Blog;
