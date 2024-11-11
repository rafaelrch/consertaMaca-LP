import React from 'react';

function hero() {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 px-5 bg-[linear-gradient(to_bottom,#fff,#5a6ab7,#0d1347_78%)] h-screen pb-20">
        <h1 className='text-4xl sm:text-5xl lg:text-6xl text-center text-white font-extralight'>
        Consertamos <br />
        iPhones, iPads, MacBooks e mais <br />
        <span className='font-semibold bg-gradient-to-r from-purple-100 to-purple-400 text-transparent bg-clip-text'>
        com qualidade e agilidade.
        </span>
        </h1>
        <p className='text-neutral-300 text-sm text-center font-light max-wxl4'>Não deixe uma tela quebrada ou um problema técnico atrapalhar seu dia. <br />
         Conte com nossa expertise para garantir que seu dispositivo Apple funcione perfeitamente.</p>
        <a  href="https://wa.me/557199992503" target="_blank" className=' bg-gradient-to-r from-purple-500 to-purple-700 border  border-[#b55fff] px-4 py-2 rounded-lg text-white hover:scale-105  hover:shadow-[0px_0px_20px_rgba(181,_95,_255,_0.8)] duration-500'>
        Agende seu Conserto Agora!
        </a>
    </div>
  )
}

export default hero