import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    items: null,

}


const resultDataFromSearchSlice = createSlice({
    
    name: 'dataFromSearch',
    initialState,
    reducers: {
        
        setResult(state, action) {
            state.items = action.payload.items;

        },
        removeResult(state) {
            state.items = null;
        }
    },

});

export const {setResult, removeResult} = resultDataFromSearchSlice.actions;

export default resultDataFromSearchSlice.reducer;
