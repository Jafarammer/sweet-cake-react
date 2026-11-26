import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  Row,
  Col,
  Avatar,
  Typography,
  Flex,
  Button,
  Divider,
  Tabs,
  Progress,
} from "antd";
import { FaUserAlt, FaBookmark } from "react-icons/fa";
import MyReciped from "../../components/pages/profile/MyReciped";
import SavedRecipe from "../../components/pages/profile/SavedRecipe";
import FormSecurity from "../../components/pages/profile/FormSecurity";
import FormPersonalInformation from "../../components/pages/profile/FormPersonalInformation";
import useProfile from "../../hooks/useProfile";
import useRecipe from "../../hooks/useRecipe";
import "./styles.scss";

const { Title, Text } = Typography;

const Profile = () => {
  const navigate = useNavigate();
  // hooks
  const {
    myRecipe,
    onDeleteRecipe,
    confirmDelete,
    openConfirmDelete,
    closeConfirmDelete,
    deletedData,
    loading,
  } = useRecipe();

  const {
    formikSecurity,
    formikPersonalInformation,
    currentUser,
    isUpdateProfile,
    setIsUpdateProfile,
    onSelectFile,
    progress,
    loadingFile,
  } = useProfile();
  // ref
  const fileInputRef = useRef(null);
  // useState
  const [isUpdatePassword, setIsUpdatePassword] = useState(false);
  // function
  const onConfirmUpdateProfile = () => {
    setIsUpdateProfile(!isUpdateProfile);
  };

  const onConfirmUpdatePassword = () => {
    setIsUpdatePassword(!isUpdatePassword);
  };

  // config action my recipe
  const myRecipeAction = {
    delete: onDeleteRecipe,
    open: confirmDelete,
    openConfirm: openConfirmDelete,
    closeConfirm: closeConfirmDelete,
    data: deletedData,
    loading: loading,
    go: navigate,
  };

  return (
    <div className="profile-page">
      <Row gutter={24}>
        {/* left */}
        <Col span={8}>
          <Card className="profile-card">
            <div className="content-info">
              {loadingFile && (
                <Progress
                  type="circle"
                  percent={progress}
                  format={(percent) => `${percent}%`}
                  size={72}
                  strokeColor={"#f5f5f5"}
                />
              )}

              {!loadingFile && (
                <Avatar
                  size={72}
                  style={{ fontSize: 20 }}
                  src={currentUser?.photoProfile}
                >
                  {currentUser?.name
                    ?.split(" ")
                    .filter(Boolean)
                    .slice(0, 2)
                    .map((word) => word.charAt(0).toUpperCase())
                    .join("")}
                </Avatar>
              )}

              <input
                hidden
                type="file"
                accept="image/jpeg,image/png,image/webp"
                ref={fileInputRef}
                onChange={onSelectFile}
              />
              <Button
                size="small"
                color="primary"
                variant="filled"
                onClick={() => fileInputRef.current.click()}
              >
                Edit
              </Button>
              <Title level={4}>{currentUser?.name}</Title>
            </div>

            <Title level={4} type="secondary">
              Personal Information
            </Title>
            <Divider size="large" />
            <FormPersonalInformation
              onConfirm={onConfirmUpdateProfile}
              showUpdate={isUpdateProfile}
              formik={formikPersonalInformation}
            />

            <Title level={4} type="secondary">
              Security
            </Title>
            <Divider size="large" />
            <FormSecurity
              onConfirm={onConfirmUpdatePassword}
              showUpdate={isUpdatePassword}
              formik={formikSecurity}
            />
          </Card>
        </Col>
        {/* right */}
        <Col span={16}>
          <Tabs
            defaultActiveKey="1"
            items={[
              {
                key: "1",
                label: "My Recipe",
                children: (
                  <MyReciped myRecipe={myRecipe} onAction={myRecipeAction} />
                ),
                icon: <FaUserAlt />,
              },
              {
                key: "2",
                label: "Saved Recipe",
                children: <SavedRecipe onAction={() => navigate("/home")} />,
                icon: <FaBookmark />,
              },
            ]}
            type="card"
            className="tabs"
          />
        </Col>
      </Row>
    </div>
  );
};

export default Profile;
