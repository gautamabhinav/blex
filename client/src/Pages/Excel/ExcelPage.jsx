// // // import { FiEye, FiTrash2, FiUpload, FiRefreshCw } from "react-icons/fi";
// // // import Layout from "../../Layout/Layout";
// // // import { useDispatch, useSelector } from "react-redux";
// // // import {
// // //   uploadExcelFile,
// // //   getExcelFiles,
// // //   deleteExcelFile,
// // //   getExcelFileById,
// // // } from "../../Redux/excelSlice"

// // // function ExcelPage() {
// // //   const dispatch = useDispatch();
// // //   const { files, currentFile, status } = useSelector((state) => state.excel);

// // //   console.log(files, currentFile, status )

// // //   const handleUpload = (e) => {
// // //     const file = e.target.files[0];
// // //     // console.log(file);
    
// // //     if (file) dispatch(uploadExcelFile(file));
// // //     console.log(file)
// // //   };

// // //   const loadFiles = () => {
// // //     dispatch(getExcelFiles());
// // //   };

// // //   const removeFile = (id) => {
// // //     dispatch(deleteExcelFile(id));
// // //   };

// // //   const viewFile = (id) => {
// // //     dispatch(getExcelFileById(id));
// // //   };

// // //   // return (
// // //   //   <div>
// // //   //     <input type="file" onChange={handleUpload} />
// // //   //     <button onClick={loadFiles}>Load Files</button>
// // //   //     {status === "loading" && <p>Loading...</p>}
// // //   //     <ul>
// // //   //       {files.map((f) => (
// // //   //         <li key={f._id}>
// // //   //           {f.filename}{" "}
// // //   //           <button onClick={() => viewFile(f._id)}>View</button>
// // //   //           <button onClick={() => removeFile(f._id)}>Delete</button>
// // //   //         </li>
// // //   //       ))}
// // //   //     </ul>
// // //   //     {currentFile && (
// // //   //       <div>
// // //   //         <h3>{currentFile.filename}</h3>
// // //   //         <pre>{JSON.stringify(currentFile.data, null, 2)}</pre>
// // //   //       </div>
// // //   //     )}
// // //   //   </div>
// // //   // );

// // //   return (
// // //     <Layout>
// // //       <div className="p-6 space-y-6">
// // //         {/* Upload Section */}
// // //         <div className="flex items-center gap-3">
// // //           <label className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-xl cursor-pointer hover:bg-blue-700 transition">
// // //             <FiUpload className="mr-2" />
// // //             Upload Excel
// // //             <input
// // //               type="file"
// // //               onChange={handleUpload}
// // //               className="hidden"
// // //             />
// // //           </label>
// // //           <button
// // //             onClick={loadFiles}
// // //             className="flex items-center px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
// // //           >
// // //             <FiRefreshCw className="mr-2" />
// // //             Load Files
// // //           </button>
// // //         </div>

// // //         {/* Loading State */}
// // //         {status === "loading" && (
// // //           <p className="text-gray-500 animate-pulse">Loading...</p>
// // //         )}

// // //         {/* Files List */}
// // //         <div className="grid md:grid-cols-2 gap-4">
// // //           {files.map((f) => (
// // //             <div
// // //               key={f._id}
// // //               className="p-4 bg-white shadow-md rounded-xl flex justify-between items-center border hover:shadow-lg transition"
// // //             >
// // //               <div>
// // //                 <p className="font-medium text-gray-800">{f.filename}</p>
// // //                 <p className="text-xs text-gray-500">{f.uploadedAt}</p>
// // //               </div>
// // //               <div className="flex gap-2">
// // //                 <button
// // //                   onClick={() => viewFile(f._id)}
// // //                   className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition"
// // //                   title="View File"
// // //                 >
// // //                   <FiEye />
// // //                 </button>
// // //                 <button
// // //                   onClick={() => removeFile(f._id)}
// // //                   className="p-2 rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition"
// // //                   title="Delete File"
// // //                 >
// // //                   <FiTrash2 />
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>

// // //         {/* Selected File Preview */}
// // //         {currentFile && (
// // //           <div className="p-6 bg-gray-50 rounded-xl shadow-inner">
// // //             <h3 className="text-lg font-semibold mb-2">
// // //               {currentFile.filename}
// // //             </h3>
// // //             <pre className="p-4 bg-black text-green-400 text-sm rounded-lg overflow-x-auto max-h-96">
// // //               {JSON.stringify(currentFile.data, null, 2)}
// // //             </pre>
// // //           </div>
// // //         )}
// // //       </div>
// // //     </Layout>
// // //   );
// // // }

// // // export default ExcelPage;


// // import { FiEye, FiTrash2, FiUpload, FiRefreshCw } from "react-icons/fi";
// // import Layout from "../../Layout/Layout";
// // import { useDispatch, useSelector } from "react-redux";
// // import {
// //   uploadExcelFile,
// //   getExcelFiles,
// //   deleteExcelFile,
// //   getExcelFileById,
// // } from "../../Redux/excelSlice";
// // import { useEffect } from "react";

// // function ExcelPage() {
// //   const dispatch = useDispatch();
// //   const { files, currentFile, status } = useSelector((state) => state.excel);

// //   useEffect(() => {
// //     dispatch(getExcelFiles());
// //   }, [dispatch]);

// //   const handleUpload = (e) => {
// //     const file = e.target.files[0];
// //     if (file) {
// //       dispatch(uploadExcelFile(file));
// //       e.target.value = null; // reset input
// //     }
// //   };

// //   const loadFiles = () => {
// //     dispatch(getExcelFiles());
// //   };

// //   const removeFile = (id) => {
// //     if (window.confirm("Are you sure you want to delete this file?")) {
// //       dispatch(deleteExcelFile(id));
// //     }
// //   };

// //   const viewFile = (id) => {
// //     dispatch(getExcelFileById(id));
// //   };

// //   return (
// //     <Layout>
// //       <div className="p-6 space-y-6">
// //         {/* Upload & Load Buttons */}
// //         <div className="flex flex-wrap items-center gap-3">
// //           <label className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-xl cursor-pointer hover:bg-blue-700 transition">
// //             <FiUpload className="mr-2" />
// //             Upload Excel
// //             <input
// //               type="file"
// //               accept=".xlsx,.xls"
// //               onChange={handleUpload}
// //               className="hidden"
// //             />
// //           </label>
// //           <button
// //             onClick={loadFiles}
// //             className="flex items-center px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
// //           >
// //             <FiRefreshCw className="mr-2" />
// //             Load Files
// //           </button>
// //         </div>

// //         {/* Loading Indicator */}
// //         {status === "loading" && (
// //           <p className="text-gray-500 animate-pulse">Loading...</p>
// //         )}

// //         {/* Files List */}
// //         <div className="grid md:grid-cols-2 gap-4">
// //           {files.length === 0 && status !== "loading" && (
// //             <p className="col-span-full text-gray-400 text-center p-4 bg-white/10 rounded">
// //               No files uploaded yet.
// //             </p>
// //           )}
// //           {/* {files.map((f) => (
// //             <div
// //               key={f._id}
// //               className="p-4 bg-white shadow-md rounded-xl flex justify-between items-center border hover:shadow-lg transition"
// //             >
// //               <div>
// //                 <p className="font-medium text-gray-800">{f.filename}</p>
// //                 <p className="text-xs text-gray-500">
// //                   {new Date(f.uploadedAt).toLocaleString()}
// //                 </p>
// //               </div>
// //               <div className="flex gap-2">
// //                 <button
// //                   onClick={() => viewFile(f._id)}
// //                   className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition"
// //                   title="View File"
// //                 >
// //                   <FiEye />
// //                 </button>
// //                 <button
// //                   onClick={() => removeFile(f._id)}
// //                   className="p-2 rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition"
// //                   title="Delete File"
// //                 >
// //                   <FiTrash2 />
// //                 </button>
// //               </div>
// //             </div>
// //           ))} */}

// //           {Array.isArray(files) && files.length > 0 ? (
// //             files.map((f) => (
// //               <div
// //                 key={f._id}
// //                 className="p-4 bg-white shadow-md rounded-xl flex justify-between items-center border hover:shadow-lg transition"
// //               >
// //                 <div>
// //                   <p className="font-medium text-gray-800">{f.filename}</p>
// //                   <p className="text-xs text-gray-500">
// //                     {f.uploadedAt ? new Date(f.uploadedAt).toLocaleString() : "N/A"}
// //                   </p>
// //                 </div>
// //                 <div className="flex gap-2">
// //                   <button
// //                     onClick={() => viewFile(f._id)}
// //                     className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition"
// //                     title="View File"
// //                   >
// //                     <FiEye />
// //                   </button>
// //                   <button
// //                     onClick={() => removeFile(f._id)}
// //                     className="p-2 rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition"
// //                     title="Delete File"
// //                   >
// //                     <FiTrash2 />
// //                   </button>
// //                 </div>
// //               </div>
// //             ))
// //           ) : (
// //             <div className="col-span-full text-center text-zinc-300 p-6 bg-white/5 rounded">
// //               No files found
// //             </div>
// //           )}

// //         </div>

// //         {/* Selected File Preview */}
// //         {currentFile && (
// //           <div className="p-6 bg-gray-50 rounded-xl shadow-inner mt-6">
// //             <h3 className="text-lg font-semibold mb-2">{currentFile.filename}</h3>
// //             <pre className="p-4 bg-black text-green-400 text-sm rounded-lg overflow-x-auto max-h-96">
// //               {JSON.stringify(currentFile.data, null, 2)}
// //             </pre>
// //           </div>
// //         )}
// //       </div>
// //     </Layout>
// //   );
// // }

// // export default ExcelPage;




// //////////////////////////////////////////////////////////////////////////////////////////////////////////////



// // import { FiEye, FiTrash2, FiUpload, FiRefreshCw } from "react-icons/fi";
// // import Layout from "../../Layout/Layout";
// // import { useDispatch, useSelector } from "react-redux";
// // import {
// //   uploadExcelFile,
// //   getExcelFiles,
// //   deleteExcelFile,
// //   getExcelFileById,
// //   clearCurrentFile,
// // } from "../../Redux/excelSlice";
// // import { useEffect } from "react";

// // function ExcelPage() {
// //   const dispatch = useDispatch();
// //   const { files, currentFile, status } = useSelector((state) => state.excel);

// //   useEffect(() => {
// //     dispatch(getExcelFiles());
// //   }, [dispatch]);

// //   const handleUpload = (e) => {
// //     const file = e.target.files[0];
// //     if (file) {
// //       dispatch(uploadExcelFile(file));
// //       e.target.value = null; // reset input
// //     }
// //   };

// //   const loadFiles = () => {
// //     dispatch(getExcelFiles());
// //   };

// //   const removeFile = (id) => {
// //     if (window.confirm("Are you sure you want to delete this file?")) {
// //       dispatch(deleteExcelFile(id));
// //     }
// //   };

// //   const viewFile = (id) => {
// //     dispatch(getExcelFileById(id));
// //   };

// //   const closeFilePreview = () => {
// //     dispatch(clearCurrentFile());
// //   };

// //   return (
// //     <Layout>
// //       <div className="p-6 space-y-6">
// //         {/* Upload & Load Buttons */}
// //         <div className="flex flex-wrap items-center gap-3">
// //           <label className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-xl cursor-pointer hover:bg-blue-700 transition">
// //             <FiUpload className="mr-2" />
// //             Upload Excel
// //             <input
// //               type="file"
// //               accept=".xlsx,.xls"
// //               onChange={handleUpload}
// //               className="hidden"
// //             />
// //           </label>
// //           <button
// //             onClick={loadFiles}
// //             className="flex items-center px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
// //           >
// //             <FiRefreshCw className="mr-2" />
// //             Load Files
// //           </button>
// //         </div>

// //         {/* Loading Indicator */}
// //         {status === "loading" && (
// //           <p className="text-gray-500 animate-pulse">Loading...</p>
// //         )}

// //         {/* Upload History */}
// //         <div className="grid md:grid-cols-2 gap-4">
// //           {Array.isArray(files) && files.length > 0 ? (
// //             files.map((f) => (
// //               <div
// //                 key={f._id}
// //                 className="p-4 bg-white shadow-md rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center border hover:shadow-lg transition"
// //               >
// //                 <div className="mb-2 md:mb-0">
// //                   <p className="font-medium text-gray-800">{f.filename}</p>
// //                   <p className="text-xs text-gray-500">
// //                     Uploaded: {f.uploadedAt ? new Date(f.uploadedAt).toLocaleString() : "N/A"}
// //                   </p>
// //                   {f.size && <p className="text-xs text-gray-500">Size: {(f.size / 1024).toFixed(2)} KB</p>}
// //                   {f.rowCount !== undefined && <p className="text-xs text-gray-500">Rows: {f.rowCount}</p>}
// //                   {f.uploadedBy && <p className="text-xs text-gray-500">Uploader ID: {f.uploadedBy}</p>}
// //                 </div>
// //                 <div className="flex gap-2 mt-2 md:mt-0">
// //                   <button
// //                     onClick={() => viewFile(f._id)}
// //                     className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition"
// //                     title="View File"
// //                   >
// //                     <FiEye />
// //                   </button>
// //                   <button
// //                     onClick={() => removeFile(f._id)}
// //                     className="p-2 rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition"
// //                     title="Delete File"
// //                   >
// //                     <FiTrash2 />
// //                   </button>
// //                 </div>
// //               </div>
// //             ))
// //           ) : (
// //             <div className="col-span-full text-center text-zinc-300 p-6 bg-white/5 rounded">
// //               No files uploaded yet.
// //             </div>
// //           )}
// //         </div>

// //         {/* Selected File Preview */}
// //         {currentFile && (
// //           <div className="p-6 bg-gray-50 rounded-xl shadow-inner mt-6 relative">
// //             <button
// //               className="absolute top-2 right-2 text-red-600 font-bold hover:text-red-800"
// //               onClick={closeFilePreview}
// //             >
// //               X
// //             </button>
// //             <h3 className="text-lg font-semibold mb-2">{currentFile.filename}</h3>
// //             <p className="text-sm text-gray-500 mb-2">
// //               Rows: {currentFile.rowCount || "N/A"} | Size: {currentFile.size ? (currentFile.size / 1024).toFixed(2) + " KB" : "N/A"}
// //             </p>
// //             <pre className="p-4 bg-black text-green-400 text-sm rounded-lg overflow-x-auto max-h-96">
// //               {JSON.stringify(currentFile.data, null, 2)}
// //             </pre>
// //           </div>
// //         )}
// //       </div>
// //     </Layout>
// //   );
// // }

// // export default ExcelPage;



// // import { FiEye, FiTrash2, FiUpload, FiRefreshCw, FiClock } from "react-icons/fi";
// // import Layout from "../../Layout/Layout";
// // import { useDispatch, useSelector } from "react-redux";
// // import {
// //   uploadExcelFile,
// //   getExcelFiles,
// //   deleteExcelFile,
// //   getExcelFileById,
// //   clearCurrentFile,
// // } from "../../Redux/excelSlice";
// // import { useEffect, useRef } from "react";

// // function ExcelPage() {
// //   const dispatch = useDispatch();
// //   const { files, currentFile, status } = useSelector((state) => state.excel);

// //   const historyRef = useRef(null);

// //   useEffect(() => {
// //     dispatch(getExcelFiles());
// //   }, [dispatch]);

// //   const handleUpload = (e) => {
// //     const file = e.target.files[0];
// //     if (file) {
// //       dispatch(uploadExcelFile(file));
// //       e.target.value = null; // reset input
// //     }
// //   };

// //   const loadFiles = () => {
// //     dispatch(getExcelFiles());
// //   };

// //   const captureHistory = () => {
// //     dispatch(getExcelFiles());
// //     if (historyRef.current) {
// //       historyRef.current.scrollIntoView({ behavior: "smooth" });
// //     }
// //   };

// //   const removeFile = (id) => {
// //     if (window.confirm("Are you sure you want to delete this file?")) {
// //       dispatch(deleteExcelFile(id));
// //     }
// //   };

// //   const viewFile = (id) => {
// //     dispatch(getExcelFileById(id));
// //   };

// //   const closeFilePreview = () => {
// //     dispatch(clearCurrentFile());
// //   };

// //   return (
// //     <Layout>
// //       <div className="p-6 space-y-6">
// //         {/* Upload & Load Buttons */}
// //         <div className="flex flex-wrap items-center gap-3">
// //           <label className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-xl cursor-pointer hover:bg-blue-700 transition">
// //             <FiUpload className="mr-2" />
// //             Upload Excel
// //             <input
// //               type="file"
// //               accept=".xlsx,.xls"
// //               onChange={handleUpload}
// //               className="hidden"
// //             />
// //           </label>
// //           <button
// //             onClick={loadFiles}
// //             className="flex items-center px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
// //           >
// //             <FiRefreshCw className="mr-2" />
// //             Load Files
// //           </button>
// //           <button
// //             onClick={captureHistory}
// //             className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition"
// //           >
// //             <FiClock className="mr-2" />
// //             View Upload History
// //           </button>
// //         </div>

// //         {/* Loading Indicator */}
// //         {status === "loading" && (
// //           <p className="text-gray-500 animate-pulse">Loading...</p>
// //         )}

// //         {/* Upload History */}
// //         <div ref={historyRef} className="grid md:grid-cols-2 gap-4">
// //           {Array.isArray(files) && files.length > 0 ? (
// //             files.map((f) => (
// //               <div
// //                 key={f._id}
// //                 className="p-4 bg-white shadow-md rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center border hover:shadow-lg transition"
// //               >
// //                 <div className="mb-2 md:mb-0">
// //                   <p className="font-medium text-gray-800">{f.filename}</p>
// //                   <p className="text-xs text-gray-500">
// //                     Uploaded: {f.uploadedAt ? new Date(f.uploadedAt).toLocaleString() : "N/A"}
// //                   </p>
// //                   {f.size && <p className="text-xs text-gray-500">Size: {(f.size / 1024).toFixed(2)} KB</p>}
// //                   {f.rowCount !== undefined && <p className="text-xs text-gray-500">Rows: {f.rowCount}</p>}
// //                   {f.uploadedBy && <p className="text-xs text-gray-500">Uploader ID: {f.uploadedBy}</p>}
// //                 </div>
// //                 <div className="flex gap-2 mt-2 md:mt-0">
// //                   <button
// //                     onClick={() => viewFile(f._id)}
// //                     className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition"
// //                     title="View File"
// //                   >
// //                     <FiEye />
// //                   </button>
// //                   <button
// //                     onClick={() => removeFile(f._id)}
// //                     className="p-2 rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition"
// //                     title="Delete File"
// //                   >
// //                     <FiTrash2 />
// //                   </button>
// //                 </div>
// //               </div>
// //             ))
// //           ) : (
// //             <div className="col-span-full text-center text-zinc-300 p-6 bg-white/5 rounded">
// //               No files uploaded yet.
// //             </div>
// //           )}
// //         </div>

// //         {/* Selected File Preview */}
// //         {currentFile && (
// //           <div className="p-6 bg-gray-50 rounded-xl shadow-inner mt-6 relative">
// //             <button
// //               className="absolute top-2 right-2 text-red-600 font-bold hover:text-red-800"
// //               onClick={closeFilePreview}
// //             >
// //               X
// //             </button>
// //             <h3 className="text-lg font-semibold mb-2">{currentFile.filename}</h3>
// //             <p className="text-sm text-gray-500 mb-2">
// //               Rows: {currentFile.rowCount || "N/A"} | Size: {currentFile.size ? (currentFile.size / 1024).toFixed(2) + " KB" : "N/A"}
// //             </p>
// //             <pre className="p-4 bg-black text-green-400 text-sm rounded-lg overflow-x-auto max-h-96">
// //               {JSON.stringify(currentFile.data, null, 2)}
// //             </pre>
// //           </div>
// //         )}
// //       </div>
// //     </Layout>
// //   );
// // }

// // export default ExcelPage;




// // import { FiEye, FiTrash2, FiUpload, FiRefreshCw, FiClock } from "react-icons/fi";
// // import Layout from "../../Layout/Layout";
// // import { useDispatch, useSelector } from "react-redux";
// // import {
// //   uploadExcelFile,
// //   getExcelFiles,
// //   deleteExcelFile,
// //   getExcelFileById,
// //   clearCurrentFile,
// // } from "../../Redux/excelSlice";
// // import { useEffect, useRef } from "react";

// // function ExcelPage() {
// //   const dispatch = useDispatch();
// //   const { files, currentFile, status } = useSelector((state) => state.excel);

// //   const historyRef = useRef(null);

// //   // Load all files on mount
// //   useEffect(() => {
// //     dispatch(getExcelFiles());
// //   }, [dispatch]);

// //   // Handle file upload
// //   // const handleUpload = (e) => {
// //   //   const file = e.target.files[0];
// //   //   if (file) {
// //   //     dispatch(uploadExcelFile(file));
// //   //     e.target.value = null; // reset input
// //   //   }
// //   // };

// //   const handleUpload = async (e) => {
// //   const file = e.target.files[0];

// //     if (file) {
// //       // Wait for the upload to finish
// //       await dispatch(uploadExcelFile(file));
// //       // Refresh the file list automatically
// //       dispatch(getExcelFiles());
// //       e.target.value = null; // reset input

// //       // Optional: scroll to history
// //       if (historyRef.current) {
// //         historyRef.current.scrollIntoView({ behavior: "smooth" });
// //       }
// //     }
// //   };

// //   // Load or refresh files
// //   const loadFiles = () => {
// //     dispatch(getExcelFiles());
// //   };

// //   // Capture upload history and scroll
// //   const captureHistory = () => {
// //     dispatch(getExcelFiles());
// //     if (historyRef.current) {
// //       historyRef.current.scrollIntoView({ behavior: "smooth" });
// //     }
// //   };

// //   // Delete a file
// //   const removeFile = (id) => {
// //     if (window.confirm("Are you sure you want to delete this file?")) {
// //       dispatch(deleteExcelFile(id));
// //     }
// //   };

// //   // View file content
// //   const viewFile = (id) => {
// //     dispatch(getExcelFileById(id));
// //   };

// //   // Close file preview
// //   const closeFilePreview = () => {
// //     dispatch(clearCurrentFile());
// //   };

// //   return (
// //     <Layout>
// //       <div className="p-6 space-y-6">
// //         {/* Upload & History Buttons */}
// //         <div className="flex flex-wrap items-center gap-3">
// //           <label className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-xl cursor-pointer hover:bg-blue-700 transition">
// //             <FiUpload className="mr-2" />
// //             Upload Excel
// //             <input
// //               type="file"
// //               accept=".xlsx,.xls"
// //               onChange={handleUpload}
// //               className="hidden"
// //             />
// //           </label>
// //           <button
// //             onClick={loadFiles}
// //             className="flex items-center px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
// //           >
// //             <FiRefreshCw className="mr-2" />
// //             Load Files
// //           </button>
// //           <button
// //             onClick={captureHistory}
// //             className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition"
// //           >
// //             <FiClock className="mr-2" />
// //             View Upload History
// //           </button>
// //         </div>

// //         {/* Loading Indicator */}
// //         {status === "loading" && (
// //           <p className="text-gray-500 animate-pulse">Loading...</p>
// //         )}

// //         {/* Upload History */}
// //         <div ref={historyRef} className="grid md:grid-cols-2 gap-4">
// //           {Array.isArray(files) && files.length > 0 ? (
// //             files.map((f) => (
// //               <div
// //                 key={f._id}
// //                 className="p-4 bg-white shadow-md rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center border hover:shadow-lg transition"
// //               >
// //                 <div className="mb-2 md:mb-0">
// //                   <p className="font-medium text-gray-800">{f.filename}</p>
// //                   <p className="text-xs text-gray-500">
// //                     Uploaded: {f.uploadedAt ? new Date(f.uploadedAt).toLocaleString() : "N/A"}
// //                   </p>
// //                   {f.size && <p className="text-xs text-gray-500">Size: {(f.size / 1024).toFixed(2)} KB</p>}
// //                   {f.rowCount !== undefined && <p className="text-xs text-gray-500">Rows: {f.rowCount}</p>}
// //                   {f.uploadedBy && <p className="text-xs text-gray-500">Uploader ID: {f.uploadedBy}</p>}
// //                 </div>
// //                 <div className="flex gap-2 mt-2 md:mt-0">
// //                   <button
// //                     onClick={() => viewFile(f._id)}
// //                     className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition"
// //                     title="View File"
// //                   >
// //                     <FiEye />
// //                   </button>
// //                   <button
// //                     onClick={() => removeFile(f._id)}
// //                     className="p-2 rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition"
// //                     title="Delete File"
// //                   >
// //                     <FiTrash2 />
// //                   </button>
// //                 </div>
// //               </div>
// //             ))
// //           ) : (
// //             <div className="col-span-full text-center text-zinc-300 p-6 bg-white/5 rounded">
// //               No files uploaded yet.
// //             </div>
// //           )}
// //         </div>

// //         {/* Selected File Preview */}
// //         {currentFile && (
// //           <div className="p-6 bg-gray-50 rounded-xl shadow-inner mt-6 relative">
// //             <button
// //               className="absolute top-2 right-2 text-red-600 font-bold hover:text-red-800"
// //               onClick={closeFilePreview}
// //             >
// //               X
// //             </button>
// //             <h3 className="text-lg font-semibold mb-2">{currentFile.filename}</h3>
// //             <p className="text-sm text-gray-500 mb-2">
// //               Rows: {currentFile.rowCount || "N/A"} | Size: {currentFile.size ? (currentFile.size / 1024).toFixed(2) + " KB" : "N/A"}
// //             </p>
// //             {/* <pre className="p-4 bg-black text-green-400 text-sm rounded-lg overflow-x-auto max-h-96">
// //               {JSON.stringify(currentFile.data, null, 2)}
// //             </pre> */}
// //           </div>
// //         )}
// //       </div>
// //     </Layout>
// //   );
// // }

// // export default ExcelPage;


// // import { FiEye, FiTrash2, FiUpload, FiRefreshCw, FiClock } from "react-icons/fi";
// // import Layout from "../../Layout/Layout";
// // import { useDispatch, useSelector } from "react-redux";
// // import {
// //   uploadExcelFile,
// //   getExcelFiles,
// //   deleteExcelFile,
// //   getExcelFileById,
// //   clearCurrentFile,
// // } from "../../Redux/excelSlice";
// // import { useEffect, useRef } from "react";

// // function ExcelPage() {
// //   const dispatch = useDispatch();
// //   const { files, currentFile, status } = useSelector((state) => state.excel);
// //   const historyRef = useRef(null);

// //   // Load files on mount
// //   useEffect(() => {
// //     dispatch(getExcelFiles());
// //   }, [dispatch]);

// //   // Handle file upload
// //   const handleUpload = async (e) => {
// //     const file = e.target.files[0];
// //     if (file) {
// //       await dispatch(uploadExcelFile(file));
// //       // Refresh file list automatically after upload
// //       dispatch(getExcelFiles());
// //       e.target.value = null; // reset input
// //       if (historyRef.current) {
// //         historyRef.current.scrollIntoView({ behavior: "smooth" });
// //       }
// //     }
// //   };

// //   // Load files manually
// //   const loadFiles = () => {
// //     dispatch(getExcelFiles());
// //   };

// //   // Delete file
// //   const removeFile = (id) => {
// //     if (window.confirm("Are you sure you want to delete this file?")) {
// //       dispatch(deleteExcelFile(id));
// //     }
// //   };

// //   // View file details
// //   const viewFile = (id) => {
// //     dispatch(getExcelFileById(id));
// //   };

// //   // Close file preview
// //   const closeFilePreview = () => {
// //     dispatch(clearCurrentFile());
// //   };

// //   return (
// //     <Layout>
// //       <div className="p-6 space-y-6">
// //         {/* Upload & Load Buttons */}
// //         <div className="flex flex-wrap items-center gap-3">
// //           <label className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-xl cursor-pointer hover:bg-blue-700 transition">
// //             <FiUpload className="mr-2" />
// //             Upload Excel
// //             <input
// //               type="file"
// //               accept=".xlsx,.xls"
// //               onChange={handleUpload}
// //               className="hidden"
// //             />
// //           </label>
// //           <button
// //             onClick={loadFiles}
// //             className="flex items-center px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
// //           >
// //             <FiRefreshCw className="mr-2" />
// //             Load Files
// //           </button>
// //         </div>

// //         {/* Loading Indicator */}
// //         {status === "loading" && (
// //           <p className="text-gray-500 animate-pulse">Loading...</p>
// //         )}

// //         {/* Upload History */}
// //         <div ref={historyRef} className="grid md:grid-cols-2 gap-4">
// //           {Array.isArray(files) && files.length > 0 ? (
// //             files.map((f) => (
// //               <div
// //                 key={f._id}
// //                 className="p-4 bg-white shadow-md rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center border hover:shadow-lg transition"
// //               >
// //                 <div className="mb-2 md:mb-0">
// //                   <p className="font-medium text-gray-800">{f.filename}</p>
// //                   <p className="text-xs text-gray-500">
// //                     Uploaded: {f.uploadedAt ? new Date(f.uploadedAt).toLocaleString() : "N/A"}
// //                   </p>
// //                   {f.size && <p className="text-xs text-gray-500">Size: {(f.size / 1024).toFixed(2)} KB</p>}
// //                   {f.rowCount !== undefined && <p className="text-xs text-gray-500">Rows: {f.rowCount}</p>}
// //                   {f.uploadedBy && <p className="text-xs text-gray-500">Uploader ID: {f.uploadedBy}</p>}
// //                 </div>
// //                 <div className="flex gap-2 mt-2 md:mt-0">
// //                   <button
// //                     onClick={() => viewFile(f._id)}
// //                     className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition"
// //                     title="View File"
// //                   >
// //                     <FiEye />
// //                   </button>
// //                   <button
// //                     onClick={() => removeFile(f._id)}
// //                     className="p-2 rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition"
// //                     title="Delete File"
// //                   >
// //                     <FiTrash2 />
// //                   </button>
// //                 </div>
// //               </div>
// //             ))
// //           ) : (
// //             <div className="col-span-full text-center text-zinc-300 p-6 bg-white/5 rounded">
// //               No files uploaded yet.
// //             </div>
// //           )}
// //         </div>

// //         {/* Selected File Preview */}
// //         {currentFile && (
// //           <div className="p-6 bg-gray-50 rounded-xl shadow-inner mt-6 relative">
// //             <button
// //               className="absolute top-2 right-2 text-red-600 font-bold hover:text-red-800"
// //               onClick={closeFilePreview}
// //             >
// //               X
// //             </button>
// //             <h3 className="text-lg font-semibold mb-2">{currentFile.filename}</h3>
// //             <p className="text-sm text-gray-500 mb-2">
// //               Rows: {currentFile.rowCount || "N/A"} | Size: {currentFile.size ? (currentFile.size / 1024).toFixed(2) + " KB" : "N/A"}
// //             </p>
// //             <pre className="p-4 bg-black text-green-400 text-sm rounded-lg overflow-x-auto max-h-96">
// //               {JSON.stringify(currentFile.data, null, 2)}
// //             </pre>
// //           </div>
// //         )}
// //       </div>
// //     </Layout>
// //   );
// // }

