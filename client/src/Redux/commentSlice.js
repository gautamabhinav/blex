// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axiosInstance from "../Helper/axiosInstance";

// // Fetch comments for a blog
// export const fetchComments = createAsyncThunk(
//   "comments/fetchComments",
//   async (blogId, { rejectWithValue }) => {
//     try {
//       const res = await axiosInstance.get(`/comments`);
//       // Flexible API response
//       return res?.data?.comments || res?.data?.data || res?.data || [];
//     } catch (error) {
//       return rejectWithValue(error?.response?.data?.message || error.message);
//     }
//   }
// );

// // Add a comment to a blog
// // export const addComment = createAsyncThunk(
// //   "comments/addComment",
// //   async ({ blogId, comment, author = "Anonymous", parentId = null }, { rejectWithValue }) => {
// //     try {
// //       const payload = { comment, author };
// //       if (parentId) payload.parentId = parentId;
// //       const res = await axiosInstance.post(`/posts/${blogId}/comments`, payload);
// //       return res.data;
// //     } catch (error) {
// //       return rejectWithValue(error?.response?.data?.message || error.message);
// //     }
// //   }
// // );

// export const addComment = createAsyncThunk(
//   "comments/addComment",
//   async ({ blogId, comment, author = "Anonymous", parentId = null }, { rejectWithValue }) => {
//     try {
//       const payload = {
//         description: comment, // ✅ use `description` instead of `comment`
//         author,
//       };
//       if (parentId) payload.parentId = parentId;
//       const res = await axiosInstance.post(`/comments`, payload);
//       return res.data;
//     } catch (error) {
//       return rejectWithValue(error?.response?.data?.message || error.message);
//     }
//   }
// );


