import { ContentBlock } from "@/data/articles";

interface BlogContentProps {
  content: ContentBlock[];
}

export default function BlogContent({ content }: BlogContentProps) {
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
              <img
                key={index}
                src={block.src || "/images/placeholder.jpg"}  // Fallback de imagem
                alt={block.alt || "Article Image"}  // Fallback de alt
                className="w-full h-auto max-h-[70vh] my-8 rounded-lg object-contain"
              />
            );
          default:
            return (
              <p key={index} className="italic text-gray-500 mt-4">
                Unsupported content block
              </p>
            );
        }
      })}
    </div>
  );
}
