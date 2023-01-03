import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";

//3- create slice
const initialState = {
    count: 5,
    name: 'mohamed',
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        addOne: (state) => {
            state.count += 1;
        },
        munisOne: (state) => {
            state.count -= 1;
        },
        setName: (state, action) => {
            state.name = action.payload
        }
    }

})

export const {addOne, munisOne, setName} = counterSlice.actions;
export default counterSlice.reducer;
