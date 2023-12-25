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

export const getAllStorage = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/storage/all`, {
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
      throw new Error('Failed to fetch all storage data');
    }
  } catch (error) {
    console.error('Error fetching all storage data:', error);
    throw error;
  }
};

export const addProductToStorage = async (userId, productData) => {
  try {
    const token = localStorage.getItem('loginToken');
    if (!token) {
      throw new Error('Authentication token is missing');
    }

    const response = await fetch(`${API_BASE_URL}/api/storage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        userId,
        ...productData,
      }),
    });

    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Failed to add product to storage');
    }
  } catch (error) {
    console.error('Error adding product to storage:', error);
    throw error;
  }
};

export const subscribe = async (card, date, ccv, subscribe) => {
  try {
    const token = localStorage.getItem('loginToken');

    const response = await fetch(`${API_BASE_URL}/subscribe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ card, date, ccv, subscribe }),
    });

    const data = await response.json();

    if (response.status === 200) {
      return { success: true, message: 'Подписка успешно оформлена' };
    } else if (response.status === 400) {
      return { success: false, message: data.missingParams || 'Ошибка валидации параметров подписки' };
    } else {
      throw new Error('Failed to subscribe');
    }
  } catch (error) {
    console.error('Ошибка при подписке:', error);
    throw error;
  }
};

export const updateProductStatus = async (id, status) => {
  try {
    const token = localStorage.getItem('loginToken');

    const response = await fetch(`${API_BASE_URL}/api/product/status`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ id, status }),
    });

    const data = await response.json();

    if (response.status === 200) {
      return { success: true, message: 'Product status updated successfully' };
    } else if (response.status === 400) {
      return { success: false, message: data || 'Invalid request for updating product status' };
    } else {
      throw new Error('Failed to update product status');
    }
  } catch (error) {
    console.error('Error updating product status:', error);
    throw error;
  }
};

export const updateProductPosition = async (id, position) => {
  try {
    const token = localStorage.getItem('loginToken');

    const response = await fetch(`${API_BASE_URL}/api/product/position`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ id, position }),
    });

    const data = await response.json();

    if (response.status === 200) {
      return { success: true, message: 'Product position updated successfully' };
    } else if (response.status === 400) {
      return { success: false, message: data || 'Invalid request for updating product position' };
    } else {
      throw new Error('Failed to update product position');
    }
  } catch (error) {
    console.error('Error updating product position:', error);
    throw error;
  }
};
