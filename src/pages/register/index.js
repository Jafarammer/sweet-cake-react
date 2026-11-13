import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Typography, Form, Input, Button, InputNumber } from "antd";
import ImageBg from "../../images/register.png";
import "./styles.scss";

const { Title, Text } = Typography;

const Register = () => {
  return (
    <div className="register-page">
      <Row>
        <Col span={12} className="col-left">
          <div className="box-card">
            <Title level={2} type="warning" className="title">
              Let's Get Started
            </Title>
            <Text className="desc" type="secondary">
              Create new account to access all features
            </Text>

            <Form layout="vertical">
              <Form.Item label="Name">
                <Input size="large" name="name" />
              </Form.Item>
              <Form.Item label="Email">
                <Input
                  size="large"
                  name="email"
                  placeholder="example@gmail.com"
                />
              </Form.Item>
              <Form.Item label="Phone Number">
                <Input
                  size="large"
                  min={12}
                  max={13}
                  type="number"
                  name="phoneNumber"
                  placeholder="08xxxxxxxxxx"
                  width={"100%"}
                />
              </Form.Item>
              <Form.Item label="Password">
                <Input.Password size="large" name="password" />
              </Form.Item>
              <Form.Item label="Confirm Password">
                <Input.Password size="large" name="confirmPassword" />
              </Form.Item>

              <Button size="large" variant="solid" color="primary" block>
                Sign Up
              </Button>
            </Form>

            <div className="content-link">
              <Text type="secondary" className="text">
                Already have account ?
              </Text>{" "}
              <Link to="/login" className="link">
                Sign In
              </Link>
            </div>
          </div>
        </Col>
        <Col span={12} className="col-right">
          <img src={ImageBg} className="bg-img" alt="img" />
        </Col>
      </Row>
    </div>
  );
};

export default Register;
