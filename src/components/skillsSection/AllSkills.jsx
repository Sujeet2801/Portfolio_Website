import React from 'react'
import {FaReact, FaNodeJs, FaGitAlt, FaAws } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {SiExpress, SiAppwrite } from "react-icons/si";

import SingleSkill from "./SingleSkill";

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

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-3 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <div >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              />
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default AllSkills