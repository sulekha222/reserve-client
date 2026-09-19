import axios, { AxiosError } from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 15000,
});

// Request interceptor to append JWT token
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('reserveToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor to format errors
apiClient.interceptors.response.use(
  (response) => response.data,
  (error: AxiosError<{ success: boolean; error?: { code: string; message: string; details?: any } }>) => {
    const message =
      error.response?.data?.error?.message ||
      error.message ||
      'Unable to connect to the Re:Serve network. Please check connection.';

    const code = error.response?.data?.error?.code || 'NETWORK_ERROR';

    return Promise.reject({
      message,
      code,
      status: error.response?.status || 500,
      details: error.response?.data?.error?.details,
    });
  }
);
