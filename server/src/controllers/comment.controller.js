// import { handleError } from "../helpers/handleError.js"
// import Comment from "../models/comment.model.js"
// export const addcomment = async (req, res, next) => {
//     try {
//         const { user, blogid, comment } = req.body
//         const newComment = new Comment({
//             user: user,
//             blogid: blogid,
//             comment: comment
//         })


//         await newComment.save()
//         res.status(200).json({
//             success: true,
//             message: 'Comment submited.',
//             comment: newComment
//         })

//     } catch (error) {
//         next(handleError(500, error.message))
//     }
// }

// export const getComments = async (req, res, next) => {
//     try {
//         const { blogid } = req.params
//         const comments = await Comment.find({ blogid }).populate('user', 'name avatar').sort({ createdAt: -1 }).lean().exec()

//         res.status(200).json({
//             comments
//         })
//     } catch (error) {
//         next(handleError(500, error.message))
//     }
// }


// export const commentCount = async (req, res, next) => {
//     try {
//         const { blogid } = req.params
//         const commentCount = await Comment.countDocuments({ blogid })

//         res.status(200).json({
//             commentCount
//         })
//     } catch (error) {
//         next(handleError(500, error.message))
//     }
// }

// export const getAllComments = async (req, res, next) => {
//     try {
//         const user = req.user
//         let comments
//         if (user.role === 'admin') {
//             comments = await Comment.find().populate('blogid', 'title').populate('user', 'name')

//         } else {

//             comments = await Comment.find({ user: user._id }).populate('blogid', 'title').populate('user', 'name')
//         }

//         res.status(200).json({
//             comments
//         })
//     } catch (error) {
//         next(handleError(500, error.message))
//     }
// }


// export const deleteComment = async (req, res, next) => {
//     try {
//         const { commentid } = req.params
//         await Comment.findByIdAndDelete(commentid)

//         res.status(200).json({
//             success: true,
//             message: 'Data deleted'
//         })
//     } catch (error) {
//     }
// }


import asyncHandler from "../middlewares/asyncHandler.middleware.js";
import Comment from "../models/comment.model.js";

export const getAllComments = asyncHandler(async (req, res) => {
  const comments = await Comment.find({})
    // .populate("blogid", "title")
    // .populate("user", "name avatar")
    // .sort({ createdAt: -1 })
    // .lean()
    // .exec()

  res.status(200).json({
    comments
  })
})

export const createComment = asyncHandler(async (req, res) => {
  const { user, blogid, comment } = req.body;
  const newComment = new Comment({
    user,
    blogid,
    comment
  })
  await newComment.save()
  res.status(201).json({
    success: true,
    message: 'Comment created successfully',
    comment: newComment
  })
})


export const getCommentbyid = asyncHandler(async (req, res) => {
  const { blogid } = req.params
  const comments = await Comment.find({ blogid }).populate('user', 'fullName role avatar').sort({ createdAt: -1 }).lean().exec()
  res.status(200).json({
    comments
  })
}) 
// updateComment
export const updateComment = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { comment } = req.body;
  const updatedComment = await Comment.findByIdAndUpdate(
    id,
    { comment },
    { new: true }
  );
  res.status(200).json({
    success: true,
    message: 'Comment updated successfully',
    comment: updatedComment,
  });
});

// deleteComment
export const deleteComment = asyncHandler(async (req, res) => {
  const { id } = req.params;
  await Comment.findByIdAndDelete(id);
  res.status(200).json({
    success: true,
    message: 'Comment deleted successfully',
  });
});



export const getCommentsForPost = asyncHandler(async (req, res) => {
  const { blogId } = req.params;
  const comments = await Comment.find({ blogid: blogId })
    .populate('user', 'fullName role avatar')
    .sort({ createdAt: -1 })
    .lean()
    .exec();
  res.status(200).json({
    comments
  });
});

export const addCommentToPost = asyncHandler(async (req, res) => {
  const { blogId } = req.params;
  const { comment, parentId } = req.body;

  if (!req.user?._id) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }

  const newComment = new Comment({
    user: req.user._id,   // take from logged in user
    blogid: blogId,
    comment,
    parentId: parentId || null,
  });

  await newComment.save();

  // After saving, return the full populated comments for the post so client can rebuild tree
  const comments = await Comment.find({ blogid: blogId })
    .populate('user', 'fullName role avatar')
    .sort({ createdAt: -1 })
    .lean()
    .exec();

  res.status(201).json({
    success: true,
    message: 'Comment added successfully',
    comment: newComment,
    comments,
  });
});


export const getCommentById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const comment = await Comment.findById(id).populate('user', 'name avatar');
  if (!comment) {
    return res.status(404).json({
      success: false,
      message: 'Comment not found'
    });
  }
  res.status(200).json({
    success: true,
    comment
  });
});