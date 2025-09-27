// import { useSelector, useDispatch } from "react-redux";
// import { setXAxis, setYAxis, setChartType } from "../../Redux/chartSlice";
// import Layout from "../../Layout/Layout";

// function ChartViewer() {
//   const dispatch = useDispatch();
//   const { chartData, xAxis, yAxis, chartType } = useSelector((state) => state.chart);

//   const keys = chartData.length > 0 ? Object.keys(chartData[0]) : [];

//   return (
//   <Layout>
//     <div className="flex justify-center items-center min-h-screen">
//       <div className="flex flex-col gap-4 p-6 bg-white shadow-md rounded-xl">
//         <select
//           value={xAxis}
//           onChange={(e) => dispatch(setXAxis(e.target.value))}
//           className="p-2 border rounded-lg"
//         >
//           <option value="">Select X-Axis</option>
//           {keys.map((k) => (
//             <option key={k} value={k}>
//               {k}
//             </option>
//           ))}
//         </select>

//         <select
//           value={yAxis}
//           onChange={(e) => dispatch(setYAxis(e.target.value))}
//           className="p-2 border rounded-lg"
//         >
//           <option value="">Select Y-Axis</option>
//           {keys.map((k) => (
//             <option key={k} value={k}>
//               {k}
//             </option>
//           ))}
//         </select>

//         <select
//           value={chartType}
//           onChange={(e) => dispatch(setChartType(e.target.value))}
//           className="p-2 border rounded-lg"
//         >
//           <option value="bar">Bar</option>
//           <option value="line">Line</option>
//           <option value="pie">Pie</option>
//         </select>
//       </div>
//     </div>
//   </Layout>
// );

// }


// export default ChartViewer;


// import React, { useEffect, useState, useRef } from "react";
// import axios from "axios";
// // import BackButton from "../components/BackButton";
// import {
//   Bar, Line, Pie, Doughnut, Radar
// } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   BarElement, LineElement, ArcElement, RadialLinearScale, CategoryScale, LinearScale, PointElement, Tooltip, Legend,
// } from "chart.js";
// // import "../styles/Charts.css";

// ChartJS.register(
//   BarElement, LineElement, ArcElement, RadialLinearScale, CategoryScale, LinearScale, PointElement, Tooltip, Legend
// );

// function ChartViewer() {
//   const [files, setFiles] = useState([]);
//   const [selectedFileId, setSelectedFileId] = useState("");
//   const [excelData, setExcelData] = useState([]);
//   const [columns, setColumns] = useState([]);
//   const [chartType, setChartType] = useState("bar");
//   const [xCol, setXCol] = useState("");
//   const [yCol, setYCol] = useState("");
//   const chartRef = useRef(null); // for download

//   useEffect(() => {
//     axios.get("http://localhost:1000/api/upload")
//       .then(res => setFiles(res.data))
//       .catch(() => setFiles([]));
//   }, []);

//   useEffect(() => {
//     if (selectedFileId) {
//       axios.get(`http://localhost:1000/api/upload/${selectedFileId}`)
//         .then(res => {
//           setExcelData(res.data.data || []);
//           if (res.data.data && res.data.data.length) {
//             const cols = Object.keys(res.data.data[0]);
//             setColumns(cols);
//             setXCol(cols[0]);
//             setYCol(cols.length > 1 ? cols[1] : "");
//           }
//         })
//         .catch(() => setExcelData([]));
//     } else {
//       setExcelData([]);
//       setColumns([]);
//       setXCol("");
//       setYCol("");
//     }
//   }, [selectedFileId]);

//   const getChartData = () => {
//     if (!excelData.length || !xCol || !yCol) return {};
//     return {
//       labels: excelData.map(row => String(row[xCol])),
//       datasets: [{
//         label: yCol,
//         data: excelData.map(row => Number(row[yCol])),
//         backgroundColor: [
//           "#1d6f42", "#0077cc", "#f4a261", "#e63946", "#2a9d8f",
//           "#ffbe0b", "#3a86ff", "#8338ec", "#fb5607", "#ff006e"
//         ],
//         borderColor: "#222",
//         borderWidth: 1,
//       }]
//     };
//   };

