import React from "react";
import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { IoMdDownload } from "react-icons/io";
import { IoLogoVercel } from "react-icons/io5";


// Path to your PDF file (You can replace it with the path to your file)
const pdfFilePath = "./resume/Resume.pdf";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial
        link="https://github.com/Sujeet2801"
        Icon={FiGithub}
      />

      <SingleContactSocial
        link="https://www.linkedin.com/in/sujeet-kumar-gupta-3344161b8"
        Icon={FaLinkedinIn}
      />

      <SingleContactSocial
        link="https://vercel.com/dashboard"
        Icon={IoLogoVercel}
      />

      <SingleContactSocial
        link={pdfFilePath}  // Use the path to your PDF here
        Icon={IoMdDownload}
        download={true}  // Set download prop to true
      />
    </div>
  );
};

export default ContactSocial;
