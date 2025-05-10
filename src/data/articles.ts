import article1 from "./article1";
import article2 from "./article2";

// Definimos o tipo para garantir a tipagem correta dos artigos
export interface Article {
  id: string;
  title: string;
  subtitle: string;
  author: string;
  date: string;
  category: string;
  image: string;
  alt: string;
  content: ContentBlock[];
  relatedArticles: RelatedArticle[];
}

export interface ContentBlock {
  type: "heading" | "paragraph" | "image" | "list";
  level?: number;
  text?: string;
  src?: string;
  alt?: string;
  items?: string[];
  style?: "ordered" | "unordered";
}

export interface RelatedArticle {
  title: string;
  link: string;
  image: string;
  description?: string;
}

// Lista de artigos importados
const articles: Article[] = [article1, article2].map((article) => ({
  ...article,
  alt: article.alt || "Default alt text for accessibility",  // 🔹 Fallback automático
  relatedArticles: article.relatedArticles.map((related) => ({
    ...related,
    description: related.description || "Explore related articles.",
  })),
}));

export default articles;

