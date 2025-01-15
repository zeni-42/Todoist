import toast from "react-hot-toast"
import { useDispatch } from "react-redux"
import { addTodo } from "../redux-state/todoSlice"
import { useForm } from "react-hook-form"

export default function AddTodo() {

    const { register, handleSubmit, reset } = useForm()
    const dispatch = useDispatch()

    const handleAddState = (data) => {
        if (data.title.trim()) {
            dispatch(addTodo({ title: data.title, priority: data.priority }))
            toast.success("Task added")
            reset()
        } else {
            toast.error("Task cannot be empty")
        }
    }

    return(
        <>
        <form onSubmit={handleSubmit(handleAddState)} className="w-full h-[20vh] flex justify-center items-center" >
            <input {...register("title")} className="w-1/3 h-14 border-y border-l border-zinc-400 outline-none rounded-l-lg text-lg px-5" placeholder="Enter your task" /> 
            <select {...register("priority")} name="" id="">
                <option value="High">High</option>
                <option value="Mid" selected >Mid</option>
                <option value="Low">Low</option>                
            </select>
            <button type="submit" className="w-28 h-14 rounded-r-lg bg-blue-600 text-white text-lg" >Add</button>
        </form>
        </>
    )
}