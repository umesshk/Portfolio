"use client"
import { motion } from "framer-motion";
import { slideUp } from "./Hero";

export default function About() {
    
    return (
        <div className="w-full py-8 md:py-10">
            <div className="w-full container px-4 sm:px-6 md:px-10 mx-auto flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-10 items-center">
                <motion.h1 variants={slideUp(0.3)} initial="initial" whileInView="animate" className="text-white text-3xl sm:text-4xl md:text-[4vw] w-full sm:w-auto md:w-[25vw] text-center sm:text-left">About Me</motion.h1>
                <motion.div  variants={slideUp(0.4)}  initial="initial" whileInView="animate"  className="w-full bg-purple-400 h-1 rounded-full"></motion.div>
            </div>
            <div className="w-full container mx-auto px-4 sm:px-6 md:px-10 mt-5 md:mt-5">
                <motion.p variants={slideUp(0.3)}  initial="initial" whileInView="animate" className="text-white text-base md:text-lg -tracking-tight">
                    I am a passionate Full-Stack Developer with a love for developing <span className="font-bold">Web applications</span>. Currently, I'm a <span className="font-bold">second-year</span> B.Tech Computer Science student at <span className="font-bold">Graphic Era Hill University</span>.
                     <br /><br />
                    Beyond academics, I work as a <span className="font-bold">Freelance Developer</span>, completing projects for clients. I also actively participate in <span className="font-bold">open-source</span> contributions.
                    <br /><br />
                    I just <span className="font-bold">love to code</span>—whether it's <span className="font-bold">building scalable web applications</span>, <span className="font-bold">optimizing backend performance</span>, or experimenting with new technologies.
                    <br /><br />
                    When I'm not coding, you'll probably find me gaming, watching anime, or reading Books.
                </motion.p>
            </div>
        </div>
    );
}