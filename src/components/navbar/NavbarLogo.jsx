import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavbarLogo = () => {
  const nav = useNavigate()

  return (

    <div className='pr-12'>

        <h1 className=' text-white text-2xl sm:hidden md:block cursor-pointer'
          onClick={() => nav("/")}>
          Sujeet Kumar Gupta</h1>

        <h1 className=' text-white font-special font-extrabold 
        text-4xl sm:block md:hidden cursor-pointer'>SKG</h1>
    </div>
  )
}

export default NavbarLogo