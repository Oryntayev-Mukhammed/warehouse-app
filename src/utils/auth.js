// auth.js
import { jwtDecode } from 'jwt-decode';
import {getUser} from './api'

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

export const isAdmin = async () => {
  try {
    const response = await getUser(); // Предполагается, что у вас есть функция getUser из вашего api.js
    if (response.success && response.user && response.user.role) {
      const userRole = response.user.role.toLowerCase(); // Приводим к нижнему регистру
      console.log('User Role:', userRole);  // Выводим роль пользователя для отладки
      return userRole === 'admin';
    } else {
      console.error('Error getting user information:', response.message);
      return false;
    }
  } catch (error) {
    console.error('Error getting user information:', error);
    return false;
  }
};
