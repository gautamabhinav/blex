// import axios from "axios";

// // const BASE_URL = "http://localhost:5014/api/v1";

// // Before (this causes CORS without proxy):
// // const BASE_URL = "http://localhost:5014/api/v1";

// // After (with proxy in place):
// // const BASE_URL = "/api/v1";

// const BASE_URL = import.meta.env.VITE_API_URL || "/api/v1";

// // const BASE_URL = "https://lms-deploy-y4le.onrender.com/api/v1";


// const axiosInstance = axios.create();

// axiosInstance.defaults.baseURL = BASE_URL;
// axiosInstance.defaults.withCredentials = true;

// export default axiosInstance;



import axios from "axios";

const isDev = import.meta.env.MODE === "development";

const BASE_URL = isDev
  ? "http://localhost:5014/api/v1"
  : import.meta.env.VITE_API_URL || "https://blex-thlc.onrender.com/api/v1";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export default axiosInstance;
