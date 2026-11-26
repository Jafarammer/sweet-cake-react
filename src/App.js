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
import { store, persistor } from "./store/configureStore";
import { PersistGate } from "redux-persist/integration/react";
// context
import { ProfileContext } from "./context";
// css global
// import "./App.scss";
import GlobalMessage from "./components/common/GlobalMessage";
// Pages
import Home from "./pages/Home";
import Profile from "./pages/profile/index";
import Login from "./pages/login";
import Register from "./pages/register";
import Logout from "./pages/auth/Logout";
import Recipe from "./pages/recipe";
import DetailRecipe from "./pages/detailRecipe/index";
import Search from "./pages/Search";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalMessage />

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
