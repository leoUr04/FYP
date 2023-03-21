import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Login from './Component/Login';
import Register from './Component/Register';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="/Login" element={Login()} />
      <Route path="/Register" element={Register()} />
      </Routes>
    </div>
  );
}

export default App;