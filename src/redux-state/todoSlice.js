import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
}

const todoSlices = createSlice({
    name: "todos",
    initialState,
    reducers:{
        addTodo: (state, actions) => {
            const { title, priority } = actions.payload
            const todo = {
                id: nanoid(),
                title: title,
                completed: false,
                priority: priority,
            }
            state.todos.push(todo)
        },
        removeTodo: (state, actions) => {
            state.todos = state.todos.filter((t) => t.id !== actions.payload)
        },
        toggleComplete: (state, actions) => {
            const todo = state.todos.find((todo) => todo.id === actions.payload )
            if (todo) {
                todo.completed = !todo.completed
            }
        }
    }
})

export const { addTodo, removeTodo, toggleComplete } = todoSlices.actions
export default todoSlices.reducer