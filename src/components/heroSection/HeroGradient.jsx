import React from 'react';

const HeroGradient = () => {
  return (
    <div className='absolute inset-0 -z-10'>
      <div className='shadow-cyanMediumShadow absolute top-0 right-[400px] animate-pulse opacity-80'></div>
      <div className='shadow-orangeMediumShadow absolute top-0 right-0 animate-pulse opacity-80'></div>
      <div className='shadow-cyanMediumShadow absolute top-[300px] left-0 opacity-50'></div>
      <div className='shadow-orangeMediumShadow absolute top-[500px] left-0 opacity-80'></div>
    </div>
  );
};

export default HeroGradient;