//   const renderChart = () => {
//     if (!xCol || !yCol) return <div>Please select columns for X and Y axis.</div>;
//     const chartProps = {
//       data: getChartData(),
//       options: {
//         responsive: true,
//         plugins: {
//           legend: { display: chartType !== "bar" },
//         }
//       },
//       ref: chartRef
//     };
//     switch (chartType) {
//       case "bar": return <Bar {...chartProps} />;
//       case "line": return <Line {...chartProps} />;
//       case "pie": return <Pie {...chartProps} />;
//       case "doughnut": return <Doughnut {...chartProps} />;
//       case "radar": return <Radar {...chartProps} />;
//       default: return null;
//     }
//   };

//   return (
//     <div className="chart-info">
//       {/* <BackButton /> */}
//       <h2>Visualize File Data (Charts)</h2>
//       <div style={{ marginBottom: 20 }}>
//         <label>
//           <b>Select File:</b>
//           <select
//             value={selectedFileId}
//             onChange={e => setSelectedFileId(e.target.value)}
//             style={{ marginLeft: 10, padding: 5 }}
//           >
//             <option value="">-- Choose Excel File --</option>
//             {files.map(f => (
//               <option value={f._id} key={f._id}>{f.filename}</option>
//             ))}
//           </select>
//         </label>
//       </div>

//       {columns.length >= 2 && (
//         <>
//           <div className="label-data" style={{ marginBottom: 15 }}>
//             <label>
//               X-Axis:
//               <select value={xCol} onChange={e => setXCol(e.target.value)} style={{ marginLeft: 5 }}>
//                 {columns.map(col => (
//                   <option value={col} key={col}>{col}</option>
//                 ))}
//               </select>
//             </label>
//             <label style={{ marginLeft: 25 }}>
//               Y-Axis:
//               <select value={yCol} onChange={e => setYCol(e.target.value)} style={{ marginLeft: 5 }}>
//                 {columns.map(col => (
//                   <option value={col} key={col}>{col}</option>
//                 ))}
//               </select>
//             </label>
//           </div>
//           <div style={{ marginBottom: 20 }}>
//             <label>
//               <b>Chart Type:</b>
//               <select value={chartType} onChange={e => setChartType(e.target.value)} style={{ marginLeft: 10 }}>
//                 <option value="bar">Bar</option>
//                 <option value="line">Line</option>
//                 <option value="pie">Pie</option>
//                 <option value="doughnut">Doughnut</option>
//                 <option value="radar">Radar</option>
//               </select>
//             </label>
//           </div>
//        <div className="chart-img" style={{ minHeight: 400, textAlign: "center" }}>
//   {renderChart()}

//   <button
//     onClick={() => {
//       if (chartRef.current) {
//         const link = document.createElement("a");
//         link.download = `chart-${chartType}.png`;
//         link.href = chartRef.current.toBase64Image();
//         link.click();
//       }
//     }}
//     style={{
//       marginTop: "20px",
//       padding: "10px 20px",
//       backgroundColor: "#0077cc",
//       color: "#fff",
//       border: "none",
//       borderRadius: "5px",
//       cursor: "pointer",
//       marginBottom:"10px",
//     }}
//   >
//     📥 Download Chart
//   </button>
// </div>

//         </>
//       )}
//       {selectedFileId && columns.length < 2 && (
//         <div style={{ color: "red" }}>Excel must have at least 2 columns with numeric data for meaningful charts.</div>
//       )}
//     </div>
//   );
// }

// export default ChartViewer;


