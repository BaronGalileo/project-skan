import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    username: null,
    token:  null,
    expire: null,
    isAuth: false,

}


const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuth(state, action) {
            state.username = action.payload.login;
            state.token = action.payload.accessToken;
            state.expire = action.payload.expire;
            state.isAuth = true;
        },
        removeAuth(state) {
            state.username = null;
            state.token = null;
            state.expire = null;
            state.isAuth = false;
        }
    },

});

export const {setAuth, removeAuth} = authSlice.actions;

export default authSlice.reducer;
