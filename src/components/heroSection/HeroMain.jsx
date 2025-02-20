import React from 'react'
import HeroText from './HeroText'
import HeroPic from './HeroPic'

const HeroMain = () => {
  return (
    <div className='pt-40 pb-16 sm:pl-10'>

        <div className='flex md:flex-row sm:flex-col max-w-[1200px]
         mx-auto justify-between items-center relative pr-px'>
            <HeroPic/>
            <HeroText/>
        </div>
    </div>
  )
}

export default HeroMain