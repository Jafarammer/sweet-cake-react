import React from "react";
import EmptyState from "../../common/EmptyState";

const SavedRecipe = ({ onAction }) => {
  return (
    <div>
      <div className="content-empty">
        <EmptyState buttonText={"Explore Recipes"} onAction={onAction} />
      </div>
    </div>
  );
};

export default SavedRecipe;
