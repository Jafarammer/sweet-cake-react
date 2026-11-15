import React from "react";
import { Form, Input, Button } from "antd";

const FormRegister = ({ formik }) => {
  return (
    <Form layout="vertical" size="large">
      <Form.Item
        label="Name"
        required={false}
        validateStatus={
          formik.touched.name && formik.errors.name ? "error" : ""
        }
        help={formik.touched.name ? formik.errors.name : undefined}
      >
        <Input
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </Form.Item>
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
        label="Phone Number"
        required={false}
        validateStatus={
          formik.touched.phoneNumber && formik.errors.phoneNumber ? "error" : ""
        }
        help={
          formik.touched.phoneNumber ? formik.errors.phoneNumber : undefined
        }
      >
        <Input
          min={13}
          max={14}
          type="tel"
          name="phoneNumber"
          placeholder="628xxxxxxxxxx"
          value={formik.values.phoneNumber}
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
      <Form.Item
        label="Confirm Password"
        required={false}
        validateStatus={
          formik.touched.confirmPassword && formik.errors.confirmPassword
            ? "error"
            : ""
        }
        help={
          formik.touched.confirmPassword
            ? formik.errors.confirmPassword
            : undefined
        }
      >
        <Input.Password
          name="confirmPassword"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </Form.Item>

      <Button
        variant="solid"
        color="primary"
        block
        loading={formik.isSubmitting}
        onClick={() => formik.submitForm()}
      >
        Sign Up
      </Button>
    </Form>
  );
};

export default FormRegister;
