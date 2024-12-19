import React from "react";

const BlogContent = ({ content }) => {
  return (
    <div className="prose prose-lg max-w-none px-3">
      {content.map((block, index) => {
        switch (block.type) {
          case "heading":
            return block.level === 2 ? (
              <h2 key={index} className="text-2xl font-bold mt-8">
                {block.text}
              </h2>
            ) : (
              <h3 key={index} className="text-xl font-semibold mt-6">
                {block.text}
              </h3>
            );
          case "paragraph":
            return (
              <p key={index} className="mt-4 leading-relaxed">
                {block.text}
              </p>
            );
          case "image":
            return (
              // <div
              //   key={index}
              //   className="w-fit h-fit mx-auto rounded-lg shadow-md"
              // >
              //   <img
              //     src={block.src}
              //     alt={block.alt}
              //     className="w-full h-auto max-h-[70vh] my-8 rounded-lg object-contain"
              //   />
              // </div>

              <img
                key={index}
                src={block.src}
                alt={block.alt}
                className="w-full h-auto max-h-[70vh] sm:px-7 my-8 rounded-lg drop-shadow-md object-contain"
              />
            );
          default:
            return null;
        }
      })}
    </div>
  );
};

export default BlogContent;
