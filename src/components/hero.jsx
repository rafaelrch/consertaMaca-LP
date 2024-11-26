import React, { useState } from 'react';
import { Element } from "react-scroll";
import video1 from '../assets/video1.mp4';
import video3 from '../assets/video3.mp4';
import bg from "../assets/bg.jpg"

function Hero() {
  const [currentVideo, setCurrentVideo] = useState(0);

  // Array com os caminhos dos vídeos
  const videos = [video1, video3];

  // Função que alterna para o próximo vídeo ao final do atual
  const handleVideoEnd = () => {
    setCurrentVideo((prevVideo) => (prevVideo + 1) % videos.length);
  };

  return (
    <Element name="home">
      {/* Container do vídeo de fundo */}
      <div className="relative w-full h-screen overflow-hidden">
        <img src={bg} alt="" className="absolute inset-0 w-full h-full object-cover"/>
        {/* Video em background 
        <video
          src={videos[currentVideo]}
          autoPlay
          loop={false} // Defina loop como false para que ele só execute handleVideoEnd quando acabar
          muted
          playsInline
          onEnded={handleVideoEnd} // Chamado quando o vídeo termina
          className="absolute inset-0 w-full h-full object-cover"
        />*/}

        {/* Conteúdo em cima do vídeo */}
        <div className="relative flex flex-col items-center justify-center h-full space-y-6 px-5 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.4),rgba(90,106,183,0.3),rgba(13,19,71,0.5)_78%)]">
          <h1 className='text-5xl sm:text-5xl lg:text-7xl text-center text-white font-extralight'>
            Conserto com<br />
            <span className='font-semibold bg-gradient-to-r from-purple-100 to-purple-400 text-transparent bg-clip-text'>
               qualidade e agilidade.
            </span>
          </h1>
          <p className='text-neutral-300 text-sm text-center font-light max-w-xl'>
            Não deixe sua tela quebrada ou um problema atrapalhar seu dia. 
            Conte com nossa expertise para garantir que seu dispositivo funcione perfeitamente. 
          </p>
          <a
            href="https://wa.me/557199992503"
            target="_blank"
            rel="noopener noreferrer"
            className='bg-gradient-to-r from-purple-500 to-purple-700 border border-[#b55fff] px-4 py-2 rounded-lg text-white hover:scale-105 hover:shadow-[0px_0px_20px_rgba(181,_95,_255,_0.8)] duration-500'
          >
            Agende agora mesmo!
          </a>
        </div>
      </div>
    </Element>
  );
}

export default Hero;
