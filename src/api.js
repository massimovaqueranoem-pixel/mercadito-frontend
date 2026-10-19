import axios from 'axios';

// Toma la variable de entorno en Vercel o usa localhost en desarrollo
const API_URL = import.meta.env.VITE_API_URL || 'https://mercadito-backend-1.onrender.com';

export const api = axios.create({
baseURL: API_URL
});