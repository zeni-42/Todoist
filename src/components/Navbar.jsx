import { Atom, List, Menu, Search } from "lucide-react";

export default function Navbar(){
    

    return(
        <nav className="border-b border-zinc-200 w-full h-10 flex justify-between items-center" >
            <div className="w-1/6 h-full flex justify-evenly items-center" >
                <button className="w-1/5 h-full flex justify-center items-center" >
                    <Menu size={24} />
                </button>
                <div className="w-3/5 h-full flex justify-center items-center text-xl" >
                    <Atom />
                    <h1>Todoist</h1>
                </div>
            </div>
            <div className="w-1/6 h-full flex justify-evenly items-center" >
                <button><Search /></button>
                <button><List /></button>
            </div>
        </nav>
    )
}