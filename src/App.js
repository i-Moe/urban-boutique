import React from "react";
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import Navbar from "./components/Navbar";
import BlogNavbar from "./components/BlogNavbar";
import Homepage from "./pages/Homepage";
import BlogListPage from "./pages/BlogListPage"; // Página com a lista de artigos
import BlogPage from "./pages/BlogPage"; // Página do artigo individual
import Footer from "./components/Footer";
import BlogFooter from "./components/BlogFooter";
import articles from "./data/articles"; // Dados dos artigos
import "./App.css";
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Página inicial */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Homepage />
              <Footer />
            </>
          }
        />

        {/* Blog Pages */}
        <Route
          path="/blog"
          element={
            <>
              <BlogNavbar />
              <BlogListPage />
              <BlogFooter />
            </>
          }
        />
        <Route
          path="/blog/:id"
          element={
            <>
              <BlogNavbar />
              <DynamicBlogPage />
              <BlogFooter />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

// Component to search for and render a specific article
function DynamicBlogPage() {
  const { id } = useParams(); // Captura o ID da URL
  const article = articles.find((article) => article.id === id); // Busca o artigo correspondente

  if (!article) {
    return <div className="text-center text-xl">Article not found.</div>;
  }

  return <BlogPage article={article} />; // Renderiza a página do artigo
}

export default App;
