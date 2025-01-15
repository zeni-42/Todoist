import { useDispatch, useSelector } from "react-redux"
import { removeTodo, toggleComplete } from "../redux-state/todoSlice"
import toast from "react-hot-toast"

export default function TodoList(){
    const todos = useSelector((state) => state.todos.todos)    
    const dispatch = useDispatch()

    const handleToogle = (id) => {
        dispatch(toggleComplete(id))
        toast.success("Task status updated")
    }

    const handleRemove = (id) => {
        dispatch(removeTodo(id))
        toast.success("Task removed")
    }

    const completedTasks = todos.filter((todo) => todo.completed);
    const pendingTasks = todos.filter((todo) => !todo.completed);

    return(
        <div className="w-full flex flex-col items-center space-y-4 mt-4">
            <h1 className="text-xl font-medium" >Pending tasks</h1>
        {pendingTasks.length > 0 ? (
            pendingTasks.map((todo) => (
                <div
                    key={todo.id}
                    className="w-2/3 p-4 bg-white shadow-lg border border-zinc-300 rounded-lg flex justify-between items-center">
                    <div className={`text-lg ${todo.completed ? "line-through text-gray-500" : ""}`}>
                        {todo.title}
                    </div>
                    <div className="w-1/2 h-full flex justify-end items-center gap-10 " >
                        <div>{todo.priority}</div>
                        <button onClick={() => handleToogle(todo.id)} className="px-4 py-2 bg-blue-600 text-white rounded-lg" > Completed </button>
                        <button onClick={() => handleRemove(todo.id)} className="bg-red-600 text-white px-4 py-2 rounded-lg" >Remove </button>
                    </div>
                </div>
            ))
        ) : (
            <div className="text-xs text-gray-500">No tasks available!</div>
        )}
            <h1 className="text-xl font-medium" >Completed task</h1>
            {completedTasks.length > 0 ? (
            completedTasks.map((todo) => (
                <div
                    key={todo.id}
                    className="w-2/3 p-4 bg-white shadow-lg border border-zinc-300 rounded-lg flex justify-between items-center" >
                    <div className={`text-lg ${todo.completed ? "line-through text-gray-500" : ""}`}>
                        {todo.title}
                    </div>
                    <div className="w-1/2 h-full flex justify-end items-center gap-10" >
                        <div>{todo.priority}</div>
                        <button onClick={() => handleToogle(todo.id)} className="px-4 py-2 bg-blue-600 text-white rounded-lg" > Undo </button>
                        <button onClick={() => handleRemove(todo.id)} className="bg-red-600 text-white px-4 py-2 rounded-lg" > Remove </button>
                    </div>
                </div>
            ))
        ) : (
            <div className="text-xs text-gray-500">No tasks available!</div>
        )}
    </div>
    )
}