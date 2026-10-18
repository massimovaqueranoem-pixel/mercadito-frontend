import axios from 'axios';

const api = axios.create({
  // Reemplaza esta URL por la URL real de tu backend desplegado en Render:
  baseURL: 'https://mercadito-backend-7vhs.onrender.com' 
});

export default api;