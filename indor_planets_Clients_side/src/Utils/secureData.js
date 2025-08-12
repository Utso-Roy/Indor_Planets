import axios from "axios";

const axiosSecure = axios.create({
  baseURL:import.meta.env.VITE_APP_API_URL
});

axiosSecure.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access-token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosSecure;
