import { ContentBlock, RelatedArticle } from "@/data/articles";  // Importa tipagem necessária

const article2 = {
  id: "treasures-of-pristina",
  title: "Discover the Hidden Treasures of Pristina",
  subtitle: "A Complete Guide to Exploring the Capital of Kosovo",
  author: "Urban Boutique Team",
  date: "2024-12-05",
  category: "Tourism",
  image: "/images/kosovo-food.jpg",
  alt: "Traditional Kosovar dish served on a table",
  
  // Conteúdo principal do artigo
  content: [
    {
      type: "heading",
      level: 2,
      text: "Introduction",
    },
    {
      type: "paragraph",
      text: "Pristina, the capital of Kosovo, is a fascinating and emerging destination for tourists seeking culture, history, and modernity.",
    },
    {
      type: "paragraph",
      text: "In this guide, we will explore everything the city has to offer, from its rich history to its hidden treasures, ensuring a unique experience for all visitors.",
    },
    {
      type: "image",
      src: "/images/pristina-main.jpg",
      alt: "Panoramic View of Pristina",
    },
    {
      type: "heading",
      level: 2,
      text: "History of Pristina",
    },
    {
      type: "paragraph",
      text: "With a history that dates back to the Roman Empire, Pristina is a city that has undergone countless transformations over the centuries.",
    },
    {
      type: "paragraph",
      text: "During the Ottoman period, the city thrived as a center of trade and culture, gaining monuments and traditions that endure to this day. After World War II, it became an important administrative and political center.",
    },
    {
      type: "image",
      src: "/images/pristina-library.jpg",
      alt: "National Library of Pristina",
    },
    {
      type: "heading",
      level: 2,
      text: "Main Tourist Attractions",
    },
    {
      type: "paragraph",
      text: "Some of the must-visit attractions include:",
    },
    {
      type: "list",
      items: [
        "National Library of Kosovo",
        "Mother Teresa Cathedral",
        "Germia Park",
        "Newborn Monument",
      ],
    },
    {
      type: "image",
      src: "/images/pristina-main.jpg",
      alt: "Main Attractions of Pristina",
    },
    {
      type: "heading",
      level: 2,
      text: "Culture and Gastronomy",
    },
    {
      type: "paragraph",
      text: "Explore the rich Kosovar cuisine with typical dishes such as Flija, Pite, and Qebapa. The local gastronomy is a fusion of Balkan and Turkish influences.",
    },
    {
      type: "image",
      src: "/images/kosovo-food.jpg",
      alt: "Typical dishes of Kosovar cuisine",
    },
    {
      type: "heading",
      level: 2,
      text: "Travel Tips and Best Time to Visit",
    },
    {
      type: "paragraph",
      text: "The best time to visit Pristina is between April and October, when the weather is more pleasant and the streets are full of life.",
    },
    {
      type: "paragraph",
      text: "Set aside time to explore the city on foot and take part in local cultural events. Public transportation is efficient, and taxis are affordable, making it easy to get around.",
    },
    {
      type: "image",
      src: "/images/pristina-library.jpg",
      alt: "Transportation and travel in Pristina",
    },
    {
      type: "heading",
      level: 2,
      text: "Where to Stay",
    },
    {
      type: "paragraph",
      text: "For a luxurious and comfortable stay, Urban Boutique Hotel is the perfect choice. Located in the heart of Pristina, it offers a unique experience for guests.",
    },
    {
      type: "image",
      src: "/images/hotelCorridor.png",
      alt: "Urban Boutique Hotel Interior",
    },
    {
      type: "heading",
      level: 2,
      text: "Conclusion",
    },
    {
      type: "paragraph",
      text: "Pristina blends history, culture, and modernity in a unique way. Plan your trip now and experience everything the capital of Kosovo has to offer.",
    },
  ] as ContentBlock[],  // Aplica tipagem ContentBlock
  
  // Artigos relacionados
  relatedArticles: [
    {
      title: "Exploring Pristina: A Complete Guide",
      link: "/blog/exploring-pristina",
      image: "/images/pristina-main.jpg",
    },
  ] as RelatedArticle[],
};

export default article2;
