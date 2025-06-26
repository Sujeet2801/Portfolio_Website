import React, { useState } from "react";

function SingleCertificate({ title, issuer, date, image }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white">
                <img
                    className="w-full h-48 object-cover"
                    src={image}
                    alt="Certificate"
                />
                <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
                    <p className="text-sm text-gray-600">
                        Issued by <span className="font-medium">{issuer}</span> on{" "}
                        <span className="font-medium">{date}</span>.
                    </p>
                    <button
                        onClick={() => setIsOpen(true)}
                        className="inline-block mt-4 text-blue-600 hover:underline text-sm font-medium"
                    >
                        View Certificate
                    </button>
                </div>
            </div>

            {/* Modal overlay */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
                    <div className="relative bg-white rounded-lg p-4 shadow-xl max-w-3xl w-full mx-4">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-2 right-2 text-gray-700 hover:text-red-500 text-3xl 
                            font-bold"
                        >
                            &times;
                        </button>
                        <img
                            src={image}
                            alt="Full Certificate"
                            className="w-full max-h-[80vh] object-contain rounded"
                        />
                    </div>
                </div>
            )}
        </>
    );
}

export default SingleCertificate;
