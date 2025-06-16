import { assets, infoList, progLangs } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const About = ({isDarkMode}) => {
  return (
    <motion.div id='about' className='w-full px-[12%] py-10 scroll-mt-20'
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    >
      <motion.h4 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      className='text-center mb-2 text-lg font-Ovo'>Introduction</motion.h4>
      <motion.h2 
      initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      className='text-center text-5xl font-Ovo'>About me</motion.h2>

      <motion.div 
      initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
        <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className='w-64 sm:w-80 rounded-3xl max-w-none'>
            <Image src={assets.user_image} alt='user' className='w-full rounded-3xl'/>
        </motion.div>
        <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className='flex-1'>
            <p className='mb-10 max-w-2xl font-Ovo'>
                A BS Computer Science student, passionate about building dynamic and responsive web applications. Ready to apply skills and knowledge to develop innovative and user-friendly web solutions, and holds strong interests in Web Development, Artificial Intelligence, and Machine Learning.
            </p>

            <motion.div 
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8, delay: 1.2 }}
  className='max-w-2xl'
>
  <h3 className='text-3xl font-Ovo mb-8'>Education</h3>
  
  <div className='flex flex-col gap-6 max-w-4xl mx-auto'>
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className='p-6 rounded-xl border-[0.5px] border-gray-400 dark:border-white 
      hover:bg-lightHover dark:hover:bg-darkHover/50 hover:shadow-black 
      dark:hover:shadow-white transition-all duration-300'
    >
      <div className='flex flex-col sm:flex-row justify-between'>
        <h4 className='text-xl font-semibold text-gray-700 dark:text-white'>Bachelor of Science in Computer Science</h4>
        <span className='text-gray-600 dark:text-white/80 text-sm sm:text-base'>Expected Graduation: 2026</span>
      </div>
      <p className='text-gray-600 dark:text-white/80 mt-2'>STI College San Jose Del Monte - May 2026</p>
      <ul className='mt-4 pl-5 list-disc text-gray-600 dark:text-white/80'>
        <li>Relevant coursework: Data Structures, Algorithms, Web Development, Machine Learning</li>
        <li>Software Quality Assurance</li>
        <li>Information Assurance and Security (Data Privacy)</li>
      </ul>
    </motion.div>
    {/* Add additional education entries if needed */}
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className='p-6 rounded-xl border-[0.5px] border-gray-400 dark:border-white 
      hover:bg-lightHover dark:hover:bg-darkHover/50 hover:shadow-black 
      dark:hover:shadow-white transition-all duration-300'
    >
      <div className='flex flex-col sm:flex-row justify-between'>
        <h4 className='text-xl font-semibold text-gray-700 dark:text-white'>Full Stack Curriculum</h4>
        <span className='text-gray-600 dark:text-white/80 text-sm sm:text-base'>The Odin Project - 2023</span>
      </div>
      <ul className='mt-4 pl-5 list-disc text-gray-600 dark:text-white/80'>
        <li>Learnings:</li>
        <li>MERN full stack development</li>
        <li>Git and GitHub usage</li>
        <li>Unix basics (Ubuntu)</li>
      </ul>
    </motion.div>
  </div>
</motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default About
