import axios from "axios";
const axiosInstance = axios.create({
  baseURL:import.meta.env.VITE_APP_API_URL, 
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
