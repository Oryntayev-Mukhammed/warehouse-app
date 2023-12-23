// api.js

const API_BASE_URL = 'http://localhost:8080';

export const loginUser = async (username, password) => {
  try {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (response.status === 200) {
      localStorage.setItem('loginToken', data.access);
      localStorage.setItem('loginRefreshToken', data.refresh);
      return { success: true, message: 'Вход выполнен успешно' };
    } else {
      return { success: false, message: data.message || 'Ошибка входа' };
    }
  } catch (error) {
    console.error('Ошибка во время входа:', error);
    return { success: false, message: 'Ошибка входа' };
  }
};

export const registerUser = async (username, password, name, year) => {
  try {
    const response = await fetch(`${API_BASE_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password, name, year }),
    });

    const data = await response.json();

    if (response.status === 201) {
      localStorage.setItem('loginToken', data.access);
      localStorage.setItem('loginRefreshToken', data.refresh);
      return { success: true, message: 'Регистрация выполнена успешно' };
    } else if (response.status === 400) {
      return { success: false, message: data.message || 'Ошибка регистрации из-за ошибки валидации' };
    } else {
      return { success: false, message: 'Ошибка регистрации' };
    }
  } catch (error) {
    console.error('Ошибка во время регистрации:', error);
    return { success: false, message: 'Ошибка регистрации' };
  }
};
