import React from "react";
import { Form, Input, Button } from "antd";

const FromLogin = () => {
  return (
    <Form layout="vertical">
      <Form.Item label="Email">
        <Input size="large" name="email" placeholder="example@gmail.com" />
      </Form.Item>
      <Form.Item label="Password">
        <Input.Password size="large" name="password" />
      </Form.Item>
      <Button size="large" variant="solid" color="primary" block>
        Sign In
      </Button>
    </Form>
  );
};

export default FromLogin;
