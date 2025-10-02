import { configureStore } from "@reduxjs/toolkit";
import blogSliceReducer from "../Redux/blogSlice";
import authSliceReducer from "../Redux/authSlice";
import adminSliceReducer from "../Redux/adminSlice"
import chartSliceReducer from "../Redux/chartSlice";
import statSliceReducer from "../Redux/statSlice";
import excelSliceReducer from "../Redux/excelSlice";
import socketReducer from "../Redux/socketSlice"
import aiReducer from "../Redux/aiSlice"
import commentSliceReducer from "../Redux/commentSlice";
import likeSliceReducer from "../Redux/likeSlice";

const store = configureStore({
  reducer: {
    auth: authSliceReducer,
    admin: adminSliceReducer,
    blog: blogSliceReducer,
    excel: excelSliceReducer,
    chart: chartSliceReducer,
    likes: likeSliceReducer,
    socket: socketReducer,
    comments: commentSliceReducer,
    stat: statSliceReducer,
    ai: aiReducer, 
  },
});

export default store;