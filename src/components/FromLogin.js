import React from "react";
import { Form, Input, Button } from "antd";

const FromLogin = ({ formik }) => {
  return (
    <Form layout="vertical" size="large">
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
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </Form.Item>
      <Button
        className="button"
        variant="solid"
        color="primary"
        block
        loading={formik.isSubmitting}
        onClick={() => formik.submitForm()}
      >
        Sign In
      </Button>
    </Form>
  );
};

export default FromLogin;