// // export default ExcelPage;


// import { FiEye, FiTrash2, FiUpload, FiRefreshCw, FiClock } from "react-icons/fi";
// import Layout from "../../Layout/Layout";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   uploadExcelFile,
//   getExcelFiles,
//   deleteExcelFile,
//   getExcelFileById,
//   clearCurrentFile,
// } from "../../Redux/excelSlice";
// import { useEffect, useRef, useState } from "react";

// function ExcelPage() {
//   const dispatch = useDispatch();
//   const { files, currentFile, status } = useSelector((state) => state.excel);
//   const historyRef = useRef(null);

//   const [uploadHistory, setUploadHistory] = useState([]);

//   // Load all files on mount
//   useEffect(() => {
//     dispatch(getExcelFiles());
//   }, [dispatch]);

//   // Whenever files change, update the history
//   useEffect(() => {
//     if (Array.isArray(files) && files.length > 0) {
//       setUploadHistory(files);
//     }
//   }, [files]);

//   // Handle file upload
//   const handleUpload = async (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       await dispatch(uploadExcelFile(file));
//       await dispatch(getExcelFiles()); // refresh files after upload
//       e.target.value = null;

//       if (historyRef.current) {
//         historyRef.current.scrollIntoView({ behavior: "smooth" });
//       }
//     }
//   };

//   // Refresh files
//   const loadFiles = () => {
//     dispatch(getExcelFiles());
//   };

//   // Scroll to upload history
//   const captureHistory = () => {
//     if (historyRef.current) {
//       historyRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   // Delete a file
//   const removeFile = (id) => {
//     if (window.confirm("Are you sure you want to delete this file?")) {
//       dispatch(deleteExcelFile(id));
//     }
//   };

//   // View file content
//   const viewFile = (id) => {
//     dispatch(getExcelFileById(id));
//   };

//   // Close file preview
//   const closeFilePreview = () => {
//     dispatch(clearCurrentFile());
//   };

//   return (
//     <Layout>
//       <div className="p-6 space-y-6">
//         {/* Upload & History Buttons */}
//         <div className="flex flex-wrap items-center gap-3">
//           <label className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-xl cursor-pointer hover:bg-blue-700 transition">
//             <FiUpload className="mr-2" />
//             Upload Excel
//             <input
//               type="file"
//               accept=".xlsx,.xls"
//               onChange={handleUpload}
//               className="hidden"
//             />
//           </label>
//           <button
//             onClick={loadFiles}
//             className="flex items-center px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
//           >
//             <FiRefreshCw className="mr-2" />
//             Load Files
//           </button>
//           <button
//             onClick={captureHistory}
//             className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition"
//           >
//             <FiClock className="mr-2" />
//             View Upload History
//           </button>
//         </div>

//         {/* Loading Indicator */}
//         {status === "loading" && (
//           <p className="text-gray-500 animate-pulse">Loading...</p>
//         )}

//         {/* Upload History */}
//         <div ref={historyRef} className="grid md:grid-cols-2 gap-4">
//           {uploadHistory.length > 0 ? (
//             uploadHistory.map((f) => (
//               <div
//                 key={f._id}
//                 className="p-4 bg-white shadow-md rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center border hover:shadow-lg transition"
//               >
//                 <div className="mb-2 md:mb-0">
//                   <p className="font-medium text-gray-800">{f.filename}</p>
//                   <p className="text-xs text-gray-500">
//                     Uploaded: {f.uploadedAt ? new Date(f.uploadedAt).toLocaleString() : "N/A"}
//                   </p>
//                   {f.size && <p className="text-xs text-gray-500">Size: {(f.size / 1024).toFixed(2)} KB</p>}
//                   {f.rowCount !== undefined && <p className="text-xs text-gray-500">Rows: {f.rowCount}</p>}
//                   {f.uploadedBy && <p className="text-xs text-gray-500">Uploader ID: {f.uploadedBy}</p>}
//                 </div>
//                 <div className="flex gap-2 mt-2 md:mt-0">
//                   <button
//                     onClick={() => viewFile(f._id)}
//                     className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition"
//                     title="View File"
//                   >
//                     <FiEye />
//                   </button>
//                   <button
//                     onClick={() => removeFile(f._id)}
//                     className="p-2 rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition"
//                     title="Delete File"
//                   >
//                     <FiTrash2 />
//                   </button>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <div className="col-span-full text-center text-zinc-300 p-6 bg-white/5 rounded">
//               No files uploaded yet.
//             </div>
//           )}
//         </div>

//         {/* Selected File Preview */}
//         {currentFile && (
//           <div className="p-6 bg-gray-50 rounded-xl shadow-inner mt-6 relative">
//             <button
//               className="absolute top-2 right-2 text-red-600 font-bold hover:text-red-800"
//               onClick={closeFilePreview}
//             >
//               X
//             </button>
//             <h3 className="text-lg font-semibold mb-2">{currentFile.filename}</h3>
//             <p className="text-sm text-gray-500 mb-2">
//               Rows: {currentFile.rowCount || "N/A"} | Size: {currentFile.size ? (currentFile.size / 1024).toFixed(2) + " KB" : "N/A"}
//             </p>
//           </div>
//         )}
//       </div>
//     </Layout>
//   );
// }

// export default ExcelPage;



// import { FiEye, FiTrash2, FiUpload, FiRefreshCw, FiClock } from "react-icons/fi";
// import Layout from "../../Layout/Layout";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   uploadExcelFile,
//   getExcelFiles,
//   deleteExcelFile,
//   getExcelFileById,
//   clearCurrentFile,
// } from "../../Redux/excelSlice";
// import { useEffect, useRef, useState } from "react";

// function ExcelPage() {
//   const dispatch = useDispatch();
//   const { files, currentFile, status } = useSelector((state) => state.excel);
//   const historyRef = useRef(null);

//   const [uploadHistory, setUploadHistory] = useState([]);

//   // Load files on mount
//   useEffect(() => {
//     dispatch(getExcelFiles());
//   }, [dispatch]);

//   // Append new files to history whenever files array changes
//   useEffect(() => {
//     if (Array.isArray(files) && files.length > 0) {
//       setUploadHistory((prevHistory) => {
//         // Append only new files (avoid duplicates)
//         const newFiles = files.filter(
//           (f) => !prevHistory.some((h) => h._id === f._id)
//         );
//         return [...prevHistory, ...newFiles];
//       });
//     }
//   }, [files]);

//   // Handle file upload
//   const handleUpload = async (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       // Upload file
//       const uploadedFile = await dispatch(uploadExcelFile(file));
//       // Refresh files list
//       await dispatch(getExcelFiles());
//       e.target.value = null;

//       // Scroll to history
//       if (historyRef.current) {
//         historyRef.current.scrollIntoView({ behavior: "smooth" });
//       }
//     }
//   };

//   // Load files manually
//   const loadFiles = () => {
//     dispatch(getExcelFiles());
//   };

//   // Scroll to history
//   const captureHistory = () => {
//     if (historyRef.current) {
//       historyRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   // Delete a file
//   const removeFile = (id) => {
//     if (window.confirm("Are you sure you want to delete this file?")) {
//       dispatch(deleteExcelFile(id));
//       // Remove from local history as well
//       setUploadHistory((prev) => prev.filter((f) => f._id !== id));
//     }
//   };

//   // View file content
//   const viewFile = (id) => {
//     dispatch(getExcelFileById(id));
//   };

//   // Close file preview
//   const closeFilePreview = () => {
//     dispatch(clearCurrentFile());
//   };

//   return (
//     <Layout>
//       <div className="p-6 space-y-6">
//         {/* Upload & History Buttons */}
//         <div className="flex flex-wrap items-center gap-3">
//           <label className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-xl cursor-pointer hover:bg-blue-700 transition">
//             <FiUpload className="mr-2" />
//             Upload Excel
//             <input
//               type="file"
//               accept=".xlsx,.xls"
//               onChange={handleUpload}
//               className="hidden"
//             />
//           </label>
//           <button
//             onClick={loadFiles}
//             className="flex items-center px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
//           >
//             <FiRefreshCw className="mr-2" />
//             Load Files
//           </button>
//           <button
//             onClick={captureHistory}
//             className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition"
//           >
//             <FiClock className="mr-2" />
//             View Upload History
//           </button>
//         </div>

//         {/* Loading Indicator */}
//         {status === "loading" && (
//           <p className="text-gray-500 animate-pulse">Loading...</p>
//         )}

//         {/* Upload History */}
//         <div ref={historyRef} className="grid md:grid-cols-2 gap-4">
//           {uploadHistory.length > 0 ? (
//             uploadHistory.map((f) => (
//               <div
//                 key={f._id}
//                 className="p-4 bg-white shadow-md rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center border hover:shadow-lg transition"
//               >
//                 <div className="mb-2 md:mb-0">
//                   <p className="font-medium text-gray-800">{f.filename}</p>
//                   <p className="text-xs text-gray-500">
//                     Uploaded: {f.uploadedAt ? new Date(f.uploadedAt).toLocaleString() : "N/A"}
//                   </p>
//                   {f.size && <p className="text-xs text-gray-500">Size: {(f.size / 1024).toFixed(2)} KB</p>}
//                   {f.rowCount !== undefined && <p className="text-xs text-gray-500">Rows: {f.rowCount}</p>}
//                   {f.uploadedBy && <p className="text-xs text-gray-500">Uploader ID: {f.uploadedBy}</p>}
//                 </div>
//                 <div className="flex gap-2 mt-2 md:mt-0">
//                   <button
//                     onClick={() => viewFile(f._id)}
//                     className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition"
//                     title="View File"
//                   >
//                     <FiEye />
//                   </button>
//                   <button
//                     onClick={() => removeFile(f._id)}
//                     className="p-2 rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition"
//                     title="Delete File"
//                   >
//                     <FiTrash2 />
//                   </button>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <div className="col-span-full text-center text-zinc-300 p-6 bg-white/5 rounded">
//               No files uploaded yet.
//             </div>
//           )}
//         </div>

//         {/* Selected File Preview */}
//         {currentFile && (
//           <div className="p-6 bg-gray-50 rounded-xl shadow-inner mt-6 relative">
//             <button
//               className="absolute top-2 right-2 text-red-600 font-bold hover:text-red-800"
//               onClick={closeFilePreview}
//             >
//               X
//             </button>
//             <h3 className="text-lg font-semibold mb-2">{currentFile.filename}</h3>
//             <p className="text-sm text-gray-500 mb-2">
//               Rows: {currentFile.rowCount || "N/A"} | Size: {currentFile.size ? (currentFile.size / 1024).toFixed(2) + " KB" : "N/A"}
//             </p>
//           </div>
//         )}
//       </div>
//     </Layout>
//   );
// }

// export default ExcelPage;

// import { FiEye, FiTrash2, FiUpload, FiRefreshCw, FiClock, FiDownload } from "react-icons/fi";
// import Layout from "../../Layout/Layout";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   uploadExcelFile,
//   getExcelFiles,
//   deleteExcelFile,
//   getExcelFileById,
//   clearCurrentFile,
// } from "../../Redux/excelSlice";
// import { useEffect, useRef, useState } from "react";
// import * as XLSX from "xlsx";
// import { saveAs } from "file-saver";

// function ExcelPage() {
//   const dispatch = useDispatch();
//   const { files, currentFile, status } = useSelector((state) => state.excel);
//   const historyRef = useRef(null);

//   const [uploadHistory, setUploadHistory] = useState([]);
//   const [excelData, setExcelData] = useState([]); // store parsed data

//   useEffect(() => {
//     dispatch(getExcelFiles());
//   }, [dispatch]);

//   useEffect(() => {
//     if (Array.isArray(files) && files.length > 0) {
//       setUploadHistory((prevHistory) => {
//         const newFiles = files.filter(
//           (f) => !prevHistory.some((h) => h._id === f._id)
//         );
//         return [...prevHistory, ...newFiles];
//       });
//     }
//   }, [files]);

//   const handleUpload = async (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       await dispatch(uploadExcelFile(file));
//       await dispatch(getExcelFiles());
//       e.target.value = null;
//       if (historyRef.current) historyRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   const loadFiles = () => dispatch(getExcelFiles());
//   const captureHistory = () => {
//     if (historyRef.current) historyRef.current.scrollIntoView({ behavior: "smooth" });
//   };
//   const removeFile = (id) => {
//     if (window.confirm("Are you sure you want to delete this file?")) {
//       dispatch(deleteExcelFile(id));
//       setUploadHistory((prev) => prev.filter((f) => f._id !== id));
//     }
//   };
//   const viewFile = async (file) => {
//     dispatch(getExcelFileById(file._id));

//     // Parse Excel data for preview
//     const data = await fetch(file.fileUrl) // fileUrl from backend
//       .then((res) => res.arrayBuffer())
//       .then((ab) => {
//         const workbook = XLSX.read(ab, { type: "array" });
//         const sheetName = workbook.SheetNames[0];
//         const sheet = workbook.Sheets[sheetName];
//         return XLSX.utils.sheet_to_json(sheet, { header: 1 });
//       });
//     setExcelData(data);
//   };
//   const closeFilePreview = () => {
//     dispatch(clearCurrentFile());
//     setExcelData([]);
//   };

//   const downloadExcel = (file) => {
//     fetch(file.fileUrl)
//       .then((res) => res.blob())
//       .then((blob) => saveAs(blob, file.filename));
//   };

//   return (
//     <Layout>
//       <div className="p-6 space-y-6">
//         {/* Upload Buttons */}
//         <div className="flex flex-wrap items-center gap-3">
//           <label className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-xl cursor-pointer hover:bg-blue-700 transition">
//             <FiUpload className="mr-2" />
//             Upload Excel
//             <input type="file" accept=".xlsx,.xls" onChange={handleUpload} className="hidden" />
//           </label>
//           <button onClick={loadFiles} className="flex items-center px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition">
//             <FiRefreshCw className="mr-2" /> Load Files
//           </button>
//           <button onClick={captureHistory} className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition">
//             <FiClock className="mr-2" /> View Upload History
//           </button>
//         </div>

//         {status === "loading" && <p className="text-gray-500 animate-pulse">Loading...</p>}

//         {/* Upload History */}
//         <div ref={historyRef} className="grid md:grid-cols-2 gap-4">
//           {uploadHistory.length > 0 ? (
//             uploadHistory.map((f) => (
//               <div key={f._id} className="p-4 bg-white shadow-md rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center border hover:shadow-lg transition">
//                 <div className="mb-2 md:mb-0">
//                   <p className="font-medium text-gray-800">{f.filename}</p>
//                   <p className="text-xs text-gray-500">{f.uploadedAt ? new Date(f.uploadedAt).toLocaleString() : "N/A"}</p>
//                 </div>
//                 <div className="flex gap-2 mt-2 md:mt-0">
//                   <button onClick={() => viewFile(f)} className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition" title="View File">
//                     <FiEye />
//                   </button>
//                   <button onClick={() => downloadExcel(f)} className="p-2 rounded-full bg-yellow-100 text-yellow-600 hover:bg-yellow-200 transition" title="Download File">
//                     <FiDownload />
//                   </button>
//                   <button onClick={() => removeFile(f._id)} className="p-2 rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition" title="Delete File">
//                     <FiTrash2 />
//                   </button>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <div className="col-span-full text-center text-zinc-300 p-6 bg-white/5 rounded">No files uploaded yet.</div>
//           )}
//         </div>

//         {/* Selected File Preview */}
//         {currentFile && excelData.length > 0 && (
//           <div className="p-6 bg-gray-50 rounded-xl shadow-inner mt-6 relative overflow-auto max-h-[500px]">
//             <button className="absolute top-2 right-2 text-red-600 font-bold hover:text-red-800" onClick={closeFilePreview}>X</button>
//             <h3 className="text-lg font-semibold mb-2">{currentFile.filename}</h3>
//             <table className="table-auto border-collapse border border-gray-300 w-full text-sm">
//               <tbody>
//                 {excelData.map((row, i) => (
//                   <tr key={i}>
//                     {row.map((cell, j) => (
//                       <td key={j} className="border border-gray-300 p-1">{cell}</td>
//                     ))}
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//     </Layout>
//   );
// }

// export default ExcelPage;


// import { FiEye, FiTrash2, FiUpload, FiRefreshCw, FiClock, FiDownload } from "react-icons/fi";
// import Layout from "../../Layout/Layout";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   uploadExcelFile,
//   getExcelFiles,
//   deleteExcelFile,
//   getExcelFileById,
//   clearCurrentFile,
// } from "../../Redux/excelSlice";
// import { useEffect, useRef } from "react";
// import * as XLSX from "xlsx";
// import { saveAs } from "file-saver";

// function ExcelPage() {
//   const dispatch = useDispatch();
//   const { files, currentFile, status } = useSelector((state) => state.excel);
//   const historyRef = useRef(null);

//   // Load all files on mount
//   useEffect(() => {
//     dispatch(getExcelFiles());
//   }, [dispatch]);

//   // Handle file upload
//   const handleUpload = async (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       await dispatch(uploadExcelFile(file));
//       await dispatch(getExcelFiles());
//       e.target.value = null;
//       if (historyRef.current) historyRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   const loadFiles = () => dispatch(getExcelFiles());
//   const captureHistory = () => {
//     if (historyRef.current) historyRef.current.scrollIntoView({ behavior: "smooth" });
//   };

//   const removeFile = (id) => {
//     if (window.confirm("Are you sure you want to delete this file?")) {
//       dispatch(deleteExcelFile(id));
//     }
//   };

//   const viewFile = async (id) => {
//     await dispatch(getExcelFileById(id));
//   };

//   const closeFilePreview = () => dispatch(clearCurrentFile());

//   const downloadFile = (file) => {
//     // If backend provides URL or file content as base64
//     const blob = new Blob([file.data], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
//     saveAs(blob, file.filename);
//   };

//   const renderPreviewTable = (data) => {
//     if (!data || !Array.isArray(data) || data.length === 0) return <p>No data</p>;

//     const headers = Object.keys(data[0]);
//     return (
//         <div className="overflow-x-auto max-h-96">
//           <table className="min-w-full border border-gray-200">
//             <thead className="bg-gray-100 sticky top-0">
//               <tr>
//                 {headers.map((h) => (
//                   <th key={h} className="border px-2 py-1 text-left text-sm">{h}</th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {data.map((row, i) => (
//                 <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
//                   {headers.map((h) => (
//                     <td key={h} className="border px-2 py-1 text-sm">{row[h]}</td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
      
//     );
//   };

//   return (
//     <Layout>
//        <div className="flex justify-center items-center min-h-screen">
//         <div className="p-6 space-y-6">
//           {/* Upload & History Buttons */}
//           <div className="flex flex-wrap items-center gap-3">
//             <label className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-xl cursor-pointer hover:bg-blue-700 transition">
//               <FiUpload className="mr-2" />
//               Upload Excel
//               <input type="file" accept=".xlsx,.xls" onChange={handleUpload} className="hidden" />
//             </label>
//             <button onClick={loadFiles} className="flex items-center px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition">
//               <FiRefreshCw className="mr-2" /> Load Files
//             </button>
//             <button onClick={captureHistory} className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition">
//               <FiClock className="mr-2" /> View Upload History
//             </button>
//           </div>

//           {/* Loading */}
//           {status === "loading" && <p className="text-gray-500 animate-pulse">Loading...</p>}

//           {/* Upload History */}
//           <div ref={historyRef} className="grid md:grid-cols-2 gap-4">
//             {Array.isArray(files) && files.length > 0 ? (
//               files.map((f) => (
//                 <div key={f._id} className="p-4 bg-white shadow-md rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center border hover:shadow-lg transition">
//                   <div className="mb-2 md:mb-0">
//                     <p className="font-medium text-gray-800">{f.filename}</p>
//                     <p className="text-xs text-gray-500">Uploaded: {f.uploadedAt ? new Date(f.uploadedAt).toLocaleString() : "N/A"}</p>
//                     {f.size && <p className="text-xs text-gray-500">Size: {(f.size / 1024).toFixed(2)} KB</p>}
//                   </div>
//                   <div className="flex gap-2 mt-2 md:mt-0">
//                     <button onClick={() => viewFile(f._id)} className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition" title="View File">
//                       <FiEye />
//                     </button>
//                     <button onClick={() => downloadFile(f)} className="p-2 rounded-full bg-yellow-100 text-yellow-600 hover:bg-yellow-200 transition" title="Download File">
//                       <FiDownload />
//                     </button>
//                     <button onClick={() => removeFile(f._id)} className="p-2 rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition" title="Delete File">
//                       <FiTrash2 />
//                     </button>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <div className="col-span-full text-center text-zinc-300 p-6 bg-white/5 rounded">No files uploaded yet.</div>
//             )}
//           </div>

//           {/* Selected File Preview */}
//           {currentFile && (
//             <div className="p-6 bg-gray-50 rounded-xl shadow-inner mt-6 relative">
//               <button className="absolute top-2 right-2 text-red-600 font-bold hover:text-red-800" onClick={closeFilePreview}>X</button>
//               <h3 className="text-lg font-semibold mb-2">{currentFile.filename}</h3>
//               <p className="text-sm text-gray-500 mb-2">Rows: {currentFile.rowCount || "N/A"} | Size: {currentFile.size ? (currentFile.size / 1024).toFixed(2) + " KB" : "N/A"}</p>
//               {renderPreviewTable(currentFile.data)}
//             </div>
//           )}
//         </div>
//       </div>
//     </Layout>
//   );
// }

// export default ExcelPage;


// import { FiEye, FiTrash2, FiUpload, FiRefreshCw, FiDownload } from "react-icons/fi";
// import Layout from "../../Layout/Layout";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   uploadExcelFile,
//   getExcelFiles,
//   deleteExcelFile,
//   getExcelFileById,
//   clearCurrentFile,
// } from "../../Redux/excelSlice";
// import { useEffect, useRef, useState } from "react";
// import * as XLSX from "xlsx";
// import { saveAs } from "file-saver";

// function ExcelPage() {
//   const dispatch = useDispatch();
//   const { files, currentFile, status } = useSelector((state) => state.excel);
//   const historyRef = useRef(null);
//   const [excelData, setExcelData] = useState([]); // JSON array of Excel content

//   useEffect(() => {
//     dispatch(getExcelFiles());
//   }, [dispatch]);

//   const handleUpload = async (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       await dispatch(uploadExcelFile(file));
//       await dispatch(getExcelFiles());
//       e.target.value = null;
//     }
//   };

//   const loadFiles = () => {
//     dispatch(getExcelFiles());
//   };

//   const removeFile = (id) => {
//     if (window.confirm("Are you sure you want to delete this file?")) {
//       dispatch(deleteExcelFile(id));
//     }
//   };

//   const viewFile = async (id) => {
//     // Get file as Blob or ArrayBuffer from backend
//     const res = await dispatch(getExcelFileById(id));

//     if (res.payload) {
//       const fileBlob = new Blob([res.payload.data], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });

//       // Read Excel data
//       const arrayBuffer = await fileBlob.arrayBuffer();
//       const workbook = XLSX.read(arrayBuffer, { type: "array" });
//       const worksheet = workbook.Sheets[workbook.SheetNames[0]];
//       const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 }); // array of rows
//       setExcelData(data);

//       // Save current file info for preview
//       dispatch(getExcelFileById(id));
//     }
//   };

//   const downloadFile = (id, filename) => {
//     const file = files.find((f) => f._id === id);
//     if (!file) return;

//     const blob = new Blob([file.data], {
//       type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
//     });
//     saveAs(blob, filename);
//   };

//   const closeFilePreview = () => {
//     dispatch(clearCurrentFile());
//     setExcelData([]);
//   };

//   return (
//     <Layout>
//       <div className="flex justify-center items-center min-h-screen">
//           <div className="p-6 space-y-6">
//             {/* Upload & Load Buttons */}
//             <div className="flex flex-wrap items-center gap-3">
//               <label className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-xl cursor-pointer hover:bg-blue-700 transition">
//                 <FiUpload className="mr-2" />
//                 Upload Excel
//                 <input type="file" accept=".xlsx,.xls" onChange={handleUpload} className="hidden" />
//               </label>
//               <button
//                 onClick={loadFiles}
//                 className="flex items-center px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
//               >
//                 <FiRefreshCw className="mr-2" /> Load Files
//               </button>
//             </div>

//             {status === "loading" && <p className="text-gray-500 animate-pulse">Loading...</p>}

//             {/* Upload History */}
//             <div ref={historyRef} className="grid md:grid-cols-2 gap-4">
//               {files.length > 0 ? (
//                 files.map((f) => (
//                   <div
//                     key={f._id}
//                     className="p-4 bg-white shadow-md rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center border hover:shadow-lg transition"
//                   >
//                     <div className="mb-2 md:mb-0">
//                       <p className="font-medium text-gray-800">{f.filename}</p>
//                       <p className="text-xs text-gray-500">
//                         Uploaded: {f.uploadedAt ? new Date(f.uploadedAt).toLocaleString() : "N/A"}
//                       </p>
//                     </div>
//                     <div className="flex gap-2 mt-2 md:mt-0">
//                       <button onClick={() => viewFile(f._id)} className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition" title="View File">
//                         <FiEye />
//                       </button>
//                       <button onClick={() => downloadFile(f._id, f.filename)} className="p-2 rounded-full bg-purple-100 text-purple-600 hover:bg-purple-200 transition" title="Download File">
//                         <FiDownload />
//                       </button>
//                       <button onClick={() => removeFile(f._id)} className="p-2 rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition" title="Delete File">
//                         <FiTrash2 />
//                       </button>
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <div className="col-span-full text-center text-zinc-300 p-6 bg-white/5 rounded">No files uploaded yet.</div>
//               )}
//             </div>

//             {/* Selected File Preview */}
//             {currentFile && excelData.length > 0 && (
//               <div className="p-6 bg-gray-50 rounded-xl shadow-inner mt-6 relative overflow-x-auto">
//                 <button
//                   className="absolute top-2 right-2 text-red-600 font-bold hover:text-red-800"
//                   onClick={closeFilePreview}
//                 >
//                   X
//                 </button>
//                 <h3 className="text-lg font-semibold mb-2">{currentFile.filename}</h3>

//                 <table className="table-auto border-collapse border border-gray-300 w-full text-sm">
//                   <tbody>
//                     {excelData.map((row, i) => (
//                       <tr key={i}>
//                         {row.map((cell, j) => (
//                           <td key={j} className="border px-2 py-1">
//                             {cell}
//                           </td>
//                         ))}
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             )}
//           </div>
//         </div>
//     </Layout>
//   );
// }

// export default ExcelPage;


// ExcelPage.jsx
// import React, { useEffect, useRef, useState } from "react";
// import { FiEye, FiTrash2, FiUpload, FiClock, FiDownload, FiPlay } from "react-icons/fi";
// import Layout from "../../Layout/Layout";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   uploadExcelFile,
//   getExcelFiles,
//   deleteExcelFile,
//   getExcelFileById,
//   clearCurrentFile,
// } from "../../Redux/excelSlice";
// import { saveAs } from "file-saver";
// import {
//   Chart as ChartJS,
//   BarElement,
//   LineElement,
//   PointElement,
//   ArcElement,
//   CategoryScale,
//   LinearScale,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { Bar, Line, Pie, Scatter } from "react-chartjs-2";

// ChartJS.register(
//   BarElement,
//   LineElement,
//   PointElement,
//   ArcElement,
//   CategoryScale,
//   LinearScale,
//   Tooltip,
//   Legend
// );

// export default function ExcelPage() {
//   const dispatch = useDispatch();
//   const { files = [], currentFile = null, status } = useSelector((state) => state.excel || {});
//   const historyRef = useRef(null);
//   const chartRef = useRef(null);

//   // local UI state
//   const [selectedForAnalysis, setSelectedForAnalysis] = useState(null); // file id
//   const [analyzingData, setAnalyzingData] = useState([]); // array of objects
//   const [columns, setColumns] = useState([]);
//   const [xAxis, setXAxis] = useState("");
//   const [yAxis, setYAxis] = useState("");
//   const [chartType, setChartType] = useState("bar");
//   const [analyzeOpen, setAnalyzeOpen] = useState(false);

//   // initial load
//   useEffect(() => {
//     dispatch(getExcelFiles());
//   }, [dispatch]);

//   // helper: refresh files
//   const refreshFiles = async () => {
//     await dispatch(getExcelFiles());
//   };

//   // Upload
//   const handleUpload = async (e) => {
//     const file = e.target.files?.[0];
//     if (!file) return;
//     try {
//       const res = await dispatch(uploadExcelFile(file));
//       // refresh list
//       await refreshFiles();
//       // if backend returns created file (id in payload) then fetch it for preview/analysis
//       const payload = res?.payload;
//       const id = payload?.file?._id || payload?._id || payload?.id;
//       if (id) {
//         // open analysis automatically for latest uploaded
//         await dispatch(getExcelFileById(id));
//         setSelectedForAnalysis(id);
//         // copy to analyzingData from currentFile is handled by redux get -> currentFile updates,
//         // but to ensure immediate state set, we can store payload.file.data if present:
//         if (payload?.file?.data && Array.isArray(payload.file.data)) {
//           setAnalyzingData(payload.file.data);
//           const keys = payload.file.data[0] ? Object.keys(payload.file.data[0]) : [];
//           setColumns(keys);
//           setXAxis(keys[0] || "");
//           setYAxis(keys[1] || "");
//           setAnalyzeOpen(true);
//         }
//       }
//     } finally {
//       // reset input value to allow same-file re-upload if needed
//       e.target.value = null;
//       if (historyRef.current) historyRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   // Delete
//   const removeFile = (id) => {
//     if (!window.confirm("Are you sure you want to delete this file?")) return;
//     dispatch(deleteExcelFile(id)).then(() => {
//       // refresh list after delete
//       refreshFiles();
//       if (selectedForAnalysis === id) {
//         setSelectedForAnalysis(null);
//         setAnalyzingData([]);
//         setAnalyzeOpen(false);
//         dispatch(clearCurrentFile());
//       }
//     });
//   };