// import React, { useEffect } from "react";
// import Layout from "../../Layout/Layout";
// import {
//   Chart as ChartJS,
//   ArcElement,
//   Tooltip,
//   Legend,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
// } from "chart.js";
// import { Pie, Bar } from "react-chartjs-2";
// import { FaUsers } from "react-icons/fa";
// import { GiMoneyStack } from "react-icons/gi";
// import { FcSalesPerformance } from "react-icons/fc";
// import { BsCollectionPlayFill, BsTrash } from "react-icons/bs";
// import { MdOutlineModeEdit } from "react-icons/md";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// // import { deleteCourse, getAllCourses } from "../../Redux/courseSlice";
// // import { getStatsData } from "../../Redux/statSlice";
// // import { getPaymentRecord } from "../../Redux/razorpaySlice";

// ChartJS.register(
//   ArcElement,
//   Tooltip,
//   Legend,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title
// );

// const ChartViewer = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const { allUsersCount, subscribedUsersCount } = useSelector(
//     (state) => state.stat
//   );
//   const { allPayments, finalMonths, monthlySalesRecord } = useSelector(
//     (state) => state.razorpay
//   );

//   const userData = {
//     labels: ["Registered User", "Enrolled User"],
//     datasets: [
//       {
//         label: "User Details",
//         data: [allUsersCount, subscribedUsersCount],
//         backgroundColor: ["yellow", "green"],
//         borderColor: ["yellow", "green"],
//         borderWidth: 1,
//       },
//     ],
//   };

//   const salesData = {
//     labels: [
//       "January",
//       "Febraury",
//       "March",
//       "April",
//       "May",
//       "June",
//       "July",
//       "August",
//       "September",
//       "October",
//       "November",
//       "December",
//     ],
//     fontColor: "white",
//     datasets: [
//       {
//         label: "Sales / Month",
//         data: monthlySalesRecord,
//         backgroundColor: ["rgb(255, 99, 132)"],
//         borderColor: ["white"],
//         borderWidth: 2,
//       },
//     ],
//   };

//   // getting the courses data from redux toolkit store
//   const Excel = useSelector((state) => state.course.coursesData);

//   // function to handle the course delete
//   const handleCourseDelete = async (id) => {
//     if (window.confirm("Are you sure you want to delete the course?")) {
//       const res = await dispatch(deleteCourse(id));

//       // fetching the new updated data for the course
//       if (res.payload.success) {
//         await dispatch(getAllCourses());
//       }
//     }
//   };

//   useEffect(() => {
//     (async () => {
//       await dispatch(getAllCourses());
//       await dispatch(getStatsData());
//       await dispatch(getPaymentRecord());
//     })();
//   }, []);

//   return(
//     <>
//       <Layout>

//       </Layout>
//     </>
//   );
// }

//   export default ChartViewer;


import React, { useEffect, useRef, useState } from "react";
import Layout from "../../Layout/Layout";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  RadialLinearScale,
} from "chart.js";
import { Pie, Bar, Line, Doughnut, Radar } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { getExcelFiles, getExcelFileById } from "../../Redux/excelSlice";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  RadialLinearScale
);

