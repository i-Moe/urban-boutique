import type { Metadata } from 'next';
import articles from '@/data/articles';

// Geração assíncrona de metadados (necessário await no params)
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const article = await articles.find((a) => a.id === params.id);  // await adicionado

  return {
    title: article ? article.title : "Article Not Found",
    description: article
      ? article.subtitle
      : "Explore our latest articles and discover unique experiences.",
  };
}

// Layout do artigo
export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
