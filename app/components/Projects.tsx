"use client"

import Link from "next/link";
import { title } from "process";
import { useState } from "react"
import { FaGithub, FaLink } from "react-icons/fa";

const Project = [
    {
        title: "Anisaas",
        link: "https://anisaas.vercel.app/", 
        desc: "A sleek and modern landing page designed for SAAS projects, ensuring a professional online presence."
    },
    {
        title: "Foodies",
        link: "https://food-center-ecru.vercel.app/", 
        desc: "An engaging and animated food ordering website, enhanced with Framer Motion for smooth and dynamic interactions."
    },

    {
        title: "Sapphire Labels", 
        link: "https://icarus-ships.vercel.app/", 
        desc: "A fully functional full-stack web application developed for a freelance client, featuring seamless user experience and robust backend integration."
    },
];




export default function Projects(){
    const [selected, setSelected] = useState("all"); 
    console.log(selected)
    return <div className="w-full  mt-10  py-10 ">
    <div className="w-full container px-10  mx-auto flex  gap-10 relative  items-center">
        <h1 className="text-white text-[4vw]">Projects</h1>
        <div className="w-full bg-purple-400 h-1 rounded-full "></div>
        <button onClick={()=>setSelected('all')} className={`hover:text-white transition-all ease-in-out  ${selected == "all"? "bg-purple-500 text-white": "bg-[#04070f]"} font-medium border-1 border-purple-400 py-2 bg-[#060a14] hover:bg-purple-500 text-purple-200 hover:cursor-pointer absolute right-[35vw] px-5 rounded-3xl `}>All</button>
        <button onClick={()=>setSelected("front-end")} className={`hover:text-white font-medium border-1 border-purple-400 py-2 ${selected == "front-end"? "bg-purple-500 text-white": "bg-[#04070f]"} hover:bg-purple-500  transition-all ease-in-out text-purple-200  hover:cursor-pointer absolute right-[25vw] px-5 rounded-3xl `}>Front End</button>
        <button onClick={()=>setSelected('full-stack')} className={`hover:text-white transition-all ease-in-out  ${selected == "full-stack"? "bg-purple-500 text-white": "bg-[#04070f]"} font-medium border-1 border-purple-400 py-2 bg-[#060a14] hover:bg-purple-500 text-purple-200 hover:cursor-pointer absolute right-[15vw] px-5 rounded-3xl `}>Full Stack</button>
    </div>
    <div className="w-full flex justify-between container mx-auto px-10 mt-5 gap-8">
      {selected=="all" && Project.map((item,index)=>{
        return   <div  key={index} className="w-[22vw] h-[20vw] p-2 border border-white rounded-xl">
        <div className="w-full flex flex-col justify-between h-full bg-red-300 py-5 px-2">
            <h1 className="text-center text-white font-bold text-xl uppercase underline  underline-offset-7">{item.title}</h1>
            <div className="flex justify-center gap-7 text-4xl"><Link href={"#3"}><FaLink /></Link><Link href={"#2"}><FaGithub /></Link></div>
            <p>{item.desc}</p>
        </div>
    </div>
      })}
      {selected=="front-end" && Project.map((item,index)=>{
        return   <div key={index}  className={`${index!=2 ? "block" : "hidden"}  w-[22vw] h-[20vw] p-2 border border-white rounded-xl`}>
        <div className="w-full flex flex-col justify-between h-full bg-red-300 py-5 px-2">
            <h1 className="text-center text-white font-bold text-xl uppercase underline  underline-offset-7">{item.title}</h1>
            <div className="flex justify-center gap-7 text-4xl"><Link href={"#3"}><FaLink /></Link><Link href={"#2"}><FaGithub /></Link></div>
            <p>{item.desc}</p>
        </div>
    </div>
      })}
      {selected=="full-stack" && Project.map((item,index)=>{
        return   <div key={index}  className={`w-[22vw] ${index==2 ? "block" : "hidden"} h-[20vw] p-2 border border-white rounded-xl`}>
        <div className="w-full flex flex-col justify-between h-full bg-red-300 py-5 px-2">
            <h1 className="text-center text-white font-bold text-xl uppercase underline  underline-offset-7">{item.title}</h1>
            <div className="flex justify-center gap-7 text-4xl"><Link href={"#3"}><FaLink /></Link><Link href={"#2"}><FaGithub /></Link></div>
            <p>{item.desc}</p>
        </div>
    </div>
      })}
    </div>
</div>
}