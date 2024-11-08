import React from 'react';
import logo from "../assets/logo.png";
import { MessageCircle  } from 'lucide-react';

const navBar = () => {
  return (
    
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-300">
        <div className="px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center">
                
                    <img className="w-16 ml-3" src={logo} alt="Conserta Maçãs" />
                    <a href='#' className='flex items-center font-light bg-[#0d1347] hover:bg-[#222e91] duration-200 px-4 py-2 text-white gap-3' style={{ borderRadius: "12px" }}> 
                        Conversar
                        <MessageCircle  size={23}/>
                    </a>
                    
                
            </div>
        </div>
    </nav>
  )
}

export default navBar