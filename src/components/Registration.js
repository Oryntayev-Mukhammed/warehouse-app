import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'; // Импортируем jwtDecode
import { isAuthenticated } from '../utils/auth';
import { registerUser } from '../utils/api'; // Импортируем registerUser

import '../styles/Registration.css';

const Registration = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [year, setYear] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (isAuthenticated()) {
      navigate('/');
    }
  }, [navigate]);

  const register = async () => {
    try {
      const result = await registerUser(username, password, name, year);

      if (result.success) {
        setRegistrationSuccess(true);
        setErrorMessage('');
        navigate('/login');
      } else {
        setRegistrationSuccess(false);
        setErrorMessage(result.message || 'Registration failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      setRegistrationSuccess(false);
      setErrorMessage('Registration failed');
    }
  };

  return (
    <div className="registration-container">
      <h2>Registration</h2>
      {registrationSuccess && <p>Registration successful!</p>}
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
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <button onClick={register}>Register</button>
      <p>
        Уже есть аккаунт?
        <Link to="/login" style={{ marginLeft: '5px', color: 'blue' }}>
          Вход тут
        </Link>
      </p>
    </div>
  );
};

export default Registration;
