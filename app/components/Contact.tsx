import { BiPhone } from "react-icons/bi";
import { BsMailbox } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export default function Contact(){
    return <div className="w-full py-10 mt-10  ">
             <div className="text-white w-full  p-8 md:p-16">
      <div className="max-w-7xl   mx-auto flex justify-around items-center gap-12">
        <div className="md:col-span-1">
          <h1 className="text-5xl md:text-[6vw] font-bold">
            Get in
            <span className="block">touch<span className="text-purple-500">.</span></span>
          </h1>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-semibold mb-6">Contact</h2>
          
          <div className="flex items-center space-x-3 text-gray-300 hover:text-purple-500 transition-colors">
            <MdEmail className="w-5 h-5" />
            <a href="mailto:umeshkumar153654@gmail.com" className="hover:underline">
              umeshkumar153654@gmail.com
            </a>
          </div>

          <div className="flex items-center space-x-3 text-gray-300 hover:text-purple-500 transition-colors">
            <BiPhone className="w-5 h-5" />
            <a href="tel: +91 8533948177" className="hover:underline">
             +91 8533948177
            </a>
          </div>
        </div>
        </div>
        </div>
    </div>
}