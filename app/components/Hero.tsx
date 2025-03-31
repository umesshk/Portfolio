"use client"

import { motion } from "framer-motion";
import Image from "next/image";



export const  slideUp = (delay: number) =>{
    return {
        initial : {
            y : '100%',
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity : 1,
            transition : {
                duration : 0.8,
                delay: delay,
            },
        },
    };
}
export default function Hero() {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8">
      <div className="container mx-auto mt-8 md:mt-16 flex flex-col  md:grid md:grid-cols-3 md:h-auto">
        <div className="container px-4 py-6 md:px-10 md:py-8 col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
        <motion.h1 variants={slideUp(0.2)} initial="initial" whileInView="animate" className="text-white text-4xl sm:text-5xl md:text-[4.5vw]">Hi, I&apos;m</motion.h1>
        <motion.h1 variants={slideUp(0.2)} initial="initial" whileInView="animate" className="text-4xl sm:text-5xl md:text-[5.4vw] leading-tight md:leading-10 mt-4 -ml-2 tracking-tighter text-purple-500 font-medium">
            Umesh Kumar
          </motion.h1>
          <motion.p variants={slideUp(0.2)} initial="initial" whileInView="animate"  className="text-white mt-6 md:mt-10 text-base md:text-lg">
            A <span className="text-purple-400 font-medium">Full-Stack Developer</span> from India
          </motion.p> 
          <motion.p variants={slideUp(0.2)} initial="initial" whileInView="animate" className="text-white mt-2">
            Bridging Technology and Creativity through 
            <span className="text-purple-400 capitalize ml-1 font-medium">Web development</span>.
          </motion.p> 
          <div className="flex flex-col sm:flex-row w-full mt-8 md:mt-12 gap-4 sm:gap-8 md:gap-20 justify-center md:justify-start">
            <motion.button variants={slideUp(0.2)} initial="initial" whileInView="animate" className="text-white font-medium hover:text-purple-400 hover:cursor-pointer px-6 py-2 border-2 border-purple-400 rounded-full">
              Hire me
            </motion.button >
            <motion.button variants={slideUp(0.2)} initial="initial" whileInView="animate" className="text-white font-medium hover:text-purple-400 hover:cursor-pointer px-6 py-2 border-2 border-purple-400 rounded-full">
              Resume
            </motion.button >
          </div>
        </div>
        
        <div className="container py-8 md:py-20 flex justify-center md:justify-start mt-6 md:mt-0">
          <motion.div variants={slideUp(0.2)} initial="initial" whileInView="animate" className="w-64 h-64 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] bg-purple-400 relative rounded-full p-2 md:p-4">
            <Image 
              className="rounded-full absolute inset-0 m-auto" 
              src={'/profile.jpg'} 
              layout="fill"
              objectFit="cover"
              alt="Profile"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}