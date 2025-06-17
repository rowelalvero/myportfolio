import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion"

const Header = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const words = ['Web Developer', 'Mobile Developer', 'Software Developer', 'Computer Science Student'];
  const typingSpeed = 50;
  const deletingSpeed = 50;
  const delayBetweenWords = 2000;

  useEffect(() => {
    let timeout;
    
    const type = () => {
      const currentWord = words[currentWordIndex];
      
      if (isDeleting) {
        // Delete character
        setCurrentText(currentWord.substring(0, currentText.length - 1));
      } else {
        // Add character
        setCurrentText(currentWord.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === currentWord) {
        // Word is complete, start deleting after delay
        timeout = setTimeout(() => setIsDeleting(true), delayBetweenWords);
      } else if (isDeleting && currentText === '') {
        // Word is deleted, move to next word
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      } else {
        // Continue typing/deleting
        const speed = isDeleting ? deletingSpeed : typingSpeed;
        timeout = setTimeout(type, speed);
      }
    };

    timeout = setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
    
    return () => clearTimeout(timeout);
  }, [currentText, currentWordIndex, isDeleting]);

  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col 
    items-center justify-center gap-4'>
      <motion.div
        initial={{ scale: 0}}
        whileInView={{scale: 1 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
      >
        <Image src={assets.profile_img} alt="Profile Image" className='rounded-full w-32'/>
      </motion.div>

      <motion.h3 
        initial={{ y: -20, opacity: 0 }}
        whileInView={{y:0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'
      >
        Hi! I'm Rowel B. Alvero Jr. <Image src={assets.hand_icon} alt="" className='w-6'/>
      </motion.h3>

      <motion.h1 
        initial={{ y: -30, opacity: 0 }}
        whileInView={{y:0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo min-h-[80px] sm:min-h-[120px] flex items-center justify-center'
      >
        {currentText}
        <span className="animate-pulse">|</span> {/* Cursor */}
      </motion.h1>

      {/* Rest of your component remains the same */}
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className='max-w-2xl mx-auto font-Ovo'
      >
        Greetings! I'm John Rowel B Alvero Jr, a Computer Science student passionate about building software solutions, including web and mobile applications.
      </motion.p>

      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <motion.a 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{y:0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href='#contact'
          className='px-10 py-3 border border-white rounded-full bg-black 
          text-white flex items-center gap-2 dark:bg-transparent'
        >
          contact me <Image src={assets.right_arrow_white} alt='' className='w-4'/>
        </motion.a>

        <motion.a 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{y:0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href='/resume.pdf' download 
          className='px-10 py-3 border rounded-full border-full border-gray-500 flex 
          items-center gap-2 bg-white dark:text-black'
        >
          my resume <Image src={assets.download_icon} alt='' className='w-4'/>
        </motion.a>
      </div>
    </div>
  )
}

export default Header