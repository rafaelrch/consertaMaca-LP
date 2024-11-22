import React from 'react'
import { Star } from 'lucide-react'
import { ThumbsUp } from 'lucide-react'
import { Handshake } from 'lucide-react'
import { Wrench } from 'lucide-react'

function Serviços() {
  return (
    

    <div id="servicos" className="py-16 text-center flex flex-wrap flex-col justify-center items-center bg-neutral-100">
      <span className="flex justify-center bg-gradient-to-r from-purple-300 to-purple-500 border  border-[#b55fff] text-neutral-100 rounded-xl text-sm font-medium px-4 py-2 uppercase shadow-lg">
      Nosso diferencial
      </span>
      <p className='text-center mt-5 font-light text-sm text-neutral-500'>
      Oferecemos consertos com garantia de qualidade.
      </p>
      <div className="flex flex-wrap justify-center items-center mx-5 space-x-1 py-16">
          <div className="w-full sm:w-1/2 lg:w-1/5 p-2 ">
              <div className=" p-10 w-full h-full flex flex-col justify-center items-center border border-neutral-300 hover:border-blue-600 hover:scale-105 hover:shadow-[0px_20px_20px_rgba(0,0,0,_0.1)] duration-200 rounded-xl">
                <Star size={50}/>
                <h2 className="py-4 text-lg sm:text-3xl lg:text-2xl font-semibold">Equipe qualificada</h2>
                <p className='text-neutral-500 font-light text-sm'>Profissionais capacitados com mais <br />
                de 10 anos de experiência na área.</p>
                
              </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/5 p-2">
              <div className="p-10 w-full h-full flex flex-col justify-center items-center border border-neutral-300 hover:border-blue-600 hover:scale-105 hover:shadow-[0px_20px_20px_rgba(0,0,0,_0.1)] duration-200 rounded-xl">
                <ThumbsUp size={50}/>
                <h2 className="py-4 text-lg sm:text-3xl lg:text-2xl font-semibold">Serviço bem avaliado</h2>
                <p className='text-neutral-500 font-light text-sm'>
                  Comentários positivos no Google, focamos na real necessidade do cliente.
                </p>
              </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/5 p-2">
              <div className="p-10 w-full h-full flex flex-col justify-center items-center border border-neutral-300 hover:border-blue-600 hover:scale-105 hover:shadow-[0px_20px_20px_rgba(0,0,0,_0.1)] duration-200 rounded-xl">
                <Handshake size={50}/>
                <h2 className="py-4 text-lg sm:text-3xl lg:text-2xl font-semibold">Valores </h2>
                <p className='text-neutral-500 font-light text-sm'>
                  Somos uma empresa de tecnologia com diferencial de tratamento 100% humanizado.
                </p>
              </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/5 p-2">
              <div className="p-10 w-full h-full flex flex-col justify-center items-center border border-neutral-300 hover:border-blue-600 hover:scale-105 hover:shadow-[0px_20px_20px_rgba(0,0,0,_0.1)] duration-200 rounded-xl">
                <Wrench size={50}/>
                <h2 className="py-4 text-lg sm:text-3xl lg:text-2xl font-semibold">Inovação Tecnológica </h2>
                <p className='text-neutral-500 font-light text-sm'>
                  Disponibilizamos o que há de mais atual em inovação e tecnologia.
                </p>
              </div>
          </div>
      </div>
      <a  href="https://wa.me/557199992503" target="_blank" className='font-light w-4/5 sm:w-2/5 lg:w-1/3 text-xs sm:text-sm md:text-md lg:text-base bg-gradient-to-r from-purple-500 to-purple-700 border border-[#b55fff] px-4 py-2 rounded-xl text-white hover:scale-105  hover:shadow-[0px_0px_20px_rgba(181,_95,_255,_0.8)] duration-500'>
        Ver Detalhes dos Serviços
      </a>
    </div>
  )
}

export default Serviços