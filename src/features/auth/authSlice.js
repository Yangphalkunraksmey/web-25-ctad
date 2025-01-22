import { createSlice } from "@reduxjs/toolkit";
import Login from "../../pages/Login";

const initialState = {
    isAuthenticated: false,
    accessToken: null,
    profile: {}
}
const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(Login.pending, (state, action) => {
                //TODO
                state.isAuthenticated = false

            })
            .addCase(Login.fulfilled, (state, action) => {
                //TODO
                state.isAuthenticated = true
                state.accessToken = action.payload.access_token
                console.log('status ', state.isAuthenticated)
                console.log('access token', state.accessToken)

            })
            .addCase(Login.rejected, (state, action) => {
                //TODO
                state.isAuthenticated = false
                console.log('rejected', action.error)
            })

    }
})
export default authSlice.reducer 