import React from 'react'

import AllExperiences from "./AllExperiences";
import ExperienceText from "./ExperienceText";
import ExperienceTop from "./ExperienceTop";


const ExperienceMain = () => {
  return (
    <div id="experience" className="max-w-[1200px] mx-auto px-4">
      <>
        <ExperienceText />
      </>
      <div>
        <ExperienceTop />
      </div>
      <div className="w-full h-1 mt-4 bg-lightBrown lg:block sm:hidden"></div>
      <AllExperiences />
    </div>
  );
};

export default ExperienceMain;