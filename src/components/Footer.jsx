import React from 'react'
import { FaInstagram } from 'react-icons/fa';
import imgOkto from "../assets/okto-branco.png"


function Footer() {
  return (
    <footer class="bg-gray-900 text-white py-8 px-10">
        <div class="container mx-auto px-4 flex flex-col md:flex-row sm:justify-center md:justify-between items-center space-y-4 md:space-y-0 md:space-x-8">

            
            <div class="text-center md:text-left ">
                <p class="text-lg font-bold">Endereço</p>
                <p class="text-sm font-extralight mt-2">Empresarial Tancredo Neves, <br /> R. Edístio Pondé, 353 <br />
                Loja 23 Térreo - Stiep, Salvador  BA <br />
                 41770-395</p>
                <div className='mt-6 flex flex-col items-center sm:items-start md:items-center lg:items-start'>
                  <p className='textwhite font-semibold'>Criado por</p>
                  <a href="https://oktoagencia.com.br/" target='_blank'>
                    <img src={imgOkto} alt="" className='w-32'/>
                  </a>
                </div>
            </div>
            <div className=' flex justify-center items-center p-3 bg-purple-600 hover:bg-blue-500 rounded-lg hover:scale-105 duration-200 '>
                <a href="https://instagram.com/conserta.macas" target="_blank" rel="noopener noreferrer" className="text-white text-xl">
                <FaInstagram />
                </a>
            </div>  
    
        </div>
    </footer>
  )
}

export default Footer