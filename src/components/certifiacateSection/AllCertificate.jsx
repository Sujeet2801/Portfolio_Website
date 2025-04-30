import React from "react";
import SingleCertificate from "./SingleCertificate";
import CertificateText from "./CertificateText";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

function AllCertificate() {

    const certificates = [
        
        {
            id: 1,
            title: "SDE Internship",
            issuer: "Bluestock Fintech",
            date: "November 2024",
            image: "./images/Bluestock.png",
            link: "#",
        },
        {
            id: 2,
            title: "AWS AI ML",
            issuer: "AWS",
            date: "Feb 2023",
            image: "./images/AI_ML.png",
            link: "#",
        },
        {
            id: 3,
            title: "Web development",
            issuer: "Internshala",
            date: "November 2022",
            image: "./images/Internshala_Internship.jpg",
            link: "#",
        },
        
    ];

    return (
        <div className="p-4">
            <motion.div
                variants={fadeIn("top", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
            >
                <CertificateText />
            </motion.div>
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-5">
                {certificates.map((cert) => (
                    <SingleCertificate key={cert.id} {...cert} />
                ))}
            </div>
        </div>
    );
}

export default AllCertificate;