//   // View file preview only (fetches parsed rows from backend)
//   const viewFile = async (id) => {
//     const res = await dispatch(getExcelFileById(id));
//     // `getExcelFileById` should populate redux currentFile. But we also want local analyzing data.
//     const payload = res?.payload;
//     const fileObj = payload?.file || payload;
//     if (fileObj && fileObj.data && Array.isArray(fileObj.data)) {
//       setAnalyzingData(fileObj.data);
//       const keys = fileObj.data[0] ? Object.keys(fileObj.data[0]) : [];
//       setColumns(keys);
//       setXAxis(keys[0] || "");
//       setYAxis(keys[1] || "");
//       setSelectedForAnalysis(id);
//       setAnalyzeOpen(false);
//       // scroll to preview
//       setTimeout(() => historyRef.current?.scrollIntoView({ behavior: "smooth" }), 60);
//     } else {
//       // try reading currentFile from redux if controller returned differently
//       if (currentFile && currentFile.data && Array.isArray(currentFile.data)) {
//         setAnalyzingData(currentFile.data);
//         const keys = currentFile.data[0] ? Object.keys(currentFile.data[0]) : [];
//         setColumns(keys);
//         setXAxis(keys[0] || "");
//         setYAxis(keys[1] || "");
//         setSelectedForAnalysis(id);
//         setAnalyzeOpen(false);
//       } else {
//         // no structured data
//         setAnalyzingData([]);
//         setColumns([]);
//         setXAxis("");
//         setYAxis("");
//         setSelectedForAnalysis(id);
//       }
//     }
//   };

//   // Analyze button opens chart builder with fresh fetch
//   const analyzeFile = async (id) => {
//     await dispatch(getExcelFileById(id));
//     // use currentFile if redux filled it, otherwise payload
//     const f = (await dispatch(getExcelFileById(id))).payload;
//     const fileObj = f?.file || f;
//     let rows = [];
//     if (fileObj && fileObj.data && Array.isArray(fileObj.data)) {
//       rows = fileObj.data;
//     } else if (currentFile && currentFile.data && Array.isArray(currentFile.data)) {
//       rows = currentFile.data;
//     }
//     setAnalyzingData(rows);
//     const keys = rows[0] ? Object.keys(rows[0]) : [];
//     setColumns(keys);
//     setXAxis(keys[0] || "");
//     setYAxis(keys[1] || "");
//     setSelectedForAnalysis(id);
//     setAnalyzeOpen(true);
//     setTimeout(() => historyRef.current?.scrollIntoView({ behavior: "smooth" }), 60);
//   };

//   // Download raw JSON of file
//   const downloadRawJson = (file) => {
//     const blob = new Blob([JSON.stringify(file, null, 2)], { type: "application/json" });
//     saveAs(blob, `${file.filename || "excel-file"}.json`);
//   };

//   // Download displayed chart as PNG
//   const downloadChart = () => {
//     if (!chartRef.current) return;
//     try {
//       const url = chartRef.current.toBase64Image();
//       const a = document.createElement("a");
//       a.href = url;
//       a.download = `${selectedForAnalysis || "chart"}.png`;
//       a.click();
//     } catch (err) {
//       console.error("downloadChart error", err);
//       alert("Failed to export chart image.");
//     }
//   };

//   // build chart data for chart.js
//   const buildChartData = () => {
//     if (!analyzingData || analyzingData.length === 0 || !xAxis) return null;
//     // normalize rows: sometimes rows are stored as { fields: { A:..., B:... } }
//     const rows =
//       analyzingData[0] && analyzingData[0].fields ? analyzingData.map((r) => r.fields) : analyzingData;

//     const labels = rows.map((r) => (r[xAxis] !== undefined ? String(r[xAxis]) : ""));
//     const yValues = rows.map((r) => {
//       const v = r[yAxis];
//       const n = Number(v);
//       return Number.isFinite(n) ? n : 0;
//     });

//     return {
//       labels,
//       datasets: [
//         {
//           label: yAxis || "value",
//           data: yValues,
//           backgroundColor: "rgba(54, 162, 235, 0.6)",
//           borderColor: "rgba(54, 162, 235, 1)",
//           borderWidth: 1,
//         },
//       ],
//     };
//   };

//   const chartData = buildChartData();

//   // render chosen chart
//   const renderChart = () => {
//     if (!chartData) return <div className="text-gray-500">Select file + columns to render a chart.</div>;
//     const common = { data: chartData, options: { responsive: true }, ref: chartRef };
//     switch (chartType) {
//       case "bar":
//         return <Bar {...common} />;
//       case "line":
//         return <Line {...common} />;
//       case "pie":
//         // pie expects aggregated numeric values per label; here we pass dataset as-is and it will render
//         return <Pie {...common} />;
//       case "scatter":
//         // transform to scatter format
//         const rows = analyzingData[0] && analyzingData[0].fields ? analyzingData.map((r) => r.fields) : analyzingData;
//         const scatterPoints = rows.map((r) => {
//           const x = r[xAxis];
//           const y = Number(r[yAxis]);
//           return { x: Number.isFinite(Number(x)) ? Number(x) : String(x), y: Number.isFinite(y) ? y : 0 };
//         });
//         return <Scatter ref={chartRef} data={{ datasets: [{ label: yAxis, data: scatterPoints }] }} options={{ responsive: true }} />;
//       default:
//         return <Bar {...common} />;
//     }
//   };

//   // Render preview table for currentFile or analyzingData
//   const renderPreviewTable = (data) => {
//     if (!data || !Array.isArray(data) || data.length === 0) return <p className="text-sm text-gray-500">No tabular data available.</p>;

//     const rows = data[0] && data[0].fields ? data.map((r) => r.fields) : data;
//     const headers = Object.keys(rows[0] || {});
//     return (
//       <div className="overflow-x-auto max-h-96 border rounded">
//         <table className="min-w-full text-sm">
//           <thead className="bg-gray-100 sticky top-0">
//             <tr>
//               {headers.map((h) => (
//                 <th key={h} className="px-2 py-1 text-left border">{h}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {rows.map((row, i) => (
//               <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
//                 {headers.map((h) => (
//                   <td key={h} className="px-2 py-1 border">{String(row[h] ?? "")}</td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
//   };

//   return (
//     <Layout>
//       <div className="p-6">
//         <div className="max-w-6xl mx-auto space-y-6">
//           {/* header + actions */}
//           <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
//             <h2 className="text-2xl font-semibold">Excel Manager & Chart Builder</h2>
//             <div className="flex flex-wrap gap-3">
//               <label className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer">
//                 <FiUpload /> Upload Excel
//                 <input type="file" accept=".xlsx,.xls,.csv" onChange={handleUpload} className="hidden" />
//               </label>

//               <button onClick={refreshFiles} className="px-4 py-2 bg-green-600 text-white rounded-lg flex items-center gap-2">
//                 <FiClock /> Refresh History
//               </button>
//             </div>
//           </div>

//           {/* files history */}
//           <section ref={historyRef} className="grid md:grid-cols-2 gap-4">
//             {Array.isArray(files) && files.length > 0 ? (
//               files.map((f) => (
//                 <div key={f._id} className="p-4 bg-white rounded-lg shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
//                   <div className="flex-1 min-w-0">
//                     <div className="flex items-center gap-3">
//                       <div className="truncate">
//                         <p className="font-medium text-gray-800 truncate">{f.filename}</p>
//                         <p className="text-xs text-gray-500">
//                           Uploaded: {f.uploadedAt ? new Date(f.uploadedAt).toLocaleString() : "N/A"}
//                           {f.size ? ` • ${(f.size / 1024).toFixed(2)} KB` : ""}
//                         </p>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="flex gap-2">
//                     <button onClick={() => viewFile(f._id)} title="Preview" className="p-2 bg-blue-100 rounded text-blue-600">
//                       <FiEye />
//                     </button>

//                     <button onClick={() => analyzeFile(f._id)} title="Analyze & Chart" className="p-2 bg-indigo-100 rounded text-indigo-700 flex items-center gap-2">
//                       <FiPlay /> Analyze
//                     </button>

//                     <button onClick={() => downloadRawJson(f)} title="Download JSON" className="p-2 bg-yellow-100 rounded text-yellow-700">
//                       <FiDownload />
//                     </button>

//                     <button onClick={() => removeFile(f._id)} title="Delete" className="p-2 bg-red-100 rounded text-red-600">
//                       <FiTrash2 />
//                     </button>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <div className="col-span-full p-6 bg-white rounded text-center text-gray-500">No files uploaded yet.</div>
//             )}
//           </section>

//           {/* preview + chart builder area */}
//           <section className="bg-white rounded-lg p-4 shadow">
//             <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
//               <h3 className="text-lg font-medium">{analyzeOpen ? "Chart Builder" : selectedForAnalysis ? "Preview" : "Select a file to preview / analyze"}</h3>

//               {selectedForAnalysis && (
//                 <div className="flex flex-wrap gap-2 items-center">
//                   <label className="text-sm">
//                     X:
//                     <select value={xAxis} onChange={(e) => setXAxis(e.target.value)} className="ml-2 px-2 py-1 border rounded">
//                       <option value="">--</option>
//                       {columns.map((c) => <option key={c} value={c}>{c}</option>)}
//                     </select>
//                   </label>

//                   <label className="text-sm">
//                     Y:
//                     <select value={yAxis} onChange={(e) => setYAxis(e.target.value)} className="ml-2 px-2 py-1 border rounded">
//                       <option value="">--</option>
//                       {columns.map((c) => <option key={c} value={c}>{c}</option>)}
//                     </select>
//                   </label>

//                   <label className="text-sm">
//                     Type:
//                     <select value={chartType} onChange={(e) => setChartType(e.target.value)} className="ml-2 px-2 py-1 border rounded">
//                       <option value="bar">Bar</option>
//                       <option value="line">Line</option>
//                       <option value="pie">Pie</option>
//                       <option value="scatter">Scatter</option>
//                     </select>
//                   </label>

//                   <button onClick={() => setAnalyzeOpen(true)} className="px-3 py-1 bg-indigo-600 text-white rounded">Open Builder</button>
//                   <button onClick={downloadChart} className="px-3 py-1 bg-gray-800 text-white rounded">Download Chart PNG</button>
//                 </div>
//               )}
//             </div>

//             {/* if analyzeOpen show chart builder */}
//             {analyzeOpen ? (
//               <div className="grid md:grid-cols-2 gap-4">
//                 <div>
//                   <div className="mb-3 font-medium">Chart</div>
//                   <div className="border p-3 rounded min-h-[280px] flex items-center justify-center">
//                     {renderChart()}
//                   </div>
//                 </div>

//                 <div>
//                   <div className="mb-3 font-medium">Preview Table</div>
//                   {renderPreviewTable(analyzingData.length ? analyzingData : currentFile?.data)}
//                 </div>
//               </div>
//             ) : (
//               // preview mode
//               <div>
//                 {selectedForAnalysis ? (
//                   <div>
//                     <div className="mb-3 font-medium">Preview Table</div>
//                     {renderPreviewTable(analyzingData.length ? analyzingData : currentFile?.data)}
//                   </div>
//                 ) : (
//                   <div className="text-sm text-gray-500">Pick "Preview" or "Analyze" on any file in the history list.</div>
//                 )}
//               </div>
//             )}
//           </section>
//         </div>
//       </div>
//     </Layout>
//   );
// }



// import React, { useEffect, useRef, useState } from "react";
// import { FiEye, FiTrash2, FiUpload, FiClock, FiDownload, FiPlay } from "react-icons/fi";
// import Layout from "../../Layout/Layout";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   uploadExcelFile,
//   getExcelFiles,
//   deleteExcelFile,
//   getExcelFileById,
//   clearCurrentFile,
// } from "../../Redux/excelSlice";
// import { saveAs } from "file-saver";
// import {
//   Chart as ChartJS,
//   BarElement,
//   LineElement,
//   PointElement,
//   ArcElement,
//   CategoryScale,
//   LinearScale,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { Bar, Line, Pie, Scatter } from "react-chartjs-2";

// ChartJS.register(
//   BarElement,
//   LineElement,
//   PointElement,
//   ArcElement,
//   CategoryScale,
//   LinearScale,
//   Tooltip,
//   Legend
// );

// export default function ExcelPage() {
//   const dispatch = useDispatch();
//   const { files = [], currentFile = null } = useSelector((state) => state.excel || {});
//   const historyRef = useRef(null);
//   const chartRef = useRef(null);

//   // local UI state
//   const [selectedForAnalysis, setSelectedForAnalysis] = useState(null);
//   const [analyzingData, setAnalyzingData] = useState([]);
//   const [columns, setColumns] = useState([]);
//   const [xAxis, setXAxis] = useState("");
//   const [yAxis, setYAxis] = useState("");
//   const [chartType, setChartType] = useState("bar");
//   const [analyzeOpen, setAnalyzeOpen] = useState(false);

//   // new states for filtering
//   const [selectedColumns, setSelectedColumns] = useState([]);
//   const [rowRange, setRowRange] = useState({ start: 0, end: 50 });

//   // initial load
//   useEffect(() => {
//     dispatch(getExcelFiles());
//   }, [dispatch]);

//   const refreshFiles = async () => {
//     await dispatch(getExcelFiles());
//   };

//   // Upload
//   const handleUpload = async (e) => {
//     const file = e.target.files?.[0];
//     if (!file) return;
//     try {
//       const res = await dispatch(uploadExcelFile(file));
//       await refreshFiles();

//       const payload = res?.payload;
//       const id = payload?.file?._id || payload?._id || payload?.id;
//       if (id) {
//         await dispatch(getExcelFileById(id));
//         setSelectedForAnalysis(id);

//         if (payload?.file?.data && Array.isArray(payload.file.data)) {
//           setAnalyzingData(payload.file.data);
//           const keys = payload.file.data[0] ? Object.keys(payload.file.data[0]) : [];
//           setColumns(keys);
//           setXAxis(keys[0] || "");
//           setYAxis(keys[1] || "");
//           setSelectedColumns(keys);
//           setAnalyzeOpen(true);
//         }
//       }
//     } finally {
//       e.target.value = null;
//       historyRef.current?.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   // Delete
//   const removeFile = (id) => {
//     if (!window.confirm("Are you sure you want to delete this file?")) return;
//     dispatch(deleteExcelFile(id)).then(() => {
//       refreshFiles();
//       if (selectedForAnalysis === id) {
//         setSelectedForAnalysis(null);
//         setAnalyzingData([]);
//         setAnalyzeOpen(false);
//         dispatch(clearCurrentFile());
//       }
//     });
//   };

//   // View file preview
//   const viewFile = async (id) => {
//     const res = await dispatch(getExcelFileById(id));
//     const payload = res?.payload;
//     const fileObj = payload?.file || payload;
//     if (fileObj && fileObj.data && Array.isArray(fileObj.data)) {
//       setAnalyzingData(fileObj.data);
//       const keys = fileObj.data[0] ? Object.keys(fileObj.data[0]) : [];
//       setColumns(keys);
//       setXAxis(keys[0] || "");
//       setYAxis(keys[1] || "");
//       setSelectedColumns(keys);
//       setSelectedForAnalysis(id);
//       setAnalyzeOpen(false);
//     }
//   };

//   // Analyze
//   const analyzeFile = async (id) => {
//     const res = await dispatch(getExcelFileById(id));
//     const fileObj = res?.payload?.file || res?.payload;
//     let rows = [];
//     if (fileObj && fileObj.data && Array.isArray(fileObj.data)) {
//       rows = fileObj.data;
//     } else if (currentFile && currentFile.data && Array.isArray(currentFile.data)) {
//       rows = currentFile.data;
//     }
//     setAnalyzingData(rows);
//     const keys = rows[0] ? Object.keys(rows[0]) : [];
//     setColumns(keys);
//     setXAxis(keys[0] || "");
//     setYAxis(keys[1] || "");
//     setSelectedColumns(keys);
//     setSelectedForAnalysis(id);
//     setAnalyzeOpen(true);
//   };

//   // Download JSON
//   const downloadRawJson = (file) => {
//     const blob = new Blob([JSON.stringify(file, null, 2)], { type: "application/json" });
//     saveAs(blob, `${file.filename || "excel-file"}.json`);
//   };

//   // Download Chart
//   const downloadChart = () => {
//     if (!chartRef.current) return;
//     try {
//       const url = chartRef.current.toBase64Image();
//       const a = document.createElement("a");
//       a.href = url;
//       a.download = `${selectedForAnalysis || "chart"}.png`;
//       a.click();
//     } catch (err) {
//       console.error("downloadChart error", err);
//       alert("Failed to export chart image.");
//     }
//   };

//   // toggle column
//   const toggleColumn = (col) => {
//     setSelectedColumns((prev) =>
//       prev.includes(col) ? prev.filter((c) => c !== col) : [...prev, col]
//     );
//   };

//   // filter data
//   const getFilteredData = () => {
//     if (!analyzingData || !analyzingData.length) return [];
//     let rows = analyzingData[0]?.fields ? analyzingData.map((r) => r.fields) : analyzingData;

//     // row slicing
//     rows = rows.slice(rowRange.start, rowRange.end);

//     // column filtering
//     if (selectedColumns.length > 0) {
//       rows = rows.map((r) =>
//         Object.fromEntries(Object.entries(r).filter(([k]) => selectedColumns.includes(k)))
//       );
//     }

//     return rows;
//   };

//   // Chart Data
//   const buildChartData = () => {
//     const rows = getFilteredData();
//     if (!rows.length || !xAxis || !yAxis) return null;

//     const labels = rows.map((r) => String(r[xAxis] ?? ""));
//     const yValues = rows.map((r) => {
//       const v = r[yAxis];
//       const n = Number(v);
//       return Number.isFinite(n) ? n : 0;
//     });

//     return {
//       labels,
//       datasets: [
//         {
//           label: yAxis || "value",
//           data: yValues,
//           backgroundColor: "rgba(54, 162, 235, 0.6)",
//           borderColor: "rgba(54, 162, 235, 1)",
//           borderWidth: 1,
//         },
//       ],
//     };
//   };

//   const chartData = buildChartData();

//   const renderChart = () => {
//     if (!chartData) return <div className="text-gray-500">Select file + columns to render chart.</div>;
//     const common = { data: chartData, options: { responsive: true }, ref: chartRef };
//     switch (chartType) {
//       case "bar":
//         return <Bar {...common} />;
//       case "line":
//         return <Line {...common} />;
//       case "pie":
//         return <Pie {...common} />;
//       case "scatter":
//         const rows = getFilteredData();
//         const scatterPoints = rows.map((r) => {
//           const x = Number(r[xAxis]);
//           const y = Number(r[yAxis]);
//           return { x: Number.isFinite(x) ? x : 0, y: Number.isFinite(y) ? y : 0 };
//         });
//         return (
//           <Scatter
//             ref={chartRef}
//             data={{ datasets: [{ label: yAxis, data: scatterPoints }] }}
//             options={{ responsive: true }}
//           />
//         );
//       default:
//         return <Bar {...common} />;
//     }
//   };

//   // Table preview
//   const renderPreviewTable = (data) => {
//     if (!data || !Array.isArray(data) || data.length === 0)
//       return <p className="text-sm text-gray-500">No data available.</p>;

//     const rows = data[0]?.fields ? data.map((r) => r.fields) : data;
//     const headers = Object.keys(rows[0] || {});
//     return (
//       <div className="overflow-x-auto max-h-96 border rounded">
//         <table className="min-w-full text-sm">
//           <thead className="bg-gray-100 sticky top-0">
//             <tr>
//               {headers.map((h) => (
//                 <th key={h} className="px-2 py-1 text-left border">
//                   {h}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {rows.map((row, i) => (
//               <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
//                 {headers.map((h) => (
//                   <td key={h} className="px-2 py-1 border">
//                     {String(row[h] ?? "")}
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
//   };

//   return (
//     <Layout>
//       <div className="p-6 bg-black">
//         <div className="max-w-6xl mx-auto space-y-6">
//           {/* header + actions */}
//           <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
//             <h2 className="text-2xl font-semibold">Excel Manager & Chart Builder</h2>
//             <div className="flex flex-wrap gap-3">
//               <label className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer">
//                 <FiUpload /> Upload Excel
//                 <input type="file" accept=".xlsx,.xls,.csv" onChange={handleUpload} className="hidden" />
//               </label>

//               <button
//                 onClick={refreshFiles}
//                 className="px-4 py-2 bg-green-600 text-white rounded-lg flex items-center gap-2"
//               >
//                 <FiClock /> Refresh History
//               </button>
//             </div>
//           </div>

//           {/* files history */}
//           <section ref={historyRef} className="grid md:grid-cols-2 gap-4">
//             {Array.isArray(files) && files.length > 0 ? (
//               files.map((f) => (
//                 <div
//                   key={f._id}
//                   className="p-4 bg-white rounded-lg shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-3"
//                 >
//                   <div className="flex-1 min-w-0">
//                     <p className="font-medium text-gray-800 truncate">{f.filename}</p>
//                     <p className="text-xs text-gray-500">
//                       Uploaded: {f.uploadedAt ? new Date(f.uploadedAt).toLocaleString() : "N/A"}
//                       {f.size ? ` • ${(f.size / 1024).toFixed(2)} KB` : ""}
//                     </p>
//                   </div>

//                   <div className="flex gap-2">
//                     <button
//                       onClick={() => viewFile(f._id)}
//                       title="Preview"
//                       className="p-2 bg-blue-100 rounded text-blue-600"
//                     >
//                       <FiEye />
//                     </button>

//                     <button
//                       onClick={() => analyzeFile(f._id)}
//                       title="Analyze & Chart"
//                       className="p-2 bg-indigo-100 rounded text-indigo-700 flex items-center gap-2"
//                     >
//                       <FiPlay /> Analyze
//                     </button>

//                     <button
//                       onClick={() => downloadRawJson(f)}
//                       title="Download JSON"
//                       className="p-2 bg-yellow-100 rounded text-yellow-700"
//                     >
//                       <FiDownload />
//                     </button>

//                     <button
//                       onClick={() => removeFile(f._id)}
//                       title="Delete"
//                       className="p-2 bg-red-100 rounded text-red-600"
//                     >
//                       <FiTrash2 />
//                     </button>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <div className="col-span-full p-6 bg-white rounded text-center text-gray-500">
//                 No files uploaded yet.
//               </div>
//             )}
//           </section>

//           {/* preview + chart builder area */}
//           <section className="bg-black rounded-lg p-4 shadow">
//             <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
//               <h3 className="text-lg font-medium">
//                 {analyzeOpen ? "Chart Builder" : selectedForAnalysis ? "Preview" : "Select a file"}
//               </h3>

//               {selectedForAnalysis && (
//                 <div className="flex flex-wrap gap-2 items-center">
//                   <label className="text-sm">
//                     X:
//                     <select
//                       value={xAxis}
//                       onChange={(e) => setXAxis(e.target.value)}
//                       className="ml-2 px-2 py-1 border rounded"
//                     >
//                       <option value="">--</option>
//                       {columns.map((c) => (
//                         <option key={c} value={c}>
//                           {c}
//                         </option>
//                       ))}
//                     </select>
//                   </label>

//                   <label className="text-sm">
//                     Y:
//                     <select
//                       value={yAxis}
//                       onChange={(e) => setYAxis(e.target.value)}
//                       className="ml-2 px-2 py-1 border rounded"
//                     >
//                       <option value="">--</option>
//                       {columns.map((c) => (
//                         <option key={c} value={c}>
//                           {c}
//                         </option>
//                       ))}
//                     </select>
//                   </label>

//                   <label className="text-sm">
//                     Type:
//                     <select
//                       value={chartType}
//                       onChange={(e) => setChartType(e.target.value)}
//                       className="ml-2 px-2 py-1 border rounded"
//                     >
//                       <option value="bar">Bar</option>
//                       <option value="line">Line</option>
//                       <option value="pie">Pie</option>
//                       <option value="scatter">Scatter</option>
//                     </select>
//                   </label>

//                   <button onClick={() => setAnalyzeOpen(true)} className="px-3 py-1 bg-indigo-600 text-white rounded">
//                     Open Builder
//                   </button>
//                   <button onClick={downloadChart} className="px-3 py-1 bg-gray-800 text-white rounded">
//                     Download Chart PNG
//                   </button>
//                 </div>
//               )}
//             </div>

//             {analyzeOpen ? (
//               <div className="grid md:grid-cols-2 gap-4">
//                 <div>
//                   {/* Column selector */}
//                   <div className="mb-4">
//                     <p className="font-medium mb-2">Select Columns:</p>
//                     <div className="flex flex-wrap gap-3">
//                       {columns.map((c) => (
//                         <label key={c} className="flex items-center gap-2 text-sm">
//                           <input
//                             type="checkbox"
//                             checked={selectedColumns.includes(c)}
//                             onChange={() => toggleColumn(c)}
//                           />
//                           {c}
//                         </label>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Row range selector */}
//                   <div className="mb-4 flex items-center gap-3">
//                     <label className="text-sm">
//                       Start Row:
//                       <input
//                         type="number"
//                         min="0"
//                         value={rowRange.start}
//                         onChange={(e) => setRowRange({ ...rowRange, start: +e.target.value })}
//                         className="ml-2 w-20 border rounded px-1 py-0.5"
//                       />
//                     </label>
//                     <label className="text-sm">
//                       End Row:
//                       <input
//                         type="number"
//                         min="1"
//                         value={rowRange.end}
//                         onChange={(e) => setRowRange({ ...rowRange, end: +e.target.value })}
//                         className="ml-2 w-20 border rounded px-1 py-0.5"
//                       />
//                     </label>
//                   </div>

//                   <div className="mb-3 font-medium">Chart</div>
//                   <div className="border p-3 rounded min-h-[280px] flex items-center justify-center">
//                     {renderChart()}
//                   </div>
//                 </div>

//                 <div>
//                   <div className="mb-3 font-medium bg-black">Preview Table</div>
//                   {renderPreviewTable(getFilteredData())}
//                 </div>
//               </div>
//             ) : (
//               <div>
//                 {selectedForAnalysis ? (
//                   <div>
//                     <div className="mb-3 font-medium">Preview Table</div>
//                     {renderPreviewTable(analyzingData.length ? analyzingData : currentFile?.data)}
//                   </div>
//                 ) : (
//                   <div className="text-sm text-white-500">
//                     Pick "Preview" or "Analyze" on any file in the history list.
//                   </div>
//                 )}
//               </div>
//             )}
//           </section>
//         </div>
//       </div>
//     </Layout>
//   );
// }


// src/pages/excel/ExcelPage.jsx
// import React, { useEffect, useRef, useState } from "react";
// import { FiEye, FiTrash2, FiUpload, FiClock, FiDownload, FiPlay } from "react-icons/fi";
// import Layout from "../../Layout/Layout";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   uploadExcelFile,
//   getExcelFiles,
//   deleteExcelFile,
//   getExcelFileById,
//   clearCurrentFile,
// } from "../../Redux/excelSlice";
// import { saveAs } from "file-saver";

// import {
//   Chart as ChartJS,
//   BarElement,
//   LineElement,
//   PointElement,
//   ArcElement,
//   CategoryScale,
//   LinearScale,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { Bar, Line, Pie, Scatter } from "react-chartjs-2";

// ChartJS.register(
//   BarElement,
//   LineElement,
//   PointElement,
//   ArcElement,
//   CategoryScale,
//   LinearScale,
//   Tooltip,
//   Legend
// );

// import Highcharts from "highcharts";
// import HighchartsReact from "highcharts-react-official";
// import highcharts3d from "highcharts/highcharts-3d";

// // Enable 3D module
// highcharts3d(Highcharts);

// const options = {
//   chart: {
//     type: "column",
//     options3d: {
//       enabled: true,
//       alpha: 15,
//       beta: 15,
//       depth: 50,
//       viewDistance: 25
//     }
//   },
//   title: { text: "3D Column Chart" },
//   xAxis: { categories: getFilteredRows().map(r => r[xAxis]) },
//   yAxis: { title: { text: yAxis } },
//   series: [
//     {
//       name: yAxis,
//       data: getFilteredRows().map(r => Number(r[yAxis]) || 0)
//     }
//   ]
// };


// /**
//  * ExcelPage
//  * - Upload files
//  * - Show persisted history (from backend)
//  * - Preview sheets & rows (sample up to 200 rows)
//  * - Select columns (X/Y), chart type and render charts
//  * - Download chart PNG / JSON
//  *
//  * Assumptions:
//  * - getExcelFiles returns an array of file metadata: [{ _id, filename, uploadedAt, size, ... }]
//  * - getExcelFileById returns an object with parsed data, either:
//  *    { data: [ {col1: val, col2: val}, ... ] }   // single-sheet format
//  *    OR
//  *    { sheets: [ { name: 'Sheet1', rows: [...] }, ... ] } // multi-sheet format
//  * - uploadExcelFile returns created file object (payload.file or payload)
//  */

// export default function ExcelPage() {
//   const dispatch = useDispatch();
//   // fallback if state shape not present
//   const { files = [], currentFile = null, status = "idle" } = useSelector((s) => s.excel || {});

//   const historyRef = useRef(null);
//   const chartRef = useRef(null);

//   // UI state
//   const [selectedFileId, setSelectedFileId] = useState(null);
//   const [availableSheets, setAvailableSheets] = useState([]); // [{name, rows}]
//   const [selectedSheetIndex, setSelectedSheetIndex] = useState(0);
//   const [rows, setRows] = useState([]); // currently active rows (sampled)
//   const [columns, setColumns] = useState([]);
//   const [xAxis, setXAxis] = useState("");
//   const [yAxis, setYAxis] = useState("");
//   const [chartType, setChartType] = useState("bar");
//   const [selectedColumns, setSelectedColumns] = useState([]);
//   const [rowRange, setRowRange] = useState({ start: 0, end: 200 });
//   const [analyzeOpen, setAnalyzeOpen] = useState(false);
//   const MAX_SAMPLE = 200; // sample for preview & charts

//   // load persisted history on mount
//   useEffect(() => {
//     dispatch(getExcelFiles());
//   }, [dispatch]);

//   // helper to normalize backend file object into sheets list:
//   // - if file.sheets exists -> use that
//   // - else if file.data exists -> treat as single sheet named filename
//   // - else if file.file?.sheets etc. -> support nested payloads
//   function normalizeFileIntoSheets(fileObj) {
//     if (!fileObj) return [];
//     const f = fileObj.file || fileObj;
//     if (Array.isArray(f.sheets) && f.sheets.length > 0) {
//       return f.sheets.map((s) => ({ name: s.name || "Sheet", rows: Array.isArray(s.rows) ? s.rows.slice(0, MAX_SAMPLE) : [] }));
//     }
//     if (Array.isArray(f.data) && f.data.length >= 0) {
//       return [{ name: f.filename || "Sheet1", rows: f.data.slice(0, MAX_SAMPLE) }];
//     }
//     // If older format where `data` stored in `data` property but rows as {fields:...}
//     if (Array.isArray(f.data) && f.data.length > 0) {
//       return [{ name: f.filename || "Sheet1", rows: f.data.slice(0, MAX_SAMPLE) }];
//     }
//     return [];
//   }

