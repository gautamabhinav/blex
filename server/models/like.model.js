// import mongoose from "mongoose";

import mongoose, { model, Schema } from "mongoose";

// const likeSchema = new mongoose.Schema({
//     user: {
//         type: mongoose.Schema.Types.ObjectId,
//         required: true,
//         ref: 'User'
//     },
//     blogid: {
//         type: mongoose.Schema.Types.ObjectId,
//         required: true,
//         ref: 'Blog'
//     },
// }, { timestamps: true })

// const BlogLike = mongoose.model('BlogLike', likeSchema, 'bloglikes')
// export default BlogLike 


const LikeSchema = Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },

    blogid: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Post'
    },

    
}, { timestamps : true })

const Like = model('BlogLike', LikeSchema);
export default Like;