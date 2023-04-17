import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/User/Home";
import Navbar from "./Component/User/Navbar";
import Login from "./Component/User/Login";
import Register from "./Component/User/Register";
import Contact from "./Component/User/Contact";
import AboutUs from "./Component/User/AboutUs";
import Footer from "./Component/User/Footer";
import Listings from "./Component/User/Listings";
import HouseInfo from "./Component/User/Houseinfo";
import Calculator from "./Component/User/Calculator";
import Loginmenu from "./Component/User/Loginmenu";
// import Dashboard from "./Component/Admin/Dashboard";
// import BuyerTable from "./Component/Admin/BuyerTable";
// import Feedback from "./Component/Admin/Feedback";
// import SellerTable from "./Component/Admin/SellerTable";
// import Buy from "./Component/Admin/Buy";
// import AdminTable from "./Component/Admin/AdminTable";
// import Sidebar from './Component/Admin/Sidebar';

function App() {
  return (
    <div className="App">
      {/* User Module */}
      <Navbar />
      <Routes>
        <Route path="/Home" element={Home()} />
        <Route path="/Login" element={Login()} />
        <Route path="/Register" element={Register()} />
        <Route path="/Listings" element={Listings()} />
        <Route path="/houseinfo/:id" element={<HouseInfo />} />
        <Route path="/Contact" element={Contact()} />
        <Route path="/AboutUs" element={AboutUs()} />
        <Route path="/Calculator" element={Calculator()} />
        <Route path="/Loginmenu" element={Loginmenu()} />
      </Routes>
      <Footer />

      {/* Admin Module */}
      {/* <Sidebar />
      <Routes>
      <Route path="/Dashbaord" element={Dashboard()} />
      <Route path="/Properties-Buy" element={Buy()} />
      <Route path="/User-Admin" element={AdminTable()} />
      <Route path="/User-Seller" element={SellerTable()} />
      <Route path="/User-Buyer" element={BuyerTable()} />
      <Route path="/Feedback" element={Feedback()} />
      </Routes> */}
    </div>
  );
}

export default App;
