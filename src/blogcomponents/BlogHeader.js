import React from "react";

const BlogHeader = ({ title, subtitle, author, date, category }) => {
  return (
    <header className="py-10 bg-cream border-b border-choco text-center">
      <div className="container mx-auto px-4">
        {/* Título do artigo */}
        <h1 className="text-4xl font-bold text-choco">{title}</h1>
        {/* Subtítulo do artigo */}
        <p className="mt-4 text-lg text-gray-600">{subtitle}</p>
        {/* Metadados */}
        <div className="mt-6 flex justify-center space-x-4 text-sm text-gray-500">
          <span>{`By ${author}`}</span>
          <span className="text-vitamin">•</span>
          <span>{date}</span>
          <span className="text-vitamin">•</span>
          <span className="text-blue-500">{category}</span>
        </div>
      </div>
    </header>
  );
};

export default BlogHeader;
