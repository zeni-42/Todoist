import Navbar from "./components/Navbar"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
    const navigate = useNavigate();
    const userName = useSelector((state) => state.user.userName)
    const password = useSelector((state) => state.user.password)

    useEffect(() => {
        if (userName !== "Deno" || password !== "Deno") {
            toast.error("Unauthorized Access")
            navigate("/")
        }
    },[userName, password])

    return (
    <>
        <Navbar />
        <div className="w-full mt-14 flex justify-center items-center flex-col" >
            <AddTodo />
            <div className="w-full lg:w-1/2 bg-zinc-300 h-[1px]" ></div>
            <TodoList />
        </div>
    </>
)}

export default App