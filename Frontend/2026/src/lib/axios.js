import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api", // <-- change to HTTP
  withCredentials: true,
});

export default axiosInstance;
