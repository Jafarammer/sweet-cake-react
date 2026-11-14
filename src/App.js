// react router dom
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";
// layout
import HideLayout from "./pages/HideLayout";
import ShowLayout from "./pages/ShowLayout";
// routes
import GuestRoute from "./routes/GuestRoutes";
import ProtectedRoutes from "./routes/ProtectedRoutes";
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
import Profile from "./pages/Profile";
import Login from "./pages/login";
import Register from "./pages/register";
import Logout from "./pages/auth/Logout";
import Recipe from "./pages/recipe";
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
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route
              element={
                <GuestRoute>
                  <HideLayout />
                </GuestRoute>
              }
            >
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>
            <Route
              element={
                <ProtectedRoutes>
                  <ShowLayout />
                </ProtectedRoutes>
              }
            >
              <Route path="/home" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/addRecipe" element={<Recipe />} />
              <Route path="/detail/:id" element={<DetailRecipe />} />
              <Route path="/searchPage/:keyword" element={<Search />} />
              <Route path="logout" element={<Logout />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
