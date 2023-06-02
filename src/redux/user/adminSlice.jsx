import {createSlice} from "@reduxjs/toolkit";
import {showUser} from "../../sevives/adminService.js";
const initialState = {
    listUser: []
}

const adminSlice = createSlice({
    name:'admin',
    initialState,
    extraReducers : builder => {
        builder.addCase(showUser.fulfilled, (state, action)=>{
            state.listUser = action.payload;
        });
    }

})

export default adminSlice.reducer;



