import mongoose, { model, Schema } from "mongoose";

const commentSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        trim: true,
        ref: 'User'
    },
    blogid: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        trim: true,
        ref: 'Blog'
    },
    comment: {
        type: String,
        required: true,
        trim: true
    },
}, { timestamps: true })

// const Comment = mongoose.model('Comment', commentSchema, 'comments')
// export default Comment 

const Comment = model('Comment', commentSchema)
export default Comment;