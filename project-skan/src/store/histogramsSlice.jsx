import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    data: null,

}


const histogramsSlice = createSlice({
    
    name: 'histograms',
    initialState,
    reducers: {
        
        setHistograms(state, action) {
            state.data = action.payload.data;

        },
        removeHistograms(state) {
            state.data = null;
        }
    },

});

export const {setHistograms, removeHistograms} = histogramsSlice.actions;

export default histogramsSlice.reducer;