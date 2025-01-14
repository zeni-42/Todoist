import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
}

const todoSlices = createSlice({
    name: "todos",
    initialState,
    reducers:{
        addTodo: (state, actions) => {
            const todo = {
                id: nanoid(),
                title: actions.payload.title,
                completed: false,
                priority: "mid"
            }
            state.todos.push(todo)
        },
        removeTodo: (state, actions) => {
            state.todos = state.todos.filter((t) => t.id !== actions.payload)
        },
        updatePriority: (state, actions) => {
            const { id, priority } = actions.payload
            const todo = state.todos.find((t) => t.id === id)
            if(todo){
                todo.priority = priority
            }
        }
    }
})

export const { addTodo, removeTodo } = todoSlices.actions
export default todoSlices.reducer