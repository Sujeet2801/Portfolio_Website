import React from 'react'
import { LuArrowDownRight } from "react-icons/lu"
import { Link } from "react-scroll";

const NavbarBtn = () => {
  return (
    <Link
      to="contact"  // ID of the section to scroll to
      smooth={true}
      duration={500}
      offset={-50} // Adjust if needed
    >
      <div className='px-4 py-2 rounded-full text-xl font-bold text-white 
      border-cyan border flex items-center gap-1 bg-gradient-to-r from-cyan
      to-orange hover:border-orange hover:scale-110 transition-all duration-500
        hover:shadow-cyanShadow ml-8 cursor-pointer'>
        Hire Me
        <LuArrowDownRight />
      </div>
    </Link>
  )
}

export default NavbarBtn