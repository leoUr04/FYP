import React, { useState } from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import Home from './Component/User/Home';
import Navbar from './Component/User/Navbar';
import Login from './Component/User/Login';
import Register from './Component/User/Register';
import Contact from './Component/User/Contact';
import AboutUs from './Component/User/AboutUs';
import Footer from './Component/User/Footer';
import Listings from './Component/User/Listings';
import HouseInfo from './Component/User/Houseinfo';
import Calculator from './Component/User/Calculator';
import Loginmenu from './Component/User/Loginmenu';
import Sidebar from './Component/Admin/Sidebar';
import Dashboard from './Component/Admin/Dashboard';
import SellerTable from './Component/Admin/SellerTable';
import Feedback from './Component/Admin/Feedback';
import Buy from './Component/Admin/Buy';
import BuyerTable from './Component/Admin/BuyerTable';
import AdminTable from './Component/Admin/AdminTable';
import Addadmin from './Component/Admin/Addadmin';
import PropertySell from './Component/Admin/PropertySell';
import AddBuyer from './Component/Admin/AddBuyer';
import AddSeller from './Component/Admin/AddSeller';
import Adminlogin from './Component/Admin/AdminLogin';
import SellerDashboard from './Component/Seller/SellerDashboard';
import PropertyBuy from './Component/Seller/PropertyBuy';
import VideoTour from './Component/Seller/VideoTour';
import Sell from './Component/Seller/Sell';

function App() {
  const [userRole, setUserRole] = useState('user');

  const handleLogin = (role) => {
    setUserRole(role);
  };

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login handleLogin={handleLogin} />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Listings" element={<Listings />} />
        <Route path="/houseinfo/:id" element={<HouseInfo />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="/Loginmenu" element={<Loginmenu />} />
        <Route element={<Outlet />} />
      </Routes>
      <Footer />

      {userRole === 'admin' && (
        <>
          <Routes>
            <Route path="/Admin" element={<Dashboard />} />
            <Route path="/User-Admin" element={<AdminTable />} />
            <Route path="/add-admin" element={<Addadmin />} />
            <Route path="/Properties-Sell" element={<PropertySell />} />
            <Route path="/User-Buyer" element={<BuyerTable />} />
            <Route path="/User-Seller" element={<SellerTable />} />
            <Route path="/Feedback" element={<Feedback />} />
            <Route path="/Properties-Buy" element={<Buy />} />
            <Route path="/add-buyer" element={<AddBuyer />} />
            <Route path="/add-seller" element={<AddSeller />} />
            <Route path="/Adminlogin" element={<Adminlogin />} />
          </Routes>
          <Sidebar />
        </>
      )}

      {userRole === 'seller' && (
        <>
          <Routes>
            <Route path="/Seller" element={<SellerDashboard />} />
            <Route path="/Sell" element={<Sell />} />
            <Route path="/PropertyBUy" element={<PropertyBuy />} />
            <Route path="/VideoTour" element={<VideoTour />} />
          </Routes>
          <Sidebar />
        </>
      )}
    </div>
  );
}

export default App;
