import React from 'react';
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const HeroPic = () => {
  return (
    <motion.div  
    variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
    className='relative h-full flex justify-center items-center'>
      <img
        src='https://res.cloudinary.com/dw6mns230/image/upload/v1750824973/experience-image_xdxwrt.png'
        alt='Hero pic'
        className='max-h-[450px] w-auto drop-shadow-xl rounded-lg'
      />
    </motion.div>
  );
};

export default HeroPic;