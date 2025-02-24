import axios from "axios";

// const PORT = import.meta.env.VITE_PORT;

// Centralized Base URL
const API_BASE_URL = `http://localhost:8081/api`; // Change here to update for all APIs

// Create Axios Instance
const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Export API Client
export default apiClient;
