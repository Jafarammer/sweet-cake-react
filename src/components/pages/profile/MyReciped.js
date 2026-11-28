import { Card } from "antd";
import { MdEditDocument } from "react-icons/md";
import { BiDetail } from "react-icons/bi";
import { FaTrash } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import EmptyState from "../../common/EmptyState";
import ModalConfirm from "../../common/ModalConfirm";

const { Meta } = Card;

const MyReciped = ({ myRecipe, onAction }) => {
  return (
    <div className="my-recipe">
      {myRecipe?.data?.length === 0 && (
        <div className="content-empty">
          <EmptyState
            buttonText={"Create New Recipe"}
            onAction={() => onAction.go("/addRecipe")}
          />
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
                <MdEditDocument
                  key="edit"
                  onClick={() => onAction.edit(item.id_recipe)}
                />,
                <BiDetail
                  key="detail"
                  onClick={() => onAction.go(`/detail/${item.id_recipe}`)}
                />,
                <FaTrash
                  key="delete"
                  onClick={() =>
                    onAction.openConfirm(item.id_recipe, item.title_recipe)
                  }
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
      <ModalConfirm
        title="Delete Confirmation"
        open={onAction.open}
        onCancel={() => onAction.closeConfirm()}
        onAction={() => onAction.delete()}
        loading={onAction.loading}
        textButtonAction="Delete"
        colorButtonAction="danger"
      >
        Are you sure, you want to delete
        <strong>{onAction.data.title} ?</strong>
      </ModalConfirm>
    </div>
  );
};

export default MyReciped;
