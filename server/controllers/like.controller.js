import asyncHandler from "../middlewares/asyncHandler.middleware.js";
import Like from "../models/like.model.js";

// 👉 Like a post
export const likePost = asyncHandler(async (req, res) => {
  try {
    const userId = req.user._id; // from isLoggedIn middleware
    const { postId } = req.params;

    const existingLike = await Like.findOne({ user: userId, blogid: postId });
    if (existingLike) {
      return res.status(400).json({ message: "Already liked" });
    }

    const like = new Like({ user: userId, blogid: postId });
    await like.save();

    res.status(201).json({ message: "Post liked", like });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 👉 Unlike a post
export const unlikePost = asyncHandler(async (req, res) => {
  try {
    const userId = req.user._id;
    const { postId } = req.params;

    const like = await Like.findOneAndDelete({ user: userId, blogid: postId });

    if (!like) return res.status(404).json({ message: "Like not found" });

    res.json({ message: "Post unliked" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 👉 Get total likes count for a post
export const getLikesCount = asyncHandler(async (req, res) => {
  try {
    const { postId } = req.params;

    const count = await Like.countDocuments({ blogid: postId });

    res.json({ postId, likes: count });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


export const getUserLikeStatus = asyncHandler(async(req, res) => {
  try {
    const { postId, userId } = req.params;
    const existingLike = await Like.findOne({ user: userId, blogid: postId });
    if(existingLike) {
      return res.status(200).json({ liked: true });
    } else {
      return res.status(200).json({ liked: false });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
})

// Check like status for the currently authenticated user (uses isLoggedIn middleware)
export const getUserLikeStatusAuth = asyncHandler(async (req, res) => {
  try {
    const userId = req.user?._id;
    const { postId } = req.params;
    if (!userId) return res.status(200).json({ liked: false });

    const existingLike = await Like.findOne({ user: userId, blogid: postId });
    return res.status(200).json({ liked: !!existingLike });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get list of users who liked a post (populated user info)
export const getLikesUsers = asyncHandler(async (req, res) => {
  try {
    const { postId } = req.params;
    const likes = await Like.find({ blogid: postId }).populate('user', 'fullName role avatar').lean().exec();
    // map to user objects
    const users = likes.map((l) => l.user).filter(Boolean);
    res.status(200).json({ postId, users, count: users.length });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

