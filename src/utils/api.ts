import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASEURL,
  timeout: 50000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // We have a network error
      console.error("Network error:", error?.response?.data?.message);
    }
    return Promise.reject(error);
  }
);

export default api;
