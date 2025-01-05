import { notFound } from "next/navigation";
import articles, { Article } from "@/data/articles";
import BlogHeader from "@/components/BlogHeader";
import BlogContent from "@/components/BlogContent";
import BlogSideBar from "@/components/BlogSideBar";
import Script from "next/script";

// Geração dinâmica de metadados (sem await desnecessário)
export async function generateMetadata({ params }: { params: { id: string } }) {
  const article = articles.find((a: Article) => a.id === params.id);

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
      url: `https://stayurbanhotel.com/blog/${article.id}`,
      images: [
        {
          url: article.image || "/images/placeholder.jpg",
          width: 1200,
          height: 800,
          alt: article.alt || "Urban Boutique Hotel - Blog Image",
        },
      ],
    },
  };
}

// Página do artigo (removido await no find)
export default function ArticlePage({ params }: { params: { id: string } }) {
  const article = articles.find((a: Article) => a.id === params.id);

  if (!article) {
    notFound();
  }

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "description": article.subtitle,
    "image": article.image || "https://stayurbanhotel.com/images/placeholder.jpg",
    "author": {
      "@type": "Organization",
      "name": "Urban Boutique Hotel"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Urban Boutique Hotel",
      "logo": {
        "@type": "ImageObject",
        "url": "https://stayurbanhotel.com/favicon.ico"
      }
    },
    "datePublished": article.date,
    "dateModified": article.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://stayurbanhotel.com/blog/${article.id}`
    }
  };

  return (
    <main
      className="container mx-auto max-w-5xl px-4 py-12"
      aria-label={`Blog article - ${article.title}`}
    >
      {/* Injeção de schema JSON-LD no head */}
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />
      <BlogHeader
        title={article.title}
        subtitle={article.subtitle}
        author={article.author}
        date={article.date}
        category={article.category}
      />
      <div className="flex flex-col lg:flex-row mt-8">
        <section className="w-full lg:w-3/4">
          <BlogContent content={article.content} />
        </section>

        <aside
          className="w-full lg:w-1/4 mt-8 lg:mt-0 lg:pl-6"
          aria-label="Related articles sidebar"
        >
          <BlogSideBar relatedArticles={article.relatedArticles} />
        </aside>
      </div>
    </main>
  );
}
