import pristinaMain from "../assets/images/pristina-main.jpg";
import pristinaLibrary from "../assets/images/pristina-library.jpg";
import kosovoFood from "../assets/images/kosovo-food.jpg";
import urbanBoutique from "../assets/images/hotelCorridor.png";

const article1 = {
  id: "exploring-pristina",
  title: "Exploring Pristina: A Complete Guide",
  subtitle: "Discover the best places to visit and must-have experiences in the capital of Kosovo.",
  author: "Urban Boutique Team",
  date: "2024-12-03",
  category: "Tourism",
  image: pristinaMain,
  content: [
    {
      type: "heading",
      level: 2, // Indica que é um <h2>
      text: "Welcome to Pristina",
    },
    {
      type: "paragraph",
      text: "Pristina, the vibrant capital of Kosovo, is a rising destination for travelers seeking a blend of history, culture, and modernity. With iconic landmarks, unique cuisine, and welcoming people, the city promises an unforgettable experience.",
    },
    {
      type: "image",
      src: pristinaMain, // Caminho importado
      alt: "Panoramic View of Pristina",
    },
    {
      type: "heading",
      level: 2, // Indica que é um <h2>
      text: "Top Tourist Attractions",
    },
    {
      type: "paragraph",
      text: "Must-visit places include the National Library, known for its unique architecture, and the Mother Teresa Cathedral, a cultural and religious landmark.",
    },
    {
      type: "image",
      src: pristinaLibrary, // Caminho importado
      alt: "National Library of Pristina",
    },
    {
      type: "heading",
      level: 2, // Indica que é um <h2>
      text: "Culture and Gastronomy",
    },
    {
      type: "paragraph",
      text: "Explore the rich Kosovar cuisine with dishes like Flija, Pite, and Qebapa. Be sure to visit local markets to experience authentic flavors.",
    },
    {
      type: "image",
      src: kosovoFood, // Caminho importado
      alt: "Traditional Kosovar Dishes",
    },
    {
      type: "heading",
      level: 2, // Indica que é um <h2>
      text: "Where to Stay",
    },
    {
      type: "paragraph",
      text: "For a comfortable and affordable stay, the Urban Boutique Hotel is the perfect choice. Located in the heart of the city, it offers stylish rooms and personalized services.",
    },
    {
      type: "image",
      src: urbanBoutique, // Caminho importado
      alt: "Urban Boutique Hotel",
    },
    {
      type: "heading",
      level: 2, // Indica que é um <h2>
      text: "Final Tips",
    },
    {
      type: "paragraph",
      text: "Plan your trip between April and October to enjoy the more pleasant weather. Use taxis or public transport to get around and make sure to set aside time to explore the city on foot.",
    },
  ],
  relatedArticles: [
    {
      title: "Discover the Hidden Treasures of Pristina",
      link: "/blog/treasures-of-pristina",
      image: kosovoFood, // Adicionando imagens aos artigos relacionados
    },
  ],
};

export default article1;
