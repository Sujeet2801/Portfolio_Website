import React from "react";
import SingleProject from "./SingleProject";

const projectData = [
  { image: "https://res.cloudinary.com/dw6mns230/image/upload/v1750824880/ipoconnect_p6rbz5.png", projectName: "IPOConnect", weblink: "https://ipoconnect.vercel.app/", github: "https://github.com/Sujeet2801/IPO-Connect", tech: "React.js, Node.js, PostgreSQL, express-validator, Resend" },
  { image: "https://res.cloudinary.com/dw6mns230/image/upload/v1750824905/spendwise_image_ml9bnk.png", projectName: "Spendwise", weblink: "https://spendwise-client.vercel.app/", github: "https://github.com/Sujeet2801/spendwise_client", tech: "React.js, Node.js, MongoDB, Zod, Resend" },
  { image: "https://res.cloudinary.com/dw6mns230/image/upload/v1750825788/mailpilot_tttixg.png", projectName: "Mail Pilot Ai", weblink: "https://mail-pilot-ai.vercel.app/", github: "https://github.com/Sujeet2801/mail-pilot-ai", tech: "React.js, Spring boot, Gemini API, Material UI" },
  { image: "https://res.cloudinary.com/dw6mns230/image/upload/v1750826774/blogzilla_hhwgtt.png", projectName: "Blogzilla", weblink: "https://blogs.sujeettech.com/", github: "https://github.com/Sujeet2801/Blogzilla", tech: "React.js, Appwrite, Tailwind CSS, " },
  // { image: Printify_image, projectName: "Printify", weblink: "", github: "", tech: "React.js, Tailwind CSS" },
  { image: "https://res.cloudinary.com/dw6mns230/image/upload/v1750829341/passwordChanger_sggusr.png", projectName: "Password Changer", weblink: "https://password-changer-neon.vercel.app/", github: "https://github.com/Sujeet2801/PasswordChanger", tech: "React.js, Framer Motion" },
  { image: "https://res.cloudinary.com/dw6mns230/image/upload/v1750825103/patient_grid_excag2.png", projectName: "Patient grid", weblink: "https://patinet-grid.vercel.app/", github: "https://github.com/Sujeet2801/PatinetGrid", tech: "Django, PostgreSQL" },
  { image: "https://res.cloudinary.com/dw6mns230/image/upload/v1750829344/text_modulator_svczus.png", projectName: "Text Modulator", weblink: "https://text-utils-react-tau.vercel.app/", github: "https://github.com/Sujeet2801/TextUtils-react", tech: "HTML, CSS, JavaScript" },
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
