import React from 'react'
import Fachada from '../assets/FACHADA.png'
import { Target } from 'lucide-react';
import { Sparkles } from 'lucide-react';
import { Element } from "react-scroll";

function quemSomos() {
  return (
    <Element name="quemSomos">

    <div className="flex flex-wrap flex-col px-5 py-16 justify-center items-center bg-white">
        <span className="flex justify-center bg-gradient-to-r from-purple-300 to-purple-500 border  border-[#b55fff] text-neutral-100 rounded-xl text-sm font-medium px-4 py-2 uppercase shadow-lg">
          Quem Somos
        </span>
            <p className='text-center mt-5 font-light text-sm text-neutral-500'>
            Somos uma empresa especializada com <br />
            mais de 10 anos de experiência no mercado.

            </p>
        <div className='flex flex-wrap items-center justify-center gap-20 pt-16'>
            <div className="flex flex-coljustify-start">
                <div className='flex flex-col space-y-16'>

                    <div className='flex items-center space-x-10'>  
                        <Target className='text-purple-500' size={80}/>  
                        <div className='flex flex-col gap-2'>

                            <h3 className='font-bold text-3xl sm:text-4xl md:text-5xl lg:text-5xl'>
                                Nossa missão
                            </h3>
                            <p className='text-start text-sm text-neutral-500 font-light'>
                            É conquistar a sua confiança, combinando conhecimento <br />
                            técnico com um atendimento acolhedor e transparente. <br />                    
                            </p>
                        </div>
                    </div>
                    <div className='flex items-center space-x-10'>
                        <Sparkles className='text-purple-500' size={80}/>
                        <div className='flex flex-col gap-2'>

                            <h3 className='font-bold text-3xl sm:text-4xl md:text-5xl lg:text-5xl'>
                                Nossos valores
                            </h3>
                            <p className='text-start text-sm text-neutral-500 font-light'>
                            Incluem transparência, acessibilidade e um atendimento <br />
                            justo, com uma equipe dedicada que coloca a sua necessidade <br />
                            em primeiro lugar.
                            </p>
                        </div>

                    </div>
                </div>              
            </div>
 
        </div>    
    </div>
    </Element>
  )
}

export default quemSomos