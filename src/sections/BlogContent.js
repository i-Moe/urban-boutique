import React from "react";
import { Link } from "react-router-dom";
import articles from "../data/articles";

const Blog = () => {
  const latestArticles = articles.reverse().slice(0, 3);

  return (
    <section id="blog" className="py-11 bg-chillmint">
      <div className="container-max-w-5xl">
        <h1 className="text-4xl font-bold text-center my-8">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestArticles.map((article) => (
            <div
              key={article.id}
              className="bg-lightcream border border-choco p-4 rounded-lg shadow-lg"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-44 mb-5 object-cover rounded-md"
              />
              <h2 className="text-xl font-bold">{article.title}</h2>
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

        <div className="flex justify-center mt-8 space-x-2">
          <a
            href="/blog"
            className="text-lightcream text-lg border border-ligtcream shadow-md px-6 py-3 rounded-full font-semibold hover:bg-lightcream hover:text-chillmint transition duration-300"
          >
            Check more articles
            <span className="ml-2 inline-block transition-transform duration-300 transform hover:translate-x-1">
                    &rarr;
                  </span>
          </a>
        </div>

        {/* Paginação */}
        {/* <div className="flex justify-center mt-8 space-x-2">
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
      </div> */}
      </div>
    </section>
  );
};

export default Blog;
