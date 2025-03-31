"use client"
import { motion } from "framer-motion";
import { BiPhone } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { slideUp } from "./Hero";

export default function Contact() {
  
  return (
    <div className="w-full py-10 mt-10">
      <div className="text-white w-full p-6 md:p-8 lg:p-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-12">
          <div>
            <motion.h1 variants={slideUp(0.2)} initial="initial" whileInView="animate" className="text-4xl sm:text-5xl md:text-[6vw] font-bold text-center md:text-left">
              Get in
              <span className="block">touch<span className="text-purple-500">.</span></span>
            </motion.h1>
          </div>

          <div className="space-y-6 w-full md:w-auto">
            <motion.h2 variants={slideUp(0.2)} initial="initial" whileInView="animate"  className="text-2xl md:text-3xl font-semibold mb-6 text-center md:text-left">Contact</motion.h2>
            
            <motion.div variants={slideUp(0.2)} initial="initial" whileInView="animate"  className="flex items-center space-x-3 text-gray-300 hover:text-purple-500 transition-colors">
              <MdEmail className="w-5 h-5 flex-shrink-0" />
              <a href="mailto:umeshkumar153654@gmail.com" className="hover:underline break-all">
                umeshkumar153654@gmail.com
              </a>
            </motion.div>

            <motion.div variants={slideUp(0.2)} initial="initial" whileInView="animate"  className="flex items-center space-x-3 text-gray-300 hover:text-purple-500 transition-colors">
              <BiPhone className="w-5 h-5 flex-shrink-0" />
              <a href="tel:+918533948177" className="hover:underline">
                +91 8533948177
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}