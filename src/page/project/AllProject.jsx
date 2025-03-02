import React from "react";
import SingleProject from "./SingleProject";
import Image from "../../../public/images/website-img-1.jpg";
import Printify_image from "../../../public/images/printify_image.png";
import Spendwise_image from "../../../public/images/spendwise_image.png";
import PasswordChanger from "../../../public/images/passwordChanger.png";
import Patient_grid from "../../../public/images/patient_grid.png";
import Text_modulator from "../../../public/images/text_modulator.png";

const projectData = [
  { image: Image, projectName: "IPOConnect", weblink: "https://ipoconnect.vercel.app/", github: "https://github.com/Sujeet2801/IPO-Connect", tech: "React.js, Tailwind CSS" },
  { image: Spendwise_image, projectName: "Spendwise", weblink: "https://spendwise-client.vercel.app/", github: "https://github.com/Sujeet2801/spendwise_client", tech: "React.js, Tailwind CSS" },
  { image: Printify_image, projectName: "Printify", weblink: "", github: "", tech: "React.js, Tailwind CSS" },
  { image: PasswordChanger, projectName: "Password Changer", weblink: "https://password-changer-neon.vercel.app/", github: "https://github.com/Sujeet2801/PasswordChanger", tech: "Next.js, Framer Motion" },
  { image: Patient_grid, projectName: "Patient grid", weblink: "https://patinet-grid.vercel.app/", github: "https://github.com/Sujeet2801/PatinetGrid", tech: "Django, PostgreSQL" },
  { image: Text_modulator, projectName: "Text Modulator", weblink: "https://text-utils-react-tau.vercel.app/", github: "https://github.com/Sujeet2801/TextUtils-react", tech: "HTML, CSS, JavaScript" },
];

function AllProject() {
  return (
    <div className="pt-32 px-6">
      <h1 className="text-3xl md:text-4xl text-white font-bold text-center text-gray-900 mb-8">
        My Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {projectData.map((project, index) => (
          <SingleProject
            key={index}
            image={project.image}
            projectName={project.projectName}
            weblink={project.weblink}
            github={project.github}
            tech={project.tech || "Not Specified"}
          />
        ))}
      </div>
    </div>
  );
}

export default AllProject;
