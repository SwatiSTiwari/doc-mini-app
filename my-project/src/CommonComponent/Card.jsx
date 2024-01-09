import React from 'react';
import { FaFileArrowUp } from "react-icons/fa6";
const Card = (data) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 w-60 h-72 overflow-hidden">
< FaFileArrowUp className="text-6xl text-gray-300 mb-4" />
            <div className="flex flex-col justify-between h-full">
                <div>
                    <h2 className="text-xl font-bold text-gray-800">card</h2>
                    <p className="mt-2 text-gray-600">{data.description}</p>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center">
                        <div className="flex flex-col ml-3">
                            <span className="text-gray-800 font-bold">{data.isOpen.tagTitle}</span>
                            <span className="text-gray-400 text-xs">{data.fileSize}</span>
                        </div>
                    </div>
                    <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">Download</button>
                </div>
            </div>
            
            
        </div>
    );
};

export default Card;
