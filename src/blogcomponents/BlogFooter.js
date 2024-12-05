import React from "react";

const BlogFooter = () => {
  return (
    <footer className="py-8 bg-cream border-t border-choco text-center">
      <p className="text-gray-500">
        Gostou deste artigo? <a href="/newsletter" className="text-blue-500 hover:underline">Assine nossa newsletter!</a>
      </p>
    </footer>
  );
};

export default BlogFooter;
