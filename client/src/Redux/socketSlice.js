import { createSlice } from "@reduxjs/toolkit";
import { io } from "socket.io-client";

const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:3000" : "/";

let socket = null;

const initialState = {
  socket: null,
  onlineUsers: [],
};

const socketSlice = createSlice({
  name: "socket",
  initialState,
  reducers: {
    setSocket: (state, action) => {
      state.socket = action.payload;
    },
    setOnlineUsers: (state, action) => {
      state.onlineUsers = action.payload;
    },
    disconnectSocket: (state) => {
      if (state.socket?.connected) state.socket.disconnect();
      state.socket = null;
      state.onlineUsers = [];
    },
  },
});

export const { setSocket, setOnlineUsers, disconnectSocket } = socketSlice.actions;

// Thunk to connect socket
export const connectSocket = () => (dispatch, getState) => {
  const { auth } = getState();
  if (!auth.isLoggedIn || socket?.connected) return;

  socket = io(BASE_URL, { withCredentials: true });
  socket.connect();

  dispatch(setSocket(socket));

  socket.on("getOnlineUsers", (userIds) => {
    dispatch(setOnlineUsers(userIds));
  });
};

export default socketSlice.reducer;
