import { useDispatch, useSelector } from "react-redux"
import { removeTodo } from "../redux-state/todoSlice"
import toast from "react-hot-toast"

export default function TodoList(){
    const todos = useSelector((state) => state.todos.todos)
    console.log(todos);
    
    const dispatch = useDispatch()

    const handleRemove = (id) => {
        dispatch(removeTodo(id))
        toast.success("Task removed")
    }

    return(
        <div className="w-full flex flex-col items-center space-y-4 mt-4">
        {todos.length > 0 ? (
            todos.map((todo) => (
                <div
                    key={todo.id}
                    className="w-1/2 p-4 bg-white shadow-lg rounded-lg flex justify-between items-center">
                    <div className={`text-lg ${todo.completed ? "line-through text-gray-500" : ""}`}>
                        {todo.title}
                    </div>
                    <button onClick={() => handleRemove(todo.id)} className="bg-red-600 text-white px-4 py-2 rounded-lg" >
                        Remove
                    </button>
                </div>
            ))
        ) : (
            <div className="text-xl text-gray-500">No tasks available!</div>
        )}
    </div>
    )
}