import React from "react";
import { Card } from "antd";
import { MdEditDocument } from "react-icons/md";
import { BiDetail } from "react-icons/bi";
import { FaTrash } from "react-icons/fa";
// import "./my_recipe.scss";

const { Meta } = Card;

const MyReciped = ({ data }) => {
  return (
    <div className="my-recipe">
      {data?.map((item) => (
        <Card
          key={item.id_recipe}
          className="recipe-card"
          cover={
            <div className="recipe-card-cover">
              <img draggable={false} alt={item.title_recipe} src={item.photo} />
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
  );
};

export default MyReciped;
