import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Row,
  Col,
  Form,
  Input,
  Button,
  Flex,
  Upload,
  Divider,
  Space,
  Progress,
} from "antd";
import { FaTrash } from "react-icons/fa";
import { MdOutlineFileUpload } from "react-icons/md";
import useRecipe from "../../hooks/useRecipe";
import VideoPreview from "../../components/VideoPreview";
import "./styles.scss";

const { TextArea } = Input;

const Recipe = () => {
  // router
  const navigate = useNavigate();
  // hooks
  const { formik, progress, loading } = useRecipe();
  // useState
  const [preview, setPreview] = useState(null);
  const [previewVideo, setPreviewVideo] = useState(null);
  // function
  const onUpload = (file) => {
    const previewUrl = URL.createObjectURL(file);
    setPreview(previewUrl);
    formik.setFieldValue("recipeCover", file);
    return false;
  };

  const onUploadVideo = (file, index) => {
    if (!file.type.startsWith("video/")) {
      return Upload.LIST_IGNORE;
    }

    formik.setFieldValue(`recipeVideos[${index}]`, file);

    return false;
  };

  const onRemove = () => {
    if (preview) {
      URL.revokeObjectURL(preview);
    }
    setPreview(null);
    formik.setFieldValue("recipeCover", null);
  };

  const onRemoveVideo = (index) => {
    const updatedVideos = [...formik.values.recipeVideos];
    updatedVideos.splice(index, 1);

    formik.setFieldValue(
      "recipeVideos",
      updatedVideos.length ? updatedVideos : [null],
    );
  };

  const onAddVideo = () => {
    formik.setFieldValue("recipeVideos", [...formik.values.recipeVideos, null]);
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
      <Form layout="vertical" size="large">
        <Row gutter={24}>
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
                // size="large"
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
                // size="large"
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

          <Col span={12}>
            <Form.Item
              label="Video"
              required={false}
              validateStatus={
                formik.touched.recipeVideos && formik.errors.recipeVideos
                  ? "error"
                  : ""
              }
              help={formik.touched.recipeVideos && formik.errors.recipeVideos}
            >
              <Space
                direction="vertical"
                style={{ width: "100%" }}
                size="large"
              >
                {formik.values.recipeVideos.map((video, index) => (
                  <div key={index}>
                    <Flex align="center" gap={8}>
                      <Upload
                        accept="video/*"
                        maxCount={1}
                        showUploadList={false}
                        beforeUpload={(file) => onUploadVideo(file, index)}
                      >
                        <Button
                          htmlType="button"
                          icon={<MdOutlineFileUpload />}
                        >
                          {video ? `Change Video` : `Upload Video`}
                        </Button>
                      </Upload>

                      <Button
                        htmlType="button"
                        color="danger"
                        variant="text"
                        onClick={() => onRemoveVideo(index)}
                        disabled={formik.values.recipeVideos.length === 1}
                      >
                        <FaTrash />
                      </Button>
                    </Flex>

                    <VideoPreview file={video} />
                  </div>
                ))}

                {formik.values.recipeVideos.length < 3 && (
                  <Button
                    htmlType="button"
                    type="dashed"
                    block
                    onClick={onAddVideo}
                  >
                    + Add Video
                  </Button>
                )}
              </Space>
            </Form.Item>
          </Col>
        </Row>

        {/* di hide dulu , perlu dapet data presentase dari clodinarynya */}
        {/* {loading && (
          <Progress percent={progress} format={(percent) => `${percent}%`} />
        )} */}

        <Divider size="large" />
        <Flex justify="flex-end" align="center" gap={16}>
          <Button
            variant="filled"
            color="default"
            className="button"
            onClick={() => navigate("/home")}
          >
            Cancel
          </Button>
          <Button
            variant="solid"
            color="primary"
            loading={formik.isSubmitting}
            onClick={() => formik.submitForm()}
            className="button"
          >
            Save
          </Button>
        </Flex>
      </Form>
    </div>
  );
};

export default Recipe;
