import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Очистить токен из localStorage
    localStorage.removeItem('loginToken');
    
    // Перенаправить пользователя на страницу логина
    navigate('/login');
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
