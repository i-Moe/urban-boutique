import { notFound } from "next/navigation";
import articles, { Article } from "@/data/articles";
import BlogHeader from "@/components/BlogHeader";
import BlogContent from "@/components/BlogContent";
import BlogSideBar from "@/components/BlogSideBar";

// Geração dinâmica de metadados (com await no params)
export async function generateMetadata({ params }: { params: { id: string } }) {
  const article = await articles.find((a: Article) => a.id === params.id);

  if (!article) {
    return {
      title: "Article Not Found | Urban Boutique",
      description: "The article you are looking for does not exist.",
    };
  }

  return {
    title: `${article.title} | Urban Boutique`,
    description: article.subtitle,
    openGraph: {
      title: article.title,
      description: article.subtitle,
      url: `https://urbanboutiquehotel.com/blog/${article.id}`,
      images: [
        {
          url: article.image || "/images/default.jpg",
          width: 1200,
          height: 800,
          alt: article.alt || article.title,  // Fallback de acessibilidade
        },
      ],
    },
  };
}

// 🛠️ Corrige o await no uso de params
export default async function ArticlePage({ params }: { params: { id: string } }) {
  const article = await articles.find((a: Article) => a.id === params.id);  // await aqui

  if (!article) {
    notFound();
  }

  return (
    <div className="container mx-auto max-w-5xl px-4 py-12">
      <BlogHeader
        title={article.title}
        subtitle={article.subtitle}
        author={article.author}
        date={article.date}
        category={article.category}
      />
      <div className="flex flex-col lg:flex-row mt-8">
        <main className="w-full lg:w-3/4">
          <BlogContent content={article.content} />
        </main>

        <aside className="w-full lg:w-1/4 mt-8 lg:mt-0 lg:pl-6">
          <BlogSideBar relatedArticles={article.relatedArticles} />
        </aside>
      </div>
    </div>
  );
}
