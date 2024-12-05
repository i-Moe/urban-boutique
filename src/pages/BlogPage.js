import React from "react";
import BlogHeader from "../blogcomponents/BlogHeader";
import BlogContent from "../blogcomponents/BlogContent";
import BlogSideBar from "../blogcomponents/BlogSideBar";
import BlogFooter from "../blogcomponents/BlogFooter";
import BlogSEO from "../blogcomponents/BlogSEO"; // Importe o BlogSEO

const BlogPage = ({ article }) => {
  // Configurando os dados dinâmicos para SEO
  const articleUrl = `https://urban-boutique.vercel.app/blog/${article.id}`;
  const articleImage = article.image || "/assets/images/default-article.jpg"; // Substitua pelo caminho da imagem padrão

  return (
    <>
      {/* SEO para a página */}
      <BlogSEO
        title={article.title}
        description={article.subtitle}
        image={articleImage}
        url={articleUrl}
        author={article.author}
        date={article.date}
      />

      <div className="container-max-w-5xl">
        {/* Cabeçalho */}
        <BlogHeader
          title={article.title}
          subtitle={article.subtitle}
          author={article.author}
          date={article.date}
          category={article.category}
        />

        <div className="flex flex-col lg:flex-row mt-8">
          {/* Main Content */}
          <main className="w-full lg:w-3/4">
            <BlogContent content={article.content} />
          </main>

          {/* Sidebar */}
          <aside className="w-full lg:w-1/4 lg:sticky lg:top-16 max-h-[calc(100vh-48px)] min-h-[200px] overflow-auto py-4 sm:p-4 lg:py-4 lg:pl-5">
            <BlogSideBar relatedArticles={article.relatedArticles} />
          </aside>
        </div>

        {/* <div className="flex flex-col lg:flex-row mt-8"> */}
        {/* Conteúdo principal */}
        {/* <main className="w-full lg:w-3/4">
            <BlogContent content={article.content} />
          </main> */}
        {/* Barra lateral */}
        {/* <BlogSideBar relatedArticles={article.relatedArticles} />
        </div> */}

        {/* Rodapé */}
        <BlogFooter />
      </div>
    </>
  );
};

export default BlogPage;
