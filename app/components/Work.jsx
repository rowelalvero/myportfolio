import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Work = ({ isDarkMode }) => {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id='work' 
            className='w-full px-[12%] py-10 scroll-mt-20'
        >
            <motion.h4 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='text-center mb-2 text-lg font-Ovo'
            >
                My portfolio
            </motion.h4>

            <motion.h2 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='text-center text-5xl font-Ovo mb-12'
            >
                My latest work
            </motion.h2>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {workData.map((project, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700"
                    >
                        {/* Project Image */}
                        {project.bgImage && (
                            <div className="relative h-48 w-full">
                                <Image 
                                    src={project.bgImage}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        )}
                        
                        {/* Project Content */}
                        <div className="p-6">
                            <h2 className="text-2xl font-bold mb-2 dark:text-white">{project.title}</h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                {project.status && (
                                    <span className="bg-yellow-100 dark:bg-yellow-900 px-2 py-1 rounded text-sm mr-2 mb-2 inline-block">
                                        {project.status}
                                    </span>
                                )}
                                {project.description}
                            </p>
                            
                            {(project.githubLink || project.technologies) && (
                                <div className="border-t border-gray-200 dark:border-gray-700 pt-4 flex justify-between items-center">
{project.technologies && (
  <div className="flex gap-2">
    {project.technologies.map((techPath, i) => (
      <span key={i} className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm">
        <Image 
          src={techPath} 
          alt="tech logo" 
          width={40} 
          height={40}
          className="w-7 h-7"
        />
      </span>
    ))}
  </div>
)}
                                    {project.githubLink && (
                                        <a href={project.githubLink} target='_blank' className="text-blue-600 dark:text-blue-400 hover:underline">
                                            View on GitHub
                                        </a>
                                    )}
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
            
            {/* <motion.a 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                href="#" 
                className="w-max flex items-center justify-center gap-2 
                text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto
                my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover"
            >
                Show more 
                <Image 
                    src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} 
                    alt="Right arrow" 
                    className="w-4"
                />
            </motion.a>             */}
        </motion.div>
    )
}

export default Work;