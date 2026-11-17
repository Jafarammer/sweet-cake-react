import React from "react";
import { Button, Typography } from "antd";
import { ReactComponent as EmptyImage } from "../../images/no_data.svg";
import "./styles/empty_state.scss";

const { Title, Text } = Typography;

const EmptyState = ({
  title = "No Data Found",
  description = "There is no data to display here.",
  buttonText,
  onAction,
}) => {
  return (
    <div className="empty-state">
      <EmptyImage className="empty-state-image" />

      <Title level={4}>{title}</Title>
      <Text type="secondary">{description}</Text>

      {buttonText && (
        <Button style={{ marginTop: "12px" }} type="primary" onClick={onAction}>
          {buttonText}
        </Button>
      )}
    </div>
  );
};

export default EmptyState;
