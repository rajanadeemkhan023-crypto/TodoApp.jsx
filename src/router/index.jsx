import { BrowserRouter, Routes, Route , Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";
import AntNavbar from "../Components/AntNavbar";
import { useState } from "react";
import Login from "../pages/Login";
import Product from "../pages/Product";
import NewsAPI from "../pages/NewsAPI";
import ProductCategories from "../pages/ProductCategories";


function AppRouter() {
  const [user , setUser] = useState(true)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={user ? (<AntNavbar><Home /></AntNavbar>) : <Navigate to={"/Login"} />} />
        <Route path="/Login" element = {user ? <Navigate to={"/"} /> : <Login />}/>
        <Route path="/profile" element={<AntNavbar><Profile /></AntNavbar>} />
        <Route path="/profile/:username" element={<Profile />} />
         <Route path="/Product" element={<Product />} />
         <Route path="/NewsAPI" element= {<NewsAPI />}/>
                <Route path="/ProductCategories" element= {<ProductCategories />} />
        <Route path="*" element={<NotFound />} />
 
    
      </Routes>
    </BrowserRouter>
  
  );
}

export default AppRouter;