// backend/services/xlsx.service.js
import * as XLSX from "xlsx";
import fs from "fs";

/**
 * Read Excel file from disk and return JSON
 * @param {string} filePath - Path to the Excel file
 * @returns {Object[]} JSON data
 */
export const readExcel = (filePath) => {
  const workbook = XLSX.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  return XLSX.utils.sheet_to_json(worksheet);
};

/**
 * Write JSON data to Excel and save to disk
 * @param {Object[]} jsonData
 * @param {string} filePath
 */
export const writeExcel = (jsonData, filePath) => {
  const worksheet = XLSX.utils.json_to_sheet(jsonData);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
  XLSX.writeFile(workbook, filePath);
};

/**
 * Convert JSON to Excel and return as Buffer (for API download)
 * @param {Object[]} jsonData
 * @returns {Buffer}
 */
export const generateExcelBuffer = (jsonData) => {
  const worksheet = XLSX.utils.json_to_sheet(jsonData);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
  return XLSX.write(workbook, { type: "buffer", bookType: "xlsx" });
};
