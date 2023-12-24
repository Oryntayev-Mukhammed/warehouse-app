// api.js

const API_BASE_URL = 'http://localhost:3000';

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

export const getUser = async () => {
  try {
    const token = localStorage.getItem('loginToken');

    const response = await fetch(`${API_BASE_URL}/get-user`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (response.status === 200) {
      return { success: true, user: data };
    } else {
      return { success: false, message: data.error || 'Ошибка получения пользователя' };
    }
  } catch (error) {
    console.error('Ошибка при получении пользователя:', error);
    return { success: false, message: 'Ошибка при получении пользователя' };
  }
};

export const getStorage = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/storage`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
      },
    });

    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Failed to fetch storage data');
    }
  } catch (error) {
    console.error('Error fetching storage data:', error);
    throw error;
  }
};