import {createSlice} from "@reduxjs/toolkit";
import {getAllUsers, login, logout} from "../../sevives/useService";
import { Message } from "@mui/icons-material";


const initialState = {
    listUser: [],
    currentUser: JSON.parse(localStorage.getItem('user')),
}

const userSlice = createSlice({
  name:'user',
  initialState,
  extraReducers : builder =>{
    builder.addCase(login.fulfilled, (state, action)=>{
      if(action.payload === "User is not exist"){
        state.currentUser = undefined;
      } else if(action.payload === "Password is wrong"){
        state.currentUser = undefined;
      } else if (action.payload === "Please fill all the information!"){
        state.currentUser = undefined;
      }
      else {
        state.currentUser = action.payload;
        localStorage.setItem('user', JSON.stringify(action.payload))
      }
      
    });

    builder.addCase(logout.fulfilled, (state, action)=>{
      state.currentUser = action.payload;
    });

    builder.addCase(getAllUsers.fulfilled, (state, action)=>{
      state.listUser = action.payload;
    });

  }
})

export default userSlice.reducer;