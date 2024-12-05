import React, { useState } from "react";
import { Link } from "react-router-dom";
import articles from "../data/articles";

const BlogListPage = () => {
  const [currentPage, setCurrentPage] = useState(1); // Página atual
  const articlesPerPage = 5; // Quantidade de artigos por página

  // Cálculos de Paginação
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle); // Artigos da página atual

  const totalPages = Math.ceil(articles.length / articlesPerPage); // Número total de páginas

  // Alterar a página atual
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center my-8">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentArticles.map((article) => (
          <div key={article.id} className="p-4 border rounded shadow-lg">
            <h2 className="text-xl font-bold">{article.title}</h2>
            <p className="mt-2 text-gray-600">{article.subtitle}</p>
            <Link
              to={`/blog/${article.id}`}
              className="text-vitamin hover:underline mt-4 inline-block"
            >
              Read more
            </Link>
          </div>
        ))}
      </div>

      {/* Paginação */}
      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`px-4 py-2 rounded ${
              currentPage === index + 1 ? "bg-vitamin text-white" : "bg-gray-200"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BlogListPage;
