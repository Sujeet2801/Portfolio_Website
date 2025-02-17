import React from 'react'
import AboutMeText from './AboutMeText'
import AboutMeImage from './AboutMeImage'

const AboutMeMain = () => {
  return (
    <div className='flex md:flex-row sm:flex-col gap-12 max-w-[1200px] mx- 
     mx-auto mt-[100px] justify-between items-center'>
        <div>
            <AboutMeText/>
        </div>
        
        <div>
        <AboutMeImage/>
        </div>
    </div>
  )
}

export default AboutMeMain