"use client"

import Link from "next/link";
import { useState } from "react"
import { FaLink } from "react-icons/fa";

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

export default function ProjectMobile(){
    const [selected, setSelected] = useState("all"); 
    
    return (
        <div className="w-full mt-10 py-10">
            <div className="w-full container px-4 md:px-10 mx-auto flex flex-col md:flex-row md:gap-10 relative items-center">
                <h1 className="text-white text-[8vw] md:text-[4vw] mb-4 md:mb-0">Projects</h1>
                <div className="w-full bg-purple-400 h-1 rounded-full hidden md:block"></div>
                
                {/* Desktop filter buttons */}
                <div className="hidden md:block">
                    <button 
                        onClick={()=>setSelected("all")} 
                        className={`hover:text-white transition-all ease-in-out ${selected == "all"? "bg-purple-500 text-white": "bg-[#04070f]"} font-medium border-1 border-purple-400 py-2 bg-[#060a14] hover:bg-purple-500 text-purple-200 hover:cursor-pointer absolute right-[35vw] px-5 rounded-3xl`}
                    >All</button>
                    <button 
                        onClick={()=>setSelected("front-end")} 
                        className={`hover:text-white font-medium border-1 border-purple-400 py-2 ${selected == "front-end"? "bg-purple-500 text-white": "bg-[#04070f]"} hover:bg-purple-500 transition-all ease-in-out text-purple-200 hover:cursor-pointer absolute right-[25vw] px-5 rounded-3xl`}
                    >Front End</button>
                    <button 
                        onClick={()=>setSelected('full-stack')} 
                        className={`hover:text-white transition-all ease-in-out ${selected == "full-stack"? "bg-purple-500 text-white": "bg-[#04070f]"} font-medium border-1 border-purple-400 py-2 bg-[#060a14] hover:bg-purple-500 text-purple-200 hover:cursor-pointer absolute right-[15vw] px-5 rounded-3xl`}
                    >Full Stack</button>
                </div>
                
                {/* Mobile filter buttons */}
                <div className="flex justify-center gap-2 w-full mt-4 md:hidden">
                    <button 
                        onClick={()=>setSelected("all")} 
                        className={`hover:text-white transition-all ease-in-out ${selected == "all"? "bg-purple-500 text-white": "bg-[#04070f]"} font-medium border-1 border-purple-400 py-2 bg-[#060a14] hover:bg-purple-500 text-purple-200 hover:cursor-pointer px-4 rounded-3xl text-sm`}
                    >All</button>
                    <button 
                        onClick={()=>setSelected("front-end")} 
                        className={`hover:text-white font-medium border-1 border-purple-400 py-2 ${selected == "front-end"? "bg-purple-500 text-white": "bg-[#04070f]"} hover:bg-purple-500 transition-all ease-in-out text-purple-200 hover:cursor-pointer px-4 rounded-3xl text-sm`}
                    >Front End</button>
                    <button 
                        onClick={()=>setSelected('full-stack')} 
                        className={`hover:text-white transition-all ease-in-out ${selected == "full-stack"? "bg-purple-500 text-white": "bg-[#04070f]"} font-medium border-1 border-purple-400 py-2 bg-[#060a14] hover:bg-purple-500 text-purple-200 hover:cursor-pointer px-4 rounded-3xl text-sm`}
                    >Full Stack</button>
                </div>
            </div>
            
            {/* Project grid - responsive layout */}
            <div className="flex flex-col md:flex-row md:justify-around flex-wrap w-full container mx-auto mt-8 px-4 md:px-0 gap-6 md:gap-0">
                {/* On mobile, always show all projects regardless of filter */}
                {ProjectList.map((item, index) => (
                    <div key={index} className={`
                        ${(selected === "all" || 
                          (selected === "front-end" && index !== 2) || 
                          (selected === "full-stack" && index === 2)) ? 
                          "block md:flex" : "hidden md:flex"}
                        ${selected === "front-end" && index === 2 ? "hidden" : ""}
                        ${selected === "full-stack" && index !== 2 ? "hidden" : ""}
                        w-full md:w-[22vw] mb-6 md:mb-0
                    `}>
                        <Project 
                            title={item.title} 
                            link={item.link} 
                            img={item.img} 
                            git={item.gitlink} 
                            index={index} 
                            desc={item.desc} 
                            selected={selected}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

function Project({title, link, img, desc}:{title:string, link:string, img:string, selected:string, desc:string , index:number, git:string}) {
    return (
        <Link 
            href={link} 
            target="_blank" 
            className="w-full h-full block group hover:cursor-pointer relative"
        >
            <div
                className="w-full flex flex-col justify-evenly relative mt-3 h-[50vw] md:h-[25vw] rounded-lg bg-cover bg-center py-3 px-3"
                style={{
                    backgroundImage: `url(${img})`,
                }}
            >
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center gap-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <div className="flex justify-center gap-7 text-white font-bold text-2xl md:text-4xl">
                        <FaLink className="hover:text-blue-400" />
                    </div>
                    <p className="text-white font-extrabold text-center px-4">{desc}</p>
                </div>
            </div>

            <h1 className="text-center mt-3 hidden group-hover:block transition-all duration-300 text-purple-400 uppercase font-extrabold text-xl md:text-3xl underline z-[1000] underline-offset-7">
                {title}
            </h1>
        </Link>
    )
}