import Image from "next/image";
import Navbar from "./components/Navabar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";

export default function Home() {
  return (
   <div className=" w-full h-screen ">
    <Navbar/>
    <Hero/>
    <About/>
    <Skills/>
   </div>
  );
}
