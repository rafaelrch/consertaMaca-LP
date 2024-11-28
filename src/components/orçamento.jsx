import React from 'react'
import bg from "../assets/bg.jpg"

function Orçamento() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
        <img src={bg} alt="" className="absolute inset-0 w-full h-full object-cover"/>

        {/* Conteúdo em cima do vídeo */}
        <div className="relative flex flex-col items-center justify-center h-full space-y-6 px-5 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.4),rgba(90,106,183,0.3),rgba(13,19,71,0.5)_78%)]">
          <h1 className='text-6xl sm:text-5xl lg:text-8xl text-center text-white font-extralight'>
            Faça o seu
            <span className='font-semibold bg-gradient-to-r from-purple-100 to-purple-400 text-transparent bg-clip-text'>
            {' '} Orçamento
            </span>
          </h1>
          <h2 className='text-neutral-300 text-2xl sm:text-4xl sm:text-5xl text-center font-light max-w-xl'>
          SOLICITE AGORA MESMO PELO WHATSAPP
          </h2>
          <h3 className='text-neutral-300 text-xl sm:text-2xl sm:text-3xl text-center font-light max-w-xl'>(71) 9999-2503</h3>
          <a
            href="https://wa.me/557199992503"
            target="_blank"
            rel="noopener noreferrer"
            className='bg-gradient-to-r from-purple-500 to-purple-700 border border-[#b55fff] px-4 py-2 rounded-lg text-white hover:scale-105 hover:shadow-[0px_0px_20px_rgba(181,_95,_255,_0.8)] duration-500'
          >
            Entre em contato
          </a>
        </div>
      </div>
  )
}

export default Orçamento