import React from "react";
function SingleProject({ image, projectName, github, weblink, tech }) {
  return (
    <div className="bg-white text-black p-6 rounded-2xl shadow-lg transition-transform 
      transform max-w-lg overflow-hidden border border-gray-200">
      
      {/* Project Image */}
      <img src={image} alt={projectName} 
        className="w-96 h-56 rounded-lg shadow-md" />
      
      {/* Project Name */}
      <h1 className="text-2xl font-bold mt-4 text-center text-gray-900">{projectName}</h1>
      
      {/* Tech Stack */}
      <p className="text-sm text-grey text-center mt-1 italic">Tech Used: {tech}</p>

      {/* Buttons */}
      <div className="mt-6 flex gap-3">
        {/* Website Link */}
        <a href={weblink} target="_blank" rel="noopener noreferrer" className="w-1/2">
          <button className="bg-lightBrown text-white hover:bg-blue-600 font-medium px-4 py-2 
          rounded-lg w-full transition shadow-md">
            Website
          </button>
        </a>

        {/* GitHub Link */}
        <a href={github} target="_blank" rel="noopener noreferrer" className="w-1/2">
          <button className="bg-gray-800 hover:bg-gray-900 font-medium px-4 py-2 
          rounded-lg w-full transition shadow-md">
            🔗 GitHub
          </button>
        </a>
      </div>
    </div>
  );
}

export default SingleProject;
