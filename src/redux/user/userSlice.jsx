import {createSlice} from "@reduxjs/toolkit";
import { login, logout, register } from "../../sevives/useService";


const initialState = {
  currentUser: JSON.parse(localStorage.getItem('user'))
}



const userSlice = createSlice({
  name:'user',
  initialState,
  extraReducers : builder =>{
    builder.addCase(register.fulfilled, (state, action)=>{
      state.currentUser = action.payload;
    })

    builder.addCase(login.fulfilled, (state, action)=>{
      state.currentUser = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload))
    })

    builder.addCase(logout.fulfilled, (state, action)=>{
      state.currentUser = action.payload;
    })
  }
})

export default userSlice.reducer;