import React from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "antd";
import { MdEditDocument } from "react-icons/md";
import { BiDetail } from "react-icons/bi";
import { FaTrash } from "react-icons/fa";
import EmptyState from "../../common/EmptyState";

const { Meta } = Card;

const MyReciped = ({ myRecipe, onAction }) => {
  const navigate = useNavigate();
  console.log("this", myRecipe);
  return (
    <div className="my-recipe">
      {myRecipe?.data?.length === 0 && (
        <div className="content-empty">
          <EmptyState buttonText={"Create New Recipe"} onAction={onAction} />
        </div>
      )}
      {myRecipe?.data?.length > 0 && (
        <div className="recipe-content">
          {myRecipe.data.map((item, index) => (
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
                <BiDetail
                  key="detail"
                  onClick={() => navigate(`/detail/${item.id_recipe}`)}
                />,
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
