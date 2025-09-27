// // backend/services/storage.service.js
// import multer from "multer";
// import path from "path";
// import fs from "fs";

// // Ensure uploads folder exists
// const uploadPath = path.resolve("uploads");
// if (!fs.existsSync(uploadPath)) {
//   fs.mkdirSync(uploadPath, { recursive: true });
// }

// // Configure multer
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, uploadPath);
//   },
//   filename: (req, file, cb) => {
//     const uniqueName = `${Date.now()}-${file.originalname}`;
//     cb(null, uniqueName);
//   },
// });

// export const upload = multer({ storage });

// // Utility: get file path
// export const getFilePath = (fileName) => {
//   return path.join(uploadPath, fileName);
// };


// // backend/services/storage.service.js
// import multer from "multer";
// import multerS3 from "multer-s3";
// import AWS from "aws-sdk";

// // Configure AWS
// const s3 = new AWS.S3({
//   accessKeyId: process.env.AWS_ACCESS_KEY,
//   secretAccessKey: process.env.AWS_SECRET_KEY,
//   region: process.env.AWS_REGION,
// });

// // Multer S3 upload
// export const upload = multer({
//   storage: multerS3({
//     s3,
//     bucket: process.env.AWS_BUCKET_NAME,
//     acl: "public-read",
//     key: (req, file, cb) => {
//       const uniqueName = `${Date.now()}-${file.originalname}`;
//       cb(null, uniqueName);
//     },
//   }),
// });

// // Get file URL
// export const getFileUrl = (key) => {
//   return `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`;
// };
