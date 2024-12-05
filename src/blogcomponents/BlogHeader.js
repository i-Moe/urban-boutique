import React from "react";

const BlogHeader = ({ title, subtitle, author, date, category }) => {
  const formatDate = (isoDate) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(isoDate).toLocaleDateString("en-US", options);
  };

  return (
    <header className="py-10 bg-cream border-b border-choco text-center">
      <div className="container mx-auto px-4">
        {/* Título do artigo */}
        <h1 className="text-4xl font-bold text-choco">{title}</h1>
        {/* Subtítulo do artigo */}
        <p className="mt-4 text-lg text-gray-600">{subtitle}</p>
        {/* Metadados */}

        <div className="mt-6 flex flex-col items-center space-y-2 text-sm text-gray-500 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
          <span className="before:content-['•'] before:mr-1 after:content-['•'] after:ml-1 sm:before:content-none sm:after:content-none">
            <a
              href={`/blog/author/${author.toLowerCase().replace(" ", "-")}`}
              className="hover:underline"
            >
              {`By ${author}`}
            </a>
          </span>
          <span className="hidden sm:inline text-vitamin">•</span>
          <span className="before:content-['•'] before:mr-1 after:content-['•'] after:ml-1 sm:before:content-none sm:after:content-none">
            {formatDate(date)}
          </span>
          <span className="hidden sm:inline text-vitamin">•</span>
          <span className="before:content-['•'] before:mr-1 after:content-['•'] after:ml-1 sm:before:content-none sm:after:content-none">
            <a
              href={`/blog/category/${category.toLowerCase()}`}
              className="text-blue-500 hover:underline"
            >
              {category}
            </a>
          </span>
        </div>

        {/* <div className="mt-6 flex justify-center space-x-4 text-sm text-gray-500">
          <span>
            <a href={`/blog/author/${author.toLowerCase().replace(" ", "-")}`} className="hover:underline">
              {`By ${author}`}
            </a>
          </span>
          <span className="text-vitamin">•</span>
          <span>{formatDate(date)}</span>
          <span className="text-vitamin">•</span>
          <span>
            <a href={`/blog/category/${category.toLowerCase()}`} className="text-blue-500 hover:underline">
              {category}
            </a>
          </span>
        </div> */}
      </div>
    </header>
  );
};

export default BlogHeader;
