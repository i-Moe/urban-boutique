import pristinaMain from "../assets/images/pristina-main.jpg";
import pristinaLibrary from "../assets/images/pristina-library.jpg";
import kosovoFood from "../assets/images/kosovo-food.jpg";
import urbanBoutique from "../assets/images/urban-boutique.jpg";

const article1 = {
    id: "explorando-pristina",
    title: "Explorando Pristina: Um Guia Completo",
    subtitle: "Descubra os melhores lugares para visitar e as experiências imperdíveis na capital do Kosovo.",
    author: "Urban Boutique Team",
    date: "2024-12-03",
    category: "Turismo",
    content: [
      {
        type: "heading",
        text: "Bem-vindo a Pristina",
      },
      {
        type: "paragraph",
        text: "Pristina, a capital vibrante do Kosovo, é um destino em ascensão para viajantes que buscam uma mistura de história, cultura e modernidade. Com marcos icônicos, gastronomia única e um povo acolhedor, a cidade promete uma experiência inesquecível.",
      },
      {
        type: "image",
        src: pristinaMain, // Caminho importado
        alt: "Vista panorâmica de Pristina",
      },
      {
        type: "heading",
        text: "Principais Pontos Turísticos",
      },
      {
        type: "paragraph",
        text: "Entre os lugares imperdíveis estão a Biblioteca Nacional, conhecida por sua arquitetura única, e a Catedral de Madre Teresa, um marco religioso e cultural.",
      },
      {
        type: "image",
        src: pristinaLibrary, // Caminho importado
        alt: "Biblioteca Nacional de Pristina",
      },
      {
        type: "heading",
        text: "Cultura e Gastronomia",
      },
      {
        type: "paragraph",
        text: "Explore a rica culinária kosovar com pratos como Flija, Pite e Qebapa. Não deixe de visitar os mercados locais para experimentar sabores autênticos.",
      },
      {
        type: "image",
        src: kosovoFood, // Caminho importado
        alt: "Pratos típicos da culinária kosovar",
      },
      {
        type: "heading",
        text: "Onde se Hospedar",
      },
      {
        type: "paragraph",
        text: "Para uma estadia confortável e acessível, o Urban Boutique Hotel é a escolha perfeita. Localizado no coração da cidade, oferece quartos elegantes e serviços personalizados.",
      },
      {
        type: "image",
        src: urbanBoutique, // Caminho importado
        alt: "Urban Boutique Hotel",
      },
      {
        type: "heading",
        text: "Dicas Finais",
      },
      {
        type: "paragraph",
        text: "Planeje sua viagem entre abril e outubro para aproveitar o clima mais agradável. Use táxis ou transporte público para se locomover e reserve tempo para explorar a cidade a pé.",
      },
    ],
    relatedArticles: [
      { title: "5 Lugares Imperdíveis no Kosovo", link: "/blog/5-lugares-imperdiveis" },
      { title: "Descubra a Gastronomia Kosovar", link: "/blog/gastronomia-kosovar" },
    ],
  };
  
  export default article1;
  