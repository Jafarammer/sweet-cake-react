import React from "react";
// react router  dom
import { Outlet } from "react-router-dom";
// layout
import Footer from "./layouts/Footer";
import Navbar from "./layouts/Navbar";

function ShowLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default ShowLayout;
