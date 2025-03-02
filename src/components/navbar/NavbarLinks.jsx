import React from "react";
import { useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const links = [
  { link: "Home", section: "home" },
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const NavbarLinks = () => {
  const navigate = useNavigate();

  const handleNavigation = (section) => {
    if (window.location.pathname !== "/home") {
      navigate("/");
      setTimeout(() => {
        scrollToSection(section);
      }, 500);
    } else {
      scrollToSection(section);
    }
  };

  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ul className="flex gap-6 text-white font-bold text-center py-4 
      lg:flex-row sm:flex-col lg:relative sm:absolute sm:top-[120%] left-[50%] 
      -translate-x-[50%] lg:text-md sm:text-xl sm:bg-cyan/30 backdrop-blur-lg 
      lg:bg-black sm:w-full">
      {links.map((link, index) => (
        <li key={index} className="group">
          <ScrollLink
            to={link.section}
            smooth={true}
            spy={true}
            duration={500}
            offset={-130}
            onClick={() => handleNavigation(link.section)}
            className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
          >
            {link.link}
          </ScrollLink>
          <div
            className="mx-auto bg-cyan w-0 group-hover:w-full h-[1px] 
              transition-all duration-500"
          ></div>
        </li>
      ))}
    </ul>
  );
};

export default NavbarLinks;
