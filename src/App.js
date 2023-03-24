import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Login from './Component/Login';
import Register from './Component/Register';
import Contact from './Component/Contact';
import AboutUs from "./Component/AboutUs";
import Home from './Component/Home';
import Footer from './Component/Footer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="/Home" element={Home()} />
      <Route path="/Login" element={Login()} />
      <Route path="/Register" element={Register()} />
      <Route path="/Contact" element={Contact()} />
      <Route path="/AboutUs" element={AboutUs()} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;