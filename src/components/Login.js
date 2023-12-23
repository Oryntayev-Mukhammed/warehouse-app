import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { isAuthenticated} from '../utils/auth';
import { loginUser } from '../utils/api';

import '../styles/Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (isAuthenticated()) {
      navigate('/');
    }
  }, [navigate]);

  const login = async () => {
    const result = await loginUser(username, password);

    if (result.success) {
      setLoginSuccess(true);
      setErrorMessage('');
      navigate('/');
    } else {
      setLoginSuccess(false);
      setErrorMessage(result.message);
    }
  };

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
      <p>
        Нет аккаунта? 
        <Link to="/registration" style={{ marginLeft: '5px', color: 'blue' }}>
          Регистрация тут
        </Link>
      </p>
    </div>
  );
};

export default Login;
