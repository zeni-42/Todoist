import { LogOut } from "lucide-react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Navbar(){
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.setItem("isLogin", false)
        localStorage.removeItem("userName")
        localStorage.removeItem("password")
        navigate('/')
        toast.success("See you soon")
    }

    return(
        <nav className="fixed top-0 border-b backdrop-blur-2xl border-zinc-200 w-full h-14 px-5 flex justify-between items-center" >
            <div className="w-1/6 h-full flex justify-evenly items-center" >
                <div className="w-3/5 h-full flex justify-center items-center text-xl" >
                    <h1>Todoist</h1>
                </div>
            </div>
            <div className="w-1/6 h-full flex justify-evenly items-center" >
                <button onClick={handleLogout} ><LogOut /></button>
            </div>
        </nav>
    )
}