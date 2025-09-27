// import * as XLSX from "xlsx";
// import ExcelFile from "../models/excel.model.js"

/**
 * Parse Excel file buffer
 */
// function parseExcelBuffer(buffer, mimetype) {
//     try {
//         // Handle CSV
//         if (
//             mimetype === "text/csv" ||
//             mimetype === "application/csv" ||
//             mimetype === "application/vnd.ms-excel" // some browsers send this for CSV
//         ) {
//             const csvData = buffer.toString("utf8");
//             const workbook = XLSX.read(csvData, { type: "string" });
//             const sheetName = workbook.SheetNames[0];
//             return XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
//         }

//         // Handle Excel (.xlsx / .xls)
//         if (
//             mimetype === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
//             mimetype === "application/vnd.ms-excel"
//         ) {
//             const workbook = XLSX.read(buffer, { type: "buffer" });
//             const sheetName = workbook.SheetNames[0];
//             return XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
//         }

//         throw new Error(`Unsupported file type: ${mimetype}`);
//     } catch (error) {
//         console.error("Error parsing file:", error);
//         throw new Error("Error parsing file. Please check the file type and ensure it is not corrupted.");
//     }
// }import fs from "fs";

// function parseExcelFileFromDisk(filepath, mimetype) {
//     try {
//       console.log("Multer file object:", req.file); // 👈 see what's coming
//     console.log("Multer body object:", req.body);

//         if (mimetype === "text/csv" || mimetype === "application/vnd.ms-excel") {
//             const csvData = fs.readFileSync(filepath, "utf8");
//             const workbook = XLSX.read(csvData, { type: "string" });
//             const sheetName = workbook.SheetNames[0];
//             return XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
//         } else {
//             const workbook = XLSX.readFile(filepath); // works with .xlsx, .xls, .xlsm
//             const sheetName = workbook.SheetNames[0];
//             return XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
//         }
//     } catch (error) {
//         console.error("Error parsing file:", error);
//         throw new Error("Error parsing file. Please check the file type and ensure it is not corrupted.");
//     }
// }


////////////////////////////////////

import fs from "fs";
// import XLSX from "xlsx";
import * as XLSX from "xlsx";
import ExcelFile from "../models/excel.model.js";
import asyncHandler from "../middlewares/asyncHandler.middleware.js";

/**
 * Parse Excel file buffer or file path
 */
// function parseExcel(file) {
//   let workbook;

//   if (file.buffer) {
//     // memoryStorage
//     workbook = XLSX.read(file.buffer, { type: "buffer" });
//   } else if (file.path) {
//     // diskStorage
//     const fileBuffer = fs.readFileSync(file.path);
//     workbook = XLSX.read(fileBuffer, { type: "buffer" });
//   } else {
//     throw new Error("No file data found (buffer/path missing).");
//   }

//   const sheetName = workbook.SheetNames[0];
//   return XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
// }

// export const uploadExcelFile = async (req, res) => {
//   const file = req.file;
//   if (!file) {
//     return res.status(400).json({ message: "No file uploaded" });
//   }

//   const sheetData = parseExcel(file);

//   const excelFile = new ExcelFile({
//     filename: file.originalname,
//     contentType: file.mimetype,
//     size: file.size,
//     uploadedBy: req.user?._id || null,
//     data: sheetData.map((row) => ({ fields: row })),
//   });

//   await excelFile.save();

//   res.status(201).json({ message: "File uploaded successfully", id: excelFile._id });
// };





// export async function handleExcelUpload(file, user) {
//   // Validate file type
// //   if (
// //         file.mimetype !== "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" &&
// //         file.mimetype !== "application/vnd.ms-excel" // For older .xls files
// //     ){
// //         throw new Error("Invalid file type. Only Excel files are allowed.");
// //   }

//    const sheetData = parseExcelFileFromDisk(file.buffer, file.mimetype);

//     const excelFile = new ExcelFile({
//         filename: file.originalname,
//         contentType: file.mimetype,
//         size: file.size,
//         uploadedBy: user?._id || null,
//         data: sheetData.map((row) => ({ fields: row })),
//     });

//     await excelFile.save();

//     return { message: "File uploaded successfully", id: excelFile._id };
// }

function parseExcel(file) {
  let workbook;

  if (file.buffer) {
    // memoryStorage
    workbook = XLSX.read(file.buffer, { type: "buffer" });
  } else if (file.path) {
    // diskStorage
    const fileBuffer = fs.readFileSync(file.path);
    workbook = XLSX.read(fileBuffer, { type: "buffer" });
  } else {
    throw new Error("No file data found (buffer/path missing).");
  }

  const sheetName = workbook.SheetNames[0];
  return XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
}

export const uploadExcelFile = asyncHandler(async (req, res, next) => {
  console.log("REQ.FILE 👉", req.file);
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  try {
    // Parse Excel/CSV from buffer
    const workbook = XLSX.read(req.file.buffer, { type: "buffer" });
    const sheetName = workbook.SheetNames[0]; // take first sheet
    const sheet = workbook.Sheets[sheetName];

    // Convert sheet to JSON
    const data = XLSX.utils.sheet_to_json(sheet);

    // 👉 At this point, you can save `data` into DB if needed
    // await YourModel.insertMany(data);

    return res.status(201).json({
      message: "File uploaded and processed successfully",
      rows: data.length,
      preview: data.slice(0, 5), // send only first few rows for preview
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to process file",
      error: error.message,
    });
  }
});


export const getAllExcelFiles = asyncHandler(async (req, res) => {
  const files = await ExcelFile.find({}, "filename size uploadedAt uploadedBy")
    .sort({ uploadedAt: -1 })
    .lean();

  const response = files.map((f) => ({
    ...f,
    rowCount: f.data ? f.data.length : f.rowCount || 0,
  }));

  res.status(200).json(response);
});


export const getExcelFileById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const file = await ExcelFile.findById(id).lean();
  if (!file) {
    return res.status(404).json({ message: "File not found" });
  }

  res.status(200).json(file);
});


export const deleteExcelFile = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const excelFile = await ExcelFile.findById(id);
  if (!excelFile) {
    return res.status(404).json({ message: "File not found" });
  }

  await excelFile.deleteOne(); // safer than .remove()

  res.status(200).json({ message: "File deleted successfully", id });
});