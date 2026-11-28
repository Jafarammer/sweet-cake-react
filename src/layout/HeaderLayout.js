import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Avatar, Dropdown, Layout, Space, Typography } from "antd";
import { FaUserAlt } from "react-icons/fa";
import { IoIosArrowDown, IoIosLogOut } from "react-icons/io";
import ModalConfirm from "../components/common/ModalConfirm";
import useLogout from "../hooks/useLogout";
import "./styles/header.scss";

const { Header } = Layout;
const { Title, Text } = Typography;

const HeaderLayout = () => {
  const navigate = useNavigate();

  const { currentUser } = useSelector((state) => state.user);

  const logout = useLogout();

  const [confirmLogout, setConfirmLogout] = useState(false);

  const onOpenConfirm = () => {
    setConfirmLogout(true);
  };
  const onCloseConfirm = () => {
    setConfirmLogout(false);
  };

  const onMenuClick = ({ key }) => {
    switch (key) {
      case "profile":
        navigate("/profile");
        break;

      case "logout":
        onOpenConfirm();
        break;

      default:
        break;
    }
  };

  // config data
  const items = [
    {
      key: "profile",
      label: "Profile",
      icon: <FaUserAlt />,
    },
    {
      type: "divider",
    },
    {
      key: "logout",
      label: "Logout",
      icon: <IoIosLogOut />,
    },
  ];

  return (
    <Header className="header-layout">
      <Title
        level={4}
        onClick={() => navigate("/home")}
        style={{ cursor: "pointer" }}
      >
        Food Budies
      </Title>

      <Dropdown
        menu={{
          items,
          onClick: onMenuClick,
        }}
        trigger={["click"]}
        placement="bottomRight"
      >
        <Space className="user" size={10}>
          <Text strong className="username">
            {currentUser.name}
          </Text>
          <Avatar src={currentUser.photoProfile} size={40} />
        </Space>
      </Dropdown>
      {/* modal */}
      <ModalConfirm
        title="Logout Confirmation"
        open={confirmLogout}
        onCancel={() => onCloseConfirm()}
        onAction={() => logout()}
        // loading={onAction.loading}
        textButtonAction="Logout"
      >
        <strong>Are you sure, you want to logout ?</strong>
      </ModalConfirm>
    </Header>
  );
};

export default HeaderLayout;
