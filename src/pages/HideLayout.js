import React from "react";
import { Outlet } from "react-router-dom";

function HideLayout() {
  return <Outlet />;
}

export default HideLayout;
