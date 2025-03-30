import Image from "next/image";
import Navbar from "./components/Navabar";
import Hero from "./components/Hero";

export default function Home() {
  return (
   <div className=" w-full h-screen ">
    <Navbar/>
    <Hero/>
   </div>
  );
}
