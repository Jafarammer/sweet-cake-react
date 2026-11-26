import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "antd";
import { MdEditDocument } from "react-icons/md";
import { BiDetail } from "react-icons/bi";
import { FaTrash } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import EmptyState from "../../common/EmptyState";
import ModalDelete from "../../common/ModalDelete";

const { Meta } = Card;

const MyReciped = ({ myRecipe, onAction }) => {
  const navigate = useNavigate();

  const [confirmDelete, setConfirmDelete] = useState(false);
  const [title, setTitle] = useState("");

  const openConfirmDelete = (value) => {
    setTitle(value);
    setConfirmDelete(true);
  };

  const closeConfirmDelete = () => {
    setTitle("");
    setConfirmDelete(false);
  };

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
                <FaTrash
                  key="delete"
                  onClick={() => openConfirmDelete(item.title_recipe)}
                />,
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

      {/* modal confirm delete */}
      <ModalDelete open={confirmDelete} onCancel={closeConfirmDelete}>
        Are you sure, you want to delete
        <strong>{title} ?</strong>
      </ModalDelete>
    </div>
  );
};

export default MyReciped;
