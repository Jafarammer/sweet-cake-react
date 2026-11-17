import React from "react";
import { Card } from "antd";
import { MdEditDocument } from "react-icons/md";
import { BiDetail } from "react-icons/bi";
import { FaTrash } from "react-icons/fa";
import EmptyState from "../../common/EmptyState";

const { Meta } = Card;

const MyReciped = ({ data, onAction }) => {
  return (
    <div className="my-recipe">
      {data?.length === 0 && (
        <div className="content-empty">
          <EmptyState buttonText={"Create New Recipe"} onAction={onAction} />
        </div>
      )}
      {data?.length > 0 && (
        <div className="recipe-content">
          {data.map((item, index) => (
            <Card
              key={item.index}
              className="recipe-card"
              cover={
                <div className="recipe-card-cover">
                  <img
                    draggable={false}
                    alt={item.title_recipe}
                    src={item.photo}
                  />
                </div>
              }
              actions={[
                <MdEditDocument key="edit" />,
                <BiDetail key="detail" />,
                <FaTrash key="delete" />,
              ]}
            >
              <Meta
                title={item.title_recipe}
                description="Dessert · Easy · 45 minutes"
              />
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyReciped;
