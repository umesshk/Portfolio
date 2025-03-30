import Image from "next/image";
import Navbar from "./components/Navabar";

export default function Home() {
  return (
   <div className=" w-full h-screen bg-gradient-to-r from-black to-gray-900 ">
    <Navbar/>
   </div>
  );
}
