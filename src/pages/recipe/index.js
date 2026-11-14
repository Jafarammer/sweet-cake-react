import { useState, useEffect } from "react";
import { Row, Col, Form, Input, Button, Flex, Upload } from "antd";
import { FaTrash } from "react-icons/fa";
import { MdOutlineFileUpload } from "react-icons/md";
import useRecipe from "../../hooks/useRecipe";
import "./styles.scss";

const { TextArea } = Input;

const Recipe = () => {
  // hooks
  const { formik } = useRecipe();
  // useState
  const [preview, setPreview] = useState(null);
  // function
  const onUpload = (file) => {
    const previewUrl = URL.createObjectURL(file);
    setPreview(previewUrl);
    formik.setFieldValue("recipeCover", file);
    return false;
  };

  const onRemove = () => {
    if (preview) {
      URL.revokeObjectURL(preview);
    }
    setPreview(null);
    formik.setFieldValue("recipeCover", null);
  };

  // useEffect
  useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  return (
    <div className="recipe-page">
      <Form layout="vertical">
        <Row className="row">
          <Col span={12}>
            <Form.Item
              label="Title"
              required={false}
              validateStatus={
                formik.touched.title && formik.errors.title ? "error" : ""
              }
              help={formik.touched.title && formik.errors.title}
            >
              <Input
                name="title"
                size="large"
                value={formik.values.title}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </Form.Item>
            <Form.Item
              label="Ingredients"
              required={false}
              validateStatus={
                formik.touched.ingredients && formik.errors.ingredients
                  ? "error"
                  : ""
              }
              help={formik.touched.ingredients && formik.errors.ingredients}
            >
              <TextArea
                name="ingredients"
                rows={4}
                size="large"
                value={formik.values.ingredients}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </Form.Item>
            <Form.Item
              label="Cover"
              required={false}
              validateStatus={
                formik.touched.recipeCover && formik.errors.recipeCover
                  ? "error"
                  : ""
              }
              help={formik.touched.recipeCover && formik.errors.recipeCover}
            >
              <Upload
                name="recipeCover"
                accept="image/*"
                maxCount={1}
                showUploadList={false}
                beforeUpload={onUpload}
              >
                <Button icon={<MdOutlineFileUpload />}>Upload Image</Button>
              </Upload>

              {preview && (
                <div className="image-preview">
                  <img src={preview} alt="Preview" />
                </div>
              )}
            </Form.Item>
          </Col>
          <Col span={12}></Col>
        </Row>
        <Flex justify="flex-end" align="center" gap={16}>
          <Button variant="filled" color="default">
            Cancel
          </Button>
          <Button
            variant="solid"
            color="primary"
            loading={formik.isSubmitting}
            onClick={() => formik.submitForm()}
          >
            Save
          </Button>
        </Flex>
      </Form>
    </div>
  );
};

export default Recipe;
