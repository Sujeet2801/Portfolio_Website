import React from 'react'
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const HeroText = () => {
  return (
    <div className='flex flex-col gap-4 h-full justify-center 
    md:text-left sm:text-center mr-5'>

        <motion.h2 
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className='lg:text-2xl sm:text-xl uppercase text-cyan'>
            Front-end Web Developer
        </motion.h2>

        <motion.h1 
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className='md:text-[2.8 rem] lg:text-6xl sm:text-4xl font-bold 
        font-special text-orange'>Sujeet Kumar Gupta
        </motion.h1>

        <motion.p 
         variants={fadeIn("up", 0.6)}
         initial="hidden"
         whileInView="show"
         viewport={{ once: false, amount: 0 }}
        className=' text-lg mt-4 text-white hidden md:block'>
        "I'm a web developer with a strong command of JavaScript,
        <br /> 
        I create engaging websites that seamlessly blend with functionality."
        </motion.p>

        <motion.p 
         variants={fadeIn("up", 0.6)}
         initial="hidden"
         whileInView="show"
         viewport={{ once: false, amount: 0 }}
        className=' text-lg mt-4 text-white block md:hidden'>
        "I'm a web developer with a strong command of JavaScript,
        I create engaging websites that seamlessly blend with functionality."
        </motion.p>
    </div>
  )
}

export default HeroText