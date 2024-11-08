import React from 'react'
import { Smartphone } from 'lucide-react'
import { Laptop } from 'lucide-react'
import { Tablet } from 'lucide-react'
import { Watch } from 'lucide-react'
import { HandCoins } from 'lucide-react'
import { Apple } from 'lucide-react'

function Serviços() {
  return (
    

    <div id="servicos" className="py-16 text-center flex flex-wrap flex-col justify-center items-center bg-neutral-100">
      <span className="flex justify-center bg-gradient-to-r from-purple-300 to-purple-500 border  border-[#b55fff] text-neutral-100 rounded-full text-sm font-medium px-4 py-2 uppercase shadow-lg">
        Serviços
      </span>
      <p className='text-center mt-5 font-light text-sm text-neutral-500'>
        Conheça nossa lista completa de serviços para dispositivos Apple. <br />
        Do iPhone ao Apple Watch, oferecemos consertos com garantia de qualidade.
      </p>
      <div className="flex flex-wrap justify-center mx-5 space-x-1 pt-16">
          <div className="w-full sm:w-1/2 lg:w-1/5 p-2">
              <div className=" p-10 w-full h-full flex flex-col justify-center items-center border border-neutral-300 hover:border-blue-600 hover:scale-105 hover:shadow-[0px_20px_20px_rgba(0,0,0,_0.1)] duration-200 rounded-xl">
                <Smartphone size={50}/>
                <h2 className="py-4 text-lg sm:text-xl lg:text-2xl">Assistência Técnica para iPhone</h2>
                
              </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/5 p-2">
              <div className="p-10 w-full h-full flex flex-col justify-center items-center border border-neutral-300 hover:border-blue-600 hover:scale-105 hover:shadow-[0px_20px_20px_rgba(0,0,0,_0.1)] duration-200 rounded-xl">
                <Laptop size={50}/>
                <h2 className="py-4 text-lg sm:text-xl lg:text-2xl">Assistência Técnica para MacBook</h2>
                
              </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/5 p-2">
              <div className="p-10 w-full h-full flex flex-col justify-center items-center border border-neutral-300 hover:border-blue-600 hover:scale-105 hover:shadow-[0px_20px_20px_rgba(0,0,0,_0.1)] duration-200 rounded-xl">
                <Tablet size={50}/>
                <h2 className="py-4 text-lg sm:text-xl lg:text-2xl">Assistência Técnica para iPad</h2>
                
              </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/5 p-2">
              <div className="p-10 w-full h-full flex flex-col justify-center items-center border border-neutral-300 hover:border-blue-600 hover:scale-105 hover:shadow-[0px_20px_20px_rgba(0,0,0,_0.1)] duration-200 rounded-xl">
                <Watch size={50}/>
                <h2 className="py-4 text-lg sm:text-xl lg:text-2xl">Assistência Técnica para Apple Watch</h2>
                
              </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/5 p-2">
              <div className="p-10 w-full h-full flex flex-col justify-center items-center border border-neutral-300 hover:border-blue-600 hover:scale-105 hover:shadow-[0px_20px_20px_rgba(0,0,0,_0.1)] duration-200 rounded-xl">
                <HandCoins size={50}/>
                <h2 className="py-4 text-lg sm:text-xl lg:text-2xl">Compra e Venda de Aparelhos Apple</h2>
                
              </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/5 p-2">
              <div className="p-10 w-full h-full flex flex-col justify-center items-center border border-neutral-300 hover:border-blue-600 hover:scale-105 hover:shadow-[0px_20px_20px_rgba(0,0,0,_0.1)] duration-200 rounded-xl">
                <Apple size={50}/>
                <h2 className="py-4 text-lg sm:text-xl lg:text-2xl">Acessórios Apple</h2>
                
              </div>
          </div>
        </div>
      </div>
  )
}

export default Serviços