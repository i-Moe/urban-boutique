import { notFound } from 'next/navigation';

// Simulando busca de dados (poderia ser um fetch de API)
const getArticle = (id) => {
  const articles = [
    {
      id: 'explorando-pristina',
      title: 'Explorando Pristina: Um Guia Completo',
      subtitle: 'Descubra os melhores pontos turísticos e experiências em Prishtina.',
      tags: ['turismo', 'Kosovo', 'Prishtina'],
      image: '/assets/images/pristina-main.jpg',
    },
  ];
  return articles.find((article) => article.id === id);
};

// Gera metadata dinamicamente com base no conteúdo do artigo
export async function generateMetadata({ params }) {
  const article = getArticle(params.id);
  if (!article) {
    return notFound();
  }

  return {
    title: article.title,
    description: article.subtitle,
    keywords: article.tags.join(', '),
    openGraph: {
      title: article.title,
      description: article.subtitle,
      url: `https://stayurbanhotel.com/blog/${article.id}`,
      images: [
        {
          url: article.image || '/assets/images/default-article.jpg',
          width: 800,
          height: 600,
          alt: article.title,
        },
      ],
    },
  };
}

export default function BlogArticlePage({ params }) {
  const article = getArticle(params.id);

  if (!article) {
    return <div>Artigo não encontrado.</div>;
  }

  return (
    <article className="container mx-auto py-12">
      <h1 className="text-4xl font-bold">{article.title}</h1>
      <p className="text-lg mt-4">{article.subtitle}</p>
      <img src={article.image} alt={article.title} className="w-full mt-6 rounded-lg" />
      <p className="mt-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis urna vel purus vehicula.
      </p>
    </article>
  );
}
