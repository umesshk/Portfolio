"use client"

import { useState } from "react";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaCss3, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoGithub, IoLogoJavascript } from "react-icons/io";
import { IoLogoDocker } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiCplusplus, SiExpress, SiMongodb, SiPrisma, SiSocketdotio, SiTypescript } from "react-icons/si";

const frontendTechnologies = [
    { name: "HTML", icon: <FaHtml5 className="bg-orange-400" />},
    { name: "CSS", icon: <FaCss3  className="bg-blue-500"/> },
    { name: "React.js", icon: <FaReact className="text-blue-300 text-xl" />},
    { name: "Next.js", icon: <RiNextjsFill className="text-black text-xl" />},
    { name: "Tailwind CSS", icon: <RiTailwindCssFill className="text-cyan-300" /> }
  ];
  
  const backendTechnologies = [
    { name: "Node.js", icon: <FaNodeJs className="text-green-500"  /> },
    { name: "Express.js", icon: <SiExpress />},
    { name: "WebSockets", icon: <SiSocketdotio />}
  ];
  
  const programmingLanguages = [
    { name: "JavaScript", icon: <IoLogoJavascript className="text-yellow-300"  />},
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500"  />},
    { name: "C/C++", icon: <SiCplusplus className="text-blue-600"  />
    }
  ];
  
  const databases = [
    { name: "MongoDB", icon: <SiMongodb className="text-green-400 text-xl"  />},
    { name: "PostgreSQL", icon: <BiLogoPostgresql className="text-blue-200 text-xl"  /> },
    { name: "Prisma", icon: <SiPrisma />
    }
  ];
  
  
  

