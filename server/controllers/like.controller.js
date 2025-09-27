// import asyncHandler from "../middlewares/asyncHandler.middleware.js";
// import Like from "../models/like.model.js";
// import AppError from "../utils/AppError.js";

// export const getAllLikes = asyncHandler(async(req,res, next) => {

// const likes = await Like.find({});

//     res.status(200).json({
//         success: true,
//         likes
//     });
// });

// export const addLikes = asyncHandler(async(req,res, next) => {
//     console.log(req.body);
    
//     const { userId, blogId } = req.body;

//     if (!userId || !blogId) {
//         return next(new AppError('User ID and Blog ID are required.', 404));
//     }

//     const like = new Like({ 
//         user: userId,
//         blogid: blogId
//      });

//     await like.save();

//     res.status(201).json({
//         success: true,
//         message: "Like added successfully.",
//         like
//     });
// });

// // export const getLikebyid = asyncHandler(async(req,res, next) => {
// //     const { id } = req.params;
// //     const like = await Like.findById(id);

// //     if (!like) {
// //         return next(new AppError('Like not found.', 404));
// //     }
// //     res.status(200).json({
// //         success: true,
// //         like
// //     });
// // });

// export const updateLike = asyncHandler(async(req, res, next) => {
//     const { id } = req.params;
//     console.log(req.body);
//     const updatedData = req.body;

//     const like = await Like.findByIdAndUpdate(id, updatedData, { new: true });
//     if (!like) {
//         return next(new AppError('Like not found.', 404));
//     }

//     res.status(200).json({
//         success: true,
//         message: "Like updated successfully",
//         like
//     });
// });

// export const deleteLike = asyncHandler(async(req, res, next) => {
//     const { id } = req.params;
//     const like = await Like.findByIdAndDelete(id);

//     if (!like) {
//         return next(new AppError('Like not found.', 404));
//     }

//     res.status(200).json({
//         success: true,
//         message: "Like deleted successfully"
//     });
// });





///////////////////////////////////////////////////////////////////////////////////////



import asyncHandler from "../middlewares/asyncHandler.middleware.js";
import Like from "../models/like.model.js";
import AppError from "../utils/AppError.js";

export const getAllLikes = asyncHandler(async (req, res, next) => {
  const likes = await Like.find({});
  res.status(200).json({
    success: true,
    likes,
  });
});

export const addLikes = asyncHandler(async (req, res, next) => {
  console.log(req.body);

  const { userId, blogId } = req.body;

  if (!userId || !blogId) {
    return next(new AppError("User ID and Blog ID are required.", 400)); // ✅ use 400
  }

  const like = new Like({
    user: userId,
    blogid: blogId,
  });

  await like.save();

  res.status(201).json({
    success: true,
    message: "Like added successfully.",
    like,
  });
});

// Optional: only keep if you need it
// export const getLikebyid = asyncHandler(async (req, res, next) => {
//   const { likeid } = req.params;
//   const like = await Like.findById(likeid);

//   if (!like) {
//     return next(new AppError("Like not found.", 404));
//   }
//   res.status(200).json({
//     success: true,
//     like,
//   });
// });

export const updateLike = asyncHandler(async(req, res, next) => {
    const { id } = req.params;
    // console.log(req.body);
    const updatedData = req.body;

    const like = await Like.findByIdAndUpdate(id, updatedData, { new: true });
    if (!like) {
        return next(new AppError('Like not found.', 404));
    }

    res.status(200).json({
        success: true,
        message: "Like updated successfully",
        like
    });
});

export const deleteLike = asyncHandler(async (req, res, next) => {
  const { id } = req.params; // ✅ fix param name
  const like = await Like.findByIdAndDelete(id);

    console.log("Found like:", like);

  if (!like) {
    return next(new AppError("Like not found.", 404));
  }

  res.status(200).json({
    success: true,
    message: "Like deleted successfully",
  });
});
