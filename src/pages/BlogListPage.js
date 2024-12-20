import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import articles from "../data/articles";

const BlogListPage = () => {
  const [currentPage, setCurrentPage] = useState(1); // Página atual
  const articlesPerPage = 5; // Quantidade de artigos por página

  // Cálculos de Paginação
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  ); // Artigos da página atual

  const totalPages = Math.ceil(articles.length / articlesPerPage); // Número total de páginas

  // Alterar a página atual
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    // Set background color when this page is rendered
    document.body.style.backgroundColor = "#69adaa"; // Change to desired color

    // Clean up the background color when leaving the page
    return () => {
      document.body.style.backgroundColor = ""; // Reset to default
    };
  }, []);


  return (
    <section>
      <div className="container-max-w-5xl">
        <h1 className="text-4xl font-bold text-center my-8">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentArticles.map((article) => (
            <div
              key={article.id}
              className="bg-lightcream border border-choco p-4 rounded-lg shadow-lg"
            >
              <Link to={`/blog/${article.id}`}>
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-44 mb-5 object-cover rounded-md"
              />
              </Link>
              <Link to={`/blog/${article.id}`}>
              <h2 className="text-xl font-bold hover:underline decoration-choco decoration-[0.8px] underline-offset-4">{article.title}</h2>
              </Link>
              <p className="mt-2 text-gray-600">{article.subtitle}</p>
              <Link
                to={`/blog/${article.id}`}
                className="text-vitamin font-bold mt-4 inline-block relative group"
              >
                <span className="inline-block">
                  Read more
                  <span className="ml-2 inline-block transition-transform duration-300 transform group-hover:translate-x-1">
                    &rarr;
                  </span>
                </span>
                <span
                  className="absolute left-0 bottom-[-1px] w-0 h-[0.8px] bg-vitamin transition-all duration-300 group-hover:w-full"
                  style={{ transformOrigin: "left" }}
                ></span>
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
                currentPage === index + 1
                  ? "bg-vitamin text-white"
                  : "bg-gray-200"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogListPage;
