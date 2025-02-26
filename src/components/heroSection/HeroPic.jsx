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
        src='./images/experience-image.png'
        alt='Profile'
        className='max-h-[450px] w-auto drop-shadow-xl rounded-lg'
      />
    </motion.div>
  );
};

export default HeroPic;