//   // Called after we fetch a file (preview or analyze)
//   function hydrateFromFetchedFile(fileObj) {
//     const sheets = normalizeFileIntoSheets(fileObj);
//     setAvailableSheets(sheets);
//     setSelectedSheetIndex(0);
//     const firstRows = (sheets[0] && sheets[0].rows) || [];
//     setRows(firstRows);
//     const keys = firstRows[0] ? Object.keys(stripFields(firstRows[0])) : [];
//     setColumns(keys);
//     setSelectedColumns(keys.slice()); // default all
//     setXAxis(keys[0] || "");
//     setYAxis(keys[1] || keys[0] || "");
//   }

//   // Accepts a row representation: if row has .fields use row.fields else return row
//   function stripFields(r) {
//     return r && r.fields ? r.fields : r;
//   }

//   // Upload handler: uses RTK thunk; unwrap result to get payload quickly
//   const handleUpload = async (e) => {
//     const file = e.target.files?.[0];
//     if (!file) return;
//     try {
//       // Use dispatch(...).unwrap() if you want thrown errors to be caught - some RTK setups support unwrap
//       const action = await dispatch(uploadExcelFile(file));
//       // action.payload hopefully contains created file object
//       const created = action?.payload?.file || action?.payload || action;
//       // If backend returned the file id, fetch it immediately to hydrate preview
//       if (created && (created._id || created.id)) {
//         const id = created._id || created.id;
//         await dispatch(getExcelFileById(id));
//         // read from action result if available, else read from redux currentFile after fetch
//         hydrateFromFetchedFile(created);
//         setSelectedFileId(id);
//         setAnalyzeOpen(true);
//         // scroll to history
//         historyRef.current?.scrollIntoView({ behavior: "smooth" });
//       } else {
//         // fallback: re-fetch list
//         await dispatch(getExcelFiles());
//       }
//     } catch (err) {
//       // upload failed - toast handled in thunk but still catch network issues
//       console.error("Upload failed", err);
//       await dispatch(getExcelFiles());
//     } finally {
//       // reset input so same file can be uploaded again if desired
//       e.target.value = null;
//     }
//   };

//   // Refresh files
//   const refreshFiles = async () => {
//     await dispatch(getExcelFiles());
//   };

//   // View preview only
//   const handlePreviewFile = async (id) => {
//     setAnalyzeOpen(false);
//     setSelectedFileId(id);
//     const action = await dispatch(getExcelFileById(id));
//     const fileObj = action?.payload?.file || action?.payload;
//     if (fileObj) hydrateFromFetchedFile(fileObj);
//     else if (currentFile) hydrateFromFetchedFile(currentFile);
//     historyRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   // Analyze (open builder)
//   const handleAnalyzeFile = async (id) => {
//     setSelectedFileId(id);
//     const action = await dispatch(getExcelFileById(id));
//     const fileObj = action?.payload?.file || action?.payload;
//     if (fileObj) hydrateFromFetchedFile(fileObj);
//     else if (currentFile) hydrateFromFetchedFile(currentFile);
//     setAnalyzeOpen(true);
//     historyRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   // Delete
//   const handleDelete = async (id) => {
//     if (!window.confirm("Delete this uploaded file?")) return;
//     await dispatch(deleteExcelFile(id));
//     // refresh
//     await refreshFiles();
//     if (selectedFileId === id) {
//       setSelectedFileId(null);
//       setAvailableSheets([]);
//       setRows([]);
//       setColumns([]);
//       setAnalyzeOpen(false);
//       dispatch(clearCurrentFile());
//     }
//   };

//   // When user picks another sheet index
//   useEffect(() => {
//     if (!availableSheets || availableSheets.length === 0) return;
//     const s = availableSheets[selectedSheetIndex] || availableSheets[0];
//     const sampled = (s.rows || []).slice(rowRange.start, Math.min(rowRange.end, (s.rows || []).length));
//     setRows(sampled);
//     const keys = sampled[0] ? Object.keys(stripFields(sampled[0])) : [];
//     setColumns(keys);
//     // make sure xAxis/yAxis are still valid
//     if (!keys.includes(xAxis)) setXAxis(keys[0] || "");
//     if (!keys.includes(yAxis)) setYAxis(keys[1] || keys[0] || "");
//     setSelectedColumns(keys.slice());
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [availableSheets, selectedSheetIndex, rowRange.start, rowRange.end]);

//   // Toggle selected columns
//   const toggleColumn = (col) => {
//     setSelectedColumns((prev) => (prev.includes(col) ? prev.filter((c) => c !== col) : [...prev, col]));
//   };

//   // Get filtered rows -> apply selected columns and row range (already sliced above)
//   const getFilteredRows = () => {
//     if (!rows || !rows.length) return [];
//     const normalized = rows.map(stripFields);
//     if (!selectedColumns || selectedColumns.length === 0) return normalized;
//     return normalized.map((r) => Object.fromEntries(Object.entries(r).filter(([k]) => selectedColumns.includes(k))));
//   };

//   // Build chart data for Chart.js
//   const buildChartData = () => {
//     const filtered = getFilteredRows();
//     if (!filtered.length || !xAxis || !yAxis) return null;

//     // labels from xAxis values (stringified)
//     const labels = filtered.map((r) => String(r[xAxis] ?? ""));
//     // numeric y-values (coerce), fallback to 0 if not numeric
//     const yVals = filtered.map((r) => {
//       const v = r[yAxis];
//       const n = Number(v);
//       return Number.isFinite(n) ? n : 0;
//     });

//     // color palette
//     const palette = [
//       "rgba(54, 162, 235, 0.75)",
//       "rgba(255, 99, 132, 0.75)",
//       "rgba(255, 206, 86, 0.75)",
//       "rgba(75, 192, 192, 0.75)",
//       "rgba(153, 102, 255, 0.75)",
//       "rgba(255, 159, 64, 0.75)",
//     ];

//     const backgroundColor = labels.map((_, i) => palette[i % palette.length]);

//     // for Pie chart Chart.js expects data as labels + values per label
//     if (chartType === "pie") {
//       // group by label and sum values (useful for categorical)
//       const map = new Map();
//       labels.forEach((lbl, i) => map.set(lbl, (map.get(lbl) || 0) + yVals[i]));
//       return {
//         labels: Array.from(map.keys()),
//         datasets: [{ data: Array.from(map.values()), backgroundColor: Array.from(map.keys()).map((_, i) => palette[i % palette.length]) }],
//       };
//     }

//     return {
//       labels,
//       datasets: [
//         {
//           label: yAxis,
//           data: yVals,
//           backgroundColor,
//           borderColor: "rgba(0,0,0,0.06)",
//           borderWidth: 1,
//         },
//       ],
//     };
//   };

//   const chartData = buildChartData();

//   // Download chart PNG
//   const downloadChart = () => {
//     try {
//       if (!chartRef.current) return;
//       const url = chartRef.current.toBase64Image();
//       const a = document.createElement("a");
//       a.href = url;
//       a.download = `${selectedFileId || "chart"}.png`;
//       a.click();
//     } catch (err) {
//       console.error("downloadChart error", err);
//       alert("Failed to export chart image.");
//     }
//   };

//   // Download raw JSON saved on the server (file object)
//   const downloadFileJson = (f) => {
//     const blob = new Blob([JSON.stringify(f, null, 2)], { type: "application/json" });
//     saveAs(blob, `${f.filename || "excel"}.json`);
//   };

//   // Table renderer (sticky head, zebra rows)
//   const renderPreviewTable = (dataRows) => {
//     if (!dataRows || !dataRows.length) return <div className="text-sm text-gray-500">No data to preview.</div>;
//     const first = dataRows[0];
//     const headers = Object.keys(first);

//     return (
//       <div className="overflow-x-auto max-h-[420px] border rounded bg-white">
//         <table className="min-w-full text-sm table-auto border-collapse">
//           <thead className="sticky top-0 bg-gray-900 text-white">
//             <tr>
//               {headers.map((h) => (
//                 <th key={h} className="px-3 py-2 border text-left whitespace-nowrap">{h}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {dataRows.map((r, i) => (
//               <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
//                 {headers.map((h) => (
//                   <td key={h} className="px-3 py-2 border text-gray-700">{String(r[h] ?? "")}</td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
//   };

//   // selectable sheet UI
//   const SheetTabs = () => {
//     if (!availableSheets || availableSheets.length <= 1) return null;
//     return (
//       <div className="flex gap-2 flex-wrap mb-3">
//         {availableSheets.map((s, idx) => (
//           <button
//             key={s.name + idx}
//             onClick={() => setSelectedSheetIndex(idx)}
//             className={`px-3 py-1 rounded ${idx === selectedSheetIndex ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-800"}`}
//           >
//             {s.name} ({(s.rows || []).length})
//           </button>
//         ))}
//       </div>
//     );
//   };

//   return (
//     <Layout>
//       <div className="p-6">
//         <div className="max-w-6xl mx-auto space-y-6">
//           {/* header */}
//           <div className="flex items-start justify-between gap-4">
//             <div>
//               <h1 className="text-2xl font-semibold">Excel Upload → History → Analyze</h1>
//               <p className="text-sm text-gray-600 mt-1">Upload .xls/.xlsx/.csv files, preview sheets, choose columns and build charts.</p>
//             </div>

//             <div className="flex gap-3">
//               <label className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded cursor-pointer">
//                 <FiUpload /> Upload
//                 <input type="file" accept=".xlsx,.xls,.csv" onChange={handleUpload} className="hidden" />
//               </label>

//               <button onClick={refreshFiles} className="px-4 py-2 bg-green-600 text-white rounded flex items-center gap-2">
//                 <FiClock /> Refresh
//               </button>
//             </div>
//           </div>

//           {/* history list */}
//           <section ref={historyRef} className="grid md:grid-cols-2 gap-4">
//             {Array.isArray(files) && files.length > 0 ? (
//               files.map((f) => (
//                 <div key={f._id} className="p-4 bg-white rounded shadow-sm flex items-center justify-between gap-4">
//                   <div className="min-w-0">
//                     <p className="font-medium text-gray-800 truncate">{f.filename}</p>
//                     <p className="text-xs text-gray-500">
//                       {f.uploadedAt ? new Date(f.uploadedAt).toLocaleString() : "N/A"}
//                       {f.size ? ` • ${(f.size / 1024).toFixed(2)} KB` : ""}
//                     </p>
//                   </div>

//                   <div className="flex gap-2">
//                     <button onClick={() => handlePreviewFile(f._id)} title="Preview" className="p-2 bg-blue-100 rounded text-blue-600">
//                       <FiEye />
//                     </button>

//                     <button onClick={() => handleAnalyzeFile(f._id)} title="Analyze" className="p-2 bg-indigo-100 rounded text-indigo-700 flex items-center">
//                       <FiPlay />
//                     </button>

//                     <button onClick={() => downloadFileJson(f)} title="Download JSON" className="p-2 bg-yellow-100 rounded text-yellow-700">
//                       <FiDownload />
//                     </button>

//                     <button onClick={() => handleDelete(f._id)} title="Delete" className="p-2 bg-red-100 rounded text-red-600">
//                       <FiTrash2 />
//                     </button>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <div className="col-span-full p-6 bg-white rounded text-center text-gray-500">No uploads yet.</div>
//             )}
//           </section>

//           {/* preview + builder */}
//           <section className="bg-white rounded p-4 shadow">
//             <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
//               <h2 className="text-lg font-medium">{analyzeOpen ? "Chart Builder" : selectedFileId ? "Preview" : "Select a file"}</h2>

//               <div className="flex items-center gap-3">
//                 {selectedFileId && (
//                   <>
//                     <label className="text-sm flex items-center gap-2">
//                       Sheet:
//                       <select value={selectedSheetIndex} onChange={(e) => setSelectedSheetIndex(Number(e.target.value))} className="ml-2 border px-2 py-1 rounded">
//                         {availableSheets.map((s, idx) => <option key={s.name + idx} value={idx}>{s.name}</option>)}
//                       </select>
//                     </label>

//                     <label className="text-sm flex items-center gap-2">
//                       X:
//                       <select value={xAxis} onChange={(e) => setXAxis(e.target.value)} className="ml-2 border px-2 py-1 rounded">
//                         <option value="">--</option>
//                         {columns.map((c) => <option key={c} value={c}>{c}</option>)}
//                       </select>
//                     </label>

//                     <label className="text-sm flex items-center gap-2">
//                       Y:
//                       <select value={yAxis} onChange={(e) => setYAxis(e.target.value)} className="ml-2 border px-2 py-1 rounded">
//                         <option value="">--</option>
//                         {columns.map((c) => <option key={c} value={c}>{c}</option>)}
//                       </select>
//                     </label>

//                     <label className="text-sm flex items-center gap-2">
//                       Type:
//                       <select value={chartType} onChange={(e) => setChartType(e.target.value)} className="ml-2 border px-2 py-1 rounded">
//                         <option value="bar">Bar</option>
//                         <option value="line">Line</option>
//                         <option value="pie">Pie</option>
//                         <option value="scatter">Scatter</option>
//                         <option value="3D column">3D column</option>

//                       </select>
//                     </label>

//                     <button onClick={() => setAnalyzeOpen(true)} className="px-3 py-1 bg-indigo-600 text-white rounded">Open Builder</button>
//                     <button onClick={downloadChart} className="px-3 py-1 bg-gray-800 text-white rounded">Download Chart</button>
//                   </>
//                 )}
//               </div>
//             </div>

//             {/* sheet tabs */}
//             <SheetTabs />

