// auth.js
import { jwtDecode } from 'jwt-decode';

export const isAuthenticated = () => {
  const token = localStorage.getItem('loginToken');
  if (token) {
    try {
      const decodedToken = jwtDecode(token);
      return decodedToken.exp * 1000 > Date.now();
    } catch (error) {
      console.error('Error decoding token:', error);
      return false;
    }
  }
  return false;
};

export const logout = () => {
  localStorage.removeItem('loginToken');
};

export const getAuthToken = () => {
  return localStorage.getItem('loginToken');
};