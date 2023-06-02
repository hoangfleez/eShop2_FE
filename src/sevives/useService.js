import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk("user/login", async (user) => {
  const res = await axios.post("http://localhost:3001/auth/login", user);
  return res.data;
});
export const register = createAsyncThunk("user/register", async (user) => {
  const res = await axios.post("http://localhost:3001/auth/register", user);
  return res.data;
});
export const loginGoogle = createAsyncThunk("user/logingoogle", async (user) => {
  console.log(user)
  const res = await axios.post("http://localhost:3001/auth/auto/login", user);
  return res.data;
});
export const logout = createAsyncThunk("user/logout", async () => {
  localStorage.clear();
  return undefined;
});
