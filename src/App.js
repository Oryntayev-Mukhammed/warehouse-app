// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Registration from './components/Registration';
import Login from './components/Login';
import Logout from './components/Logout';
import Rules from './components/rules';
import Contact from './components/contact';
import Storage from './components/storage';
import AdminStorage from './components/adminStorage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/rules' element={<Rules/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/storage' element={<Storage/>} />
        <Route path='/adminStorage' element={<AdminStorage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
