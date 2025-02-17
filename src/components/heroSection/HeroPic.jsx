import React from 'react';
import { PiHexagonThin } from 'react-icons/pi';

const HeroPic = () => {
  return (
    <div className='relative h-full flex justify-center items-center'>
      <img
        src='../../public/images/HexaPic.png'
        alt='Profile'
        className='max-h-[450px] w-auto drop-shadow-xl rounded-lg'
      />
      {/* <div className='absolute -z-10 flex justify-center items-center animate-pulse'>
        <PiHexagonThin
          className='md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-cyan blur-lg animate-[spin_20s_linear_infinite]'
        />
      </div> */}
    </div>
  );
};

export default HeroPic;