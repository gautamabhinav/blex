// models/Post.js
import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  user: String,
  text: String,
  createdAt: { type: Date, default: Date.now }
});

const AffixSchema = new mongoose.Schema({
  title: String,
  likes: { type: Number, default: 0 },
  views: { type: Number, default: 0 },
  comments: [CommentSchema]
});

export default mongoose.model("Affix", AffixSchema);
