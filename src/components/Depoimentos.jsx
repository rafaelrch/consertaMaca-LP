import React from 'react'
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../constants';



const Depoimentos = () => {

    const childVariants = {
        hidden: {opacity: 0, y: 50},
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                delay: i * 0.5,
            }
        })
    }

  return (
    <div id='testimonials' className="py-16 px-16 text-center flex flex-wrap flex-col justify-center items-center  min-h-screen">
        <span className="flex justify-center bg-gradient-to-r from-purple-300 to-purple-500 border  border-[#b55fff] text-neutral-100 rounded-xl text-sm font-medium px-4 py-2 uppercase shadow-lg">
          Depoimentos
        </span>
        <p className='text-center mt-5 font-light text-sm text-neutral-600'>
        O que nossos clientes dizem
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-16'>
            {TESTIMONIALS.map((testimonial, index) => (
                <motion.div 
                    key={index}
                    className='relative rounded-lg p-6 h-full backdrop-blur-6xl bg-stone-500/10 flex flex-col justify-center  duration-300 '
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    whileHover={{ scale: 1.02 }}
                    variants={childVariants}
                >
                    <div className='flex items-center mb-4 '>
                        <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className='w-12 h-12 rounden-full mr-4'
                            loading='lazy'/>
                        <div>
                            <h2 className='text-lg font-semibold'>
                                {testimonial.name}
                            </h2>
                            <p className='text-sm font-light text-start'>
                                {testimonial.meses}
                            </p>
                        </div>
                    </div>
                    <p className='leading-relaxed text-sm text-start'>
                        {testimonial.feedback}
                    </p>
                    


                </motion.div>
            ))}
        </div>
    </div>
  )
}

export default Depoimentos