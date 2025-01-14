import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userName: null,
    password: null,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, actions) => {
            state.userName = actions.payload.userName
            state.password = actions.payload.password
        },
        logout: (state) => {
            state.userName = null
            state.password = null
        }
    }
})

export const { login, logout } = userSlice.actions
export default userSlice.reducer