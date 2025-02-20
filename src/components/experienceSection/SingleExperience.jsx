import React from 'react'


const SingleExperience = ({ experience }) => {
    return (
        <div>
            <p className="font-bold text-cyan">{experience.job}</p>
            <p className="text-orange">{experience.company}</p>
            <p className="text-lightGrey">{experience.date}</p>
            <ul className="list-disc mt-4 pl-4">
                {experience.responsibilities.map((resp, index) => {
                    return <li key={index}>{resp}</li>;
                })}
            </ul>
        </div>
    );
};

export default SingleExperience;