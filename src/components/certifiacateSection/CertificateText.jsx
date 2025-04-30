import React from 'react'

const CertificateText = () => {
    return (
      <div className="flex flex-col items-center mt-[100px]">
        <h2 className="text-6xl text-cyan mb-10">Certificates</h2>
        
        <div className="text-lg text-center text-white hidden md:block">
        <p >
        "I have wide vaiety of certificate." 
        </p>
        </div>

        <div className="text-lg text-center text-white md:hidden">
        <p >
        "I have worked on a diverse range of web development projects, utilizing various 
        backend technologies."</p>
        </div>
      </div>
    );
  };
  
  export default CertificateText;