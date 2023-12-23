// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Registration from './components/Registration';
import Login from './components/Login';
import Logout from './components/Logout';
import AdminDashboard from './components/AdminDashboard';
import Rules from './components/rules';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/profile' element={<AdminDashboard/>} />
        <Route path='/rules' element={<Rules/>} />
      </Routes>
    </Router>
  );
}

export default App;
