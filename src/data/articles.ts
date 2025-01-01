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
  alt: string;  // Adicionado para evitar erro de acessibilidade
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
}

export interface RelatedArticle {
  title: string;
  link: string;
  image: string;
}

// Lista de artigos importados
const articles: Article[] = [article1, article2];

export default articles;
