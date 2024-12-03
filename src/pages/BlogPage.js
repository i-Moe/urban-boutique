import React from "react";
import BlogHeader from "../blogcomponents/BlogHeader";
import BlogContent from "../blogcomponents/BlogContent";
import BlogSideBar from "../blogcomponents/BlogSideBar";
import BlogFooter from "../blogcomponents/BlogFooter";
import BlogSEO from "../blogcomponents/BlogSEO";

const BlogPage = ({ article }) => {
  // Configurando os dados dinâmicos para SEO
  const articleUrl = `http://seusite.com/blog/${article.id}`;
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

      <div className="container mx-auto px-4 lg:px-8">
        {/* Cabeçalho */}
        <BlogHeader
          title={article.title}
          subtitle={article.subtitle}
          author={article.author}
          date={article.date}
          category={article.category}
        />
        <div className="flex flex-col lg:flex-row mt-8">
          {/* Conteúdo principal */}
          <main className="w-full lg:w-3/4">
            <BlogContent content={article.content} />
          </main>
          {/* Barra lateral */}
          <BlogSideBar relatedArticles={article.relatedArticles} />
        </div>
        {/* Rodapé */}
        <BlogFooter />
      </div>
    </>
  );
};

export default BlogPage;
