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
                priority: actions.payload.priority,
            }
            state.todos.push(todo)
        },
        removeTodo: (state, actions) => {
            state.todos = state.todos.filter((t) => t.id !== actions.payload)
        },
    }
})

export const { addTodo, removeTodo } = todoSlices.actions
export default todoSlices.reducer