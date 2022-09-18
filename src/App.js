// react router dom
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
// redux
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
// context
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
import Search from "./pages/Search";

function App() {
  // const ProfileContext = React.createContext({});
  axios.interceptors.request.use((config) => {
    if (localStorage.getItem("token")) {
      config.headers = {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      };
    }
    return config;
  });
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route element={<ShowLayout />}>
              <Route path="/" element={<App />} />
              <Route index element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/addRecipe" element={<AddRecipe />} />
              <Route path="/detail/:id" element={<DetailRecipe />} />
              <Route path="/searchPage/:keyword" element={<Search />} />
            </Route>
            <Route element={<HideLayout />}>
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="logout" element={<Logout />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
