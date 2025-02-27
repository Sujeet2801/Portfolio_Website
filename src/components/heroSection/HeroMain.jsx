import React from 'react'
import HeroText from './HeroText'
import HeroPic from './HeroPic'

const HeroMain = () => {
  return (
    <div className='pt-36 lg:pt-28 pb-16 sm:pl-10'>

        <div className='flex md:flex-row sm:flex-col max-w-[1200px]
         mx-auto justify-between items-center relative pr-px gap-5'>
            <HeroPic/>
            <HeroText/>
        </div>
    </div>
  )
}

export default HeroMain