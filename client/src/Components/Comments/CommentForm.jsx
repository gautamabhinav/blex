// components/CommentForm.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment, fetchComments } from "../../Redux/commentSlice";

export default function CommentForm({ blogId }) {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  // ✅ safely select only what you need
  const loading = useSelector((state) => state.comments?.loading ?? false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim() || !blogId) return;

        try {
            await dispatch(addComment({ blogId, comment: text })).unwrap();
            setText("");
        } catch (err) {
            console.error("Failed to add comment:", err);
        }
    };


  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write a comment..."
        className="flex-1 px-3 py-2 rounded bg-white/5"
        disabled={loading}
      />
      <button
        type="submit"
        className="px-3 py-2 rounded bg-indigo-600 text-black"
        disabled={loading}
      >
        {loading ? "Posting..." : "Add"}
      </button>
    </form>
  );
}