export default function Skills(){

    return  <div className="w-full mt-10  ">
    <div className="w-full container px-10  mx-auto flex gap-10  items-center">
        <div className="w-full bg-purple-400 h-1 rounded-full "></div>
        <h1 className="text-white text-[4vw]">Skills</h1>
    </div>
    <div className="w-full container mx-auto  px-10 ">
    <div className="w-[10vw] flex flex-col gap-3">
    <h1 className="text-white  text-4xl font-bold  ">Front-End </h1>
    <div className="w-full bg-purple-700 h-1 "></div>
    </div>
    <div className="mt-5 flex gap-10">
    {frontendTechnologies.map((item,index)=>{
        return  <button key={index}
        className={`
          relative
          px-8 py-3
          text-white font-medium
          rounded-full
          transition-all duration-300
          bg-purple-500/30 border border-purple-500/70 backdrop-blur-sm
          hover:cursor-pointer
          hover:scale-105
          flex justify-between items-center gap-3   
        `}
      >
        <div className="absolute top-0 left-1/4 w-1/2 h-1/3 bg-white/30 rounded-full blur-sm transform -rotate-12" />
        <span className="relative z-10 text-white font-medium text-lg shadow-sm">{item.icon}</span>
        <span className="relative z-10 text-white font-medium text-lg shadow-sm">{item.name}</span>
        <div 
          className={`
            absolute inset-0 
            rounded-full 
            bg-gradient-to-tr from-purple-600/70 via-purple-300/20 to-transparent
            transition-opacity duration-300 
            opacity-80 hover:opacity-50
          `} 
        />
        
        <div 
          className={`
            absolute -inset-1
            rounded-full 
            bg-purple-400/20
            blur-md 
            transition-opacity duration-300
            hover:opacity-30'}
          `}
        />
      </button>
    })}
      </div>
    </div>
    <div className="w-full container mx-auto mt-10  px-10 ">
    <div className="w-[10vw] flex flex-col gap-3">
    <h1 className="text-white  text-4xl font-bold  ">Languages </h1>
    <div className="w-full bg-purple-700 h-1 "></div>
    </div>
    <div className="mt-5 flex gap-10">
    {programmingLanguages.map((item,index)=>{
        return  <button key={index}
        className={`
          relative
          px-8 py-3
          text-white font-medium
          rounded-full
          transition-all duration-300
          bg-purple-500/30 border border-purple-500/70 backdrop-blur-sm
          hover:cursor-pointer
          hover:scale-105
          flex justify-between items-center gap-3   
        `}
      >
        <div className="absolute top-0 left-1/4 w-1/2 h-1/3 bg-white/30 rounded-full blur-sm transform -rotate-12" />
        <span className="relative z-10 text-white font-medium text-lg shadow-sm">{item.icon}</span>
        <span className="relative z-10 text-white font-medium text-lg shadow-sm">{item.name}</span>
        <div 
          className={`
            absolute inset-0 
            rounded-full 
            bg-gradient-to-tr from-purple-600/70 via-purple-300/20 to-transparent
            transition-opacity duration-300 
            opacity-80 hover:opacity-50
          `} 
        />
        
        <div 
          className={`
            absolute -inset-1
            rounded-full 
            bg-purple-400/20
            blur-md 
            transition-opacity duration-300
            hover:opacity-30'}
          `}
        />
      </button>
    })}
      </div>
    </div>
    
    <div className="w-full container mt-10 mx-auto px-10 ">
    <div className="w-[8vw] flex flex-col gap-3">
    <h1 className="text-white  text-4xl font-bold  ">Backend</h1>
    <div className="w-full bg-purple-700 h-1 "></div>
    </div>
    <div className="mt-5 flex gap-10">
    {backendTechnologies.map((item,index)=>{
        return  <button key={index}
        className={`
          relative
          px-8 py-3
          text-white font-medium
          rounded-full
          transition-all duration-300
          bg-purple-500/30 border border-purple-500/70 backdrop-blur-sm
          hover:cursor-pointer
          hover:scale-105
          flex justify-between items-center gap-3   
        `}
      >
        <div className="absolute top-0 left-1/4 w-1/2 h-1/3 bg-white/30 rounded-full blur-sm transform -rotate-12" />
        <span className="relative z-10 text-white font-medium text-lg shadow-sm">{item.icon}</span>
        <span className="relative z-10 text-white font-medium text-lg shadow-sm">{item.name}</span>
        <div 
          className={`
            absolute inset-0 
            rounded-full 
            bg-gradient-to-tr from-purple-600/70 via-purple-300/20 to-transparent
            transition-opacity duration-300 
            opacity-80 hover:opacity-50
          `} 
        />
        
        <div 
          className={`
            absolute -inset-1
            rounded-full 
            bg-purple-400/20
            blur-md 
            transition-opacity duration-300
            hover:opacity-30'}
          `}
        />
      </button>
    })}
      </div>
    </div>
    <div className="w-full container mx-auto mt-10 px-10 ">
    <div className="w-[10vw] flex flex-col gap-3">
    <h1 className="text-white  text-4xl font-bold  ">Databases</h1>
    <div className="w-full bg-purple-700 h-1 "></div>
    </div>
    <div className="mt-5 flex gap-10">
    {databases.map((item,index)=>{
        return  <button key={index}
        className={`
          relative
          px-8 py-3
          text-white font-medium
          rounded-full
          transition-all duration-300
          bg-purple-500/30 border border-purple-500/70 backdrop-blur-sm
          hover:cursor-pointer
          hover:scale-105
          flex justify-between items-center gap-3   
        `}
      >
        <div className="absolute top-0 left-1/4 w-1/2 h-1/3 bg-white/30 rounded-full blur-sm transform -rotate-12" />
        <span className="relative z-10 text-white font-medium text-lg shadow-sm">{item.icon}</span>
        <span className="relative z-10 text-white font-medium text-lg shadow-sm">{item.name}</span>
        <div 
          className={`
            absolute inset-0 
            rounded-full 
            bg-gradient-to-tr from-purple-600/70 via-purple-300/20 to-transparent
            transition-opacity duration-300 
            opacity-80 hover:opacity-50
          `} 
        />
        
        <div 
          className={`
            absolute -inset-1
            rounded-full 
            bg-purple-400/20
            blur-md 
            transition-opacity duration-300
            hover:opacity-30'}
          `}
        />
      </button>
    })}
      </div>
    </div>
  
</div>
}