import React from "react";
const SingleInfo = ({ text, Image }) => {
    return (
      <div className="flex gap-4 items-center justify-start">
        <Image className="text-3xl text-orange" />
        <p className=" text-white">{text}</p>
      </div>
    );
  };
  
  export default SingleInfo;