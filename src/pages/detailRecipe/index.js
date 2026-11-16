import React from "react";
import {
  Layout,
  Card,
  Button,
  Flex,
  Typography,
  Row,
  Col,
  Divider,
} from "antd";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import useRecipe from "../../hooks/useRecipe";
import "./styles.scss";

const { Content } = Layout;
const { Title, Text, Paragraph } = Typography;

const DetailRecipe = () => {
  const { detailRecipe } = useRecipe();
  return (
    <div className="detail-recipe-page">
      <Row gutter={24}>
        <Col span={12}>
          <Card className="recipe-detail-card" bordered={false}>
            <div className="recipe-detail-cover">
              <img src={detailRecipe?.photo} alt="image" />
            </div>

            <div className="recipe-detail-content">
              <Flex justify="space-between" align="center">
                <div>
                  <Title level={2}>{detailRecipe?.title_recipe}</Title>
                  <Text type="secondary">Dessert · Easy · 45 minutes</Text>
                </div>
                <Button
                  size="large"
                  type="text"
                  icon={<FaRegBookmark size={20} />}
                />
              </Flex>

              <Divider size="large" />

              <div className="recipe-detail-section">
                <Title level={4}>Ingredients</Title>
                <Paragraph type="secondary" className="ingredients-content">
                  {detailRecipe?.ingredients}
                </Paragraph>
              </div>
            </div>
          </Card>
        </Col>
        <Col span={12}>
          <Title level={4}>Recipe Tutorial</Title>
          {detailRecipe?.videos.map((item) => (
            <Card className="recipe-detail-card" bordered={false}>
              <div className="recipe-detail-cover">
                <video
                  src={item.video_url}
                  controls
                  className="recipe-detail-video"
                />
              </div>
            </Card>
          ))}
        </Col>
      </Row>
    </div>
  );
};

export default DetailRecipe;
