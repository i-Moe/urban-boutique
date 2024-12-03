import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import BlogListPage from './pages/BlogListPage'; // Página com a lista de artigos
import BlogPage from './pages/BlogPage'; // Página do artigo individual
import Footer from './components/Footer';
import articles from './data/articles'; // Dados dos artigos
import './App.css';
import './index.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Página inicial */}
        <Route path="/" element={<Homepage />} />
        {/* Lista de artigos */}
        <Route path="/blog" element={<BlogListPage />} />
        {/* Artigo individual */}
        <Route path="/blog/:id" element={<DynamicBlogPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

// Componente para buscar e renderizar um artigo específico
function DynamicBlogPage() {
  const { id } = useParams(); // Captura o ID da URL
  const article = articles.find((article) => article.id === id); // Busca o artigo correspondente

  if (!article) {
    return <div className="text-center text-xl">Artigo não encontrado.</div>;
  }

  return <BlogPage article={article} />; // Renderiza a página do artigo
}

export default App;
