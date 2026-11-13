import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Typography, Form, Input, Button } from "antd";
import ImageBg from "../../images/login.png";
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
            <Form layout="vertical">
              <Form.Item label="Email">
                <Input name="email" placeholder="example@gmail.com" />
              </Form.Item>
              <Form.Item label="Password">
                <Input.Password name="password" />
              </Form.Item>
              <Button variant="solid" color="primary" block>
                Sign In
              </Button>
            </Form>
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
