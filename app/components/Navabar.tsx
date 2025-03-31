"use client"

import { motion } from "framer-motion";

const NavItems = ["Home", "About", "Skills", "Projects", "Contact"]
export default function Navbar() {
    const scrollToSection = (sectionId:string) => {
      
            const section = document.getElementById(sectionId.toLowerCase());
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
    };

    return (
        <div className="container py-10 w-full mx-auto gap-10 items-center md:flex hidden justify-between">
            <motion.div initial={{width:"0%"}} animate={{width:"100%"}} transition={{duration:1.2 ,ease:"easeIn"}} className="bg-purple-500 h-1 w-full rounded-xl"></motion.div> 
            <div className="flex gap-16">
                {NavItems.map((item, index) => {
                    return (
                        <span 
                            key={index} 
                            onClick={() => scrollToSection(item)} 
                            className="text-white text-xl hover:text-purple-400 hover:cursor-pointer tracking-tight uppercase"
                        >
                            {item}
                        </span>
                    );
                })}
            </div>
            <motion.div initial={{width:"0%"}} animate={{width:"100%"}} transition={{duration:1.2 ,ease:"easeIn"}}  className="bg-purple-500 h-1 rounded-xl w-full"></motion.div>
        </div>
    );
}