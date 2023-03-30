import React from 'react';
import { BrowserRouter, Route, Routes, useLocation} from 'react-router-dom';
import Navbar from './Component/User/Navbar';
import Login from './Component/User/Login';
import Register from './Component/User/Register';
import Contact from './Component/User/Contact';
import AboutUs from "./Component/User/AboutUs";
import Home from './Component/User/Home';
import Footer from './Component/User/Footer';
import Dashboard from './Component/Admin/Dashboard';

function App() {

  const location = useLocation();
  console.log('pathname', location.pathname);

  return (
    <div className="App">

    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/Home" element={Home()} />
      <Route path="/Login" element={Login()} />
      <Route path="/Register" element={Register()} />
      <Route path="/Contact" element={Contact()} />
      <Route path="/AboutUs" element={AboutUs()} />
      </Routes>
      <Footer />

      <Routes>
      <Route path="/Admin" element={Dashboard()} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
