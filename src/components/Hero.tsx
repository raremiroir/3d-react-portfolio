import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'


const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>

        <div className="">
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#915eff]'>Miro</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I&apos;m a <span className='text-[#915eff]'>Full Stack Web Developer</span> with a passion for <span className='text-[#915eff]'>Graphic Design</span>
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-16 rounded-3xl border-4 transition-color duration-200 border-secondary group hover:border-white active:border-white focus:border-white flex justify-center items-start p-2">
            <motion.div 
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full transition-color duration-200 group-hover:bg-white group-active:bg-white group-focus:bg-white bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero