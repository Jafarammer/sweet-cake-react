import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Typography } from "antd";
import ImageBg from "../../images/register.png";
import FormRegister from "../../components/FormRegister";
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

            <FormRegister />

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
