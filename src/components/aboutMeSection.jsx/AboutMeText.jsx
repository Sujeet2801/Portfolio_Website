import React from 'react'

const AboutMeText = () => {
  return (
    <div className='flex flex-col md:items-start sm:items-center md:text-left sm:text-center'>

      <h2 className=' text-6xl text-cyan mb-10 '>About Me</h2>

      <p className=' text-white'>I’m Sujeet Kumar Gupta, a web developer instructor with 
      expertise in both front-end and back-end development. My passion lies in building 
      modern, scalable web applications and helping others master the skills needed to 
      succeed in the tech industry. I specialize in React and Tailwind CSS, ensuring that
      my students can create high-performance, responsive, and visually appealing applications.
      With a strong foundation in both client-side and server-side development, My goal is to
      bridge the gap between theoretical knowledge and practical implementation, equipping
      learning with hands-on experience that prepares them for real-world challenges.  
      </p>

      <button className='border border-orange rounded-full py-2 px-4 
        text-lg flex items-center mt-10 hover:bg-orange duration-500 
        cursor-pointer md:self-start sm:self-center text-white hover:text-cyan '>
        My Projects</button>
    </div>
  )
}

export default AboutMeText