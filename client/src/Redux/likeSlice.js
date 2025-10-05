// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axiosInstance from "../Helper/axiosInstance";
// import toast from 'react-hot-toast';

// // import axios from "axios";

// // const API_URL = "/api/likes"; // adjust base URL if needed

// // 👉 Like a post
// // export const likePost = createAsyncThunk(
// //   "likes/likePost",
// //   async (postId, { rejectWithValue }) => {
// //     try {
// //       const res = await axiosInstance.post(`/likes/${postId}/like`);

// //       toast.promise(promise, {
// //         loading: "Wait! Posting your comment...",
// //         success: (res) => res?.data?.message || "Comment posted!",
// //         error: "Failed to Post",
// //       });
// //       return { postId, ...res.data };
// //     } catch (err) {
// //       return rejectWithValue(err.response?.data?.message || err.message);
// //     }
// //   }
// // );



// export const likePost = createAsyncThunk(
//   "likes/likePost",
//   async (postId, { rejectWithValue }) => {
//     try {
//       // Define the promise for toast
//       const promise = axiosInstance.post(`/likes/${postId}/like`);
//       // console.log(promise);


//       // Attach toast to the promise
//       const res = await toast.promise(promise, {
//         loading: "Liking the post...",
//         success: (res) => res?.data?.message || "Post liked!",
//         error: (err) =>
//           err?.response?.data?.message || "Failed to like the post",
//       });

//       return { postId, ...res.data };
//     } catch (err) {
//       return rejectWithValue(err.response?.data?.message || err.message);
//     }
//   }
// );



// // 👉 Unlike a post
// export const unlikePost = createAsyncThunk(
//   "likes/unlikePost",
//   async (postId, { rejectWithValue }) => {
//     try {
//       await axiosInstance.delete(`/likes/${postId}/like`);
//       return { postId };
//     } catch (err) {
//       return rejectWithValue(err.response?.data?.message || err.message);
//     }
//   }
// );

// // 👉 Get likes count
// export const getLikesCount = createAsyncThunk(
//   "likes/getLikesCount",
//   async (postId, { rejectWithValue }) => {
//     try {
//       const res = await axiosInstance.get(`/likes/${postId}/likes`);
//     //   console.log(res);
//       return { postId, count: res.data.likes };
//     } catch (err) {
//       return rejectWithValue(err.response?.data?.message || err.message);
//     }
//   }
// );

// // 👉 Check if user liked a post
// export const getUserLikeStatus = createAsyncThunk(
//   "likes/getUserLikeStatus",
//   async ({ postId, userId }, { rejectWithValue }) => {
//     try {
//       let res;
//       if (userId) {
//         res = await axiosInstance.get(`/likes/${postId}/likes/${userId}`);
//       } else {
//         // call authenticated endpoint to ask server about current user
//         res = await axiosInstance.get(`/likes/${postId}/status`);
//       }
//       return { postId, userId, liked: res.data.liked };
//     } catch (err) {
//       return rejectWithValue(err.response?.data?.message || err.message);
//     }
//   }
// );

// // Get list of users who liked a post
// export const getLikesUsers = createAsyncThunk(
//   'likes/getLikesUsers',
//   async (postId, { rejectWithValue }) => {
//     try {
//       const res = await axiosInstance.get(`/likes/${postId}/users`);
//       return { postId, users: res.data.users || [], count: res.data.count || 0 };
//     } catch (err) {
//       return rejectWithValue(err.response?.data?.message || err.message);
//     }
//   }
// );

// // --- Slice ---
// const likeSlice = createSlice({
//   name: "likes",
//   initialState: {
//     likesByPost: {},   // { postId: count }
//     usersByPost: {},   // { postId: [user, ...] }
//     userLikes: {},     // { postId: true/false }
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder

//       // like post
//       .addCase(likePost.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(likePost.fulfilled, (state, action) => {
//         state.loading = false;
//         const { postId } = action.payload;
//         state.userLikes[postId] = true;
//         if (state.likesByPost[postId] !== undefined) {
//           state.likesByPost[postId] += 1;
//         } else {
//           state.likesByPost[postId] = 1;
//         }
//       })
//       .addCase(likePost.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })

