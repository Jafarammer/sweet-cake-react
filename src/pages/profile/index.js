import React, { useState } from "react";
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
} from "antd";
import { FaUserAlt, FaBookmark } from "react-icons/fa";
import MyReciped from "../../components/pages/profile/MyReciped";
import SavedRecipe from "../../components/pages/profile/SavedRecipe";
import FormSecurity from "../../components/pages/profile/FormSecurity";
import FormPersonalInformation from "../../components/pages/profile/FormPersonalInformation";
import useProfile from "../../hooks/useProfile";
import "./styles.scss";

const { Title, Text } = Typography;

const Profile = () => {
  const navigate = useNavigate();
  // hooks
  const { myRecipe, formikSecurity, formikPersonalInformation } = useProfile();
  // useState
  const [isUpdateProfile, setIsUpdateProfile] = useState(false);
  const [isUpdatePassword, setIsUpdatePassword] = useState(false);
  // function
  const onConfirmUpdateProfile = () => {
    setIsUpdateProfile(!isUpdateProfile);
  };

  const onConfirmUpdatePassword = () => {
    setIsUpdatePassword(!isUpdatePassword);
  };

  return (
    <div className="profile-page">
      <Row gutter={24}>
        <Col span={8}>
          <Card className="profile-card">
            <div className="content-info">
              <Avatar size={72} style={{ fontSize: 20 }}>
                W
              </Avatar>
              <Button size="small" color="primary" variant="filled">
                Edit
              </Button>
              <Title level={4}>Wan Jafar</Title>
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
        <Col span={16}>
          <Tabs
            defaultActiveKey="1"
            items={[
              {
                key: "1",
                label: "My Recipe",
                children: (
                  <MyReciped
                    data={myRecipe}
                    onAction={() => navigate("/addRecipe")}
                  />
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
