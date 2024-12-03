import React from "react";
import { Link } from "react-router-dom";

const BlogSideBar = ({ relatedArticles }) => {
  return (
    <aside className="w-full lg:w-1/4 bg-gray-100 rounded-lg shadow-lg p-4">
      <h3 className="text-xl font-bold mb-4">Artigos Relacionados</h3>
      <ul>
        {relatedArticles.map((article, index) => (
          <li key={index} className="mb-2">
            <Link
              to={article.link}
              className="text-blue-500 hover:underline"
            >
              {article.title}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default BlogSideBar;
