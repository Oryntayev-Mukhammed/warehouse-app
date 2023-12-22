import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'; // Обратите внимание на правильное название библиотеки

import '../styles/Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      try {
        const decodedToken = jwtDecode(token);

        if (decodedToken.exp * 1000 < Date.now()) {
          localStorage.removeItem('token');
        } else {
          navigate('/');
        }
      } catch (error) {
        // Если декодирование не удалось, например, из-за некорректного токена
        console.error('Error decoding token:', error);
        localStorage.removeItem('token');
      }
    }
  }, [navigate]);

  const login = async () => {
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await response.json();

      if (response.status === 200) {
        setLoginSuccess(true);
        setErrorMessage('');

        localStorage.setItem('token', data.access);
        localStorage.setItem('refreshToken', data.refresh);
      } else {
        setLoginSuccess(false);
        setErrorMessage(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setLoginSuccess(false);
      setErrorMessage('Login failed');
    }
  };

  if (loginSuccess) {
    navigate('/');
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      {loginSuccess && <p>Login successful!</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Login;
