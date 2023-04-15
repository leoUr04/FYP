import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/User/Home';
import Navbar from './Component/User/Navbar';
import Login from './Component/User/Login';
import Register from './Component/User/Register';
import Contact from './Component/User/Contact';
import AboutUs from "./Component/User/AboutUs";
import Footer from './Component/User/Footer';
import Listings from './Component/User/Listings';
import HouseInfo from './Component/User/Houseinfo';
import Calculator from './Component/User/Calculator';
import Loginmenu from './Component/User/Loginmenu';
function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="/Home" element={Home()} />
      <Route path="/Login" element={Login()} />
      <Route path="/Register" element={Register()} />
      <Route path="/Listings" element={Listings()}/>
      <Route path="/houseinfo/:id" component={HouseInfo} />
      <Route path="/Contact" element={Contact()} />
      <Route path="/AboutUs" element={AboutUs()} />
      <Route path="/Calculator" element={Calculator()} />
      <Route path="/Loginmenu" element={Loginmenu()} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
