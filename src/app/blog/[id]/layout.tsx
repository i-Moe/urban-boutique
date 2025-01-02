import type { Metadata } from 'next';
import articles from '@/data/articles';

// Geração assíncrona de metadados (sem await no find)
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const article = articles.find((a) => a.id === params.id);  // Removido await

  return {
    title: article ? article.title : "Article Not Found | Urban Boutique",
    description: article
      ? article.subtitle
      : "Explore our latest articles and discover unique experiences.",
  };
}

// Layout do artigo com semântica aprimorada
export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main aria-label="Blog article content">
      {children}
    </main>
  );
}
