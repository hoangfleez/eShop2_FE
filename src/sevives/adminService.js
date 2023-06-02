import { createAsyncThunk } from "@reduxjs/toolkit";

import customAPI from "./customAPI.js";

export const showUser = createAsyncThunk("admin/showUser", async () => {
    const res = await customAPI.get(`admin/show`);
    return res.data;
});