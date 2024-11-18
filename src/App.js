import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Game from './components/Game';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<MainContent />} /> {/* Página Inicial */}
        <Route path="/sobre" element={<div>Sobre mim</div>} /> {/* Página Sobre */}
        <Route path="/contato" element={<div>Contato</div>} /> {/* Página Contato */}
        <Route path="/jogo" element={<Game />} /> {/* Página Jogo Senha */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
