const API_URL = import.meta.env.PROD
  ? 'https://gift-drawer-server.onrender.com/api'
  : 'http://localhost:5000/api';

export const environment = {
  apiUrl: API_URL,
};