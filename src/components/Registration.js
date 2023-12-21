import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
    const token = localStorage.getItem('token');

    if (token) {
      navigate('/');
    }
  }, [navigate]);

  const register = async () => {
    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
          name,
          year,
        }),
      });

      const data = await response.json();

      if (response.status === 201) {
        setRegistrationSuccess(true);
        setErrorMessage('');
      } else if (response.status === 400) {
        // Ваш сервер вернул ошибку валидации
        setRegistrationSuccess(false);
        setErrorMessage(data.message || 'Registration failed due to validation error');
      } else {
        // Другие ошибки
        setRegistrationSuccess(false);
        setErrorMessage('Registration failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      setRegistrationSuccess(false);
      setErrorMessage('Registration failed');
    }
  };

  useEffect(() => {
    if (registrationSuccess) {
      navigate('/login');
    }
  }, [registrationSuccess, navigate]);

  return (
    <div className="registration-container">
      <h2>Registration</h2>
      {registrationSuccess && <p className="success-message">Registration successful!</p>}
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
    </div>
  );
};

export default Registration;
