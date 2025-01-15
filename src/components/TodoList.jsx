import toast from "react-hot-toast"
import { Check, RefreshCcw, Trash2, Undo2 } from "lucide-react"
import { useEffect, useState } from "react";

export default function TodoList(){
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
        setTodos(storedTodos);
    }, []);

    const updateLocalStorage = (updatedTodos) => {
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
        setTodos(updatedTodos);
    };

    const handleToggle = (id) => {
        const updatedTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        updateLocalStorage(updatedTodos);
        toast.success("Task status updated");
    };

    const handleRemove = (id) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        updateLocalStorage(updatedTodos);
        toast.success("Task removed");
    };

    const handleRefresh = () => {
        const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
        setTodos(storedTodos);
    }

    const getPriorityEmoji = (priority) => {
        switch (priority) {
            case "High":
                return "🏃🏻"; // High Priority
            case "Mid":
                return "🚶🏻"; // Medium Priority
            case "Low":
                return "🛌🏻"; // Low Priority
            default:
                return "";
        }
    };

    return(
        <div className="w-full lg:w-1/2 flex flex-col items-center space-y-4 my-4 px-10">
            <div className="w-full flex justify-between items-center" >
                <h1 className="text-center text-xl font-medium" >Pending tasks</h1>
                <button onClick={handleRefresh} ><RefreshCcw /></button>
            </div>
        {todos.length > 0 ? (
            todos.map((todo) => (
                <div
                    key={todo.id}
                    className={`w-full p-4 bg-white shadow-lg rounded-lg ${todo.completed ? "border-2 border-green-600 bg-green-100" : "border border-zinc-300" } flex justify-between items-center`}>
                    <div className={`overflow-x-scroll text-lg flex justify-start items-center ${todo.completed ? "line-through text-gray-500" : ""}`}>
                        {todo.title}
                    </div>
                    <div className="w-52 h-full flex justify-evenly items-center gap-5" >
                        <div>
                            {getPriorityEmoji(todo.priority)}
                        </div>
                        {
                            todo.completed ? <button onClick={() => handleToggle(todo.id)} className="px-4 py-2 bg-orange-600 text-white rounded-lg" ><Undo2 /></button>
                            : 
                            <button onClick={() => handleToggle(todo.id)} className="px-4 py-2 bg-blue-600 text-white rounded-lg" ><Check /></button>
                        }
                        <button onClick={() => handleRemove(todo.id)} className="bg-red-600 text-white px-4 py-2 rounded-lg" ><Trash2 /> </button>
                    </div>
                </div>
            ))
        ) : (
            <div className="text-sm text-gray-500">No tasks available!</div>
        )}
    </div>
    )
}