// const commentSlice = createSlice({
//   name: "comments",
//   initialState: {
//     comments: [],
//     // legacy: some components expect `state.comments.list` with {id, text}
//     list: [],
//     loading: false,
//     error: null,
//   },
//   reducers: {
//     // remove a comment by id (legacy synchronous action used by some UI)
//     deleteComment: (state, action) => {
//       const id = action.payload;
//       // remove from list (legacy shape)
//       state.list = state.list.filter((c) => c.id !== id);
//       // also remove from comments (API shape) if possible
//       state.comments = state.comments.filter((c) => (c._id || c.id) !== id);
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchComments.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchComments.fulfilled, (state, action) => {
//         state.loading = false;
//         state.comments = action.payload;
//         // populate legacy `list` shape for components that expect {id, text}
//         state.list = (action.payload || []).map((it) => {
//           return {
//             id: it._id || it.id || String(Date.now()) + Math.random().toString(36).slice(2),
//             text: it.comment || it.text || (typeof it === 'string' ? it : JSON.stringify(it)),
//           };
//         });
//       })
//       .addCase(fetchComments.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })
//       .addCase(addComment.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(addComment.fulfilled, (state, action) => {
//         state.loading = false;
//         // Optionally, refetch comments after add
//       })
//       .addCase(addComment.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });
// // export both the reducer and the legacy action
// export const { deleteComment } = commentSlice.actions;
// export default commentSlice.reducer;





// Redux/commentSlice.js
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axiosInstance from "../Helper/axiosInstance";

// // Set API base
// // const API = import.meta.env.VITE_API_URL || "http://localhost:5000/api/v1/comment";

// // ------------------
// // Async thunks
// // ------------------

// // Public: get comments for a specific post
// export const fetchComments = createAsyncThunk(
//   "comments/fetchComments",
//   async (blogId, { rejectWithValue }) => {
//     try {
//       const res = await axiosInstance.get(`/posts/${blogId}`, { withCredentials: true });
//       return res.data.comments;
//     } catch (err) {
//       return rejectWithValue(err.response?.data?.message || err.message);
//     }
//   }
// );

// // Public: add a comment to a post
// export const addComment = createAsyncThunk(
//   "comments/addComment",
//   async ({ blogId, comment, user }, { rejectWithValue }) => {
//     try {
//       const res = await axiosInstance.post(
//         `/posts/${blogId}`,
//         { comment, user },
//         { withCredentials: true }
//       );
//       return res.data.comment;
//     } catch (err) {
//       return rejectWithValue(err.response?.data?.message || err.message);
//     }
//   }
// );

// // Admin: fetch all comments
// export const fetchAllComments = createAsyncThunk(
//   "comments/fetchAllComments",
//   async (_, { rejectWithValue }) => {
//     try {
//       const res = await axiosInstance.get("/comments", { withCredentials: true });
//       return res.data.comments;
//     } catch (err) {
//       return rejectWithValue(err.response?.data?.message || err.message);
//     }
//   }
// );

// // Admin: update a comment
// export const updateComment = createAsyncThunk(
//   "comments/updateComment",
//   async ({ commentId, comment }, { rejectWithValue }) => {
//     try {
//       const res = await axiosInstance.put(
//         `/comments/${commentId}`,
//         { comment },
//         { withCredentials: true }
//       );
//       return res.data.comment;
//     } catch (err) {
//       return rejectWithValue(err.response?.data?.message || err.message);
//     }
//   }
// );

// // Admin: delete a comment
// export const deleteComment = createAsyncThunk(
//   "comments/deleteComment",
//   async (commentId, { rejectWithValue }) => {
//     try {
//       await axiosInstance.delete(`/comments/${commentId}`, { withCredentials: true });
//       return commentId;
//     } catch (err) {
//       return rejectWithValue(err.response?.data?.message || err.message);
//     }
//   }
// );

// // ------------------
// // Slice
// // ------------------
// const commentSlice = createSlice({
//   name: "comments",
//   initialState: {
//     list: [],       // comments for current blog
//     all: [],        // all comments (admin)
//     loading: false,
//     error: null,
//     success: null,
//   },
//   reducers: {
//     clearError: (state) => { state.error = null; },
//     clearSuccess: (state) => { state.success = null; },
//   },
//   extraReducers: (builder) => {
//     builder
//       // fetchComments (post-specific)
//       .addCase(fetchComments.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchComments.fulfilled, (state, action) => {
//         state.loading = false;
//         state.list = action.payload;
//       })
//       .addCase(fetchComments.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })

//       // addComment
//       .addCase(addComment.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(addComment.fulfilled, (state, action) => {
//         state.loading = false;
//         state.success = "Comment added successfully";
//         state.list.unshift(action.payload); // push to top
//       })
//       .addCase(addComment.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })

//       // fetchAllComments (admin)
//       .addCase(fetchAllComments.fulfilled, (state, action) => {
//         state.all = action.payload;
//       })

//       // updateComment (admin)
//       .addCase(updateComment.fulfilled, (state, action) => {
//         const index = state.list.findIndex((c) => c._id === action.payload._id);
//         if (index !== -1) state.list[index] = action.payload;
//         const indexAll = state.all.findIndex((c) => c._id === action.payload._id);
//         if (indexAll !== -1) state.all[indexAll] = action.payload;
//       })

//       // deleteComment (admin)
//       .addCase(deleteComment.fulfilled, (state, action) => {
//         state.list = state.list.filter((c) => c._id !== action.payload);
//         state.all = state.all.filter((c) => c._id !== action.payload);
//       });
//   },
// });

// export const { clearError, clearSuccess } = commentSlice.actions;
// export default commentSlice.reducer;



// // Redux/commentSlice.js
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axiosInstance from "../Helper/axiosInstance";
// import toast from "react-hot-toast";

// // ✅ fetch all comments for a blog
// export const fetchComments = createAsyncThunk(
//   "comments/fetchComments",
//   async (blogId) => {
//     const res = await axiosInstance.get(`/comment/posts/${blogId}`);
//     return res.data.comments;
//   }
// );

// // ✅ add comment
// // export const addComment = createAsyncThunk(
// //   "comments/addComment",
// //   async ({ blogId, comment }) => {
// //     try {
// //       const res = await axiosInstance.post(`/comment/posts/${blogId}`, { comment });

// //       toast.promise(res, {
// //         loading: "Wait! Posting your comment...",
// //         success: (data) => {
// //           return data?.data?.message;
// //         },
// //         error: "Failed to Post",
// //     });
// //       // getting response resolved here
// //        res = await res;
// //        return res.data.comment;

// //     } catch (error) {
// //       toast.error(error?.response?.data?.message || "Failed to Post");
// //     }
    
// //   }
// // );


// export const addComment = createAsyncThunk(
//   "comments/addComment",
//   async ({ blogId, comment }, { rejectWithValue }) => {
//     try {
//       // create the promise
//       const promise = axiosInstance.post(`/comment/posts/${blogId}`, { comment });

//       // show toast while promise resolves
//       toast.promise(promise, {
//         loading: "Wait! Posting your comment...",
//         success: (res) => res?.data?.message || "Comment posted!",
//         error: "Failed to Post",
//       });

//       // wait for actual response
//       const res = await promise;

//       console.log("addComment response:", res);

//       return res.data.comment;
//     } catch (error) {
//       toast.error(error?.response?.data?.message || "Failed to Post");
//       return rejectWithValue(error.response?.data || error.message);
//     }
//   }
// );



// // ✅ delete comment
// export const deleteComment = createAsyncThunk(
//   "comments/deleteComment",
//   async ({ blogId, commentId }) => {
//     await axiosInstance.delete(`/comment/${commentId}`);
//     return commentId;
//   }
// );

// const commentSlice = createSlice({
//   name: "comments",
//   initialState: {
//     list: [],
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       // fetch
//       // .addCase(fetchComments.pending, (state) => {
//       //   state.loading = true;
//       // })
//       // .addCase(fetchComments.fulfilled, (state, action) => {
//       //   state.loading = false;
//       //   state.list = action.payload;
//       // })
//       // .addCase(fetchComments.rejected, (state, action) => {
//       //   state.loading = false;
//       //   state.error = action.error.message;
//       // })
//       // add
//       // .addCase(addComment.fulfilled, (state, action) => {
//       //   state.list.unshift(action.payload); // insert at top
//       // })
//       // delete
//       // .addCase(deleteComment.fulfilled, (state, action) => {
//       //   state.list = state.list.filter((c) => c._id !== action.payload);
//       // })

//       .addCase(addComment.fulfilled, (state, action) => {
//       state.loading = false;
//       if (action.payload?.comment) {
//         state.list.unshift(action.payload.comment); // add new comment on top
//       }
//     })
//     // fetchComments
//     .addCase(fetchComments.fulfilled, (state, action) => {
//       state.loading = false;
//       state.list = action.payload; // replace with fresh list
//     })
//     // deleteComment
//     .addCase(deleteComment.fulfilled, (state, action) => {
//       state.loading = false;
//       state.list = state.list.filter(
//         (c) => c._id !== action.meta.arg.commentId
//       );
//     });
//   },
// });

// export default commentSlice.reducer;



// Redux/commentSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../Helper/axiosInstance";
import toast from "react-hot-toast";

// Fetch all comments for a blog
export const fetchComments = createAsyncThunk(
  "comments/fetchComments",
  async (blogId, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get(`/comment/posts/${blogId}`, {
        withCredentials : true
      });
      // console.log(res);
      return res.data.comments; // array of comments
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

// Add a comment
export const addComment = createAsyncThunk(
  "comments/addComment",
  async (payload, { rejectWithValue }) => {
    try {
      // payload = { blogId, comment, parentId? }
      const { blogId, comment, parentId } = payload || {};
      const body = { comment };
      if (parentId) body.parentId = parentId;

      const promise = axiosInstance.post(`/comment/posts/${blogId}`, body, {
        withCredentials : true
      });

      toast.promise(promise, {
        loading: "Wait! Posting your comment...",
        success: (res) => res?.data?.message || "Comment posted!",
        error: "Failed to Post",
      });

      await promise; // wait for post to finish
      // After posting, fetch the populated comments list so we have user info
      const res2 = await axiosInstance.get(`/comment/posts/${blogId}`);
      return res2.data.comments || [];
    } catch (err) {
      toast.error(err?.response?.data?.message || "Failed to Post");
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

// Delete a comment
export const deleteComment = createAsyncThunk(
  "comments/deleteComment",
  async ({ commentId }, { rejectWithValue }) => {
    try {
      await axiosInstance.delete(`/comment/${commentId}`, {
        withCredentials: true
      });
      return commentId;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

const commentSlice = createSlice({
  name: "comments",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetchComments
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload || [];
      })

      // addComment
      .addCase(addComment.fulfilled, (state, action) => {
        state.loading = false;
        // action.payload is now the refreshed comments array
        state.list = action.payload || [];
      })

      // deleteComment
      .addCase(deleteComment.fulfilled, (state, action) => {
        state.loading = false;
        state.list = state.list.filter((c) => c._id !== action.payload);
      });
  },
});

export default commentSlice.reducer;
