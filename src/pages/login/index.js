import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Typography } from "antd";
import ImageBg from "../../images/login.png";
import FromLogin from "../../components/FromLogin";
import "./styles.scss";

const { Title, Text } = Typography;

const Login = () => {
  return (
    <div className="login-page">
      <Row>
        <Col span={12} className="col-left">
          <div className="box-card">
            <Title level={2} type="warning" className="title">
              Welcome
            </Title>
            <Text className="desc" type="secondary">
              Log in into your account
            </Text>
            <FromLogin />
            <div className="content-link">
              <Text type="secondary" className="text">
                Don't have an account?
              </Text>{" "}
              <Link to="/register" className="link">
                Sign up
              </Link>
            </div>
          </div>
        </Col>
        <Col span={12} className="col">
          <img src={ImageBg} className="bg-img" alt="img" />
        </Col>
      </Row>
    </div>
  );
};

export default Login;
