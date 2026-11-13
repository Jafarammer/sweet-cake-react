import React from "react";
import { Form, Input, Button } from "antd";

const FromLogin = ({ formik }) => {
  return (
    <Form layout="vertical">
      <Form.Item
        label="Email"
        required={false}
        validateStatus={
          formik.touched.email && formik.errors.email ? "error" : ""
        }
        help={formik.touched.email ? formik.errors.email : undefined}
      >
        <Input
          type="email"
          size="large"
          name="email"
          placeholder="example@gmail.com"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </Form.Item>
      <Form.Item
        label="Password"
        required={false}
        validateStatus={
          formik.touched.password && formik.errors.password ? "error" : ""
        }
        help={formik.touched.password ? formik.errors.password : undefined}
      >
        <Input.Password
          size="large"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </Form.Item>
      <Button
        className="button"
        size="large"
        variant="solid"
        color="primary"
        block
      >
        Sign In
      </Button>
    </Form>
  );
};

export default FromLogin;
