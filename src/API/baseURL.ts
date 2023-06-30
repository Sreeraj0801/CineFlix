import axios, { AxiosInstance } from "axios";

// Create Axios instance with base URL
const axiosInstance: AxiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default axiosInstance;