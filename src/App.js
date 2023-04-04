import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Component/User/Navbar';
import Login from './Component/User/Login';
import Register from './Component/User/Register';
import Contact from './Component/User/Contact';
import AboutUs from "./Component/User/AboutUs";
import Home from './Component/User/Home';
import Footer from './Component/User/Footer';
import Buy from './Component/User/Buy';
function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="/Home" element={Home()} />
      <Route path="/Login" element={Login()} />
      <Route path="/Register" element={Register()} />
      <Route path="/Buy" element={Buy()}/>
      <Route path="/Contact" element={Contact()} />
      <Route path="/AboutUs" element={AboutUs()} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
