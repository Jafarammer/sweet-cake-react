import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
//molecules
import HeadSection from "../molecules/HeadSection";
// css
import styles from "../../css/Home.module.css";
// image
import populerImg from "../../images/default.svg";

function PopulerRecipe() {
  const navigate = useNavigate();
  const [listImg, setListImg] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/recipe")
      .then((res) => setListImg(res.data.data));
  });
  return (
    <>
      <div className={`mb-5 ${styles.content}`}>
        <HeadSection
          className={`row mt-5 ${styles.row_heading_article3}`}
          label="Populer Recipe"
        />
        <div className="container ps-5">
          <div className="row ms-5">
            {listImg.map((item) => (
              <div
                className={`card ms-3 mb-3 bg-dark border-0 px-1 pb-1 ${styles.card_article3}`}
                onClick={() => navigate(`/detail/${item?.id}`)}
              >
                <img src={item?.photo || populerImg} className="card-img-top" />
                <p className="position-absolute fixed-bottom ms-4 text-light">
                  {item?.title_recipe}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default PopulerRecipe;
