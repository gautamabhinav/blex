// // aiSlice.js
// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axiosInstance from "../Helper/axiosInstance";

// export const fetchAiInsights = createAsyncThunk("ai/fetchInsights", async (parsedData) => {
//   const res = await axiosInstance.post("/ai/summary", { data: parsedData });
//   return res.data.summary;
// });

// const aiSlice = createSlice({
//   name: "ai",
//   initialState: { insights: "", loading: false, error: null },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchAiInsights.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchAiInsights.fulfilled, (state, action) => {
//         state.loading = false;
//         state.insights = action.payload;
//       })
//       .addCase(fetchAiInsights.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       });
//   },
// });

// export default aiSlice.reducer;



import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Helper/axiosInstance";

const initialState = {
  insights: "",
  loading: false,
  error: null,
};

// Thunk: fetch AI insights
export const fetchAiInsights = createAsyncThunk(
  "ai/fetchAiInsights",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post("/ai/summary", { data });
      return res.data.summary;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || "Failed to fetch AI insights");
    }
  }
);

const aiSlice = createSlice({
  name: "ai",
  initialState,
  reducers: {
    clearInsights: (state) => {
      state.insights = "";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAiInsights.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAiInsights.fulfilled, (state, action) => {
        state.loading = false;
        state.insights = action.payload;
      })
      .addCase(fetchAiInsights.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearInsights } = aiSlice.actions;
export default aiSlice.reducer;