//       // unlike post
//       .addCase(unlikePost.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(unlikePost.fulfilled, (state, action) => {
//         state.loading = false;
//         const { postId } = action.payload;
//         state.userLikes[postId] = false;
//         if (state.likesByPost[postId] > 0) {
//           state.likesByPost[postId] -= 1;
//         }
//       })
//       .addCase(unlikePost.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })

//       // get like count
//       .addCase(getLikesCount.fulfilled, (state, action) => {
//         const { postId, count } = action.payload;
//         state.likesByPost[postId] = count;
//       })

//       // check user like status
//       .addCase(getUserLikeStatus.fulfilled, (state, action) => {
//         const { postId, liked } = action.payload;
//         state.userLikes[postId] = liked;
//       });

//       // get likes users
//       builder.addCase(getLikesUsers.fulfilled, (state, action) => {
//         const { postId, users, count } = action.payload;
//         state.usersByPost[postId] = users;
//         state.likesByPost[postId] = count;
//       });
//   },
// });

// export default likeSlice.reducer;



import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../Helper/axiosInstance";
import toast from 'react-hot-toast';

// 👉 Like a post
export const likePost = createAsyncThunk(
  "likes/likePost",
  async (postId, { rejectWithValue }) => {
    try {
      const promise = axiosInstance.post(`/likes/${postId}/like`, {
        withCredentials: true
      });
      const res = await toast.promise(promise, {
        loading: "Liking the post...",
        success: (res) => res?.data?.message || "Post liked!",
        error: (err) => err?.response?.data?.message || "Failed to like the post",
      });
      return { postId, ...res.data };
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

// 👉 Unlike a post
export const unlikePost = createAsyncThunk(
  "likes/unlikePost",
  async (postId, { rejectWithValue }) => {
    try {
      await axiosInstance.delete(`/likes/${postId}/like`, {
        withCredentials: true
      });
      return { postId };
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

// 👉 Get likes count
export const getLikesCount = createAsyncThunk(
  "likes/getLikesCount",
  async (postId, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get(`/likes/${postId}/likes`, {
        withCredentials: true
      });
      return { postId, count: res.data.likes };
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

// 👉 Check if user liked a post
export const getUserLikeStatus = createAsyncThunk(
  "likes/getUserLikeStatus",
  async ({ postId }, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get(`/likes/${postId}/status`, {
        withCredentials: true
      });
      return { postId, liked: res.data.liked };
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

// 👉 Get users who liked a post
export const getLikesUsers = createAsyncThunk(
  'likes/getLikesUsers',
  async (postId, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get(`/likes/${postId}/users`,{
        withCredentials: true
      });
      return { postId, users: res.data.users || [], count: res.data.count || 0 };
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

// --- Slice ---
const likeSlice = createSlice({
  name: "likes",
  initialState: {
    likesByPost: {},   // { postId: count }
    usersByPost: {},   // { postId: [user, ...] }
    userLikes: {},     // { postId: true/false }
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Like post
      .addCase(likePost.pending, (state) => { state.loading = true; })
      .addCase(likePost.fulfilled, (state, action) => {
        state.loading = false;
        const { postId } = action.payload;
        state.userLikes[postId] = true;
        state.likesByPost[postId] = (state.likesByPost[postId] || 0) + 1;
      })
      .addCase(likePost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Unlike post
      .addCase(unlikePost.pending, (state) => { state.loading = true; })
      .addCase(unlikePost.fulfilled, (state, action) => {
        state.loading = false;
        const { postId } = action.payload;
        state.userLikes[postId] = false;
        if (state.likesByPost[postId] > 0) state.likesByPost[postId] -= 1;
      })
      .addCase(unlikePost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Get likes count
      .addCase(getLikesCount.fulfilled, (state, action) => {
        const { postId, count } = action.payload;
        state.likesByPost[postId] = count;
      })

      // User like status
      .addCase(getUserLikeStatus.fulfilled, (state, action) => {
        const { postId, liked } = action.payload;
        state.userLikes[postId] = liked;
      })

      // Get users who liked
      .addCase(getLikesUsers.fulfilled, (state, action) => {
        const { postId, users, count } = action.payload;
        state.usersByPost[postId] = users;
        state.likesByPost[postId] = count;
      });
  },
});

export default likeSlice.reducer;

