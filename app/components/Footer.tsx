import Link from "next/link"

const ProifileLnks = [
    {
        title: "GitHub" , 
        link: "https://github.com/UmeshKumar0143"
    }, 
    {
        title: "X" , 
        link: "https://x.com/UmeshKumar00143"
    }, 
    {
        title: "Linkedin" , 
        link: "https://www.linkedin.com/in/umesh-kumar01/"
    }, 
    {
        title: "Instagram" , 
        link: "https://www.instagram.com/u.m.esh__/"
    }, 
]

export default function Footer(){
    return <div className="w-full  py-10">
            <div className="w-full container relative mx-auto">
                <div className="w-full bg-purple-400 h-1 "></div>
            {ProifileLnks.map((item,index)=>{
                return  <Link key={item.link} target="_blank" style={{ left: `${25 + index * 10}vw` }}  className={ ` vohover:text-white border-1 font-bold border-purple-400 py-2  bg-[#04070f] hover:bg-purple-500  transition-all ease-in-out text-purple-200  hover:cursor-pointer  px-5 rounded-3xl absolute -top-5 ] `} href={item.link}>{item.title}</Link>
            })}
            </div>
    </div>
}