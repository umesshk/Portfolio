"use client"

import { motion } from "framer-motion";
import { useState } from "react";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaCss3, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoGithub, IoLogoJavascript } from "react-icons/io";
import { IoLogoDocker } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiCplusplus, SiExpress, SiMongodb, SiPrisma, SiSocketdotio, SiTypescript } from "react-icons/si";
import { slideUp } from "./Hero";

const skillCategories = [
  {
    title: "Front-End",
    skills: [
      { name: "HTML", icon: <FaHtml5 className="bg-orange-400" />},
      { name: "CSS", icon: <FaCss3 className="bg-blue-500"/>  },
      { name: "React.js", icon: <FaReact className="text-blue-300 text-xl" /> },
      { name: "Next.js", icon: <RiNextjsFill className="text-black text-xl" />},
      { name: "Tailwind CSS", icon: <RiTailwindCssFill className="text-cyan-300" />},
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", icon: <IoLogoJavascript className="text-yellow-300" />},
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "C/C++", icon: <SiCplusplus className="text-blue-600" />},
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "WebSockets", icon: <SiSocketdotio /> },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-400 text-xl" /> },
      { name: "PostgreSQL", icon: <BiLogoPostgresql className="text-blue-200 text-xl" />  },
      { name: "Prisma", icon: <SiPrisma /> },
    ],
  },
]

export default function Skills() {
  
    return (
        <div className="w-full mt-6 sm:mt-8 md:mt-10 py-4">
            <div className="w-full container px-4 sm:px-6 md:px-10 mx-auto flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-10 items-center">
                <motion.div  variants={slideUp(0.4)}  initial="initial" whileInView="animate"  className="w-full bg-purple-400 h-1 rounded-full order-2 sm:order-1"></motion.div>
                <motion.h1 variants={slideUp(0.3)}  initial="initial" whileInView="animate" className="text-white text-3xl sm:text-4xl md:text-[4vw] order-1 sm:order-2">Skills</motion.h1>
            </div>
            
            <div className="w-full container mx-auto mt-4 px-4 sm:px-6 md:px-10">
                <motion.div variants={slideUp(0.2)}  initial="initial" whileInView="animate" className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
                    {skillCategories.map((category,index) => (
                        <div 
                            key={category.title}
                            className="bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 p-4 sm:p-5 md:p-6"
                        >
                            <div className="flex flex-col mb-4 md:mb-6">
                                <h2 className="text-2xl sm:text-3xl font-bold text-white">{category.title}</h2>
                                <div className="h-0.5 w-12 sm:w-16 bg-purple-600 mt-2"></div>
                            </div>
                            
                            <div className="flex flex-wrap gap-2 sm:gap-3">
                                {category.skills.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="bg-purple-900/60 hover:cursor-pointer hover:bg-purple-800 text-white border border-purple-500/30 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-full transition-all duration-300 hover:scale-105 flex items-center"
                                    >
                                        <span className="mr-1.5 sm:mr-2">{skill.icon}</span>
                                        {skill.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}