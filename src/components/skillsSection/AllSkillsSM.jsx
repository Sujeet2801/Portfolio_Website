import React from 'react'
import {FaReact, FaNodeJs, FaGitAlt, FaAws } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {SiExpress, SiAppwrite } from "react-icons/si";

const skills = [
    {
      skill: "JavaScript",
      icon: IoLogoJavascript,
    },
    {
      skill: "Node",
      icon: FaNodeJs,
    },
    {
      skill: "Express",
      icon: SiExpress,
    },
    {
      skill: "Appwrite",
      icon: SiAppwrite,
    },
    {
      skill: "Git",
      icon: FaGitAlt,
    },
    {
      skill: "AWS",
      icon: FaAws,
    },
    {
      skill: "React",
      icon: FaReact,
    },
  ];

const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
      {skills.map((item, index) => {
        return (
          <div key={index} className='flex flex-col items-center'>
            <item.icon className="text-7xl text-orange" />
            <p className="text-center mt-4 text-white">{item.skill}</p>
          </div>
        );
      })}
    </div>
  );
};

export default AllSkillsSM;