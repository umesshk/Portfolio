"use client"

import { useState, useEffect } from "react";
import Link from "next/link";

const ProfileLinks = [
  {
    title: "GitHub",
    link: "https://github.com/umesshk"
  },
  {
    title: "X",
    link: "https://x.com/ume_sshk"
  },
  {
    title: "Linkedin",
    link: "https://www.linkedin.com/in/ume_sshk/"
  },
  {
    title: "Instagram",
    link: "https://www.instagram.com/u.m.esh__/"
  },
];

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    const handleScroll = () => {
      if (isMobile) {
        const scrollPosition = window.scrollY + window.innerHeight;
        const threshold = document.body.scrollHeight - 100;
        setIsVisible(scrollPosition > threshold);
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobile]);
  
  return (
    <div className="w-full py-10">
      <div className="hidden md:block w-full container relative mx-auto px-4">
        <div className="w-full bg-purple-400 h-1"></div>
        {ProfileLinks.map((item, index) => (
          <Link 
            key={item.link} 
            target="_blank" 
            style={{ left: `${32 + index * 10}%` }}  
            className="hover:text-white font-bold border border-purple-400 py-2 bg-[#04070f] hover:bg-purple-500 transition-all ease-in-out text-purple-200 hover:cursor-pointer px-5 rounded-3xl absolute -top-5" 
            href={item.link}
          >
            {item.title}
          </Link>
        ))}
      </div>
      
      <div className={`md:hidden fixed bottom-0 left-0 right-0 bg-[#04070f] border-t border-purple-400 transition-transform duration-300 z-50 ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="w-full bg-purple-400 h-1"></div>
        <div className="w-full py-3 px-4 flex justify-center items-center">
          <div className="flex flex-wrap justify-center gap-3">
            {ProfileLinks.map((item) => (
              <Link 
                key={item.link} 
                target="_blank" 
                className="hover:text-white font-bold border border-purple-400 py-2 bg-[#04070f] hover:bg-purple-500 transition-all ease-in-out text-purple-200 hover:cursor-pointer px-4 rounded-3xl" 
                href={item.link}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}