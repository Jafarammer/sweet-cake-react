import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
//molecules
import HeadSection from "../molecules/HeadSection";
import ShowProductPicture from "../molecules/ShowProductPicture";
// css
import styles from "../../css/Home.module.css";
// image
import populerImg from "../../images/default.svg";

function PopulerRecipe() {
  const navigate = useNavigate();
  const [listImg, setListImg] = useState([]);
  useEffect(() => {
    axios
      .get("https://sweet-cake-chef.herokuapp.com/recipe")
      .then((res) => setListImg(res.data.data));
  });
  // const handleDetail = () => {
  //   navigate(`/detail/${listImg[0]?.id}`);
  // };
  return (
    <>
      <div className={`mb-5 ${styles.content}`}>
        <HeadSection
          className={`row mt-5 ${styles.row_heading_article3}`}
          label="Populer Recipe"
        />
        <div className={`container py-3 ${styles.container_card}`}>
          {listImg
            .map((item) => (
              <ShowProductPicture
                src={item?.photo || populerImg}
                title={item?.title_recipe}
                onClick={() => navigate(`/detail/${item?.id}`)}
              />
            ))
            .slice(0, 6)}
        </div>
      </div>
    </>
  );
}

export default PopulerRecipe;
