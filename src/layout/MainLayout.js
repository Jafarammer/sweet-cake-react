import React from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import HeaderLayout from "./HeaderLayout";
import "./styles/main_layout.scss";

const { Content } = Layout;

const MainLayout = () => {
  return (
    <Layout className="main-layout">
      <HeaderLayout />

      <Content className="content">
        <Outlet />
      </Content>
    </Layout>
  );
};

export default MainLayout;
