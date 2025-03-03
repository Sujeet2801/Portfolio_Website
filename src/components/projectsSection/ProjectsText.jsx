import React from 'react'

const ProjectsText = () => {
    return (
      <div className="flex flex-col items-center mt-[100px]">
        <h2 className="text-6xl text-cyan mb-10">Projects</h2>
        
        <div className="text-lg text-center text-white hidden md:block">
        <p >
          I have worked on a variety of web development projects, ranging from
          responsive websites for 
        </p>
        <p >small businesses to full-stack applications and
        complex front-end interfaces.</p>
        </div>

        <div className="text-lg text-center text-white md:hidden">
        <p >
          I have worked on a variety of web development projects, ranging from
          responsive websites for 
        small businesses to full-stack applications and
        complex front-end interfaces.</p>
        </div>
      </div>
    );
  };
  
  export default ProjectsText;