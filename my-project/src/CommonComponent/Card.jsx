import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoMdCloseCircle } from "react-icons/io";
import { motion } from "framer-motion"

const Card = ({data}) => {
  return (
    <motion.div className='relative w-60 h-72 rounded bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'  whileDrag={{scale:1.2}}drag dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}>
      <FaRegFileAlt />
      <p className='text-sm leading-snug mt-5'>{data.description}</p>
      <div className='footer absolute bottom-0 w-full left-0 rounded-[30px]'>
        <div className='flex items-center justify-between'>
          <h5>{data.fileSize}</h5>
          <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
            {data.close ? <IoMdCloseCircle /> : <LuDownload />}
          </span>
        </div>
        {data.tag.isOpen && (
          <div className={`tag w-full h-10 ${data.tag.tagColor == "blue" ? "bg-blue-200" : "bg-green-200"} py-2 flex items-center justify-center rounded-lg`}>
            <h3 className='text-md'> Download now</h3>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default Card