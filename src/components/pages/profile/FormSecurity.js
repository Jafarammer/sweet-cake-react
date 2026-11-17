import React from "react";
import { Form, Input, Flex, Button, Typography } from "antd";

const { Text } = Typography;

const FormSecurity = ({ onConfirm, showUpdate, formik }) => {
  return (
    <div className="form-security">
      <Flex justify="space-between" align="center">
        <Text type="secondary">
          Update your password for enhanced security.
        </Text>
        <Button
          size="large"
          variant="filled"
          color="default"
          onClick={() => {
            formik.resetForm();
            onConfirm();
          }}
        >
          Change Password
        </Button>
      </Flex>

      {showUpdate && (
        <Form layout="vertical" size="large">
          <Form.Item
            label="Current Password"
            required={false}
            validateStatus={
              formik.touched.currentPassword && formik.errors.currentPassword
                ? "error"
                : ""
            }
            help={
              formik.touched.currentPassword && formik.errors.currentPassword
            }
          >
            <Input.Password
              name="currentPassword"
              value={formik.values.currentPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Form.Item>

          <Form.Item
            label="New Password"
            required={false}
            validateStatus={
              formik.touched.newPassword && formik.errors.newPassword
                ? "error"
                : ""
            }
            help={formik.touched.newPassword && formik.errors.newPassword}
          >
            <Input.Password
              name="newPassword"
              value={formik.values.newPassword}
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
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
          >
            <Input.Password
              name="confirmPassword"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Form.Item>

          <Flex justify="end" align="center" gap={12}>
            <Button
              variant="filled"
              color="default"
              onClick={() => {
                formik.resetForm();
                onConfirm();
              }}
              className="button"
            >
              Cancel
            </Button>
            <Button
              variant="solid"
              color="primary"
              className="button"
              loading={formik.isSubmitting}
              onClick={() => formik.submitForm()}
            >
              Save
            </Button>
          </Flex>
        </Form>
      )}
    </div>
  );
};

export default FormSecurity;
