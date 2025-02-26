import React from "react";
import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";


const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="#" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/Sujeet2801" Icon={FiGithub} />
      <SingleContactSocial link="#" Icon={FaInstagram} />
      <SingleContactSocial link="#" Icon={IoMdDownload} />
    </div>
  );
};

export default ContactSocial;