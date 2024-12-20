import pristinaMain from "../assets/images/pristina-main.jpg";
import libraryImage from "../assets/images/pristina-library.jpg";
import foodImage from "../assets/images/kosovo-food.jpg";
import hotelImage from "../assets/images/urban-boutique.jpg";

const article2 = {
  id: "treasures-of-pristina",
  title: "Discover the Hidden Treasures of Pristina",
  subtitle: "A Complete Guide to Exploring the Capital of Kosovo",
  author: "Urban Boutique Team",
  date: "2024-12-05",
  category: "Turism",
  image: foodImage,
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
      src: pristinaMain,
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
      src: libraryImage,
      alt: "National Library of Pristina",
    },
    {
      type: "heading",
      level: 2,
      text: "Main Tourist Attractions",
    },
    {
      type: "list",
      style: "unordered",
      items: [
        "National Library of Kosovo",
        "Mother Teresa Cathedral",
        "Germia Park",
        "Newborn Monument",
      ],
    },
    {
      type: "image",
      src: pristinaMain,
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
      src: foodImage,
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
      src: libraryImage,
      alt: "Transportation and travel in Pristina",
    },
    {
      type: "heading",
      level: 2,
      text: "Where to Stay",
    },
    {
      type: "paragraph",
      text: "If you're looking for comfort and elegance, the Urban Boutique Hotel is the perfect choice. Located in the heart of Pristina, it offers a unique experience for guests.",
    },
    {
      type: "image",
      src: hotelImage,
      alt: "Urban Boutique Hotel",
    },
    {
      type: "heading",
      level: 2,
      text: "Conclusion",
    },
    {
      type: "paragraph",
      text: "Pristina is a destination that uniquely blends history, culture, and modernity. Plan your trip now and discover everything the capital of Kosovo has to offer.",
    },
  ],
  relatedArticles: [
    {
      title: "Exploring Pristina: A Complete Guide",
      link: "/blog/exploring-pristina",
      image: pristinaMain, // Adicionando imagens aos artigos relacionados
    },
  ],
};

export default article2;
