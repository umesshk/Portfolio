"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { title } from "process";
import { useState } from "react"
import { FaGithub, FaLink } from "react-icons/fa";
import { slideUp } from "./Hero";

const ProjectList = [
    {
        title: "Anisaas",
        link: "https://anisaas.vercel.app/", 
        gitlink: "https://github.com/UmeshKumar0143/anisaas", 
        desc: "A sleek and modern landing page designed for SAAS projects, ensuring a professional online presence.", 
        img: "/anisaas.png"
    },
    {
        title: "Foodies",
        link: "https://food-center-ecru.vercel.app/", 
        gitlink: "https://github.com/UmeshKumar0143/food-center", 
        desc: "An engaging and animated food ordering website, enhanced with Framer Motion for smooth and dynamic interactions.", 
        img:"/food-center.png"
    },

    {
        title: "Sapphire Labels", 
        link: "https://icarus-ships.vercel.app/", 
        gitlink: "https://github.com/sonofgreatwall/Icarus-shipping-website",
        desc: "A fully functional full-stack web application developed for a freelance client, featuring seamless user experience and robust backend integration.",
        img: "/saphire.png"
    },
];




export default function Projects(){
  
    const [selected, setSelected] = useState("all"); 
    return <div className="w-full  mt-10  py-10 ">
    <div className="w-full container px-10  mx-auto flex  gap-10 relative  items-center">
        <motion.h1 variants={slideUp(0.2)} initial="initial" whileInView="animate"   className="text-white text-[4vw]">Projects</motion.h1>
        <div className="w-full bg-purple-400 h-1 rounded-full "></div>
        <button onClick={()=>setSelected("all")} className={`hover:text-white transition-all ease-in-out  ${selected == "all"? "bg-purple-500 text-white": "bg-[#04070f]"} font-medium border-1 border-purple-400 py-2 bg-[#060a14] hover:bg-purple-500 text-purple-200 hover:cursor-pointer absolute right-[35vw] px-5 lg:block hidden rounded-3xl `}>All</button>
        <button onClick={()=>setSelected("front-end")} className={`hover:text-white font-medium border-1 border-purple-400 py-2 ${selected == "front-end"? "bg-purple-500 text-white": "bg-[#04070f]"} hover:bg-purple-500  transition-all ease-in-out text-purple-200  hover:cursor-pointer absolute right-[25vw] px-5 lg:block hidden rounded-3xl `}>Front End</button>
        <button onClick={()=>setSelected('full-stack')} className={`hover:text-white transition-all ease-in-out  ${selected == "full-stack"? "bg-purple-500 text-white": "bg-[#04070f]"} font-medium border-1 border-purple-400 py-2 bg-[#060a14] hover:bg-purple-500 text-purple-200 hover:cursor-pointer absolute lg:block hidden right-[15vw] px-5 rounded-3xl `}>Full Stack</button>

    </div>
        <div className="flex justify-around w-full container mx-auto mt-8 md:flex-row flex-col  ">
        {ProjectList.map((item,index)=> <Project key={index} title= {item.title}  link={item.link} img={item.img} git={item.gitlink} index={index} desc={item.desc} selected={selected}/>)}
        </div>
</div>
}

function Project({title, link, img,desc, selected, index,git}:{title:string, link:string,img:string,desc:string, selected:string,index:number,git:string}){
    return  <>
   {selected === "all" && (
  <motion.div
    key={index}
    className="w-[22vw] group hover:cursor-pointer h-[25vw] relative "
    variants={slideUp(0.1)} initial="initial" whileInView="animate" 
  >
    <div
      className="w-full flex flex-col justify-evenly relative mt-3 h-full rounded-lg bg-cover bg-center py-3  px-3"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center gap-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
        <div className="flex justify-center gap-7 text-white font-bold text-4xl">
          <Link  className="hover:text-blue-400" href={link} target="_blank">
            <FaLink />
          </Link>
          <Link target="_blank" href={git}>
            <FaGithub className="hover:text-black" />
          </Link>
        </div>
        <p className="text-white font-extrabold">{desc}</p>
      </div>
    </div>

    <h1 className="text-center mt-3 hidden group-hover:block transition-all duration-300 text-purple-400 uppercase font-extrabold text-3xl underline z-[1000] underline-offset-7">
      {title}
    </h1>
  </motion.div>
)}

{selected === "front-end" && (
  <motion.div 
  variants={slideUp(0.2)} initial="initial" whileInView="animate" 
    key={index}
    className={`w-[22vw] group hover:cursor-pointer h-[25vw] ${index!=2? "block": "hidden"} relative `}
  >
    <div
      className="w-full flex flex-col justify-evenly relative mt-3 h-full rounded-lg bg-cover bg-center py-3  px-3"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center gap-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
        <div className="flex justify-center gap-7 text-white font-bold text-4xl">
          <Link className="hover:text-blue-400" href={link} target="_blank">
            <FaLink />
          </Link>
          <Link href={git}>
            <FaGithub className="hover:text-black" />
          </Link>
        </div>
        <p className="text-white font-extrabold">{desc}</p>
      </div>
    </div>

    <h1 className="text-center mt-3 hidden group-hover:block transition-all duration-300 text-purple-400 uppercase font-extrabold text-3xl underline z-[1000] underline-offset-7">
      {title}
    </h1>
  </motion.div>
)}
      {selected === "full-stack" && (
  <motion.div
    variants={slideUp(0.2)} initial="initial" whileInView="animate" 
    key={index}
    className={`w-[22vw] group hover:cursor-pointer h-[25vw] ${index==2? "block": "hidden"} relative `}
  >
    <div
      className="w-full flex flex-col justify-evenly relative mt-3 h-full rounded-lg bg-cover bg-center py-3  px-3"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center gap-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
        <div className="flex justify-center gap-7 text-white font-bold text-4xl">
          <Link className="hover:text-blue-400" href={link} target="_blank">
            <FaLink />
          </Link>
          <Link href={git}>
            <FaGithub className="hover:text-black" />
          </Link>
        </div>
        <p className="text-white font-extrabold">{desc}</p>
      </div>
    </div>

    <h1 className="text-center mt-3 hidden group-hover:block transition-all duration-300 text-purple-400 uppercase font-extrabold text-3xl underline z-[1000] underline-offset-7">
      {title}
    </h1>
  </motion.div>
)}
  </>
}