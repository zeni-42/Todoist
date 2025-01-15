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
        if (userName !== "admin" || password !== "admin") {
            toast.error("Unauthorized Access")
            navigate("/")
        }
    },[userName, password])

    return (
    <>
        <Navbar />
        <AddTodo />
        <TodoList />
    </>
)}

export default App