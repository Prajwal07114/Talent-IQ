// Inside your axiosInstance file (e.g., ../lib/axios.js)
import axios from "axios";

const axiosInstance = axios.create({
  // 🟢 CORRECT: Use the relative path that matches your Vite proxy config
  baseURL: "/api", 
  withCredentials: true,
});

export default axiosInstance;