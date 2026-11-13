import React from "react";
import { Form, Input, Button } from "antd";

const FormRegister = () => {
  return (
    <Form layout="vertical">
      <Form.Item label="Name">
        <Input size="large" name="name" />
      </Form.Item>
      <Form.Item label="Email">
        <Input size="large" name="email" placeholder="example@gmail.com" />
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
  );
};

export default FormRegister;