//             {analyzeOpen ? (
//               <div className="grid md:grid-cols-2 gap-4">
//                 <div>
//                   <div className="mb-3 font-medium">Columns - pick which ones to include</div>
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {columns.map((c) => (
//                       <label key={c} className={`px-2 py-1 rounded border ${selectedColumns.includes(c) ? "bg-indigo-100 text-indigo-700" : "bg-white"}`}>
//                         <input type="checkbox" className="mr-2" checked={selectedColumns.includes(c)} onChange={() => toggleColumn(c)} />
//                         {c}
//                       </label>
//                     ))}
//                   </div>

//                   <div className="mb-3 font-medium">Row Range (sample)</div>
//                   <div className="flex items-center gap-3 mb-4">
//                     <input type="number" min="0" value={rowRange.start} onChange={(e) => setRowRange({ ...rowRange, start: Math.max(0, Number(e.target.value)) })} className="w-20 px-2 py-1 border rounded" />
//                     <span>to</span>
//                     <input type="number" min="1" value={rowRange.end} onChange={(e) => setRowRange({ ...rowRange, end: Math.max(1, Number(e.target.value)) })} className="w-20 px-2 py-1 border rounded" />
//                     <button onClick={() => { setRowRange({ start: 0, end: MAX_SAMPLE }); }} className="px-2 py-1 bg-gray-200 rounded">Reset</button>
//                   </div>

//                   <div className="mb-3 font-medium">Chart</div>
//                   <div className="border rounded p-3 min-h-[320px] flex items-center justify-center">
//                     {chartData ? (
//                       chartType === "bar" ? <Bar ref={chartRef} data={chartData} options={{ responsive: true }} /> :
//                       chartType === "line" ? <Line ref={chartRef} data={chartData} options={{ responsive: true }} /> :
//                       chartType === "pie" ? <Pie ref={chartRef} data={chartData} options={{ responsive: true }} /> :
//                       chartType === "3d-column" ? <HighchartsReact highcharts={Highcharts} options={options} /> :
//                       <Scatter ref={chartRef} data={{ datasets: [{ label: yAxis, data: getFilteredRows().map(r => ({ x: Number(r[xAxis]) || 0, y: Number(r[yAxis]) || 0 })) }] }} options={{ responsive: true }} />
//                     ) : (
//                       <div className="text-gray-500">Select X and Y columns to render a chart.</div>
//                     )}
//                   </div>
//                 </div>

//                 <div>
//                   <div className="mb-3 font-medium">Preview Table (sample)</div>
//                   {renderPreviewTable(getFilteredRows())}
//                 </div>
//               </div>
//             ) : (
//               <div>
//                 {selectedFileId ? (
//                   <div>
//                     <div className="mb-3 font-medium">Preview Table</div>
//                     {renderPreviewTable(rows.map(stripFields))}
//                   </div>
//                 ) : (
//                   <div className="text-sm text-gray-600">Pick Preview or Analyze for any history item.</div>
//                 )}
//               </div>
//             )}
//           </section>
//         </div>
//       </div>
//     </Layout>
//   );
// }


// import React, { useRef } from "react";
// import { Bar, Line, Pie, Scatter } from "react-chartjs-2";
// import Highcharts from "highcharts";
// import HighchartsReact from "highcharts-react-official";
// import * as Highcharts3D from "highcharts/highcharts-3d";

// // Initialize the 3D module
// Highcharts3D.default(Highcharts);

// const ChartRenderer = ({ chartType, chartData, xAxis, yAxis, getFilteredRows }) => {
//   const chartRef = useRef();

//   const get3DColumnOptions = () => ({
//     chart: {
//       type: "column",
//       options3d: {
//         enabled: true,
//         alpha: 15,
//         beta: 15,
//         depth: 50,
//         viewDistance: 25,
//       },
//     },
//     title: { text: "3D Column Chart" },
//     xAxis: { categories: getFilteredRows().map(r => r[xAxis]) },
//     yAxis: { title: { text: yAxis } },
//     plotOptions: {
//       column: { depth: 25 },
//     },
//     series: [
//       {
//         name: yAxis,
//         data: getFilteredRows().map(r => Number(r[yAxis]) || 0),
//       },
//     ],
//   });

//   const renderChart = () => {
//     if (!chartData) {
//       return (
//         <div className="text-gray-500">
//           Select X and Y columns to render a chart.
//         </div>
//       );
//     }

//     switch (chartType) {
//       case "bar":
//         return <Bar ref={chartRef} data={chartData} options={{ responsive: true }} />;
//       case "line":
//         return <Line ref={chartRef} data={chartData} options={{ responsive: true }} />;
//       case "pie":
//         return <Pie ref={chartRef} data={chartData} options={{ responsive: true }} />;
//       case "scatter":
//         return (
//           <Scatter
//             ref={chartRef}
//             data={{
//               datasets: [
//                 {
//                   label: yAxis,
//                   data: getFilteredRows().map(r => ({
//                     x: Number(r[xAxis]) || 0,
//                     y: Number(r[yAxis]) || 0,
//                   })),
//                 },
//               ],
//             }}
//             options={{ responsive: true }}
//           />
//         );
//       case "3d-column":
//         return (
//           <HighchartsReact highcharts={Highcharts} options={get3DColumnOptions()} />
//         );
//       default:
//         return <div className="text-gray-500">Unknown chart type.</div>;
//     }
//   };

//   return <>{renderChart()}</>;
// };

// export default ChartRenderer;


// import React, { useState, useRef } from "react";
// import * as XLSX from "xlsx";
// import { Bar, Line, Pie, Scatter } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement,
// } from "chart.js";
// import Highcharts from "highcharts";
// import HighchartsReact from "highcharts-react-official";
// import * as Highcharts3D from "highcharts/highcharts-3d";

// Highcharts3D.default(Highcharts);

// // Register Chart.js components
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement
// );

// const ExcelPage = () => {
//   const [data, setData] = useState([]);
//   const [columns, setColumns] = useState([]);
//   const [xAxis, setXAxis] = useState("");
//   const [yAxis, setYAxis] = useState("");
//   const [chartType, setChartType] = useState("bar");
//   const [filters, setFilters] = useState({});
//   const chartRef = useRef();

//   // Handle Excel upload
//   const handleFileUpload = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.onload = (event) => {
//       const workbook = XLSX.read(event.target.result, { type: "binary" });
//       const sheetName = workbook.SheetNames[0];
//       const sheet = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
//       if (sheet.length > 0) {
//         setData(sheet);
//         setColumns(Object.keys(sheet[0]));
//       }
//     };
//     reader.readAsBinaryString(file);
//   };

//   // Apply filters
//   const getFilteredRows = () =>
//     data.filter((row) =>
//       Object.entries(filters).every(
//         ([col, value]) =>
//           !value || String(row[col]).toLowerCase().includes(value.toLowerCase())
//       )
//     );

//   // Chart.js options
//   const buildChartData = () => {
//     const filtered = getFilteredRows();
//     if (!xAxis || !yAxis || filtered.length === 0) return null;
//     return {
//       labels: filtered.map((r) => r[xAxis]),
//       datasets: [
//         {
//           label: yAxis,
//           data: filtered.map((r) => Number(r[yAxis]) || 0),
//           backgroundColor: "rgba(75, 192, 192, 0.6)",
//           borderColor: "rgba(75, 192, 192, 1)",
//           borderWidth: 1,
//         },
//       ],
//     };
//   };

//   // Highcharts 3D Column options
//   const build3DColumnOptions = () => {
//     const filtered = getFilteredRows();
//     if (!xAxis || !yAxis || filtered.length === 0) return null;
//     return {
//       chart: {
//         type: "column",
//         options3d: {
//           enabled: true,
//           alpha: 15,
//           beta: 15,
//           depth: 50,
//           viewDistance: 25,
//         },
//       },
//       title: { text: "3D Column Chart" },
//       xAxis: { categories: filtered.map((r) => r[xAxis]) },
//       yAxis: { title: { text: yAxis } },
//       plotOptions: { column: { depth: 25 } },
//       series: [
//         {
//           name: yAxis,
//           data: filtered.map((r) => Number(r[yAxis]) || 0),
//         },
//       ],
//     };
//   };

//   // Export chart as image
//   const downloadChart = () => {
//     if (chartType === "3d-column") {
//       // Highcharts export
//       const svg = chartRef.current.chart.getSVG();
//       const blob = new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
//       const url = URL.createObjectURL(blob);
//       const a = document.createElement("a");
//       a.href = url;
//       a.download = "chart.svg";
//       a.click();
//       URL.revokeObjectURL(url);
//     } else {
//       // Chart.js export
//       const link = document.createElement("a");
//       link.href = chartRef.current.toBase64Image();
//       link.download = "chart.png";
//       link.click();
//     }
//   };

//   const chartData = buildChartData();

//   return (
//     <div className="p-6 space-y-6">
//       <h2 className="text-2xl font-bold">Excel Data Visualization</h2>

//       {/* Upload */}
//       <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />

//       {/* Filters */}
//       <div className="flex gap-4 flex-wrap">
//         {columns.map((col) => (
//           <input
//             key={col}
//             type="text"
//             placeholder={`Filter by ${col}`}
//             value={filters[col] || ""}
//             onChange={(e) =>
//               setFilters((prev) => ({ ...prev, [col]: e.target.value }))
//             }
//             className="border p-2 rounded"
//           />
//         ))}
//       </div>

//       {/* Axis Selectors */}
//       <div className="flex gap-4">
//         <select
//           onChange={(e) => setXAxis(e.target.value)}
//           className="border p-2 rounded"
//         >
//           <option value="">Select X-Axis</option>
//           {columns.map((col) => (
//             <option key={col} value={col}>
//               {col}
//             </option>
//           ))}
//         </select>
//         <select
//           onChange={(e) => setYAxis(e.target.value)}
//           className="border p-2 rounded"
//         >
//           <option value="">Select Y-Axis</option>
//           {columns.map((col) => (
//             <option key={col} value={col}>
//               {col}
//             </option>
//           ))}
//         </select>
//         <select
//           onChange={(e) => setChartType(e.target.value)}
//           className="border p-2 rounded"
//         >
//           <option value="bar">Bar</option>
//           <option value="line">Line</option>
//           <option value="pie">Pie</option>
//           <option value="scatter">Scatter</option>
//           <option value="3d-column">3D Column</option>
//         </select>
//       </div>

//       {/* Chart */}
//       <div className="p-4 border rounded shadow">
//         {chartData ? (
//           chartType === "bar" ? (
//             <Bar ref={chartRef} data={chartData} options={{ responsive: true }} />
//           ) : chartType === "line" ? (
//             <Line ref={chartRef} data={chartData} options={{ responsive: true }} />
//           ) : chartType === "pie" ? (
//             <Pie ref={chartRef} data={chartData} options={{ responsive: true }} />
//           ) : chartType === "3d-column" ? (
//             <HighchartsReact
//               highcharts={Highcharts}
//               options={build3DColumnOptions()}
//               ref={chartRef}
//             />
//           ) : (
//             <Scatter
//               ref={chartRef}
//               data={{
//                 datasets: [
//                   {
//                     label: yAxis,
//                     data: getFilteredRows().map((r) => ({
//                       x: Number(r[xAxis]) || 0,
//                       y: Number(r[yAxis]) || 0,
//                     })),
//                   },
//                 ],
//               }}
//               options={{ responsive: true }}
//             />
//           )
//         ) : (
//           <div className="text-gray-500">
//             Select X and Y columns to render a chart.
//           </div>
//         )}
//       </div>

//       {/* Download Button */}
//       <button
//         onClick={downloadChart}
//         className="px-4 py-2 bg-blue-500 text-white rounded"
//       >
//         Download Chart
//       </button>
//     </div>
//   );
// };

// export default ExcelPage;



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// import React, { useEffect, useRef, useState } from "react";
// import { FiEye, FiTrash2, FiUpload, FiClock, FiDownload, FiPlay } from "react-icons/fi";
// import Layout from "../../Layout/Layout";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   uploadExcelFile,
//   getExcelFiles,
//   deleteExcelFile,
//   getExcelFileById,
//   clearCurrentFile,
// } from "../../Redux/excelSlice";
// import { saveAs } from "file-saver";

// import {
//   Chart as ChartJS,
//   BarElement,
//   LineElement,
//   PointElement,
//   ArcElement,
//   CategoryScale,
//   LinearScale,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { Bar, Line, Pie, Scatter } from "react-chartjs-2";

// ChartJS.register(
//   BarElement,
//   LineElement,
//   PointElement,
//   ArcElement,
//   CategoryScale,
//   LinearScale,
//   Tooltip,
//   Legend
// );

// import Highcharts from "highcharts";
// import HighchartsReact from "highcharts-react-official";
// // NOTE: do NOT import highcharts-3d at top-level — we load it dynamically below

// export default function ExcelPage() {
//   const dispatch = useDispatch();
//   const { files = [], currentFile = null, status = "idle" } = useSelector((s) => s.excel || {});

//   const historyRef = useRef(null);
//   const chartRef = useRef(null);

//   // UI state
//   const [selectedFileId, setSelectedFileId] = useState(null);
//   const [availableSheets, setAvailableSheets] = useState([]); // [{name, rows}]
//   const [selectedSheetIndex, setSelectedSheetIndex] = useState(0);
//   const [rows, setRows] = useState([]); // currently active rows (sampled)
//   const [columns, setColumns] = useState([]);
//   const [xAxis, setXAxis] = useState("");
//   const [yAxis, setYAxis] = useState("");
//   const [chartType, setChartType] = useState("bar");
//   const [selectedColumns, setSelectedColumns] = useState([]);
//   const [rowRange, setRowRange] = useState({ start: 0, end: 200 });
//   const [analyzeOpen, setAnalyzeOpen] = useState(false);
//   const [hc3dReady, setHc3dReady] = useState(false); // <-- dynamic module ready flag
//   const MAX_SAMPLE = 200; // sample for preview & charts

//   // load persisted history on mount
//   useEffect(() => {
//     dispatch(getExcelFiles());
//   }, [dispatch]);

//  // Dynamically load/initialize highcharts-3d module (works across bundlers)
//   useEffect(() => {
//     let cancelled = false;
//     (async () => {
//       try {
//         const mod = await import("highcharts/highcharts-3d");
//         // Some bundlers wrap it in .default, some don’t
//         const init = mod.default || mod;
//         if (typeof init === "function") {
//           init(Highcharts);
//           if (!cancelled) setHc3dReady(true);
//         } else {
//           console.error("highcharts-3d did not export a function:", mod);
//         }
//       } catch (err) {
//         console.error("Error loading highcharts-3d:", err);
//       }
//     })();
//     return () => {
//       cancelled = true;
//     };
//   }, []);


//   // helper to normalize backend file object into sheets list:
//   function normalizeFileIntoSheets(fileObj) {
//     if (!fileObj) return [];
//     const f = fileObj.file || fileObj;
//     if (Array.isArray(f.sheets) && f.sheets.length > 0) {
//       return f.sheets.map((s) => ({ name: s.name || "Sheet", rows: Array.isArray(s.rows) ? s.rows.slice(0, MAX_SAMPLE) : [] }));
//     }
//     if (Array.isArray(f.data)) {
//       return [{ name: f.filename || "Sheet1", rows: f.data.slice(0, MAX_SAMPLE) }];
//     }
//     return [];
//   }

//   // Called after we fetch a file (preview or analyze)
//   function hydrateFromFetchedFile(fileObj) {
//     const sheets = normalizeFileIntoSheets(fileObj);
//     setAvailableSheets(sheets);
//     setSelectedSheetIndex(0);
//     const firstRows = (sheets[0] && sheets[0].rows) || [];
//     setRows(firstRows);
//     const keys = firstRows[0] ? Object.keys(stripFields(firstRows[0])) : [];
//     setColumns(keys);
//     setSelectedColumns(keys.slice()); // default all
//     setXAxis(keys[0] || "");
//     setYAxis(keys[1] || keys[0] || "");
//   }

//   // Accepts a row representation: if row has .fields use row.fields else return row
//   function stripFields(r) {
//     return r && r.fields ? r.fields : r;
//   }

//   // Upload handler
//   const handleUpload = async (e) => {
//     const file = e.target.files?.[0];
//     if (!file) return;
//     try {
//       const action = await dispatch(uploadExcelFile(file));
//       const created = action?.payload?.file || action?.payload || action;
//       if (created && (created._id || created.id)) {
//         const id = created._id || created.id;
//         await dispatch(getExcelFileById(id));
//         hydrateFromFetchedFile(created);
//         setSelectedFileId(id);
//         setAnalyzeOpen(true);
//         historyRef.current?.scrollIntoView({ behavior: "smooth" });
//       } else {
//         await dispatch(getExcelFiles());
//       }
//     } catch (err) {
//       console.error("Upload failed", err);
//       await dispatch(getExcelFiles());
//     } finally {
//       e.target.value = null;
//     }
//   };

//   const refreshFiles = async () => {
//     await dispatch(getExcelFiles());
//   };

//   const handlePreviewFile = async (id) => {
//     setAnalyzeOpen(false);
//     setSelectedFileId(id);
//     const action = await dispatch(getExcelFileById(id));
//     const fileObj = action?.payload?.file || action?.payload;
//     if (fileObj) hydrateFromFetchedFile(fileObj);
//     else if (currentFile) hydrateFromFetchedFile(currentFile);
//     historyRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   const handleAnalyzeFile = async (id) => {
//     setSelectedFileId(id);
//     const action = await dispatch(getExcelFileById(id));
//     const fileObj = action?.payload?.file || action?.payload;
//     if (fileObj) hydrateFromFetchedFile(fileObj);
//     else if (currentFile) hydrateFromFetchedFile(currentFile);
//     setAnalyzeOpen(true);
//     historyRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm("Delete this uploaded file?")) return;
//     await dispatch(deleteExcelFile(id));
//     await refreshFiles();
//     if (selectedFileId === id) {
//       setSelectedFileId(null);
//       setAvailableSheets([]);
//       setRows([]);
//       setColumns([]);
//       setAnalyzeOpen(false);
//       dispatch(clearCurrentFile());
//     }
//   };

//   // When user picks another sheet index
//   useEffect(() => {
//     if (!availableSheets || availableSheets.length === 0) return;
//     const s = availableSheets[selectedSheetIndex] || availableSheets[0];
//     const sampled = (s.rows || []).slice(rowRange.start, Math.min(rowRange.end, (s.rows || []).length));
//     setRows(sampled);
//     const keys = sampled[0] ? Object.keys(stripFields(sampled[0])) : [];
//     setColumns(keys);
//     if (!keys.includes(xAxis)) setXAxis(keys[0] || "");
//     if (!keys.includes(yAxis)) setYAxis(keys[1] || keys[0] || "");
//     setSelectedColumns(keys.slice());
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [availableSheets, selectedSheetIndex, rowRange.start, rowRange.end]);

//   const toggleColumn = (col) => {
//     setSelectedColumns((prev) => (prev.includes(col) ? prev.filter((c) => c !== col) : [...prev, col]));
//   };

//   const getFilteredRows = () => {
//     if (!rows || !rows.length) return [];
//     const normalized = rows.map(stripFields);
//     if (!selectedColumns || selectedColumns.length === 0) return normalized;
//     return normalized.map((r) => Object.fromEntries(Object.entries(r).filter(([k]) => selectedColumns.includes(k))));
//   };

//   // Build Chart.js chartData
//   const buildChartData = () => {
//     const filtered = getFilteredRows();
//     if (!filtered.length || !xAxis || !yAxis) return null;

//     const labels = filtered.map((r) => String(r[xAxis] ?? ""));
//     const yVals = filtered.map((r) => {
//       const v = r[yAxis];
//       const n = Number(v);
//       return Number.isFinite(n) ? n : 0;
//     });

//     const palette = [
//       "rgba(54, 162, 235, 0.75)",
//       "rgba(255, 99, 132, 0.75)",
//       "rgba(255, 206, 86, 0.75)",
//       "rgba(75, 192, 192, 0.75)",
//       "rgba(153, 102, 255, 0.75)",
//       "rgba(255, 159, 64, 0.75)",
//     ];
//     const backgroundColor = labels.map((_, i) => palette[i % palette.length]);

//     if (chartType === "pie") {
//       const map = new Map();
//       labels.forEach((lbl, i) => map.set(lbl, (map.get(lbl) || 0) + yVals[i]));
//       return {
//         labels: Array.from(map.keys()),
//         datasets: [{ data: Array.from(map.values()), backgroundColor: Array.from(map.keys()).map((_, i) => palette[i % palette.length]) }],
//       };
//     }

//     return {
//       labels,
//       datasets: [
//         {
//           label: yAxis,
//           data: yVals,
//           backgroundColor,
//           borderColor: "rgba(0,0,0,0.06)",
//           borderWidth: 1,
//         },
//       ],
//     };
//   };

//   const chartData = buildChartData();

//   // Build Highcharts 3D options dynamically (inside the component)
//   const build3DColumnOptions = () => {
//     const filtered = getFilteredRows();
//     if (!filtered.length || !xAxis || !yAxis) return null;

//     return {
//       chart: {
//         type: "column",
//         options3d: {
//           enabled: true,
//           alpha: 15,
//           beta: 15,
//           depth: 50,
//           viewDistance: 25,
//         },
//       },
//       title: { text: "3D Column Chart" },
//       xAxis: { categories: filtered.map((r) => r[xAxis]) },
//       yAxis: { title: { text: yAxis } },
//       plotOptions: { column: { depth: 25 } },
//       series: [
//         {
//           name: yAxis,
//           data: filtered.map((r) => Number(r[yAxis]) || 0),
//         },
//       ],
//     };
//   };

//   // Download chart: Chart.js -> PNG, Highcharts -> SVG->PNG conversion
//   const downloadChart = () => {
//     try {
//       if (!chartRef.current) return alert("No chart to download.");
//       if (chartType === "3d-column") {
//         // Highcharts: get SVG and convert to PNG via canvas
//         const hcChart = chartRef.current.chart;
//         if (!hcChart) return alert("Highcharts instance not ready.");
//         const svg = hcChart.getSVG({ exporting: { sourceWidth: hcChart.chartWidth, sourceHeight: hcChart.chartHeight } });
//         const blob = new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
//         const url = URL.createObjectURL(blob);
//         const img = new Image();
//         img.onload = () => {
//           const canvas = document.createElement("canvas");
//           canvas.width = img.width;
//           canvas.height = img.height;
//           const ctx = canvas.getContext("2d");
//           // fill white for PNG background
//           ctx.fillStyle = "white";
//           ctx.fillRect(0, 0, canvas.width, canvas.height);
//           ctx.drawImage(img, 0, 0);
//           const pngUrl = canvas.toDataURL("image/png");
//           const a = document.createElement("a");
//           a.href = pngUrl;
//           a.download = `${selectedFileId || "chart"}.png`;
//           a.click();
//           URL.revokeObjectURL(url);
//         };
//         img.onerror = (err) => {
//           console.error("Failed to convert SVG -> PNG", err);
//           URL.revokeObjectURL(url);
//           alert("Export failed.");
//         };
//         img.src = url;
//       } else {
//         // Chart.js
//         // react-chartjs-2 chart instance exposes toBase64Image() on ref.current
//         const base64 = chartRef.current.toBase64Image ? chartRef.current.toBase64Image() : null;
//         if (!base64) return alert("Chart.js instance not ready for export.");
//         const a = document.createElement("a");
//         a.href = base64;
//         a.download = `${selectedFileId || "chart"}.png`;
//         a.click();
//       }
//     } catch (err) {
//       console.error("downloadChart error", err);
//       alert("Failed to export chart image.");
//     }
//   };

//   // Download raw JSON saved on the server (file object)
//   const downloadFileJson = (f) => {
//     const blob = new Blob([JSON.stringify(f, null, 2)], { type: "application/json" });
//     saveAs(blob, `${f.filename || "excel"}.json`);
//   };

//   // Table renderer (sticky head, zebra rows)
//   const renderPreviewTable = (dataRows) => {
//     if (!dataRows || !dataRows.length) return <div className="text-sm text-gray-500">No data to preview.</div>;
//     const first = dataRows[0];
//     const headers = Object.keys(first);

//     return (
//       <div className="overflow-x-auto max-h-[420px] border rounded bg-white">
//         <table className="min-w-full text-sm table-auto border-collapse">
//           <thead className="sticky top-0 bg-gray-900 text-white">
//             <tr>
//               {headers.map((h) => (
//                 <th key={h} className="px-3 py-2 border text-left whitespace-nowrap">{h}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {dataRows.map((r, i) => (
//               <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
//                 {headers.map((h) => (
//                   <td key={h} className="px-3 py-2 border text-gray-700">{String(r[h] ?? "")}</td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
//   };

//   const SheetTabs = () => {
//     if (!availableSheets || availableSheets.length <= 1) return null;
//     return (
//       <div className="flex gap-2 flex-wrap mb-3">
//         {availableSheets.map((s, idx) => (
//           <button
//             key={s.name + idx}
//             onClick={() => setSelectedSheetIndex(idx)}
//             className={`px-3 py-1 rounded ${idx === selectedSheetIndex ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-800"}`}
//           >
//             {s.name} ({(s.rows || []).length})
//           </button>
//         ))}
//       </div>
//     );
//   };

//   return (
//     <Layout>
//       <div className="p-6">
//         <div className="max-w-6xl mx-auto space-y-6">
//           {/* header */}
//           <div className="flex items-start justify-between gap-4">
//             <div>
//               <h1 className="text-2xl font-semibold">Excel Upload → History → Analyze</h1>
//               <p className="text-sm text-gray-600 mt-1">Upload .xls/.xlsx/.csv files, preview sheets, choose columns and build charts.</p>
//             </div>

//             <div className="flex gap-3">
//               <label className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded cursor-pointer">
//                 <FiUpload /> Upload
//                 <input type="file" accept=".xlsx,.xls,.csv" onChange={handleUpload} className="hidden" />
//               </label>

//               <button onClick={refreshFiles} className="px-4 py-2 bg-green-600 text-white rounded flex items-center gap-2">
//                 <FiClock /> Refresh
//               </button>
//             </div>
//           </div>

//           {/* history list */}
//           <section ref={historyRef} className="grid md:grid-cols-2 gap-4">
//             {Array.isArray(files) && files.length > 0 ? (
//               files.map((f) => (
//                 <div key={f._id} className="p-4 bg-white rounded shadow-sm flex items-center justify-between gap-4">
//                   <div className="min-w-0">
//                     <p className="font-medium text-gray-800 truncate">{f.filename}</p>
//                     <p className="text-xs text-gray-500">
//                       {f.uploadedAt ? new Date(f.uploadedAt).toLocaleString() : "N/A"}
//                       {f.size ? ` • ${(f.size / 1024).toFixed(2)} KB` : ""}
//                     </p>
//                   </div>

//                   <div className="flex gap-2">
//                     <button onClick={() => handlePreviewFile(f._id)} title="Preview" className="p-2 bg-blue-100 rounded text-blue-600">
//                       <FiEye />
//                     </button>

//                     <button onClick={() => handleAnalyzeFile(f._id)} title="Analyze" className="p-2 bg-indigo-100 rounded text-indigo-700 flex items-center">
//                       <FiPlay />
//                     </button>

//                     <button onClick={() => downloadFileJson(f)} title="Download JSON" className="p-2 bg-yellow-100 rounded text-yellow-700">
//                       <FiDownload />
//                     </button>

//                     <button onClick={() => handleDelete(f._id)} title="Delete" className="p-2 bg-red-100 rounded text-red-600">
//                       <FiTrash2 />
//                     </button>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <div className="col-span-full p-6 bg-white rounded text-center text-gray-500">No uploads yet.</div>
//             )}
//           </section>

//           {/* preview + builder */}
//           <section className="bg-white rounded p-4 shadow">
//             <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
//               <h2 className="text-lg font-medium">{analyzeOpen ? "Chart Builder" : selectedFileId ? "Preview" : "Select a file"}</h2>

//               <div className="flex items-center gap-3">
//                 {selectedFileId && (
//                   <>
//                     <label className="text-sm flex items-center gap-2">
//                       Sheet:
//                       <select value={selectedSheetIndex} onChange={(e) => setSelectedSheetIndex(Number(e.target.value))} className="ml-2 border px-2 py-1 rounded">
//                         {availableSheets.map((s, idx) => <option key={s.name + idx} value={idx}>{s.name}</option>)}
//                       </select>
//                     </label>

//                     <label className="text-sm flex items-center gap-2">
//                       X:
//                       <select value={xAxis} onChange={(e) => setXAxis(e.target.value)} className="ml-2 border px-2 py-1 rounded">
//                         <option value="">--</option>
//                         {columns.map((c) => <option key={c} value={c}>{c}</option>)}
//                       </select>
//                     </label>

//                     <label className="text-sm flex items-center gap-2">
//                       Y:
//                       <select value={yAxis} onChange={(e) => setYAxis(e.target.value)} className="ml-2 border px-2 py-1 rounded">
//                         <option value="">--</option>
//                         {columns.map((c) => <option key={c} value={c}>{c}</option>)}
//                       </select>
//                     </label>

//                     <label className="text-sm flex items-center gap-2">
//                       Type:
//                       <select value={chartType} onChange={(e) => setChartType(e.target.value)} className="ml-2 border px-2 py-1 rounded">
//                         <option value="bar">Bar</option>
//                         <option value="line">Line</option>
//                         <option value="pie">Pie</option>
//                         <option value="scatter">Scatter</option>
//                         <option value="3d-column">3D column</option>
//                       </select>
//                     </label>

//                     <button onClick={() => setAnalyzeOpen(true)} className="px-3 py-1 bg-indigo-600 text-white rounded">Open Builder</button>
//                     <button onClick={downloadChart} className="px-3 py-1 bg-gray-800 text-white rounded">Download Chart</button>
//                   </>
//                 )}
//               </div>
//             </div>

//             {/* sheet tabs */}
//             <SheetTabs />

//             {analyzeOpen ? (
//               <div className="grid md:grid-cols-2 gap-4">
//                 <div>
//                   <div className="mb-3 font-medium">Columns - pick which ones to include</div>
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {columns.map((c) => (
//                       <label key={c} className={`px-2 py-1 rounded border ${selectedColumns.includes(c) ? "bg-indigo-100 text-indigo-700" : "bg-white"}`}>
//                         <input type="checkbox" className="mr-2" checked={selectedColumns.includes(c)} onChange={() => toggleColumn(c)} />
//                         {c}
//                       </label>
//                     ))}
//                   </div>

//                   <div className="mb-3 font-medium">Row Range (sample)</div>
//                   <div className="flex items-center gap-3 mb-4">
//                     <input type="number" min="0" value={rowRange.start} onChange={(e) => setRowRange({ ...rowRange, start: Math.max(0, Number(e.target.value)) })} className="w-20 px-2 py-1 border rounded" />
//                     <span>to</span>
//                     <input type="number" min="1" value={rowRange.end} onChange={(e) => setRowRange({ ...rowRange, end: Math.max(1, Number(e.target.value)) })} className="w-20 px-2 py-1 border rounded" />
//                     <button onClick={() => { setRowRange({ start: 0, end: MAX_SAMPLE }); }} className="px-2 py-1 bg-gray-200 rounded">Reset</button>
//                   </div>

//                   <div className="mb-3 font-medium">Chart</div>
//                   <div className="border rounded p-3 min-h-[320px] flex items-center justify-center">
//                     {chartData ? (
//                       chartType === "bar" ? <Bar ref={chartRef} data={chartData} options={{ responsive: true }} /> :
//                       chartType === "line" ? <Line ref={chartRef} data={chartData} options={{ responsive: true }} /> :
//                       chartType === "pie" ? <Pie ref={chartRef} data={chartData} options={{ responsive: true }} /> :
//                       chartType === "3d-column" ? (
//                       hc3dReady ? (
//                         <HighchartsReact highcharts={Highcharts} options={build3DColumnOptions()} ref={chartRef} />
//                       ) : (
//                         <div className="text-gray-500">Loading 3D module…</div>
//                       )
//                     ) :
//                       <Scatter ref={chartRef} data={{ datasets: [{ label: yAxis, data: getFilteredRows().map(r => ({ x: Number(r[xAxis]) || 0, y: Number(r[yAxis]) || 0 })) }] }} options={{ responsive: true }} />
//                     ) : (
//                       <div className="text-gray-500">Select X and Y columns to render a chart.</div>
//                     )}
//                   </div>
//                 </div>

//                 <div>
//                   <div className="mb-3 font-medium">Preview Table (sample)</div>
//                   {renderPreviewTable(getFilteredRows())}
//                 </div>
//               </div>
//             ) : (
//               <div>
//                 {selectedFileId ? (
//                   <div>
//                     <div className="mb-3 font-medium">Preview Table</div>
//                     {renderPreviewTable(rows.map(stripFields))}
//                   </div>
//                 ) : (
//                   <div className="text-sm text-gray-600">Pick Preview or Analyze for any history item.</div>
//                 )}
//               </div>
//             )}
//           </section>
//         </div>
//       </div>
//     </Layout>
//   );
// }


////////////////////////////////////////////////////////////////////////////////////////////


import React, { useEffect, useRef, useState } from "react";
import { FiEye, FiTrash2, FiUpload, FiClock, FiDownload, FiPlay } from "react-icons/fi";
import Layout from "../../Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import AiInsights from "./AiInsights";
// import HistoryPanel from "./HistoryPannel";

// import Highcharts from "highcharts";
// import Highcharts3D from "highcharts/highcharts-3d";
// import Exporting from "highcharts/modules/exporting";
// import ExportData from "highcharts/modules/export-data";

// // Initialize modules immediately
// Highcharts3D(Highcharts);
// Exporting(Highcharts);
// ExportData(Highcharts);


import Highcharts from "highcharts";
import * as HC3D from "highcharts/highcharts-3d";
import * as Exporting from "highcharts/modules/exporting";
import * as ExportData from "highcharts/modules/export-data";

// Initialize safely
const hc3dInit = HC3D.default || HC3D;
const exportingInit = Exporting.default || Exporting;
const exportDataInit = ExportData.default || ExportData;

if (typeof hc3dInit === "function") hc3dInit(Highcharts);
if (typeof exportingInit === "function") exportingInit(Highcharts);
if (typeof exportDataInit === "function") exportDataInit(Highcharts);

// import Highcharts from "highcharts/es-modules/masters/highcharts.src.js";
// import Highcharts3D from "highcharts/es-modules/masters/highcharts-3d.src.js";
// import Exporting from "highcharts/es-modules/masters/modules/exporting.src.js";
// import ExportData from "highcharts/es-modules/masters/modules/export-data.src.js";

// Highcharts3D(Highcharts);
// Exporting(Highcharts);
// ExportData(Highcharts);




import {
  uploadExcelFile,
  getExcelFiles,
  deleteExcelFile,
  getExcelFileById,
  clearCurrentFile,
} from "../../Redux/excelSlice";
import { saveAs } from "file-saver";

import {
  Chart as ChartJS,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line, Pie, Scatter } from "react-chartjs-2";

ChartJS.register(
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

// import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { uploadExcel } from "../../../../server/controllers/upload.controller";
// NOTE: do NOT import highcharts-3d at top-level — we load it dynamically below

// Import at top-level (or dynamically like highcharts-3d)
// import Highcharts from "highcharts";
// import Accessibility from "highcharts/modules/accessibility";




export default function ExcelPage() {
  const dispatch = useDispatch();
  const { files, status, error } = useSelector((state) => state.excel);
  const parsedData = useSelector((state) => state.excel.parsedData);
  // const { files = [], currentFile = null, status = "idle" } = useSelector((s) => s.excel || {});


  // const file = e.target.files ?.[0];
  // if(!file) return;

  // setTimeout(async() => {
  //   await dispatch(uploadExcel(file))

  // }, 0)

  // toggle history panel
  // const toggleHistory = () => {
  //   setShowHistory((prev) => !prev);
  // };

  useEffect(() => {
    dispatch(getExcelFiles());
  }, [dispatch]);

  // const handleview = (id) => {
  //   dispatch(getExcelFileById());
  // }

  const historyRef = useRef(null);
  const chartRef = useRef(null);

  // UI state
   const [showHistory, setShowHistory] = useState(false);
  const [selectedFileId, setSelectedFileId] = useState(null);
  const [availableSheets, setAvailableSheets] = useState([]); // [{name, rows}]
  const [selectedSheetIndex, setSelectedSheetIndex] = useState(0);
  const [rows, setRows] = useState([]); // currently active rows (sampled)
  const [columns, setColumns] = useState([]);
  const [xAxis, setXAxis] = useState("");
  const [yAxis, setYAxis] = useState("");
  const [chartType, setChartType] = useState("bar");
  const [selectedColumns, setSelectedColumns] = useState([]);
  const [rowRange, setRowRange] = useState({ start: 0, end: 200 });
  const [analyzeOpen, setAnalyzeOpen] = useState(false);
  const [hc3dReady, setHc3dReady] = useState(false); // dynamic module ready flag
  const [hc3dFailed, setHc3dFailed] = useState(false); // failed to load
  const MAX_SAMPLE = 200; // sample for preview & charts

  // load persisted history on mount
  useEffect(() => {
    dispatch(getExcelFiles());
  }, [dispatch]);

   // toggle history section
  const toggleHistory = () => {
    if (!showHistory) {
      dispatch(getExcelFiles());
    }
    setShowHistory((prev) => !prev);
  };

  // Robust dynamic load/initialize for highcharts-3d
  // useEffect(() => {
  //   // guard for SSR environments (Next.js) — only run on client
  //   if (typeof window === "undefined") {
  //     console.warn("Skipping highcharts-3d dynamic load on server.");
  //     return;
  //   }

  //   let cancelled = false;

  //   (async () => {
  //     try {
  //       // Try import the module (works with Webpack, Vite, CRA, etc.)
  //       const mod = await import("highcharts/highcharts-3d");

  //       // Try to discover an initializer function in module shape variations:
  //       // - mod is function
  //       // - mod.default is function
  //       // - mod has any function export (fallback)
  //       let init = null;
  //       if (typeof mod === "function") init = mod;
  //       else if (mod && typeof mod.default === "function") init = mod.default;
  //       else if (mod) {
  //         // search values for first function (safe fallback)
  //         const values = Object.values(mod);
  //         for (const v of values) {
  //           if (typeof v === "function") {
  //             init = v;
  //             break;
  //           }
  //         }
  //       }

  //       if (!init) {
  //         console.error("Could not find initializer function in highcharts-3d module:", mod);
  //         if (!cancelled) setHc3dFailed(true);
  //         return;
  //       }

  //       // call initializer with Highcharts
  //       init(Highcharts);

  //       // small safety: ensure the 3D options are applied by checking that
  //       // the Highcharts.Chart prototype or plotOptions got the 3d flag (best-effort)
  //       if (!cancelled) {
  //         setHc3dReady(true);
  //         console.info("highcharts-3d initialized successfully.");
  //       }
  //     } catch (err) {
  //       console.error("Error loading/initializing highcharts-3d:", err);
  //       if (!cancelled) setHc3dFailed(true);
  //     }
  //   })();

  //   return () => {
  //     cancelled = true;
  //   };
  // }, []);


  // useEffect(() => {
  //   if (typeof window === "undefined") return; // SSR guard

  //   let cancelled = false;

  //   (async () => {
  //     try {
  //       // Load highcharts-3d
  //       const hc3dModule = await import("highcharts/highcharts-3d");
  //       const ExportingModule = await import("highcharts/modules/exporting");
  //       const ExportDataModule = await import("highcharts/modules/export-data");

  //       // Initialize all modules
  //       hc3dModule.default ? hc3dModule.default(Highcharts) : hc3dModule(Highcharts);
  //       ExportingModule.default ? ExportingModule.default(Highcharts) : ExportingModule(Highcharts);
  //       ExportDataModule.default ? ExportDataModule.default(Highcharts) : ExportDataModule(Highcharts);

  //       if (!cancelled) {
  //         setHc3dReady(true);
  //         console.info("Highcharts 3D + exporting modules initialized.");
  //       }
  //     } catch (err) {
  //       console.error("Error loading Highcharts 3D/exporting:", err);
  //       if (!cancelled) setHc3dFailed(true);
  //     }
  //   })();

  //   return () => {
  //     cancelled = true;
  //   };
  // }, []);


  useEffect(() => {
    if (typeof window === "undefined") return;

    let cancelled = false;

    (async () => {
      try {
        const hc3dModule = await import("highcharts/highcharts-3d");

        // Determine the initializer function robustly
        let initFn = null;

        if (typeof hc3dModule === "function") {
          initFn = hc3dModule;
        } else if (hc3dModule && typeof hc3dModule.default === "function") {
          initFn = hc3dModule.default;
        } else if (hc3dModule) {
          // fallback: find first function in the module object
          for (const key of Object.keys(hc3dModule)) {
            if (typeof hc3dModule[key] === "function") {
              initFn = hc3dModule[key];
              break;
            }
          }
        }

        if (!initFn) {
          console.error("Cannot find initializer in highcharts-3d module:", hc3dModule);
          if (!cancelled) setHc3dFailed(true);
          return;
        }

        // Initialize Highcharts 3D
        initFn(Highcharts);

        if (!cancelled) {
          setHc3dReady(true);
          console.info("Highcharts 3D initialized successfully");
        }
      } catch (err) {
        console.error("Error loading Highcharts 3D:", err);
        if (!cancelled) setHc3dFailed(true);
      }
    })();

    return () => { cancelled = true; };
  }, []);



  // helper to normalize backend file object into sheets list:
  function normalizeFileIntoSheets(fileObj) {
    if (!fileObj) return [];
    const f = fileObj.file || fileObj;
    if (Array.isArray(f.sheets) && f.sheets.length > 0) {
      return f.sheets.map((s) => ({ name: s.name || "Sheet", rows: Array.isArray(s.rows) ? s.rows.slice(0, MAX_SAMPLE) : [] }));
    }
    if (Array.isArray(f.data)) {
      return [{ name: f.filename || "Sheet1", rows: f.data.slice(0, MAX_SAMPLE) }];
    }
    return [];
  }

  // Called after we fetch a file (preview or analyze)
  function hydrateFromFetchedFile(fileObj) {
    const sheets = normalizeFileIntoSheets(fileObj);
    setAvailableSheets(sheets);
    setSelectedSheetIndex(0);
    const firstRows = (sheets[0] && sheets[0].rows) || [];
    setRows(firstRows);
    const keys = firstRows[0] ? Object.keys(stripFields(firstRows[0])) : [];
    setColumns(keys);
    setSelectedColumns(keys.slice()); // default all
    setXAxis(keys[0] || "");
    setYAxis(keys[1] || keys[0] || "");
  }

  function stripFields(r) {
    return r && r.fields ? r.fields : r;
  }

  // const handleUpload = async (e) => {
  //   const file = e.target.files?.[0];
  //   if (!file) return;
  //   try {
  //     const action = await dispatch(uploadExcelFile(file));
  //     const created = action?.payload?.file || action?.payload || action;
  //     if (created && (created._id || created.id)) {
  //       const id = created._id || created.id;
  //       await dispatch(getExcelFileById(id));
  //       hydrateFromFetchedFile(created);
  //       setSelectedFileId(id);
  //       setAnalyzeOpen(true);
  //       historyRef.current?.scrollIntoView({ behavior: "smooth" });
  //     } else {
  //       await dispatch(getExcelFiles());
  //     }
  //   } catch (err) {
  //     console.error("Upload failed", err);
  //     await dispatch(getExcelFiles());
  //   } finally {
  //     e.target.value = null;
  //   }
  // };

  const handleUpload = async (e) => {
  const file = e.target.files?.[0];
  if (!file) return;

  // Run the heavy upload logic asynchronously so the click handler exits fast
    setTimeout(async () => {
      try {
        const action = await dispatch(uploadExcelFile(file));
        const created = action?.payload?.file || action?.payload || action;

        if (created && (created._id || created.id)) {
          const id = created._id || created.id;
          await dispatch(getExcelFileById(id));
          hydrateFromFetchedFile(created);
          setSelectedFileId(id);
          setAnalyzeOpen(true);
          historyRef.current?.scrollIntoView({ behavior: "smooth" });
        } else {
          await dispatch(getExcelFiles());
        }
      } catch (err) {
        console.error("Upload failed", err);
        await dispatch(getExcelFiles());
      } finally {
        e.target.value = null;
      }
    }, 0); // 👈 runs on next tick, freeing the click handler immediately
  };

  const refreshFiles = async () => {
    await dispatch(getExcelFiles());
  };

  const handlePreviewFile = async (id) => {
    setAnalyzeOpen(false);
    setSelectedFileId(id);
    const action = await dispatch(getExcelFileById(id));
    const fileObj = action?.payload?.file || action?.payload;
    if (fileObj) hydrateFromFetchedFile(fileObj);
    else if (currentFile) hydrateFromFetchedFile(currentFile);
    historyRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleAnalyzeFile = async (id) => {
    setSelectedFileId(id);
    const action = await dispatch(getExcelFileById(id));
    const fileObj = action?.payload?.file || action?.payload;
    if (fileObj) hydrateFromFetchedFile(fileObj);
    else if (currentFile) hydrateFromFetchedFile(currentFile);
    setAnalyzeOpen(true);
    historyRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this uploaded file?")) return;
    await dispatch(deleteExcelFile(id));
    await refreshFiles();
    if (selectedFileId === id) {
      setSelectedFileId(null);
      setAvailableSheets([]);
      setRows([]);
      setColumns([]);
      setAnalyzeOpen(false);
      dispatch(clearCurrentFile());
    }
  };

  // When user picks another sheet index
  useEffect(() => {
    if (!availableSheets || availableSheets.length === 0) return;
    const s = availableSheets[selectedSheetIndex] || availableSheets[0];
    const sampled = (s.rows || []).slice(rowRange.start, Math.min(rowRange.end, (s.rows || []).length));
    setRows(sampled);
    const keys = sampled[0] ? Object.keys(stripFields(sampled[0])) : [];
    setColumns(keys);
    if (!keys.includes(xAxis)) setXAxis(keys[0] || "");
    if (!keys.includes(yAxis)) setYAxis(keys[1] || keys[0] || "");
    setSelectedColumns(keys.slice());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [availableSheets, selectedSheetIndex, rowRange.start, rowRange.end]);

  const toggleColumn = (col) => {
    setSelectedColumns((prev) => (prev.includes(col) ? prev.filter((c) => c !== col) : [...prev, col]));
  };

  const getFilteredRows = () => {
    if (!rows || !rows.length) return [];
    const normalized = rows.map(stripFields);
    if (!selectedColumns || selectedColumns.length === 0) return normalized;
    return normalized.map((r) => Object.fromEntries(Object.entries(r).filter(([k]) => selectedColumns.includes(k))));
  };

  // Build Chart.js chartData
  const buildChartData = () => {
    const filtered = getFilteredRows();
    if (!filtered.length || !xAxis || !yAxis) return null;

    const labels = filtered.map((r) => String(r[xAxis] ?? ""));
    const yVals = filtered.map((r) => {
      const v = r[yAxis];
      const n = Number(v);
      return Number.isFinite(n) ? n : 0;
    });

    const palette = [
      "rgba(54, 162, 235, 0.75)",
      "rgba(255, 99, 132, 0.75)",
      "rgba(255, 206, 86, 0.75)",
      "rgba(75, 192, 192, 0.75)",
      "rgba(153, 102, 255, 0.75)",
      "rgba(255, 159, 64, 0.75)",
    ];
    const backgroundColor = labels.map((_, i) => palette[i % palette.length]);

    if (chartType === "pie") {
      const map = new Map();
      labels.forEach((lbl, i) => map.set(lbl, (map.get(lbl) || 0) + yVals[i]));
      return {
        labels: Array.from(map.keys()),
        datasets: [{ data: Array.from(map.values()), backgroundColor: Array.from(map.keys()).map((_, i) => palette[i % palette.length]) }],
      };
    }

    return {
      labels,
      datasets: [
        {
          label: yAxis,
          data: yVals,
          backgroundColor,
          borderColor: "rgba(0,0,0,0.06)",
          borderWidth: 1,
        },
      ],
    };
  };

  const chartData = buildChartData();

  // Build Highcharts 3D options dynamically (inside the component)
  const build3DColumnOptions = () => {
    const filtered = getFilteredRows();
    if (!filtered.length || !xAxis || !yAxis) return null;

    return {
      chart: {
        type: "column",
        options3d: {
          enabled: true,
          alpha: 15,
          beta: 15,
          depth: 50,
          viewDistance: 25,
        },
      },
      title: { text: "3D Column Chart" },
      xAxis: { categories: filtered.map((r) => String(r[xAxis] ?? "")) },
      yAxis: { title: { text: yAxis } },
      plotOptions: { column: { depth: 25 } },
      series: [
        {
          name: yAxis,
          data: filtered.map((r) => Number(r[yAxis]) || 0),
        },
      ],
    };
  };

  // Download chart: Chart.js -> PNG, Highcharts -> SVG->PNG conversion
  // const downloadChart = () => {
  //   try {
  //     if (!chartRef.current) return alert("No chart to download.");
  //     if (chartType === "3d-column" && chartRef.current && chartRef.current.chart) {
  //       const hcChart = chartRef.current.chart;
  //       const svg = hcChart.getSVG({ exporting: { sourceWidth: hcChart.chartWidth, sourceHeight: hcChart.chartHeight } });
  //       const blob = new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
  //       const url = URL.createObjectURL(blob);
  //       const img = new Image();
  //       img.onload = () => {
  //         const canvas = document.createElement("canvas");
  //         canvas.width = img.width;
  //         canvas.height = img.height;
  //         const ctx = canvas.getContext("2d");
  //         ctx.fillStyle = "white";
  //         ctx.fillRect(0, 0, canvas.width, canvas.height);
  //         ctx.drawImage(img, 0, 0);
  //         const pngUrl = canvas.toDataURL("image/png");
  //         const a = document.createElement("a");
  //         a.href = pngUrl;
  //         a.download = `${selectedFileId || "chart"}.png`;
  //         a.click();
  //         URL.revokeObjectURL(url);
  //       };
  //       img.onerror = (err) => {
  //         console.error("Failed to convert SVG -> PNG", err);
  //         URL.revokeObjectURL(url);
  //         alert("Export failed.");
  //       };
  //       img.src = url;
  //     } else {
  //       // Chart.js
  //       const base64 = chartRef.current.toBase64Image ? chartRef.current.toBase64Image() : null;
  //       if (!base64) return alert("Chart.js instance not ready for export.");
  //       const a = document.createElement("a");
  //       a.href = base64;
  //       a.download = `${selectedFileId || "chart"}.png`;
  //       a.click();
  //     }
  //   } catch (err) {
  //     console.error("downloadChart error", err);
  //     alert("Failed to export chart image.");
  //   }
  // };

  // const downloadChart = () => {
  //   try {
  //     if (!chartRef.current) return alert("No chart to download.");

  //     if (chartType === "3d-column") {
  //       if (hc3dReady && chartRef.current.chart) {
  //         chartRef.current.chart.exportChart({
  //           type: "image/png",
  //           filename: selectedFileId || "chart",
  //         });
  //       } else if (hc3dFailed) {
  //         // fallback Chart.js
  //         const base64 = chartRef.current.toBase64Image?.();
  //         if (!base64) return alert("Fallback chart not ready.");
  //         const a = document.createElement("a");
  //         a.href = base64;
  //         a.download = `${selectedFileId || "chart"}-fallback.png`;
  //         a.click();
  //       } else {
  //         alert("3D module is still loading…");
  //       }
  //     } else {
  //       // Chart.js charts
  //       const base64 = chartRef.current.toBase64Image?.();
  //       if (!base64) return alert("Chart.js instance not ready for export.");
  //       const a = document.createElement("a");
  //       a.href = base64;
  //       a.download = `${selectedFileId || "chart"}.png`;
  //       a.click();
  //     }
  //   } catch (err) {
  //     console.error("downloadChart error", err);
  //     alert("Failed to export chart image.");
  //   }
  // };

  const downloadChart = () => {
    try {
      if (!chartRef.current) return alert("No chart to download.");

      if (chartType === "3d-column") {
        const hcChart = chartRef.current.chart;
        if (hcChart) {
          if (hc3dReady) {
            if (hcChart.exportChart) {
              hcChart.exportChart({
                type: "image/png",
                filename: selectedFileId || "chart",
              });
            } else {
              alert("Highcharts exporting module not loaded yet.");
            }
          } else if (hc3dFailed) {
            // fallback to Chart.js
            const base64 = chartRef.current.toBase64Image?.();
            if (!base64) return alert("Fallback chart not ready.");
            const a = document.createElement("a");
            a.href = base64;
            a.download = `${selectedFileId || "chart"}-fallback.png`;
            a.click();
          } else {
            alert("3D module is still loading…");
          }
        } else {
          alert("Highcharts chart instance not ready.");
        }
      } else {
        // Chart.js charts
        const base64 = chartRef.current.toBase64Image?.();
        if (!base64) return alert("Chart.js instance not ready for export.");
        const a = document.createElement("a");
        a.href = base64;
        a.download = `${selectedFileId || "chart"}.png`;
        a.click();
      }
    } catch (err) {
      console.error("downloadChart error", err);
      alert("Failed to export chart image.");
    }
  };


  // const downloadChart = () => {
  //   try {
  //     if (!chartRef.current) return alert("No chart to download.");

  //     if (chartType === "3d-column") {
  //       const hcChart = chartRef.current.chart;
  //       if (!hcChart) return alert("3D chart instance not ready.");
  //       if (!hcChart.exportChart) return alert("Highcharts exporting module not loaded yet.");

  //       hcChart.exportChart({
  //         type: "image/png",
  //         filename: selectedFileId || "chart",
  //       });
  //     } else {
  //       // Chart.js fallback
  //       const base64 = chartRef.current.toBase64Image?.();
  //       if (!base64) return alert("Chart.js instance not ready for export.");
  //       const a = document.createElement("a");
  //       a.href = base64;
  //       a.download = `${selectedFileId || "chart"}.png`;
  //       a.click();
  //     }
  //   } catch (err) {
  //     console.error("downloadChart error", err);
  //     alert("Failed to export chart image.");
  //   }
  // };




  // Download raw JSON saved on the server (file object)
  const downloadFileJson = (f) => {
    const blob = new Blob([JSON.stringify(f, null, 2)], { type: "application/json" });
    saveAs(blob, `${f.filename || "excel"}.json`);
  };

  // Table renderer (sticky head, zebra rows)
  const renderPreviewTable = (dataRows) => {
    if (!dataRows || !dataRows.length) return <div className="text-sm text-gray-500">No data to preview.</div>;
    const first = dataRows[0];
    const headers = Object.keys(first);

    return (
      <div className="overflow-x-auto max-h-[420px] border rounded bg-white">
        <table className="min-w-full text-sm table-auto border-collapse">
          <thead className="sticky top-0 bg-gray-900 text-white">
            <tr>
              {headers.map((h) => (
                <th key={h} className="px-3 py-2 border text-left whitespace-nowrap">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dataRows.map((r, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                {headers.map((h) => (
                  <td key={h} className="px-3 py-2 border text-gray-700">{String(r[h] ?? "")}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const SheetTabs = () => {
    if (!availableSheets || availableSheets.length <= 1) return null;
    return (
      <div className="flex gap-2 flex-wrap mb-3">
        {availableSheets.map((s, idx) => (
          <button
            key={s.name + idx}
            onClick={() => setSelectedSheetIndex(idx)}
            className={`px-3 py-1 rounded ${idx === selectedSheetIndex ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-800"}`}
          >
            {s.name} ({(s.rows || []).length})
          </button>
        ))}
      </div>
    );
  };

  return (
    <Layout>
       {/* <div className="p-6">
      <h1 className="text-xl font-bold mb-4">📂 Excel Upload History</h1>

      {status.fetchAll === "loading" && <p>Loading history...</p>}
      {status.fetchAll === "failed" && <p className="text-red-500">{error.fetchAll}</p>}

      {files.length === 0 && status.fetchAll === "succeeded" ? (
        <p>No Excel files uploaded yet.</p>
      ) : (
        <table className="w-full border border-gray-300">
          <thead className="bg-gray">
            <tr>
              <th className="p-2 border">File Name</th>
              <th className="p-2 border">Size</th>
              <th className="p-2 border">Uploaded At</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {files.map((file) => (
              <tr key={file._id} className="hover:bg-gray">
                <td className="p-2 border">{file.filename}</td>
                <td className="p-2 border">{(file.size / 1024).toFixed(2)} KB</td>
                <td className="p-2 border">
                  {new Date(file.uploadedAt).toLocaleString()}
                </td>
                <td className="p-2 border flex gap-2">
                  <button
                    onClick={() => handleview(file._id)}
                    className="px-3 py-1 bg-blue-500 text-white rounded"
                  >
                    View
                  </button>
                  <button
                    onClick={() => handleDelete(file._id)}
                    className="px-3 py-1 bg-red-500 text-white rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div> */}

      <div className="p-6">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* header */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-2xl font-semibold">Excel Upload → History → Analyze</h1>
              <p className="text-sm text-gray-600 mt-1">Upload .xls/.xlsx/.csv files, preview sheets, choose columns and build charts.</p>
            </div>

            <div className="flex gap-3">
              <label className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded cursor-pointer">
                <FiUpload /> Upload
                <input type="file" accept=".xlsx,.xls,.csv" onChange={handleUpload} className="hidden" />
              </label>

              {/* <button onClick={refreshFiles} className="px-4 py-2 bg-green-600 text-white rounded flex items-center gap-2">
                <FiClock /> Refresh
              </button> */}

              <button onClick={toggleHistory} className="px-4 py-2 bg-green-600 text-white rounded flex items-center gap-2">
                <FiClock /> History
              </button>
            </div>
          </div>

          {/* history list
          <section ref={historyRef} className="grid md:grid-cols-2 gap-4">
            {Array.isArray(files) && files.length > 0 ? (
              files.map((f) => (
                <div key={f._id} className="p-4 bg-white rounded shadow-sm flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <p className="font-medium text-gray-800 truncate">{f.filename}</p>
                    <p className="text-xs text-gray-500">
                      {f.uploadedAt ? new Date(f.uploadedAt).toLocaleString() : "N/A"}
                      {f.size ? ` • ${(f.size / 1024).toFixed(2)} KB` : ""}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <button onClick={() => handlePreviewFile(f._id)} title="Preview" className="p-2 bg-blue-100 rounded text-blue-600">
                      <FiEye />
                    </button>

                    <button onClick={() => handleAnalyzeFile(f._id)} title="Analyze" className="p-2 bg-indigo-100 rounded text-indigo-700 flex items-center">
                      <FiPlay />
                    </button>

                    <button onClick={() => downloadFileJson(f)} title="Download JSON" className="p-2 bg-yellow-100 rounded text-yellow-700">
                      <FiDownload />
                    </button>

                    <button onClick={() => handleDelete(f._id)} title="Delete" className="p-2 bg-red-100 rounded text-red-600">
                      <FiTrash2 />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full p-6 bg-white rounded text-center text-gray-500">No uploads yet.</div>
            )}
          </section> */}

          {/* History Panel */}
        {showHistory && (
          <section ref={historyRef} className="grid md:grid-cols-2 gap-4 mb-6">
            {files.length ? files.map((f) => (
              <div key={f._id} className="p-4 bg-white rounded shadow-sm flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <p className="font-medium text-gray-800 truncate">{f.filename}</p>
                  <p className="text-xs text-gray-500">
                    {f.uploadedAt ? new Date(f.uploadedAt).toLocaleString() : "N/A"}{f.size ? ` • ${(f.size / 1024).toFixed(2)} KB` : ""}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => handlePreviewFile(f._id)} title="Preview" className="p-2 bg-blue-100 rounded text-blue-600"><FiEye /></button>
                  <button onClick={() => handleAnalyzeFile(f._id)} title="Analyze" className="p-2 bg-indigo-100 rounded text-indigo-700"><FiPlay /></button>
                  <button onClick={() => downloadFileJson(f)} title="Download JSON" className="p-2 bg-yellow-100 rounded text-yellow-700"><FiDownload /></button>
                  <button onClick={() => handleDelete(f._id)} title="Delete" className="p-2 bg-red-100 rounded text-red-600"><FiTrash2 /></button>
                </div>
              </div>
            )) : <div className="col-span-full p-6 bg-white rounded text-center text-gray-500">No uploads yet.</div>}
          </section>
        )}

          {/* preview + builder */}
          <section className="bg-white rounded p-4 shadow">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4 ">
              <h2 className="text-lg text-black font-medium">{analyzeOpen ? "Chart Builder" : selectedFileId ? "Preview" : "Select a file"}</h2>

              <div className="flex items-center gap-3 text-grey-500">
                {selectedFileId && (
                  <>
                    <label className="text-sm flex items-center gap-2 ">
                      Sheet:
                      <select value={selectedSheetIndex} onChange={(e) => setSelectedSheetIndex(Number(e.target.value))} className="ml-2 border px-2 py-1 rounded">
                        {availableSheets.map((s, idx) => <option key={s.name + idx} value={idx}>{s.name}</option>)}
                      </select>
                    </label>

                    <label className="text-sm flex items-center gap-2 text-black-500">
                      X:
                      <select value={xAxis} onChange={(e) => setXAxis(e.target.value)} className="ml-2 border px-2 py-1 rounded">
                        <option value="">--</option>
                        {columns.map((c) => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </label>

                    <label className="text-sm flex items-center gap-2 text-black-500">
                      Y:
                      <select value={yAxis} onChange={(e) => setYAxis(e.target.value)} className="ml-2 border px-2 py-1 rounded">
                        <option value="">--</option>
                        {columns.map((c) => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </label>

                    <label className="text-sm flex items-center gap-2 text-black-500">
                      Type:
                      <select value={chartType} onChange={(e) => setChartType(e.target.value)} className="ml-2 border px-2 py-1 rounded">
                        <option value="bar">Bar</option>
                        <option value="line">Line</option>
                        <option value="pie">Pie</option>
                        <option value="scatter">Scatter</option>
                        <option value="3d-column">3D column</option>
                      </select>
                    </label>

                    <button onClick={() => setAnalyzeOpen(true)} className="px-3 py-1 bg-indigo-600 text-white rounded">Open Builder</button>
                    <button onClick={downloadChart} className="px-3 py-1 bg-gray-800 text-white rounded">Download Chart</button>
                  </>
                )}
              </div>
            </div>

            {/* sheet tabs */}
            <SheetTabs />

            {analyzeOpen ? (
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <div className="mb-3 font-medium text-cyan-500">Columns - pick which ones to include</div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {columns.map((c) => (
                      <label key={c} className={`px-2 py-1 rounded border ${selectedColumns.includes(c) ? "bg-indigo-100 text-indigo-700" : "bg-white"}`}>
                        <input type="checkbox" className="mr-2" checked={selectedColumns.includes(c)} onChange={() => toggleColumn(c)} />
                        {c}
                      </label>
                    ))}
                  </div>

                  <div className="mb-3 font-medium text-cyan-500">Row Range (sample)</div>
                  <div className="flex items-center gap-3 mb-4">
                    <input type="number" min="0" value={rowRange.start} onChange={(e) => setRowRange({ ...rowRange, start: Math.max(0, Number(e.target.value)) })} className="w-20 px-2 py-1 border rounded" />
                    <span>to</span>
                    <input type="number" min="1" value={rowRange.end} onChange={(e) => setRowRange({ ...rowRange, end: Math.max(1, Number(e.target.value)) })} className="w-20 px-2 py-1 border rounded" />
                    <button onClick={() => { setRowRange({ start: 0, end: MAX_SAMPLE }); }} className="px-2 py-1 bg-gray-200 rounded">Reset</button>
                  </div>



                  <div className="mb-3 font-medium text-cyan-500">Chart</div>
                  <div className="border rounded p-3 min-h-[320px] flex items-center justify-center">
                    {chartData ? (
                      (() => {
                        switch (chartType) {
                          case "bar":
                            return <Bar ref={chartRef} data={chartData} options={{ responsive: true }} />;

                          case "line":
                            return <Line ref={chartRef} data={chartData} options={{ responsive: true }} />;

                          case "pie":
                            return <Pie ref={chartRef} data={chartData} options={{ responsive: true }} />;

                          case "scatter":
                            return (
                              <Scatter
                                ref={chartRef}
                                data={{
                                  datasets: [
                                    {
                                      label: yAxis,
                                      data: getFilteredRows().map((r) => ({
                                        x: Number(r[xAxis]) || 0,
                                        y: Number(r[yAxis]) || 0,
                                      })),
                                      backgroundColor: "rgba(54,162,235,0.75)",
                                    },
                                  ],
                                }}
                                options={{ responsive: true }}
                              />
                            );

                          case "3d-column":
                            if (hc3dReady) {
                              return (
                                <HighchartsReact
                                  key="hc-3d-ready"
                                  highcharts={Highcharts}
                                  options={{
                                    ...build3DColumnOptions(),
                                    accessibility: { enabled: false }, // remove accessibility warning
                                  }}
                                  ref={chartRef}
                                />
                              );
                            } else if (hc3dFailed) {
                              return (
                                <div className="text-sm text-red-600">
                                  Failed to load Highcharts 3D. Showing fallback 2D bar chart.
                                  <div className="mt-2">
                                    <Bar ref={chartRef} data={chartData} options={{ responsive: true }} />
                                  </div>
                                </div>
                              );
                            } else {
                              return <div className="text-gray-500">Loading 3D module…</div>;
                            }

                          default:
                            return (
                              <div className="text-gray-500">
                                Select X and Y columns to render a chart.
                              </div>
                            );
                        }
                      })()
                    ) : (
                      <div className="text-gray-500">Select X and Y columns to render a chart.</div>
                    )}
                  </div>
                </div>

                <div>
                  <div className="mb-3 font-medium">Preview Table (sample)</div>
                  {renderPreviewTable(getFilteredRows())}
                </div>
              </div>
            ) : (
              <div>
                {selectedFileId ? (
                  <div>
                    <div className="mb-3 font-medium">Preview Table</div>
                    {renderPreviewTable(rows.map(stripFields))}
                  </div>
                ) : (
                  <div className="text-sm text-gray-600">Pick Preview or Analyze for any history item.</div>
                )}
              </div>
            )}
          </section>
        </div>
        <div>
         {/* <AiInsights parsedData={parsedData} /> */}
         <AiInsights parsedData={rows} />

        </div>
      </div>
    </Layout>
  );
}

/////////////////////////here is the upper code is fixed to see the lower code /////////////////////////

// import React, { useEffect, useRef, useState } from "react";
// import { FiEye, FiTrash2, FiUpload, FiClock, FiDownload, FiPlay } from "react-icons/fi";
// import Layout from "../../Layout/Layout";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   uploadExcelFile,
//   getExcelFiles,
//   deleteExcelFile,
//   getExcelFileById,
//   clearCurrentFile,
// } from "../../Redux/excelSlice";
// import { saveAs } from "file-saver";

// import {
//   Chart as ChartJS,
//   BarElement,
//   LineElement,
//   PointElement,
//   ArcElement,
//   CategoryScale,
//   LinearScale,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { Bar, Line, Pie, Scatter } from "react-chartjs-2";

// ChartJS.register(
//   BarElement,
//   LineElement,
//   PointElement,
//   ArcElement,
//   CategoryScale,
//   LinearScale,
//   Tooltip,
//   Legend
// );

// import Highcharts from "highcharts";
// import HighchartsReact from "highcharts-react-official";

// export default function ExcelPage() {
//   const dispatch = useDispatch();
//   const { files, status, error } = useSelector((state) => state.excel);

//   const historyRef = useRef(null);
//   const chartRef = useRef(null);

//   // UI state
//   const [showHistory, setShowHistory] = useState(false);
//   const [selectedFileId, setSelectedFileId] = useState(null);
//   const [availableSheets, setAvailableSheets] = useState([]);
//   const [selectedSheetIndex, setSelectedSheetIndex] = useState(0);
//   const [rows, setRows] = useState([]);
//   const [columns, setColumns] = useState([]);
//   const [xAxis, setXAxis] = useState("");
//   const [yAxis, setYAxis] = useState("");
//   const [chartType, setChartType] = useState("bar");
//   const [selectedColumns, setSelectedColumns] = useState([]);
//   const [rowRange, setRowRange] = useState({ start: 0, end: 200 });
//   const [analyzeOpen, setAnalyzeOpen] = useState(false);
//   const [hc3dReady, setHc3dReady] = useState(false);
//   const [hc3dFailed, setHc3dFailed] = useState(false);

//   const MAX_SAMPLE = 200;

//   useEffect(() => {
//     dispatch(getExcelFiles());
//   }, [dispatch]);

//   const toggleHistory = () => {
//     if (!showHistory) {
//       dispatch(getExcelFiles());
//     }
//     setShowHistory((prev) => !prev);
//   };

//   // ========== File Handling & Normalize ==========
//   function normalizeFileIntoSheets(fileObj) {
//     if (!fileObj) return [];
//     const f = fileObj.file || fileObj;
//     if (Array.isArray(f.sheets) && f.sheets.length > 0) {
//       return f.sheets.map((s) => ({
//         name: s.name || "Sheet",
//         rows: Array.isArray(s.rows) ? s.rows.slice(0, MAX_SAMPLE) : [],
//       }));
//     }
//     if (Array.isArray(f.data)) {
//       return [{ name: f.filename || "Sheet1", rows: f.data.slice(0, MAX_SAMPLE) }];
//     }
//     return [];
//   }

//   function hydrateFromFetchedFile(fileObj) {
//     const sheets = normalizeFileIntoSheets(fileObj);
//     setAvailableSheets(sheets);
//     setSelectedSheetIndex(0);
//     const firstRows = (sheets[0] && sheets[0].rows) || [];
//     setRows(firstRows);
//     const keys = firstRows[0] ? Object.keys(stripFields(firstRows[0])) : [];
//     setColumns(keys);
//     setSelectedColumns(keys.slice());
//     setXAxis(keys[0] || "");
//     setYAxis(keys[1] || keys[0] || "");
//   }

//   function stripFields(r) {
//     return r && r.fields ? r.fields : r;
//   }

//   const handleUpload = async (e) => {
//     const file = e.target.files?.[0];
//     if (!file) return;
//     try {
//       const action = await dispatch(uploadExcelFile(file));
//       const created = action?.payload?.file || action?.payload || action;
//       if (created && (created._id || created.id)) {
//         const id = created._id || created.id;
//         await dispatch(getExcelFileById(id));
//         hydrateFromFetchedFile(created);
//         setSelectedFileId(id);
//         setAnalyzeOpen(true);
//         historyRef.current?.scrollIntoView({ behavior: "smooth" });
//       } else {
//         await dispatch(getExcelFiles());
//       }
//     } catch (err) {
//       console.error("Upload failed", err);
//       await dispatch(getExcelFiles());
//     } finally {
//       e.target.value = null;
//     }
//   };

//   const refreshFiles = async () => {
//     await dispatch(getExcelFiles());
//   };

//   const handlePreviewFile = async (id) => {
//     setAnalyzeOpen(false);
//     setSelectedFileId(id);
//     const action = await dispatch(getExcelFileById(id));
//     const fileObj = action?.payload?.file || action?.payload;
//     if (fileObj) hydrateFromFetchedFile(fileObj);
//     historyRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   const handleAnalyzeFile = async (id) => {
//     setSelectedFileId(id);
//     const action = await dispatch(getExcelFileById(id));
//     const fileObj = action?.payload?.file || action?.payload;
//     if (fileObj) hydrateFromFetchedFile(fileObj);
//     setAnalyzeOpen(true);
//     historyRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm("Delete this uploaded file?")) return;
//     await dispatch(deleteExcelFile(id));
//     await refreshFiles();
//     if (selectedFileId === id) {
//       setSelectedFileId(null);
//       setAvailableSheets([]);
//       setRows([]);
//       setColumns([]);
//       setAnalyzeOpen(false);
//       dispatch(clearCurrentFile());
//     }
//   };

//   // ========== Sheets & Rows ==========
//   useEffect(() => {
//     if (!availableSheets || availableSheets.length === 0) return;
//     const s = availableSheets[selectedSheetIndex] || availableSheets[0];
//     const sampled = (s.rows || []).slice(
//       rowRange.start,
//       Math.min(rowRange.end, (s.rows || []).length)
//     );
//     setRows(sampled);
//     const keys = sampled[0] ? Object.keys(stripFields(sampled[0])) : [];
//     setColumns(keys);
//     if (!keys.includes(xAxis)) setXAxis(keys[0] || "");
//     if (!keys.includes(yAxis)) setYAxis(keys[1] || keys[0] || "");
//     setSelectedColumns(keys.slice());
//   }, [availableSheets, selectedSheetIndex, rowRange.start, rowRange.end]);

//   const toggleColumn = (col) => {
//     setSelectedColumns((prev) =>
//       prev.includes(col) ? prev.filter((c) => c !== col) : [...prev, col]
//     );
//   };

//   const getFilteredRows = () => {
//     if (!rows || !rows.length) return [];
//     const normalized = rows.map(stripFields);
//     if (!selectedColumns || selectedColumns.length === 0) return normalized;
//     return normalized.map((r) =>
//       Object.fromEntries(Object.entries(r).filter(([k]) => selectedColumns.includes(k)))
//     );
//   };

//   // ========== Chart Builder ==========
//   const buildChartData = () => {
//     const filtered = getFilteredRows();
//     if (!filtered.length || !xAxis || !yAxis) return null;

//     const labels = filtered.map((r) => String(r[xAxis] ?? ""));
//     const yVals = filtered.map((r) => Number(r[yAxis]) || 0);

//     return {
//       labels,
//       datasets: [
//         {
//           label: yAxis,
//           data: yVals,
//           backgroundColor: "rgba(54, 162, 235, 0.6)",
//         },
//       ],
//     };
//   };

//   const chartData = buildChartData();

//   const downloadChart = () => {
//     if (!chartRef.current) return alert("No chart to download.");
//     const base64 = chartRef.current.toBase64Image?.();
//     if (!base64) return alert("Chart not ready.");
//     const a = document.createElement("a");
//     a.href = base64;
//     a.download = `${selectedFileId || "chart"}.png`;
//     a.click();
//   };

//   const downloadFileJson = (f) => {
//     const blob = new Blob([JSON.stringify(f, null, 2)], {
//       type: "application/json",
//     });
//     saveAs(blob, `${f.filename || "excel"}.json`);
//   };

//   const renderPreviewTable = (dataRows) => {
//     if (!dataRows || !dataRows.length)
//       return <div className="text-sm text-gray-500">No data to preview.</div>;
//     const first = dataRows[0];
//     const headers = Object.keys(first);

//     return (
//       <div className="overflow-x-auto max-h-[420px] border rounded bg-white">
//         <table className="min-w-full text-sm table-auto border-collapse">
//           <thead className="sticky top-0 bg-gray-900 text-white">
//             <tr>
//               {headers.map((h) => (
//                 <th key={h} className="px-3 py-2 border text-left">
//                   {h}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {dataRows.map((r, i) => (
//               <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
//                 {headers.map((h) => (
//                   <td key={h} className="px-3 py-2 border text-gray-700">
//                     {String(r[h] ?? "")}
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
//   };

//   return (
//     <Layout>
//       <div className="p-6">
//         <div className="flex items-start justify-between gap-4 mb-6">
//           <div>
//             <h1 className="text-2xl font-semibold">
//               Excel Upload → History → Analyze
//             </h1>
//             <p className="text-sm text-gray-600 mt-1">
//               Upload .xls/.xlsx/.csv files, preview sheets, choose columns and
//               build charts.
//             </p>
//           </div>

//           <div className="flex gap-3">
//             <label className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded cursor-pointer">
//               <FiUpload /> Upload
//               <input
//                 type="file"
//                 accept=".xlsx,.xls,.csv"
//                 onChange={handleUpload}
//                 className="hidden"
//               />
//             </label>

//             <button
//               onClick={refreshFiles}
//               className="px-4 py-2 bg-green-600 text-white rounded flex items-center gap-2"
//             >
//               <FiClock /> Refresh
//             </button>

//             <button
//               onClick={toggleHistory}
//               className="px-4 py-2 bg-green-600 text-white rounded flex items-center gap-2"
//             >
//               <FiClock /> History
//             </button>
//           </div>
//         </div>

//         {/* ✅ History shows only when toggled */}
//         {showHistory && (
//           <section ref={historyRef} className="grid md:grid-cols-2 gap-4 mb-6">
//             {Array.isArray(files) && files.length > 0 ? (
//               files.map((f) => (
//                 <div
//                   key={f._id}
//                   className="p-4 bg-white rounded shadow-sm flex items-center justify-between gap-4"
//                 >
//                   <div className="min-w-0">
//                     <p className="font-medium text-gray-800 truncate">
//                       {f.filename}
//                     </p>
//                     <p className="text-xs text-gray-500">
//                       {f.uploadedAt
//                         ? new Date(f.uploadedAt).toLocaleString()
//                         : "N/A"}
//                       {f.size ? ` • ${(f.size / 1024).toFixed(2)} KB` : ""}
//                     </p>
//                   </div>

//                   <div className="flex gap-2">
//                     <button
//                       onClick={() => handlePreviewFile(f._id)}
//                       title="Preview"
//                       className="p-2 bg-blue-100 rounded text-blue-600"
//                     >
//                       <FiEye />
//                     </button>
//                     <button
//                       onClick={() => handleAnalyzeFile(f._id)}
//                       title="Analyze"
//                       className="p-2 bg-indigo-100 rounded text-indigo-700"
//                     >
//                       <FiPlay />
//                     </button>
//                     <button
//                       onClick={() => downloadFileJson(f)}
//                       title="Download JSON"
//                       className="p-2 bg-yellow-100 rounded text-yellow-700"
//                     >
//                       <FiDownload />
//                     </button>
//                     <button
//                       onClick={() => handleDelete(f._id)}
//                       title="Delete"
//                       className="p-2 bg-red-100 rounded text-red-600"
//                     >
//                       <FiTrash2 />
//                     </button>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <div className="col-span-full p-6 bg-white rounded text-center text-gray-500">
//                 No uploads yet.
//               </div>
//             )}
//           </section>
//         )}

//         {/* Preview + Builder */}
//         <section className="bg-white rounded p-4 shadow">
//           {selectedFileId ? (
//             analyzeOpen ? (
//               <div>
//                 <h2 className="text-lg font-medium mb-3">Chart Builder</h2>
//                 {chartData ? (
//                   chartType === "bar" ? (
//                     <Bar ref={chartRef} data={chartData} />
//                   ) : chartType === "line" ? (
//                     <Line ref={chartRef} data={chartData} />
//                   ) : chartType === "pie" ? (
//                     <Pie ref={chartRef} data={chartData} />
//                   ) : (
//                     <Scatter
//                       ref={chartRef}
//                       data={{
//                         datasets: [
//                           {
//                             label: yAxis,
//                             data: getFilteredRows().map((r) => ({
//                               x: Number(r[xAxis]) || 0,
//                               y: Number(r[yAxis]) || 0,
//                             })),
//                           },
//                         ],
//                       }}
//                     />
//                   )
//                 ) : (
//                   <p className="text-gray-500">
//                     Select X and Y columns to render a chart.
//                   </p>
//                 )}

//                 <button
//                   onClick={downloadChart}
//                   className="mt-4 px-3 py-1 bg-gray-800 text-white rounded"
//                 >
//                   Download Chart
//                 </button>
//               </div>
//             ) : (
//               <div>
//                 <h2 className="text-lg font-medium mb-3">Preview Table</h2>
//                 {renderPreviewTable(rows.map(stripFields))}
//               </div>
//             )
//           ) : (
//             <p className="text-gray-600">Pick Preview or Analyze for a file.</p>
//           )}
//         </section>
//       </div>
//     </Layout>
//   );
// }


// import React, { useEffect, useRef, useState } from "react";
// import { FiEye, FiTrash2, FiUpload, FiClock, FiDownload, FiPlay } from "react-icons/fi";
// import Layout from "../../Layout/Layout";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   uploadExcelFile,
//   getExcelFiles,
//   deleteExcelFile,
//   getExcelFileById,
//   clearCurrentFile,
// } from "../../Redux/excelSlice";
// import { saveAs } from "file-saver";

// import {
//   Chart as ChartJS,
//   BarElement,
//   LineElement,
//   PointElement,
//   ArcElement,
//   CategoryScale,
//   LinearScale,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { Bar, Line, Pie, Scatter } from "react-chartjs-2";

// ChartJS.register(
//   BarElement,
//   LineElement,
//   PointElement,
//   ArcElement,
//   CategoryScale,
//   LinearScale,
//   Tooltip,
//   Legend
// );

// import Highcharts from "highcharts";
// import HighchartsReact from "highcharts-react-official";

// export default function ExcelPage() {
//   const dispatch = useDispatch();
//   const { files, status, error } = useSelector((state) => state.excel);

//   const historyRef = useRef(null);
//   const chartRef = useRef(null);

//   // UI state
//   const [showHistory, setShowHistory] = useState(false);
//   const [selectedFileId, setSelectedFileId] = useState(null);
//   const [availableSheets, setAvailableSheets] = useState([]);
//   const [selectedSheetIndex, setSelectedSheetIndex] = useState(0);
//   const [rows, setRows] = useState([]);
//   const [columns, setColumns] = useState([]);
//   const [xAxis, setXAxis] = useState("");
//   const [yAxis, setYAxis] = useState("");
//   const [chartType, setChartType] = useState("bar");
//   const [selectedColumns, setSelectedColumns] = useState([]);
//   const [rowRange, setRowRange] = useState({ start: 0, end: 200 });
//   const [analyzeOpen, setAnalyzeOpen] = useState(false);
//   const [hc3dReady, setHc3dReady] = useState(false);
//   const [hc3dFailed, setHc3dFailed] = useState(false);

//   const MAX_SAMPLE = 200;

//   // Load Excel history
//   useEffect(() => {
//     dispatch(getExcelFiles());
//   }, [dispatch]);

//   const toggleHistory = () => {
//     if (!showHistory) dispatch(getExcelFiles());
//     setShowHistory((prev) => !prev);
//   };

//   // Highcharts 3D dynamic load
//   useEffect(() => {
//     if (typeof window === "undefined") return;
//     let cancelled = false;

//     (async () => {
//       try {
//         const mod = await import("highcharts/highcharts-3d");
//         let init = typeof mod === "function" ? mod : mod?.default || Object.values(mod).find((v) => typeof v === "function");
//         if (!init) throw new Error("Highcharts-3D initializer not found");
//         init(Highcharts);
//         if (!cancelled) setHc3dReady(true);
//       } catch (err) {
//         console.error("Highcharts 3D load failed:", err);
//         if (!cancelled) setHc3dFailed(true);
//       }
//     })();

//     return () => { cancelled = true; };
//   }, []);

//   // ===== File Handling =====
//   const stripFields = (r) => r?.fields || r;

//   const normalizeFileIntoSheets = (fileObj) => {
//     if (!fileObj) return [];
//     const f = fileObj.file || fileObj;
//     if (Array.isArray(f.sheets) && f.sheets.length) {
//       return f.sheets.map((s) => ({
//         name: s.name || "Sheet",
//         rows: Array.isArray(s.rows) ? s.rows.slice(0, MAX_SAMPLE) : [],
//       }));
//     }
//     if (Array.isArray(f.data)) return [{ name: f.filename || "Sheet1", rows: f.data.slice(0, MAX_SAMPLE) }];
//     return [];
//   };

//   const hydrateFromFetchedFile = (fileObj) => {
//     const sheets = normalizeFileIntoSheets(fileObj);
//     setAvailableSheets(sheets);
//     setSelectedSheetIndex(0);
//     const firstRows = sheets[0]?.rows || [];
//     setRows(firstRows);
//     const keys = firstRows[0] ? Object.keys(stripFields(firstRows[0])) : [];
//     setColumns(keys);
//     setSelectedColumns(keys.slice());
//     setXAxis(keys[0] || "");
//     setYAxis(keys[1] || keys[0] || "");
//   };

//   const handleUpload = async (e) => {
//     const file = e.target.files?.[0];
//     if (!file) return;
//     try {
//       const action = await dispatch(uploadExcelFile(file));
//       const created = action?.payload?.file || action?.payload || action;
//       if (created?._id || created?.id) {
//         const id = created._id || created.id;
//         await dispatch(getExcelFileById(id));
//         hydrateFromFetchedFile(created);
//         setSelectedFileId(id);
//         setAnalyzeOpen(true);
//         historyRef.current?.scrollIntoView({ behavior: "smooth" });
//       } else {
//         await dispatch(getExcelFiles());
//       }
//     } catch (err) {
//       console.error("Upload failed", err);
//       await dispatch(getExcelFiles());
//     } finally {
//       e.target.value = null;
//     }
//   };

//   const refreshFiles = async () => dispatch(getExcelFiles());

//   const handlePreviewFile = async (id) => {
//     setAnalyzeOpen(false);
//     setSelectedFileId(id);
//     const action = await dispatch(getExcelFileById(id));
//     const fileObj = action?.payload?.file || action?.payload;
//     if (fileObj) hydrateFromFetchedFile(fileObj);
//     historyRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   const handleAnalyzeFile = async (id) => {
//     setSelectedFileId(id);
//     const action = await dispatch(getExcelFileById(id));
//     const fileObj = action?.payload?.file || action?.payload;
//     if (fileObj) hydrateFromFetchedFile(fileObj);
//     setAnalyzeOpen(true);
//     historyRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm("Delete this uploaded file?")) return;
//     await dispatch(deleteExcelFile(id));
//     await refreshFiles();
//     if (selectedFileId === id) {
//       setSelectedFileId(null);
//       setAvailableSheets([]);
//       setRows([]);
//       setColumns([]);
//       setAnalyzeOpen(false);
//       dispatch(clearCurrentFile());
//     }
//   };

//   // ===== Sheets & Rows =====
//   useEffect(() => {
//     if (!availableSheets.length) return;
//     const s = availableSheets[selectedSheetIndex] || availableSheets[0];
//     const sampled = s.rows.slice(rowRange.start, Math.min(rowRange.end, s.rows.length));
//     setRows(sampled);
//     const keys = sampled[0] ? Object.keys(stripFields(sampled[0])) : [];
//     setColumns(keys);
//     if (!keys.includes(xAxis)) setXAxis(keys[0] || "");
//     if (!keys.includes(yAxis)) setYAxis(keys[1] || keys[0] || "");
//     setSelectedColumns(keys.slice());
//   }, [availableSheets, selectedSheetIndex, rowRange.start, rowRange.end]);

//   const toggleColumn = (col) => {
//     setSelectedColumns((prev) => prev.includes(col) ? prev.filter((c) => c !== col) : [...prev, col]);
//   };

//   const getFilteredRows = () => {
//     if (!rows.length) return [];
//     const normalized = rows.map(stripFields);
//     if (!selectedColumns.length) return normalized;
//     return normalized.map((r) => Object.fromEntries(Object.entries(r).filter(([k]) => selectedColumns.includes(k))));
//   };

//   // ===== Chart Builder =====
//   const buildChartData = () => {
//     const filtered = getFilteredRows();
//     if (!filtered.length || !xAxis || !yAxis) return null;

//     const labels = filtered.map((r) => String(r[xAxis] ?? ""));
//     const yVals = filtered.map((r) => Number(r[yAxis]) || 0);

//     return {
//       labels,
//       datasets: [{ label: yAxis, data: yVals, backgroundColor: "rgba(54, 162, 235, 0.6)" }],
//     };
//   };

//   const chartData = buildChartData();

//   const build3DColumnOptions = () => {
//     const filtered = getFilteredRows();
//     if (!filtered.length || !xAxis || !yAxis) return null;
//     return {
//       chart: { type: "column", options3d: { enabled: true, alpha: 15, beta: 15, depth: 50, viewDistance: 25 } },
//       title: { text: "3D Column Chart" },
//       xAxis: { categories: filtered.map((r) => String(r[xAxis] ?? "")) },
//       yAxis: { title: { text: yAxis } },
//       plotOptions: { column: { depth: 25 } },
//       series: [{ name: yAxis, data: filtered.map((r) => Number(r[yAxis]) || 0) }],
//     };
//   };

//   const downloadChart = () => {
//     if (!chartRef.current) return alert("No chart to download.");

//     if (chartType === "3d-column" && hc3dReady && chartRef.current.chart) {
//       chartRef.current.chart.exportChart({ type: "image/png", filename: selectedFileId || "chart" });
//     } else {
//       const base64 = chartRef.current.toBase64Image?.();
//       if (!base64) return alert("Chart not ready.");
//       const a = document.createElement("a");
//       a.href = base64;
//       a.download = `${selectedFileId || "chart"}.png`;
//       a.click();
//     }
//   };

//   const downloadFileJson = (f) => {
//     const blob = new Blob([JSON.stringify(f, null, 2)], { type: "application/json" });
//     saveAs(blob, `${f.filename || "excel"}.json`);
//   };

//   const renderPreviewTable = (dataRows) => {
//     if (!dataRows?.length) return <div className="text-sm text-gray-500">No data to preview.</div>;
//     const headers = Object.keys(dataRows[0]);
//     return (
//       <div className="overflow-x-auto max-h-[420px] border rounded bg-white">
//         <table className="min-w-full text-sm table-auto border-collapse">
//           <thead className="sticky top-0 bg-gray-900 text-white">
//             <tr>{headers.map((h) => <th key={h} className="px-3 py-2 border text-left">{h}</th>)}</tr>
//           </thead>
//           <tbody>
//             {dataRows.map((r, i) => (
//               <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
//                 {headers.map((h) => <td key={h} className="px-3 py-2 border text-gray-700">{String(r[h] ?? "")}</td>)}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
//   };

//   // ===== Render =====
//   return (
//     <Layout>
//       <div className="p-6">
//         {/* Header + Controls */}
//         <div className="flex items-start justify-between gap-4 mb-6">
//           <div>
//             <h1 className="text-2xl font-semibold">Excel Upload → History → Analyze</h1>
//             <p className="text-sm text-gray-600 mt-1">
//               Upload .xls/.xlsx/.csv files, preview sheets, choose columns and build charts.
//             </p>
//           </div>
//           <div className="flex gap-3">
//             <label className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded cursor-pointer">
//               <FiUpload /> Upload
//               <input type="file" accept=".xlsx,.xls,.csv" onChange={handleUpload} className="hidden" />
//             </label>
//             <button onClick={refreshFiles} className="px-4 py-2 bg-green-600 text-white rounded flex items-center gap-2"><FiClock /> Refresh</button>
//             <button onClick={toggleHistory} className="px-4 py-2 bg-green-600 text-white rounded flex items-center gap-2"><FiClock /> History</button>
//           </div>
//         </div>

//         {/* History Panel */}
//         {showHistory && (
//           <section ref={historyRef} className="grid md:grid-cols-2 gap-4 mb-6">
//             {files.length ? files.map((f) => (
//               <div key={f._id} className="p-4 bg-white rounded shadow-sm flex items-center justify-between gap-4">
//                 <div className="min-w-0">
//                   <p className="font-medium text-gray-800 truncate">{f.filename}</p>
//                   <p className="text-xs text-gray-500">
//                     {f.uploadedAt ? new Date(f.uploadedAt).toLocaleString() : "N/A"}{f.size ? ` • ${(f.size / 1024).toFixed(2)} KB` : ""}
//                   </p>
//                 </div>
//                 <div className="flex gap-2">
//                   <button onClick={() => handlePreviewFile(f._id)} title="Preview" className="p-2 bg-blue-100 rounded text-blue-600"><FiEye /></button>
//                   <button onClick={() => handleAnalyzeFile(f._id)} title="Analyze" className="p-2 bg-indigo-100 rounded text-indigo-700"><FiPlay /></button>
//                   <button onClick={() => downloadFileJson(f)} title="Download JSON" className="p-2 bg-yellow-100 rounded text-yellow-700"><FiDownload /></button>
//                   <button onClick={() => handleDelete(f._id)} title="Delete" className="p-2 bg-red-100 rounded text-red-600"><FiTrash2 /></button>
//                 </div>
//               </div>
//             )) : <div className="col-span-full p-6 bg-white rounded text-center text-gray-500">No uploads yet.</div>}
//           </section>
//         )}

//         {/* Preview / Chart Builder */}
//         <section className="bg-white rounded p-4 shadow">
//           {selectedFileId ? (
//             analyzeOpen ? (
//               <div>
//                 <h2 className="text-lg font-medium mb-3">Chart Builder</h2>

//                 {/* Chart */}
//                 <div className="mb-3 border p-3 min-h-[320px] flex items-center justify-center">
//                   {chartData ? (
//                     chartType === "bar" ? <Bar ref={chartRef} data={chartData} /> :
//                     chartType === "line" ? <Line ref={chartRef} data={chartData} /> :
//                     chartType === "pie" ? <Pie ref={chartRef} data={chartData} /> :
//                     chartType === "3d-column" ? (
//                       hc3dReady ? <HighchartsReact highcharts={Highcharts} options={build3DColumnOptions()} ref={chartRef} /> :
//                       hc3dFailed ? <Bar ref={chartRef} data={chartData} /> :
//                       <div className="text-gray-500">Loading 3D module…</div>
//                     ) :
//                     <Scatter ref={chartRef} data={{ datasets: [{ label: yAxis, data: getFilteredRows().map(r => ({ x: Number(r[xAxis])||0, y: Number(r[yAxis])||0 })) }] }} />
//                   ) : <div className="text-gray-500">Select X and Y columns to render a chart.</div>}
//                 </div>

//                 <button onClick={downloadChart} className="mt-4 px-3 py-1 bg-gray-800 text-white rounded">Download Chart</button>
//               </div>
//             ) : (
//               <div>
//                 <h2 className="text-lg font-medium mb-3">Preview Table</h2>
//                 {renderPreviewTable(rows.map(stripFields))}
//               </div>
//             )
//           ) : <p className="text-gray-600">Pick Preview or Analyze for a file.</p>}
//         </section>
//       </div>
//     </Layout>
//   );
// }




// ... keep all your imports the same (React, icons, redux, chart.js, highcharts, etc.)

// import React, { useEffect, useRef, useState } from "react";
// import { FiEye, FiTrash2, FiUpload, FiClock, FiDownload, FiPlay } from "react-icons/fi";
// import Layout from "../../Layout/Layout";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   uploadExcelFile,
//   getExcelFiles,
//   deleteExcelFile,
//   getExcelFileById,
//   clearCurrentFile,
// } from "../../Redux/excelSlice";
// import { saveAs } from "file-saver";

// import {
//   Chart as ChartJS,
//   BarElement,
//   LineElement,
//   PointElement,
//   ArcElement,
//   CategoryScale,
//   LinearScale,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { Bar, Line, Pie, Scatter } from "react-chartjs-2";

// ChartJS.register(
//   BarElement,
//   LineElement,
//   PointElement,
//   ArcElement,
//   CategoryScale,
//   LinearScale,
//   Tooltip,
//   Legend
// );

// import Highcharts from "highcharts";
// import HighchartsReact from "highcharts-react-official";
// // NOTE: do NOT import highcharts-3d at top-level — we load it dynamically below


// export default function ExcelPage() {
//   const dispatch = useDispatch();
//   const { files, status, error } = useSelector((state) => state.excel);

//   const historyRef = useRef(null);
//   const chartRef = useRef(null);

//   // state
//   const [showHistory, setShowHistory] = useState(false); // 👈 toggle history
//   const [selectedFileId, setSelectedFileId] = useState(null);
//   const [availableSheets, setAvailableSheets] = useState([]);
//   const [selectedSheetIndex, setSelectedSheetIndex] = useState(0);
//   const [rows, setRows] = useState([]);
//   const [columns, setColumns] = useState([]);
//   const [xAxis, setXAxis] = useState("");
//   const [yAxis, setYAxis] = useState("");
//   const [chartType, setChartType] = useState("bar");
//   const [selectedColumns, setSelectedColumns] = useState([]);
//   const [rowRange, setRowRange] = useState({ start: 0, end: 200 });
//   const [analyzeOpen, setAnalyzeOpen] = useState(false);
//   const [hc3dReady, setHc3dReady] = useState(false);
//   const [hc3dFailed, setHc3dFailed] = useState(false);
//   const MAX_SAMPLE = 200;

//   // fetch files initially
//   useEffect(() => {
//     dispatch(getExcelFiles());
//   }, [dispatch]);

//   // toggle history section
//   const toggleHistory = () => {
//     if (!showHistory) {
//       dispatch(getExcelFiles());
//     }
//     setShowHistory((prev) => !prev);
//   };

//   // ... keep all your normalizeFileIntoSheets, hydrateFromFetchedFile,
//   // stripFields, handleUpload, handlePreviewFile, handleAnalyzeFile,
//   // handleDelete, useEffect for sheet changes, toggleColumn, getFilteredRows,
//   // buildChartData, build3DColumnOptions, downloadChart, downloadFileJson,
//   // renderPreviewTable, and SheetTabs the same

//   // Robust dynamic load/initialize for highcharts-3d
//   useEffect(() => {
//     // guard for SSR environments (Next.js) — only run on client
//     if (typeof window === "undefined") {
//       console.warn("Skipping highcharts-3d dynamic load on server.");
//       return;
//     }

//     let cancelled = false;

//     (async () => {
//       try {
//         // Try import the module (works with Webpack, Vite, CRA, etc.)
//         const mod = await import("highcharts/highcharts-3d");

//         // Try to discover an initializer function in module shape variations:
//         // - mod is function
//         // - mod.default is function
//         // - mod has any function export (fallback)
//         let init = null;
//         if (typeof mod === "function") init = mod;
//         else if (mod && typeof mod.default === "function") init = mod.default;
//         else if (mod) {
//           // search values for first function (safe fallback)
//           const values = Object.values(mod);
//           for (const v of values) {
//             if (typeof v === "function") {
//               init = v;
//               break;
//             }
//           }
//         }

//         if (!init) {
//           console.error("Could not find initializer function in highcharts-3d module:", mod);
//           if (!cancelled) setHc3dFailed(true);
//           return;
//         }

//         // call initializer with Highcharts
//         init(Highcharts);

//         // small safety: ensure the 3D options are applied by checking that
//         // the Highcharts.Chart prototype or plotOptions got the 3d flag (best-effort)
//         if (!cancelled) {
//           setHc3dReady(true);
//           console.info("highcharts-3d initialized successfully.");
//         }
//       } catch (err) {
//         console.error("Error loading/initializing highcharts-3d:", err);
//         if (!cancelled) setHc3dFailed(true);
//       }
//     })();

//     return () => {
//       cancelled = true;
//     };
//   }, []);

//   // helper to normalize backend file object into sheets list:
//   function normalizeFileIntoSheets(fileObj) {
//     if (!fileObj) return [];
//     const f = fileObj.file || fileObj;
//     if (Array.isArray(f.sheets) && f.sheets.length > 0) {
//       return f.sheets.map((s) => ({ name: s.name || "Sheet", rows: Array.isArray(s.rows) ? s.rows.slice(0, MAX_SAMPLE) : [] }));
//     }
//     if (Array.isArray(f.data)) {
//       return [{ name: f.filename || "Sheet1", rows: f.data.slice(0, MAX_SAMPLE) }];
//     }
//     return [];
//   }

//   // Called after we fetch a file (preview or analyze)
//   function hydrateFromFetchedFile(fileObj) {
//     const sheets = normalizeFileIntoSheets(fileObj);
//     setAvailableSheets(sheets);
//     setSelectedSheetIndex(0);
//     const firstRows = (sheets[0] && sheets[0].rows) || [];
//     setRows(firstRows);
//     const keys = firstRows[0] ? Object.keys(stripFields(firstRows[0])) : [];
//     setColumns(keys);
//     setSelectedColumns(keys.slice()); // default all
//     setXAxis(keys[0] || "");
//     setYAxis(keys[1] || keys[0] || "");
//   }

//   function stripFields(r) {
//     return r && r.fields ? r.fields : r;
//   }

//   const handleUpload = async (e) => {
//     const file = e.target.files?.[0];
//     if (!file) return;
//     try {
//       const action = await dispatch(uploadExcelFile(file));
//       const created = action?.payload?.file || action?.payload || action;
//       if (created && (created._id || created.id)) {
//         const id = created._id || created.id;
//         await dispatch(getExcelFileById(id));
//         hydrateFromFetchedFile(created);
//         setSelectedFileId(id);
//         setAnalyzeOpen(true);
//         historyRef.current?.scrollIntoView({ behavior: "smooth" });
//       } else {
//         await dispatch(getExcelFiles());
//       }
//     } catch (err) {
//       console.error("Upload failed", err);
//       await dispatch(getExcelFiles());
//     } finally {
//       e.target.value = null;
//     }
//   };

//   const refreshFiles = async () => {
//     await dispatch(getExcelFiles());
//   };

//   const handlePreviewFile = async (id) => {
//     setAnalyzeOpen(false);
//     setSelectedFileId(id);
//     const action = await dispatch(getExcelFileById(id));
//     const fileObj = action?.payload?.file || action?.payload;
//     if (fileObj) hydrateFromFetchedFile(fileObj);
//     else if (currentFile) hydrateFromFetchedFile(currentFile);
//     historyRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   const handleAnalyzeFile = async (id) => {
//     setSelectedFileId(id);
//     const action = await dispatch(getExcelFileById(id));
//     const fileObj = action?.payload?.file || action?.payload;
//     if (fileObj) hydrateFromFetchedFile(fileObj);
//     else if (currentFile) hydrateFromFetchedFile(currentFile);
//     setAnalyzeOpen(true);
//     historyRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm("Delete this uploaded file?")) return;
//     await dispatch(deleteExcelFile(id));
//     await refreshFiles();
//     if (selectedFileId === id) {
//       setSelectedFileId(null);
//       setAvailableSheets([]);
//       setRows([]);
//       setColumns([]);
//       setAnalyzeOpen(false);
//       dispatch(clearCurrentFile());
//     }
//   };

//   // When user picks another sheet index
//   useEffect(() => {
//     if (!availableSheets || availableSheets.length === 0) return;
//     const s = availableSheets[selectedSheetIndex] || availableSheets[0];
//     const sampled = (s.rows || []).slice(rowRange.start, Math.min(rowRange.end, (s.rows || []).length));
//     setRows(sampled);
//     const keys = sampled[0] ? Object.keys(stripFields(sampled[0])) : [];
//     setColumns(keys);
//     if (!keys.includes(xAxis)) setXAxis(keys[0] || "");
//     if (!keys.includes(yAxis)) setYAxis(keys[1] || keys[0] || "");
//     setSelectedColumns(keys.slice());
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [availableSheets, selectedSheetIndex, rowRange.start, rowRange.end]);

//   const toggleColumn = (col) => {
//     setSelectedColumns((prev) => (prev.includes(col) ? prev.filter((c) => c !== col) : [...prev, col]));
//   };

//   const getFilteredRows = () => {
//     if (!rows || !rows.length) return [];
//     const normalized = rows.map(stripFields);
//     if (!selectedColumns || selectedColumns.length === 0) return normalized;
//     return normalized.map((r) => Object.fromEntries(Object.entries(r).filter(([k]) => selectedColumns.includes(k))));
//   };

//   // Build Chart.js chartData
//   const buildChartData = () => {
//     const filtered = getFilteredRows();
//     if (!filtered.length || !xAxis || !yAxis) return null;

//     const labels = filtered.map((r) => String(r[xAxis] ?? ""));
//     const yVals = filtered.map((r) => {
//       const v = r[yAxis];
//       const n = Number(v);
//       return Number.isFinite(n) ? n : 0;
//     });

//     const palette = [
//       "rgba(54, 162, 235, 0.75)",
//       "rgba(255, 99, 132, 0.75)",
//       "rgba(255, 206, 86, 0.75)",
//       "rgba(75, 192, 192, 0.75)",
//       "rgba(153, 102, 255, 0.75)",
//       "rgba(255, 159, 64, 0.75)",
//     ];
//     const backgroundColor = labels.map((_, i) => palette[i % palette.length]);

//     if (chartType === "pie") {
//       const map = new Map();
//       labels.forEach((lbl, i) => map.set(lbl, (map.get(lbl) || 0) + yVals[i]));
//       return {
//         labels: Array.from(map.keys()),
//         datasets: [{ data: Array.from(map.values()), backgroundColor: Array.from(map.keys()).map((_, i) => palette[i % palette.length]) }],
//       };
//     }

//     return {
//       labels,
//       datasets: [
//         {
//           label: yAxis,
//           data: yVals,
//           backgroundColor,
//           borderColor: "rgba(0,0,0,0.06)",
//           borderWidth: 1,
//         },
//       ],
//     };
//   };

//   const chartData = buildChartData();

//   // Build Highcharts 3D options dynamically (inside the component)
//   const build3DColumnOptions = () => {
//     const filtered = getFilteredRows();
//     if (!filtered.length || !xAxis || !yAxis) return null;

//     return {
//       chart: {
//         type: "column",
//         options3d: {
//           enabled: true,
//           alpha: 15,
//           beta: 15,
//           depth: 50,
//           viewDistance: 25,
//         },
//       },
//       title: { text: "3D Column Chart" },
//       xAxis: { categories: filtered.map((r) => String(r[xAxis] ?? "")) },
//       yAxis: { title: { text: yAxis } },
//       plotOptions: { column: { depth: 25 } },
//       series: [
//         {
//           name: yAxis,
//           data: filtered.map((r) => Number(r[yAxis]) || 0),
//         },
//       ],
//     };
//   };

//   // Download chart: Chart.js -> PNG, Highcharts -> SVG->PNG conversion
//   // const downloadChart = () => {
//   //   try {
//   //     if (!chartRef.current) return alert("No chart to download.");
//   //     if (chartType === "3d-column" && chartRef.current && chartRef.current.chart) {
//   //       const hcChart = chartRef.current.chart;
//   //       const svg = hcChart.getSVG({ exporting: { sourceWidth: hcChart.chartWidth, sourceHeight: hcChart.chartHeight } });
//   //       const blob = new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
//   //       const url = URL.createObjectURL(blob);
//   //       const img = new Image();
//   //       img.onload = () => {
//   //         const canvas = document.createElement("canvas");
//   //         canvas.width = img.width;
//   //         canvas.height = img.height;
//   //         const ctx = canvas.getContext("2d");
//   //         ctx.fillStyle = "white";
//   //         ctx.fillRect(0, 0, canvas.width, canvas.height);
//   //         ctx.drawImage(img, 0, 0);
//   //         const pngUrl = canvas.toDataURL("image/png");
//   //         const a = document.createElement("a");
//   //         a.href = pngUrl;
//   //         a.download = `${selectedFileId || "chart"}.png`;
//   //         a.click();
//   //         URL.revokeObjectURL(url);
//   //       };
//   //       img.onerror = (err) => {
//   //         console.error("Failed to convert SVG -> PNG", err);
//   //         URL.revokeObjectURL(url);
//   //         alert("Export failed.");
//   //       };
//   //       img.src = url;
//   //     } else {
//   //       // Chart.js
//   //       const base64 = chartRef.current.toBase64Image ? chartRef.current.toBase64Image() : null;
//   //       if (!base64) return alert("Chart.js instance not ready for export.");
//   //       const a = document.createElement("a");
//   //       a.href = base64;
//   //       a.download = `${selectedFileId || "chart"}.png`;
//   //       a.click();
//   //     }
//   //   } catch (err) {
//   //     console.error("downloadChart error", err);
//   //     alert("Failed to export chart image.");
//   //   }
//   // };

//   const downloadChart = () => {
//     try {
//       if (!chartRef.current) return alert("No chart to download.");

//       if (chartType === "3d-column") {
//         if (hc3dReady && chartRef.current.chart) {
//           chartRef.current.chart.exportChart({
//             type: "image/png",
//             filename: selectedFileId || "chart",
//           });
//         } else if (hc3dFailed) {
//           // fallback Chart.js
//           const base64 = chartRef.current.toBase64Image?.();
//           if (!base64) return alert("Fallback chart not ready.");
//           const a = document.createElement("a");
//           a.href = base64;
//           a.download = `${selectedFileId || "chart"}-fallback.png`;
//           a.click();
//         } else {
//           alert("3D module is still loading…");
//         }
//       } else {
//         // Chart.js charts
//         const base64 = chartRef.current.toBase64Image?.();
//         if (!base64) return alert("Chart.js instance not ready for export.");
//         const a = document.createElement("a");
//         a.href = base64;
//         a.download = `${selectedFileId || "chart"}.png`;
//         a.click();
//       }
//     } catch (err) {
//       console.error("downloadChart error", err);
//       alert("Failed to export chart image.");
//     }
//   };


//   // Download raw JSON saved on the server (file object)
//   const downloadFileJson = (f) => {
//     const blob = new Blob([JSON.stringify(f, null, 2)], { type: "application/json" });
//     saveAs(blob, `${f.filename || "excel"}.json`);
//   };

//   // Table renderer (sticky head, zebra rows)
//   const renderPreviewTable = (dataRows) => {
//     if (!dataRows || !dataRows.length) return <div className="text-sm text-gray-500">No data to preview.</div>;
//     const first = dataRows[0];
//     const headers = Object.keys(first);

//     return (
//       <div className="overflow-x-auto max-h-[420px] border rounded bg-white">
//         <table className="min-w-full text-sm table-auto border-collapse">
//           <thead className="sticky top-0 bg-gray-900 text-white">
//             <tr>
//               {headers.map((h) => (
//                 <th key={h} className="px-3 py-2 border text-left whitespace-nowrap">{h}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {dataRows.map((r, i) => (
//               <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
//                 {headers.map((h) => (
//                   <td key={h} className="px-3 py-2 border text-gray-700">{String(r[h] ?? "")}</td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
//   };

//   const SheetTabs = () => {
//     if (!availableSheets || availableSheets.length <= 1) return null;
//     return (
//       <div className="flex gap-2 flex-wrap mb-3">
//         {availableSheets.map((s, idx) => (
//           <button
//             key={s.name + idx}
//             onClick={() => setSelectedSheetIndex(idx)}
//             className={`px-3 py-1 rounded ${idx === selectedSheetIndex ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-800"}`}
//           >
//             {s.name} ({(s.rows || []).length})
//           </button>
//         ))}
//       </div>
//     );
//   };

//   return (
//     <Layout>
//       <div className="p-6">
//         <div className="max-w-6xl mx-auto space-y-6">
//           {/* header */}
//           <div className="flex items-start justify-between gap-4">
//             <div>
//               <h1 className="text-2xl font-semibold">Excel Upload → History → Analyze</h1>
//               <p className="text-sm text-gray-600 mt-1">
//                 Upload .xls/.xlsx/.csv files, preview sheets, choose columns and build charts.
//               </p>
//             </div>

//             <div className="flex gap-3">
//               <label className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded cursor-pointer">
//                 <FiUpload /> Upload
//                 <input
//                   type="file"
//                   accept=".xlsx,.xls,.csv"
//                   onChange={handleUpload}
//                   className="hidden"
//                 />
//               </label>

//               <button
//                 onClick={toggleHistory}
//                 className="px-4 py-2 bg-green-600 text-white rounded flex items-center gap-2"
//               >
//                 <FiClock /> {showHistory ? "Hide History" : "Show History"}
//               </button>
//             </div>
//           </div>

//           {/* history list - toggle */}
//           {showHistory && (
//             <section ref={historyRef} className="grid md:grid-cols-2 gap-4">
//               {status.fetchAll === "loading" && (
//                 <div className="col-span-full text-gray-500">Loading history...</div>
//               )}
//               {status.fetchAll === "failed" && (
//                 <div className="col-span-full text-red-500">{error?.fetchAll}</div>
//               )}
//               {Array.isArray(files) && files.length > 0 ? (
//                 files.map((f) => (
//                   <div
//                     key={f._id}
//                     className="p-4 bg-white rounded shadow-sm flex items-center justify-between gap-4"
//                   >
//                     <div className="min-w-0">
//                       <p className="font-medium text-gray-800 truncate">{f.filename}</p>
//                       <p className="text-xs text-gray-500">
//                         {f.uploadedAt
//                           ? new Date(f.uploadedAt).toLocaleString()
//                           : "N/A"}
//                         {f.size ? ` • ${(f.size / 1024).toFixed(2)} KB` : ""}
//                       </p>
//                     </div>

//                     <div className="flex gap-2">
//                       <button
//                         onClick={() => handlePreviewFile(f._id)}
//                         title="Preview"
//                         className="p-2 bg-blue-100 rounded text-blue-600"
//                       >
//                         <FiEye />
//                       </button>

//                       <button
//                         onClick={() => handleAnalyzeFile(f._id)}
//                         title="Analyze"
//                         className="p-2 bg-indigo-100 rounded text-indigo-700 flex items-center"
//                       >
//                         <FiPlay />
//                       </button>

//                       <button
//                         onClick={() => downloadFileJson(f)}
//                         title="Download JSON"
//                         className="p-2 bg-yellow-100 rounded text-yellow-700"
//                       >
//                         <FiDownload />
//                       </button>

//                       <button
//                         onClick={() => handleDelete(f._id)}
//                         title="Delete"
//                         className="p-2 bg-red-100 rounded text-red-600"
//                       >
//                         <FiTrash2 />
//                       </button>
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 status.fetchAll === "succeeded" && (
//                   <div className="col-span-full p-6 bg-white rounded text-center text-gray-500">
//                     No uploads yet.
//                   </div>
//                 )
//               )}
//             </section>
//           )}

//           {/* preview + builder section stays the same */}
//           <section className="bg-white rounded p-4 shadow">
// //             <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
// //               <h2 className="text-lg text-black font-medium">{analyzeOpen ? "Chart Builder" : selectedFileId ? "Preview" : "Select a file"}</h2>

// //               <div className="flex items-center gap-3">
// //                 {selectedFileId && (
//                   <>
//                     <label className="text-sm flex items-center gap-2">
//                       Sheet:
//                       <select value={selectedSheetIndex} onChange={(e) => setSelectedSheetIndex(Number(e.target.value))} className="ml-2 border px-2 py-1 rounded">
//                         {availableSheets.map((s, idx) => <option key={s.name + idx} value={idx}>{s.name}</option>)}
//                       </select>
//                     </label>

//                     <label className="text-sm flex items-center gap-2">
//                       X:
//                       <select value={xAxis} onChange={(e) => setXAxis(e.target.value)} className="ml-2 border px-2 py-1 rounded">
//                         <option value="">--</option>
//                         {columns.map((c) => <option key={c} value={c}>{c}</option>)}
//                       </select>
//                     </label>

//                     <label className="text-sm flex items-center gap-2">
//                       Y:
//                       <select value={yAxis} onChange={(e) => setYAxis(e.target.value)} className="ml-2 border px-2 py-1 rounded">
//                         <option value="">--</option>
//                         {columns.map((c) => <option key={c} value={c}>{c}</option>)}
//                       </select>
//                     </label>

//                     <label className="text-sm flex items-center gap-2">
//                       Type:
//                       <select value={chartType} onChange={(e) => setChartType(e.target.value)} className="ml-2 border px-2 py-1 rounded">
//                         <option value="bar">Bar</option>
//                         <option value="line">Line</option>
//                         <option value="pie">Pie</option>
//                         <option value="scatter">Scatter</option>
//                         <option value="3d-column">3D column</option>
//                       </select>
//                     </label>

//                     <button onClick={() => setAnalyzeOpen(true)} className="px-3 py-1 bg-indigo-600 text-white rounded">Open Builder</button>
//                     <button onClick={downloadChart} className="px-3 py-1 bg-gray-800 text-white rounded">Download Chart</button>
//                   </>
//                 )}
//               </div>
//             </div>

//             {/* sheet tabs */}
//             <SheetTabs />

//             {analyzeOpen ? (
//               <div className="grid md:grid-cols-2 gap-4">
//                 <div>
//                   <div className="mb-3 font-medium">Columns - pick which ones to include</div>
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {columns.map((c) => (
//                       <label key={c} className={`px-2 py-1 rounded border ${selectedColumns.includes(c) ? "bg-indigo-100 text-indigo-700" : "bg-white"}`}>
//                         <input type="checkbox" className="mr-2" checked={selectedColumns.includes(c)} onChange={() => toggleColumn(c)} />
//                         {c}
//                       </label>
//                     ))}
//                   </div>

//                   <div className="mb-3 font-medium">Row Range (sample)</div>
//                   <div className="flex items-center gap-3 mb-4">
//                     <input type="number" min="0" value={rowRange.start} onChange={(e) => setRowRange({ ...rowRange, start: Math.max(0, Number(e.target.value)) })} className="w-20 px-2 py-1 border rounded" />
//                     <span>to</span>
//                     <input type="number" min="1" value={rowRange.end} onChange={(e) => setRowRange({ ...rowRange, end: Math.max(1, Number(e.target.value)) })} className="w-20 px-2 py-1 border rounded" />
//                     <button onClick={() => { setRowRange({ start: 0, end: MAX_SAMPLE }); }} className="px-2 py-1 bg-gray-200 rounded">Reset</button>
//                   </div>



//                   <div className="mb-3 font-medium">Chart</div>
//                   <div className="border rounded p-3 min-h-[320px] flex items-center justify-center">
//                     {chartData ? (
//                       chartType === "bar" ? <Bar ref={chartRef} data={chartData} options={{ responsive: true }} /> :
//                       chartType === "line" ? <Line ref={chartRef} data={chartData} options={{ responsive: true }} /> :
//                       chartType === "pie" ? <Pie ref={chartRef} data={chartData} options={{ responsive: true }} /> :
                      
//                       chartType === "3d-column" ? (
//                         // only show 3d when module ready; if failed, fallback to 2D bar with a message
//                         hc3dReady ? (
//                           // use key prop to force remount after hc3dReady changes
//                           <HighchartsReact key={hc3dReady ? "hc-ready" : "hc-loading"} highcharts={Highcharts} options={build3DColumnOptions()} ref={chartRef} />
//                         ) : hc3dFailed ? (
//                           <div className="text-sm text-red-600">
//                             Failed to load highcharts-3d. Showing fallback 2D chart.
//                             <div className="mt-2">
//                               {/* fallback 2D chart */}
//                               <Bar ref={chartRef} data={chartData} options={{ responsive: true }} />
//                             </div>
//                           </div>
//                         ) : (
//                           <div className="text-gray-500">Loading 3D module…</div>
//                         )
//                       ) :
                      
//                       <Scatter ref={chartRef} data={{ datasets: [{ label: yAxis, data: getFilteredRows().map(r => ({ x: Number(r[xAxis]) || 0, y: Number(r[yAxis]) || 0 })) }] }} options={{ responsive: true }} />
//                     ) : (
//                       <div className="text-gray-500">Select X and Y columns to render a chart.</div>
//                     )}
//                   </div>
//                 </div>

//                 <div>
//                   <div className="mb-3 font-medium">Preview Table (sample)</div>
//                   {renderPreviewTable(getFilteredRows())}
//                 </div>
//               </div>
//             ) : (
//               <div>
//                 {selectedFileId ? (
//                   <div>
//                     <div className="mb-3 font-medium">Preview Table</div>
//                     {renderPreviewTable(rows.map(stripFields))}
//                   </div>
//                 ) : (
//                   <div className="text-sm text-gray-600">Pick Preview or Analyze for any history item.</div>
//                 )}
//               </div>
//             )}
//           </section>
//           {/* ... keep your preview + chart builder section code */}
//         </div>
//       </div>
//     </Layout>
//   );
// }




//////////////////////////////////////////////////////////////////////

// import React, { useEffect, useRef, useState } from "react";
// import { FiEye, FiTrash2, FiUpload, FiClock, FiDownload, FiPlay } from "react-icons/fi";
// import Layout from "../../Layout/Layout";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   uploadExcelFile,
//   getExcelFiles,
//   deleteExcelFile,
//   getExcelFileById,
//   clearCurrentFile,
// } from "../../Redux/excelSlice";
// import { saveAs } from "file-saver";

// import {
//   Chart as ChartJS,
//   BarElement,
//   LineElement,
//   PointElement,
//   ArcElement,
//   CategoryScale,
//   LinearScale,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { Bar, Line, Pie, Scatter } from "react-chartjs-2";

// ChartJS.register(
//   BarElement,
//   LineElement,
//   PointElement,
//   ArcElement,
//   CategoryScale,
//   LinearScale,
//   Tooltip,
//   Legend
// );

// import Highcharts from "highcharts";
// import HighchartsReact from "highcharts-react-official";
// // NOTE: dynamic import for highcharts-3d below

// export default function ExcelPage() {
//   const dispatch = useDispatch();
//   const { files = [], currentFile = null } = useSelector((s) => s.excel || {});
//   const chartRef = useRef(null);
//   const historyRef = useRef(null);

//   const [selectedFileId, setSelectedFileId] = useState(null);
//   const [availableSheets, setAvailableSheets] = useState([]);
//   const [selectedSheetIndex, setSelectedSheetIndex] = useState(0);
//   const [rows, setRows] = useState([]);
//   const [columns, setColumns] = useState([]);
//   const [xAxis, setXAxis] = useState("");
//   const [yAxis, setYAxis] = useState("");
//   const [chartType, setChartType] = useState("bar");
//   const [selectedColumns, setSelectedColumns] = useState([]);
//   const [rowRange, setRowRange] = useState({ start: 0, end: 200 });
//   const [analyzeOpen, setAnalyzeOpen] = useState(false);
//   const [hc3dReady, setHc3dReady] = useState(false);
//   const [hc3dFailed, setHc3dFailed] = useState(false);
//   const MAX_SAMPLE = 200;

//   // Fetch uploaded files
//   useEffect(() => {
//     dispatch(getExcelFiles());
//   }, [dispatch]);

//   // Dynamically load Highcharts 3D module
//   useEffect(() => {
//     if (typeof window === "undefined") return;
//     let cancelled = false;

//     (async () => {
//       try {
//         const mod3d = await import("highcharts/highcharts-3d");
//         const init = mod3d.default || mod3d;
//         if (typeof init === "function") init(Highcharts);
//         if (!cancelled) setHc3dReady(true);
//       } catch (err) {
//         console.error("Failed to load highcharts-3d", err);
//         if (!cancelled) setHc3dFailed(true);
//       }
//     })();

//     return () => { cancelled = true; };
//   }, []);

//   // Dynamically load Highcharts exporting module
//   useEffect(() => {
//     if (typeof window === "undefined") return;
//     (async () => {
//       try {
//         const exportingMod = await import("highcharts/modules/exporting");
//         const init = exportingMod.default || exportingMod;
//         if (typeof init === "function") init(Highcharts);
//         console.info("Highcharts exporting module loaded");
//       } catch (err) {
//         console.error("Failed to load Highcharts exporting module", err);
//       }
//     })();
//   }, []);

//   // Normalize backend file into sheets
//   const normalizeFileIntoSheets = (fileObj) => {
//     if (!fileObj) return [];
//     const f = fileObj.file || fileObj;
//     if (Array.isArray(f.sheets) && f.sheets.length) {
//       return f.sheets.map((s) => ({
//         name: s.name || "Sheet",
//         rows: Array.isArray(s.rows) ? s.rows.slice(0, MAX_SAMPLE) : [],
//       }));
//     }
//     if (Array.isArray(f.data)) return [{ name: f.filename || "Sheet1", rows: f.data.slice(0, MAX_SAMPLE) }];
//     return [];
//   };

//   const hydrateFromFetchedFile = (fileObj) => {
//     const sheets = normalizeFileIntoSheets(fileObj);
//     setAvailableSheets(sheets);
//     setSelectedSheetIndex(0);
//     const firstRows = (sheets[0] && sheets[0].rows) || [];
//     setRows(firstRows);
//     const keys = firstRows[0] ? Object.keys(stripFields(firstRows[0])) : [];
//     setColumns(keys);
//     setSelectedColumns(keys.slice());
//     setXAxis(keys[0] || "");
//     setYAxis(keys[1] || keys[0] || "");
//   };

//   const stripFields = (r) => (r && r.fields ? r.fields : r);

//   const handleUpload = async (e) => {
//     const file = e.target.files?.[0];
//     if (!file) return;
//     try {
//       const action = await dispatch(uploadExcelFile(file));
//       const created = action?.payload?.file || action?.payload || action;
//       if (created && (created._id || created.id)) {
//         const id = created._id || created.id;
//         await dispatch(getExcelFileById(id));
//         hydrateFromFetchedFile(created);
//         setSelectedFileId(id);
//         setAnalyzeOpen(true);
//         historyRef.current?.scrollIntoView({ behavior: "smooth" });
//       } else {
//         await dispatch(getExcelFiles());
//       }
//     } catch (err) {
//       console.error("Upload failed", err);
//       await dispatch(getExcelFiles());
//     } finally {
//       e.target.value = null;
//     }
//   };

//   const refreshFiles = async () => await dispatch(getExcelFiles());

//   const handlePreviewFile = async (id) => {
//     setAnalyzeOpen(false);
//     setSelectedFileId(id);
//     const action = await dispatch(getExcelFileById(id));
//     const fileObj = action?.payload?.file || action?.payload;
//     if (fileObj) hydrateFromFetchedFile(fileObj);
//     else if (currentFile) hydrateFromFetchedFile(currentFile);
//     historyRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   const handleAnalyzeFile = async (id) => {
//     setSelectedFileId(id);
//     const action = await dispatch(getExcelFileById(id));
//     const fileObj = action?.payload?.file || action?.payload;
//     if (fileObj) hydrateFromFetchedFile(fileObj);
//     else if (currentFile) hydrateFromFetchedFile(currentFile);
//     setAnalyzeOpen(true);
//     historyRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm("Delete this uploaded file?")) return;
//     await dispatch(deleteExcelFile(id));
//     await refreshFiles();
//     if (selectedFileId === id) {
//       setSelectedFileId(null);
//       setAvailableSheets([]);
//       setRows([]);
//       setColumns([]);
//       setAnalyzeOpen(false);
//       dispatch(clearCurrentFile());
//     }
//   };

//   useEffect(() => {
//     if (!availableSheets.length) return;
//     const s = availableSheets[selectedSheetIndex] || availableSheets[0];
//     const sampled = (s.rows || []).slice(rowRange.start, Math.min(rowRange.end, s.rows.length));
//     setRows(sampled);
//     const keys = sampled[0] ? Object.keys(stripFields(sampled[0])) : [];
//     setColumns(keys);
//     if (!keys.includes(xAxis)) setXAxis(keys[0] || "");
//     if (!keys.includes(yAxis)) setYAxis(keys[1] || keys[0] || "");
//     setSelectedColumns(keys.slice());
//   }, [availableSheets, selectedSheetIndex, rowRange.start, rowRange.end]);

//   const toggleColumn = (col) => setSelectedColumns((prev) => (prev.includes(col) ? prev.filter((c) => c !== col) : [...prev, col]));

//   const getFilteredRows = () => {
//     if (!rows.length) return [];
//     const normalized = rows.map(stripFields);
//     if (!selectedColumns.length) return normalized;
//     return normalized.map((r) =>
//       Object.fromEntries(Object.entries(r).filter(([k]) => selectedColumns.includes(k)))
//     );
//   };

//   // Chart.js chartData builder
//   const buildChartData = () => {
//     const filtered = getFilteredRows();
//     if (!filtered.length || !xAxis || !yAxis) return null;
//     const labels = filtered.map((r) => String(r[xAxis] ?? ""));
//     const yVals = filtered.map((r) => Number(r[yAxis]) || 0);

//     const palette = [
//       "rgba(54, 162, 235, 0.75)",
//       "rgba(255, 99, 132, 0.75)",
//       "rgba(255, 206, 86, 0.75)",
//       "rgba(75, 192, 192, 0.75)",
//       "rgba(153, 102, 255, 0.75)",
//       "rgba(255, 159, 64, 0.75)",
//     ];
//     const backgroundColor = labels.map((_, i) => palette[i % palette.length]);

//     if (chartType === "pie") {
//       const map = new Map();
//       labels.forEach((lbl, i) => map.set(lbl, (map.get(lbl) || 0) + yVals[i]));
//       return {
//         labels: Array.from(map.keys()),
//         datasets: [
//           {
//             data: Array.from(map.values()),
//             backgroundColor: Array.from(map.keys()).map((_, i) => palette[i % palette.length]),
//           },
//         ],
//       };
//     }

//     return {
//       labels,
//       datasets: [
//         {
//           label: yAxis,
//           data: yVals,
//           backgroundColor,
//           borderColor: "rgba(0,0,0,0.06)",
//           borderWidth: 1,
//         },
//       ],
//     };
//   };

//   const chartData = buildChartData();

//   const build3DColumnOptions = () => {
//     const filtered = getFilteredRows();
//     if (!filtered.length || !xAxis || !yAxis) return null;

//     return {
//       chart: {
//         type: "column",
//         options3d: {
//           enabled: true,
//           alpha: 15,
//           beta: 15,
//           depth: 50,
//           viewDistance: 25,
//         },
//       },
//       title: { text: "3D Column Chart" },
//       xAxis: { categories: filtered.map((r) => String(r[xAxis] ?? "")) },
//       yAxis: { title: { text: yAxis } },
//       plotOptions: { column: { depth: 25 } },
//       series: [
//         {
//           name: yAxis,
//           data: filtered.map((r) => Number(r[yAxis]) || 0),
//         },
//       ],
//     };
//   };

//   // Download chart (fixed 3D handling)
//   const downloadChart = () => {
//     try {
//       if (!chartRef.current) return alert("No chart to download.");

//       if (chartType === "3d-column") {
//         if (hc3dReady && chartRef.current.chart) {
//           chartRef.current.chart.exportChart({
//             type: "image/png",
//             filename: selectedFileId || "chart",
//           });
//         } else if (hc3dFailed) {
//           const base64 = chartRef.current.toBase64Image?.();
//           if (!base64) return alert("Fallback chart not ready.");
//           const a = document.createElement("a");
//           a.href = base64;
//           a.download = `${selectedFileId || "chart"}-fallback.png`;
//           a.click();
//         } else {
//           alert("3D module is still loading…");
//         }
//       } else {
//         const base64 = chartRef.current.toBase64Image?.();
//         if (!base64) return alert("Chart.js instance not ready for export.");
//         const a = document.createElement("a");
//         a.href = base64;
//         a.download = `${selectedFileId || "chart"}.png`;
//         a.click();
//       }
//     } catch (err) {
//       console.error("downloadChart error", err);
//       alert("Failed to export chart image.");
//     }
//   };

//   const downloadFileJson = (f) => {
//     const blob = new Blob([JSON.stringify(f, null, 2)], { type: "application/json" });
//     saveAs(blob, `${f.filename || "excel"}.json`);
//   };

//   const renderPreviewTable = (dataRows) => {
//     if (!dataRows.length) return <div className="text-sm text-gray-500">No data to preview.</div>;
//     const headers = Object.keys(dataRows[0]);

//     return (
//       <div className="overflow-x-auto max-h-[420px] border rounded bg-white">
//         <table className="min-w-full text-sm table-auto border-collapse">
//           <thead className="sticky top-0 bg-gray-900 text-white">
//             <tr>{headers.map((h) => <th key={h} className="px-3 py-2 border text-left">{h}</th>)}</tr>
//           </thead>
//           <tbody>
//             {dataRows.map((r, i) => (
//               <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
//                 {headers.map((h) => <td key={h} className="px-3 py-2 border">{String(r[h] ?? "")}</td>)}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
//   };

//   const SheetTabs = () => {
//     if (!availableSheets.length || availableSheets.length <= 1) return null;
//     return (
//       <div className="flex gap-2 flex-wrap mb-3">
//         {availableSheets.map((s, idx) => (
//           <button
//             key={s.name + idx}
//             onClick={() => setSelectedSheetIndex(idx)}
//             className={`px-3 py-1 rounded ${idx === selectedSheetIndex ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-800"}`}
//           >
//             {s.name} ({(s.rows || []).length})
//           </button>
//         ))}
//       </div>
//     );
//   };

//   return (
//     <Layout>
//       <div className="p-6">
//         <div className="max-w-6xl mx-auto space-y-6">
//           {/* header */}
//           <div className="flex items-start justify-between gap-4">
//             <div>
//               <h1 className="text-2xl font-semibold">Excel Upload → History → Analyze</h1>
//               <p className="text-sm text-gray-600 mt-1">Upload .xls/.xlsx/.csv files, preview sheets, choose columns and build charts.</p>
//             </div>
//             <div className="flex gap-3">
//               <label className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded cursor-pointer">
//                 <FiUpload /> Upload
//                 <input type="file" accept=".xlsx,.xls,.csv" onChange={handleUpload} className="hidden" />
//               </label>
//               <button onClick={refreshFiles} className="px-4 py-2 bg-green-600 text-white rounded flex items-center gap-2">
//                 <FiClock /> Refresh
//               </button>
//             </div>
//           </div>

//           {/* history */}
//           <section ref={historyRef} className="grid md:grid-cols-2 gap-4">
//             {files.length ? files.map((f) => (
//               <div key={f._id} className="p-4 bg-white rounded shadow-sm flex items-center justify-between gap-4">
//                 <div className="min-w-0">
//                   <p className="font-medium text-gray-800 truncate">{f.filename}</p>
//                   <p className="text-xs text-gray-500">{f.uploadedAt ? new Date(f.uploadedAt).toLocaleString() : "N/A"}{f.size ? ` • ${(f.size / 1024).toFixed(2)} KB` : ""}</p>
//                 </div>
//                 <div className="flex gap-2">
//                   <button onClick={() => handlePreviewFile(f._id)} className="p-2 bg-blue-100 rounded text-blue-600" title="Preview"><FiEye /></button>
//                   <button onClick={() => handleAnalyzeFile(f._id)} className="p-2 bg-indigo-100 rounded text-indigo-700" title="Analyze"><FiPlay /></button>
//                   <button onClick={() => downloadFileJson(f)} className="p-2 bg-yellow-100 rounded text-yellow-700" title="Download JSON"><FiDownload /></button>
//                   <button onClick={() => handleDelete(f._id)} className="p-2 bg-red-100 rounded text-red-600" title="Delete"><FiTrash2 /></button>
//                 </div>
//               </div>
//             )) : <div className="col-span-full p-6 bg-white rounded text-center text-gray-500">No uploads yet.</div>}
//           </section>

//           {/* preview + builder */}
//           <section className="bg-white rounded p-4 shadow">
//             <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
//               <h2 className="text-lg font-medium">{analyzeOpen ? "Chart Builder" : selectedFileId ? "Preview" : "Select a file"}</h2>
//               <div className="flex items-center gap-3">
//                 {selectedFileId && <>
//                   <label className="text-sm flex items-center gap-2">Sheet:
//                     <select value={selectedSheetIndex} onChange={(e) => setSelectedSheetIndex(Number(e.target.value))} className="ml-2 border px-2 py-1 rounded">
//                       {availableSheets.map((s, idx) => <option key={s.name + idx} value={idx}>{s.name}</option>)}
//                     </select>
//                   </label>
//                   <label className="text-sm flex items-center gap-2">X:
//                     <select value={xAxis} onChange={(e) => setXAxis(e.target.value)} className="ml-2 border px-2 py-1 rounded">
//                       <option value="">--</option>
//                       {columns.map((c) => <option key={c} value={c}>{c}</option>)}
//                     </select>
//                   </label>
//                   <label className="text-sm flex items-center gap-2">Y:
//                     <select value={yAxis} onChange={(e) => setYAxis(e.target.value)} className="ml-2 border px-2 py-1 rounded">
//                       <option value="">--</option>
//                       {columns.map((c) => <option key={c} value={c}>{c}</option>)}
//                     </select>
//                   </label>
//                   <label className="text-sm flex items-center gap-2">Type:
//                     <select value={chartType} onChange={(e) => setChartType(e.target.value)} className="ml-2 border px-2 py-1 rounded">
//                       <option value="bar">Bar</option>
//                       <option value="line">Line</option>
//                       <option value="pie">Pie</option>
//                       <option value="scatter">Scatter</option>
//                       <option value="3d-column">3D column</option>
//                     </select>
//                   </label>
//                   <button onClick={() => setAnalyzeOpen(true)} className="px-3 py-1 bg-indigo-600 text-white rounded">Open Builder</button>
//                   <button
//                     onClick={downloadChart}
//                     className="px-3 py-1 bg-gray-800 text-white rounded"
//                     disabled={chartType === "3d-column" && !hc3dReady && !hc3dFailed}
//                   >
//                     Download Chart
//                   </button>
//                 </>}
//               </div>
//             </div>

//             <SheetTabs />

//             {analyzeOpen ? (
//               <div className="grid md:grid-cols-2 gap-4">
//                 <div>
//                   <div className="mb-3 font-medium">Columns - pick which ones to include</div>
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {columns.map((c) => (
//                       <label key={c} className={`px-2 py-1 rounded border ${selectedColumns.includes(c) ? "bg-indigo-100 text-indigo-700" : "bg-white"}`}>
//                         <input type="checkbox" className="mr-2" checked={selectedColumns.includes(c)} onChange={() => toggleColumn(c)} />
//                         {c}
//                       </label>
//                     ))}
//                   </div>

//                   <div className="mb-3 font-medium">Row Range (sample)</div>
//                   <div className="flex items-center gap-3 mb-4">
//                     <input type="number" min="0" value={rowRange.start} onChange={(e) => setRowRange({ ...rowRange, start: Math.max(0, Number(e.target.value)) })} className="w-20 px-2 py-1 border rounded" />
//                     <span>to</span>
//                     <input type="number" min="1" value={rowRange.end} onChange={(e) => setRowRange({ ...rowRange, end: Math.max(1, Number(e.target.value)) })} className="w-20 px-2 py-1 border rounded" />
//                     <button onClick={() => setRowRange({ start: 0, end: MAX_SAMPLE })} className="px-2 py-1 bg-gray-200 rounded">Reset</button>
//                   </div>

//                   <div className="mb-3 font-medium">Chart</div>
//                   <div className="border rounded p-3 min-h-[320px] flex items-center justify-center">
//                     {chartData ? (
//                       chartType === "bar" ? <Bar ref={chartRef} data={chartData} options={{ responsive: true }} /> :
//                       chartType === "line" ? <Line ref={chartRef} data={chartData} options={{ responsive: true }} /> :
//                       chartType === "pie" ? <Pie ref={chartRef} data={chartData} options={{ responsive: true }} /> :
//                       chartType === "3d-column" ? (
//                         hc3dReady ? <HighchartsReact key="hc-ready" highcharts={Highcharts} options={build3DColumnOptions()} ref={chartRef} /> :
//                         hc3dFailed ? <Bar ref={chartRef} data={chartData} options={{ responsive: true }} /> :
//                         <div className="text-gray-500">Loading 3D module…</div>
//                       ) :
//                       <Scatter ref={chartRef} data={{ datasets: [{ label: yAxis, data: getFilteredRows().map(r => ({ x: Number(r[xAxis]) || 0, y: Number(r[yAxis]) || 0 })) }] }} options={{ responsive: true }} />
//                     ) : <div className="text-gray-500">Select X and Y columns to render a chart.</div>}
//                   </div>
//                 </div>

//                 <div>
//                   <div className="mb-3 font-medium">Preview Table (sample)</div>
//                   {renderPreviewTable(getFilteredRows())}
//                 </div>
//               </div>
//             ) : (
//               <div>
//                 {selectedFileId ? (
//                   <div>
//                     <div className="mb-3 font-medium">Preview Table</div>
//                     {renderPreviewTable(rows.map(stripFields))}
//                   </div>
//                 ) : <div className="text-sm text-gray-600">Pick Preview or Analyze for any history item.</div>}
//               </div>
//             )}
//           </section>
//         </div>
//       </div>
//     </Layout>
//   );
// }
