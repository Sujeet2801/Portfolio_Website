import React from 'react'
import {Link} from 'react-scroll'

const AboutMeText = () => {
  return (
    <div className='flex flex-col md:items-start sm:items-center md:text-left sm:text-center'>

      <h2 className=' text-6xl text-cyan mb-10 '>About Me</h2>

      <p className=' text-white'>I’m Sujeet Kumar Gupta, a web developer with expertise in JavaScript, React, and Node.js. My passion lies in building modern, scalable web applications and solving complex problems through hands-on practice. I specialize in creating full-stack applications, using React for dynamic front-end development and Node.js for back-end services.
My approach is entirely practice-oriented. Whether it’s optimizing code, debugging, or architecting scalable solutions, I aim to bridge the gap between knowledge and actual development experience.
      </p>

      <Link
        to="projects" // ID of the section to scroll to
        smooth={true}
        duration={500}
        offset={-50} // Adjust scrolling position if needed
      >
        <button className='border border-orange rounded-full py-2 px-4 
      text-lg flex items-center mt-10 hover:bg-orange duration-500 
      cursor-pointer md:self-start sm:self-center text-white hover:text-cyan '>
          My Projects
        </button>
      </Link>
    </div>
  )
}

export default AboutMeText