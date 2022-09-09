// react router dom
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { ProfileContext } from "./context";
// css global
// import "./App.css";
// Pages
import Home from "./pages/Home";
import ShowLayout from "./pages/ShowLayout";
import Profile from "./pages/Profile";
import HideLayout from "./pages/HideLayout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Logout from "./pages/auth/Logout";
import AddRecipe from "./pages/AddRecipe";
import DetailRecipe from "./pages/DetailRecipe";

function App() {
  // const ProfileContext = React.createContext({});
  axios.interceptors.request.use(function (config) {
    if (localStorage.getItem("token")) {
      config.headers = {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      };
    }
    return config;
  });
  return (
    <ProfileContext.Provider value={JSON.parse(localStorage.getItem("user"))}>
      <BrowserRouter>
        <Routes>
          <Route element={<ShowLayout />}>
            <Route path="/" element={<App />} />
            <Route index element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="logout" element={<Logout />} />
            <Route path="/addRecipe" element={<AddRecipe />} />
            <Route path="/detail/:id" element={<DetailRecipe />} />
          </Route>
          <Route element={<HideLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ProfileContext.Provider>
  );
}

export default App;
