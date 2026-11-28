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
  List,
  Avatar,
} from "antd";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { GrLike } from "react-icons/gr";
import useRecipe from "../../hooks/useRecipe";
import "./styles.scss";

const { Content } = Layout;
const { Title, Text, Paragraph } = Typography;

const DetailRecipe = () => {
  const { detailRecipe } = useRecipe();
  console.log("this", detailRecipe);

  return (
    <div className="detail-recipe-page">
      <Row gutter={24}>
        <Col span={12}>
          <Card className="recipe-detail-card" bordered={false}>
            <List itemLayout="horizontal">
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src={detailRecipe.user.photo} />}
                  title={detailRecipe.user.name}
                  description="Dessert · Easy · 45 minutes"
                />
              </List.Item>
            </List>
            <div className="recipe-detail-cover">
              <img src={detailRecipe?.photo} alt="image" />
            </div>

            <div className="recipe-detail-content">
              <Flex justify="space-between" align="center">
                <Title level={4}>{detailRecipe?.title_recipe}</Title>
                <div>
                  <Button
                    size="large"
                    type="text"
                    icon={<GrLike size={20} />}
                  />
                  <Button
                    size="large"
                    type="text"
                    icon={<FaRegBookmark size={20} />}
                  />
                </div>
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
