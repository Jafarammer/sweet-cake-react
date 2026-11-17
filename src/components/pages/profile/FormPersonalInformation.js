import React from "react";
import { Form, Input, Button, Flex } from "antd";

const FormPersonalInformation = ({ onConfirm, showUpdate, formik }) => {
  return (
    <div className="form-personal-information">
      <Form layout="vertical" size="large">
        <Form.Item
          label="Name"
          required={false}
          validateStatus={
            formik.touched.name && formik.errors.name ? "error" : ""
          }
          help={formik.touched.name && formik.errors.name}
        >
          <Input
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            readOnly={!showUpdate}
          />
        </Form.Item>

        <Form.Item
          label="Email"
          required={false}
          validateStatus={
            formik.touched.email && formik.errors.email ? "error" : ""
          }
          help={formik.touched.email && formik.errors.email}
        >
          <Input
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            readOnly={!showUpdate}
          />
        </Form.Item>

        <Form.Item
          label="Phone Number"
          required={false}
          validateStatus={
            formik.touched.phoneNumber && formik.errors.phoneNumber
              ? "error"
              : ""
          }
          help={formik.touched.phoneNumber && formik.errors.phoneNumber}
        >
          <Input
            name="phoneNumber"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            min={13}
            max={14}
            type="tel"
            readOnly={!showUpdate}
          />
        </Form.Item>

        {!showUpdate && (
          <Flex justify="end" align="center">
            <Button color="primary" variant="solid" onClick={onConfirm}>
              Update Profile
            </Button>
          </Flex>
        )}

        {showUpdate && (
          <Flex justify="end" align="center" gap={12}>
            <Button
              color="default"
              variant="filled"
              className="button"
              onClick={() => {
                formik.resetForm();
                onConfirm();
              }}
            >
              Cancel
            </Button>
            <Button
              className="button"
              color="primary"
              variant="solid"
              loading={formik.isSubmitting}
              onClick={() => formik.submitForm()}
            >
              Save
            </Button>
          </Flex>
        )}
      </Form>
    </div>
  );
};

export default FormPersonalInformation;
