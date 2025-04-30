import React from "react";
import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>

      <p className="text-white">
        I'm a backend developer with a strong foundation in{" "}
        <span className="font-bold">Javascript</span> and{" "}
        <span className="font-bold">Node.js</span>, focused on building
        scalable, high-performance web applications with a robust authentication
        system. Projects like <span className="font-bold">IPOConnect</span>,{" "}
        <span className="font-bold">Spendwise</span>, and{" "}
        <span className="font-bold">Blogzilla</span> showcase my use of Node.js
        with <span className="font-bold">PostgreSQL</span>,{" "}
        <span className="font-bold">MongoDB</span>, and{" "}
        <span className="font-bold">Appwrite</span> for secure data handling,
        complete backend services, and robust authentication systems. I'm also
        familiar with containerization and orchestration tools such as Docker
        and Kubernetes, and have worked with cloud platforms like Railway,
        DigitalOcean, and AWS.
      </p>

      <p className="text-white mt-2">In addition to my backend expertise, I also have
        a solid understanding of frontend development using React.js, enabling
        me to collaborate effectively on full-stack applications. I am
        well-versed in API design, database architecture, and deployment
        processes. My development approach emphasizes clean code,
        maintainability, and performance optimization.
      </p>

      <Link
        to="projects" // ID of the section to scroll to
        smooth={true}
        duration={500}
        offset={-50} // Adjust scrolling position if needed
      >
        <button
          className="border border-orange rounded-full py-2 px-4 
          text-lg flex items-center mt-10 duration-200 
          cursor-pointer md:self-start sm:self-center text-white hover:text-cyan"
        >
          My Projects
        </button>
      </Link>
    </div>
  );
};

export default AboutMeText;
