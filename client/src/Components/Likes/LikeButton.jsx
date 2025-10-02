import { useDispatch, useSelector } from "react-redux";
import { likePost, unlikePost, getLikesCount, getUserLikeStatus } from "../../Redux/likeSlice";
import { useEffect } from "react";
import toast from 'react-hot-toast';

function LikeButton({ postId, userId }) {
  const dispatch = useDispatch();
  const { likesByPost, userLikes } = useSelector((state) => state.likes);
  // authSlice stores user under `data` (see authSlice.js)
  const authUser = useSelector((state) => state.auth?.data || null);

  // prefer explicit prop userId (rare), otherwise current logged-in user
  const currentUserId = userId || authUser?._id || authUser?.id || null;


  useEffect(() => {
    if (!postId) return;
    dispatch(getLikesCount(postId));
    // always ask server for the user's like status; the thunk will call the
    // authenticated `/status` endpoint when userId is omitted so this works
    // even if the local auth slice hasn't hydrated yet.
    dispatch(getUserLikeStatus({ postId, userId: currentUserId }));
  }, [dispatch, postId, currentUserId]);

  const handleLike = () => {
    if (!currentUserId) {
      // avoid redirecting the page; show friendly toast and stop
      toast.error('Please log in to like posts');
      return;
    }

    if (userLikes[postId]) {
      dispatch(unlikePost(postId));
    } else {
      dispatch(likePost(postId));
    }
  };

  return (
    <button type="button" onClick={handleLike} className="px-3 py-2 rounded bg-white/5">
      {userLikes[postId] ? "Unlike" : "Like"} ({likesByPost[postId] || 0})
    </button>
  );
}

export default LikeButton;
