

const NavItems = ["Home", "About", "Skills", "Projects", "Contact"]

export default function Navbar(){
    return <div className="container py-10 w-full mx-auto gap-10 items-center   flex justify-between ">
            <div className="bg-purple-500 h-1 w-full rounded-xl"></div>
            <div className="flex gap-16 ">{NavItems.map((item: string,index: number)=>{
                return <span key={index} className="text-white text-xl hover:text-purple-400 hover:cursor-pointer tracking-tight uppercase ">{item}</span>
            })}</div>
            <div className="bg-purple-500 h-1 rounded-xl w-full"></div>
    </div>
}