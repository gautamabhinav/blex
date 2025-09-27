import { io } from "socket.io-client";
import { useEffect, useState } from "react";

const socket = io(process.env.REACT_APP_BACKEND_URL);

export default function BlogPost({ post }) {
  const [likes, setLikes] = useState(post.likes);
  const [views, setViews] = useState(post.views);
  const [comments, setComments] = useState(post.comments || []);

  useEffect(() => {
    socket.on('postUpdated', ({ postId, likes, views, comments }) => {
      if (postId === post._id) {
        if (likes !== undefined) setLikes(likes);
        if (views !== undefined) setViews(views);
        if (comments !== undefined) setComments(comments);
      }
    });

    // Increment view when component mounts
    socket.emit('viewPost', { postId: post._id });

    return () => socket.off('postUpdated');
  }, [post._id]);

  const handleLike = () => socket.emit('likePost', { postId: post._id });
  const handleComment = (text) => socket.emit('addComment', { postId: post._id, comment: { user: 'UserId', text } });

  return (
    <div>
      <h2>{post.title}</h2>
      <p>Views: {views} | Likes: {likes}</p>
      <div>
        {comments.map((c, idx) => <p key={idx}>{c.text}</p>)}
      </div>
      <button onClick={handleLike}>Like</button>
      <button onClick={() => handleComment('Nice post!')}>Comment</button>
    </div>
  );
}
