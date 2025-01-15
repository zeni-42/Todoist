import toast from "react-hot-toast"
import { useDispatch } from "react-redux"
import { addTodo } from "../redux-state/todoSlice"
import { useForm } from "react-hook-form"

export default function AddTodo() {

    const { register, handleSubmit, reset} = useForm()
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
        <form onSubmit={handleSubmit(handleAddState)} className="w-full lg:w-1/2 lg:h-[20vh] lg:flex-row h-[30vh] flex justify-evenly items-center flex-col px-10 py-5" >
            <input {...register("title")} className="w-full lg:w-4/5 h-14 lg:border-y lg:border-l border border-zinc-400 outline-none rounded-lg text-lg px-5" placeholder="Enter your task" /> 
            <select className="w-full lg:w-3/12 h-14 lg:border-y lg:border-zinc-400 lg:rounded-none lg: px-3 rounded-lg border bg-white border-zinc-400" name="" id="" {...register("priority")}>
                <option value="High">High</option>
                <option value="Mid">Mid</option>
                <option value="Low">Low</option>                
            </select>
            <button type="submit" className="w-full lg:w-3/12 lg:rounded-r-lg lg:rounded-l-none h-14 rounded-lg bg-emerald-500 text-white text-lg" >Add</button>
        </form>
        </>
    )
}