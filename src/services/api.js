import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

export const get = async (url, params = {}) => {
  const response = await API.get(url, { params });
  return response.data;
};

export const post = async (url, body = {}) => {
  const response = await API.post(url, body);
  return response.data;
};

export const put = async (url, body = {}) => {
  const response = await API.put(url, body);
  return response.data;
};

export const del = async (url) => {
  const response = await API.delete(url);
  return response.data;
};

export default API;
