import React from "react";

const BlogContent = ({ content }) => {
  return (
    <section className="prose lg:prose-xl mx-auto my-8">
      {content.map((block, index) => {
        if (block.type === "heading") {
          return <h2 key={index} className="font-bold text-2xl">{block.text}</h2>;
        }
        if (block.type === "paragraph") {
          return <p key={index} className="text-lg leading-7">{block.text}</p>;
        }
        if (block.type === "image") {
          return (
            <img
              key={index}
              src={block.src}
              alt={block.alt}
              className="my-4 rounded-lg shadow-lg"
            />
          );
        }
        return null;
      })}
    </section>
  );
};

export default BlogContent;
