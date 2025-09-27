import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chartData: [],       // Data extracted from Excel file
  xAxis: "",           // Selected X-axis key
  yAxis: "",           // Selected Y-axis key
  chartType: "bar",    // Default chart type
};

const chartSlice = createSlice({
  name: "chart",
  initialState,
  reducers: {
    // Load Excel data into chart state
    setChartData: (state, action) => {
      state.chartData = action.payload || [];
    },
    // Set X-axis key
    setXAxis: (state, action) => {
      state.xAxis = action.payload;
    },
    // Set Y-axis key
    setYAxis: (state, action) => {
      state.yAxis = action.payload;
    },
    // Set chart type (bar, line, pie, etc.)
    setChartType: (state, action) => {
      state.chartType = action.payload;
    },
    // Reset all chart state
    resetChart: (state) => {
      state.chartData = [];
      state.xAxis = "";
      state.yAxis = "";
      state.chartType = "bar";
    },
  },
});

export const {
  setChartData,
  setXAxis,
  setYAxis,
  setChartType,
  resetChart,
} = chartSlice.actions;

export default chartSlice.reducer;
