import React from 'react'
import Fachada from '../assets/FACHADA.png'
import { Target } from 'lucide-react';
import { Sparkles } from 'lucide-react';

function quemSomos() {
  return (
    <div className="flex flex-wrap flex-col mx-5 my-16 justify-center items-center">
        <span className="flex justify-center bg-gradient-to-r from-purple-300 to-purple-500 border  border-[#b55fff] text-neutral-100 rounded-full text-sm font-medium px-4 py-2 uppercase shadow-lg">
          Quem Somos
        </span>
            <p className='text-center mt-5 font-light text-sm text-neutral-500'>
                A Conserta Maçãs é uma empresa especializada <br />em assistência técnica para dispositivos Apple.
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
                            incluem transparência, acessibilidade e um atendimento <br />
                            justo, com uma equipe dedicada que coloca a sua necessidade <br />
                            em primeiro lugar.
                            </p>
                        </div>

                    </div>
                </div>              
            </div>
            <img className='w-full sm:w-1/2 lg:w-1/5 mr-0 md:mr-9 lg:mr-16 hover:shadow-lg duration-500 ' src={Fachada} alt=""  style={{ borderRadius: "35px" }} /> 
        </div>    
    </div>
  )
}

export default quemSomos