const ChartViewer = () => {
  const dispatch = useDispatch();
  const { files, currentFile } = useSelector((state) => state.excel);

  const [selectedFileId, setSelectedFileId] = useState("");
  const [chartType, setChartType] = useState("bar");
  const [xCol, setXCol] = useState("");
  const [yCol, setYCol] = useState("");
  const chartRef = useRef(null);

  // Fetch files on mount
  useEffect(() => {
    dispatch(getExcelFiles());
  }, [dispatch]);

  // Fetch single file when selected
  useEffect(() => {
    if (selectedFileId) {
      dispatch(getExcelFileById(selectedFileId));
    }
  }, [dispatch, selectedFileId]);

  // Auto-set X and Y columns when currentFile changes
  useEffect(() => {
    if (currentFile?.data && currentFile.data.length > 0) {
      const cols = Object.keys(currentFile.data[0]);
      setXCol(cols[0]);
      setYCol(cols.length > 1 ? cols[1] : "");
    } else {
      setXCol("");
      setYCol("");
    }
  }, [currentFile]);

  const getChartData = () => {
    if (!currentFile?.data?.length || !xCol || !yCol) return {};
    return {
      labels: currentFile.data.map((row) => String(row[xCol])),
      datasets: [
        {
          label: yCol,
          data: currentFile.data.map((row) => Number(row[yCol])),
          backgroundColor: [
            "#1d6f42",
            "#0077cc",
            "#f4a261",
            "#e63946",
            "#2a9d8f",
            "#ffbe0b",
            "#3a86ff",
            "#8338ec",
            "#fb5607",
            "#ff006e",
          ],
          borderColor: "#222",
          borderWidth: 1,
        },
      ],
    };
  };

  const renderChart = () => {
    if (!xCol || !yCol) {
      return <div className="text-red-500">⚠ Please select columns for X and Y axis.</div>;
    }

    const chartProps = {
      data: getChartData(),
      options: {
        responsive: true,
        plugins: {
          legend: { display: chartType !== "bar" },
        },
      },
      ref: chartRef,
    };

    switch (chartType) {
      case "bar":
        return <Bar {...chartProps} />;
      case "line":
        return <Line {...chartProps} />;
      case "pie":
        return <Pie {...chartProps} />;
      case "doughnut":
        return <Doughnut {...chartProps} />;
      case "radar":
        return <Radar {...chartProps} />;
      default:
        return null;
    }
  };

  return (
    <Layout>
      <div className="p-6 space-y-6">
        <h2 className="text-xl font-semibold mb-4">📊 Visualize Excel Data</h2>

        {/* File Selector */}
        <div>
          <label className="font-medium">
            Select File:
            <select
              value={selectedFileId}
              onChange={(e) => setSelectedFileId(e.target.value)}
              className="ml-2 p-2 border rounded"
            >
              <option value="">-- Choose Excel File --</option>
              {files.map((f) => (
                <option key={f._id} value={f._id}>
                  {f.filename}
                </option>
              ))}
            </select>
          </label>
        </div>

        {/* Column Selector */}
        {currentFile?.data?.length >= 2 && (
          <>
            <div className="flex gap-6">
              <label>
                X-Axis:
                <select
                  value={xCol}
                  onChange={(e) => setXCol(e.target.value)}
                  className="ml-2 p-2 border rounded"
                >
                  {Object.keys(currentFile.data[0]).map((col) => (
                    <option key={col} value={col}>
                      {col}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Y-Axis:
                <select
                  value={yCol}
                  onChange={(e) => setYCol(e.target.value)}
                  className="ml-2 p-2 border rounded"
                >
                  {Object.keys(currentFile.data[0]).map((col) => (
                    <option key={col} value={col}>
                      {col}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            {/* Chart Type */}
            <div>
              <label>
                Chart Type:
                <select
                  value={chartType}
                  onChange={(e) => setChartType(e.target.value)}
                  className="ml-2 p-2 border rounded"
                >
                  <option value="bar">Bar</option>
                  <option value="line">Line</option>
                  <option value="pie">Pie</option>
                  <option value="doughnut">Doughnut</option>
                  <option value="radar">Radar</option>
                </select>
              </label>
            </div>

            {/* Chart Display */}
            <div className="mt-4 min-h-[400px] flex flex-col items-center">
              {renderChart()}
              <button
                onClick={() => {
                  if (chartRef.current) {
                    const link = document.createElement("a");
                    link.download = `chart-${chartType}.png`;
                    link.href = chartRef.current.toBase64Image();
                    link.click();
                  }
                }}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                📥 Download Chart
              </button>
            </div>
          </>
        )}

        {/* Error if not enough columns */}
        {selectedFileId && (!currentFile?.data || currentFile.data.length < 2) && (
          <div className="text-red-500">
            Excel must have at least 2 columns with numeric data for meaningful charts.
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ChartViewer;
