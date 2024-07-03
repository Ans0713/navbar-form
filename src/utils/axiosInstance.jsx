// src/utils/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', // Replace with your API base URL
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

export default axiosInstance;
