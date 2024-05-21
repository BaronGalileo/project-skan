import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    token:  null,
    expire: null,
    isAuth: false,

}


const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuth(state, action) {
            state.token = action.payload.accessToken;
            state.expire = action.payload.expire;
            state.isAuth = true;
        },
        removeAuth(state) {
            state.token = null;
            state.expire = null;
            state.isAuth = false;
        }
    },

});

export const {setAuth, removeAuth} = authSlice.actions;

export default authSlice.reducer;
