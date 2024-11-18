import React from 'react';
import { Link } from 'react-router-dom';
import instaImage from '../assets/insta.png';
import githubImage from '../assets/github.png';
import linkedinImage from '../assets/linkedin.png';
import backImage from '../assets/back.png';

const MainContent = () => {
  return (
    <main className="apresentacao">
      <section className="apresentacao__conteudo">
        <h1 className="apresentacao__conteudo__titulo">
          Soluções personalizadas para <strong className="titulo-destaque"> um back-end eficiente!</strong>
        </h1>
        <p className="apresentacao__conteudo__paragrafo">
          Olá! Sou Wellington Aguiar, desenvolvedor Back-end com foco em segurança e performance. 
          Com experiência em Java, Spring Boot e MySQL, ajudo empresas a desenvolver sistemas robustos e escaláveis.
          Vamos conversar?
        </p>
        <div className="apresentacao__links">
          <h2 className="apresentacao__links__conteudo">Acesse minhas redes:</h2>
          <Link className="apresentacao__links__click" href="https://www.instagram.com/wellacerda/">
            <img src={instaImage} alt="Instagram" /> Instagram
          </Link>
          <Link className="apresentacao__links__click" href="https://github.com/WellingtonaguiarDev">
            <img src={githubImage} alt="GitHub" /> GitHub
          </Link>
          <Link className="apresentacao__links__click" href="https://www.linkedin.com/in/wellington-aguiar-461287130/">
            <img src={linkedinImage} alt="LinkedIn" /> LinkedIn
          </Link>
        </div>
      </section>
      <span><img src={backImage} alt="Foto" width="350" height="300" /></span>
    </main>
  );
}

export default MainContent;
