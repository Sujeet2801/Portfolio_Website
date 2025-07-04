import React from 'react'
import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { useNavigate } from 'react-router-dom';

const projects = [
  {
    name: "IPOConnect",
    year: "Oct24 - Mar25",
    align: "right",
    image: "https://res.cloudinary.com/dw6mns230/image/upload/v1750824880/ipoconnect_p6rbz5.png",
    link: "https://ipoconnect.vercel.app/",
    GitHublink: "https://github.com/Sujeet2801/IPO-Connect",
  },
  {
    name: "Spendwise",
    year: "Sept2024",
    align: "left",
    image: "https://res.cloudinary.com/dw6mns230/image/upload/v1750824905/spendwise_image_ml9bnk.png",
    link: "https://spendwise-client.vercel.app/",
    GitHublink: "https://github.com/Sujeet2801/spendwise_client",
  },
  {
    name: "Mail Pilot Ai",
    year: "June 2025",
    align: "right",
    image: "https://res.cloudinary.com/dw6mns230/image/upload/v1750825788/mailpilot_tttixg.png",
    link: "https://mail-pilot-ai.vercel.app/",
    GitHublink: "https://github.com/Sujeet2801/mail-pilot-ai",
  },
];

const ProjectsMain = () => {
  const nav = useNavigate()
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
              GitHublinklink={project.GitHublink}
            />
          );
        })}
      </div>
      <div className='flex justify-center'>
        <button
        className='bg-lightCyan px-5 py-2 rounded-md mt-10 hover:bg-orange font-semibold'
        onClick={()=>nav("/projects")}>View All Projects</button>
      </div>
    </div>
  );
};

export default ProjectsMain;