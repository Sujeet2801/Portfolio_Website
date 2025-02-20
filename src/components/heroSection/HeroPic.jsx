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
      {/* <div className='absolute -z-10 flex justify-center items-center animate-pulse'>
        <PiHexagonThin
          className='md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-cyan blur-lg animate-[spin_20s_linear_infinite]'
        />
      </div> */}
    </motion.div>
  );
};

export default HeroPic;