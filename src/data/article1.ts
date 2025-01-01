import { ContentBlock, RelatedArticle } from "@/data/articles";  // Importa a tipagem se necessário

const article1 = {
  id: "exploring-pristina",
  title: "Exploring Pristina: A Complete Guide",
  subtitle: "Discover the best places to visit and must-have experiences in the capital of Kosovo.",
  author: "Urban Boutique Team",
  date: "2024-12-03",
  category: "Tourism",
  image: "/images/pristina-main.jpg",
  alt: "Panoramic view of Pristina city at sunset",
  
  // Conteúdo principal do artigo
  content: [
    {
      type: "heading",
      level: 2,
      text: "Welcome to Pristina",
    },
    {
      type: "paragraph",
      text: "Pristina, the vibrant capital of Kosovo, is a rising destination for travelers seeking a blend of history, culture, and modernity.",
    },
    {
      type: "image",
      src: "/images/pristina-main.jpg",
      alt: "Aerial view of Pristina's skyline",
    },
    {
      type: "heading",
      level: 2,
      text: "Top Tourist Attractions",
    },
    {
      type: "paragraph",
      text: "Must-visit places include the National Library and the Mother Teresa Cathedral.",
    },
    {
      type: "image",
      src: "/images/pristina-library.jpg",
      alt: "Architectural design of the National Library in Pristina",
    },
    {
      type: "heading",
      level: 2,
      text: "Culture and Gastronomy",
    },
    {
      type: "paragraph",
      text: "Explore the rich Kosovar cuisine with dishes like Flija and Pite.",
    },
    {
      type: "image",
      src: "/images/kosovo-food.jpg",
      alt: "Traditional Kosovar dishes served on a table",
    },
    {
      type: "heading",
      level: 2,
      text: "Where to Stay",
    },
    {
      type: "paragraph",
      text: "For a comfortable stay, Urban Boutique Hotel is the perfect choice.",
    },
    {
      type: "image",
      src: "/images/hotelCorridor.png",
      alt: "Interior view of Urban Boutique Hotel corridor",
    },
  ] as ContentBlock[],  // Tipagem do conteúdo

  // Artigos relacionados
  relatedArticles: [
    {
      title: "Hidden Treasures of Pristina",
      link: "/blog/treasures-of-pristina",
      image: "/images/kosovo-food.jpg",
    },
  ] as RelatedArticle[],
};

export default article1;
