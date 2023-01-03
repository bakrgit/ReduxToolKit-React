import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export  const getAllposts=createAsyncThunk('posts/getAll' ,async (url ,thunkAPI)=>{
    const {rejectWithValue}=thunkAPI;
    try{
    const res= await axios.get(url);
        return res.data;
    }catch (err){
        return rejectWithValue(err.message);
    }

})

