import React from "react";
import { Link } from "react-router-dom";

const BlogSideBar = ({ relatedArticles }) => {
  return (
    <aside className="w-full lg:w-1/4 bg-gray-100 rounded-lg shadow-lg p-4">
      <h3 className="text-xl font-bold mb-4">Related Articles</h3>
      <ul>
        {relatedArticles.map((article, index) => (
          <li key={index} className="mb-4 flex items-center">
            <img
              src={article.image}
              alt={article.title}
              className="w-16 h-16 object-cover rounded-lg mr-4"
            />
            <Link to={article.link} className="text-blue-500 hover:underline flex-1">
              {article.title}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default BlogSideBar;
