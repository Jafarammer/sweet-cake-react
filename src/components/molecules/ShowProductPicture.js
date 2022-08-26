import React from "react";
// css
import styles from "../../css/Home.module.css";
// image
import populerImg from "../../images/default.svg";

function ShowProductPicture(props) {
  const { src: inputSrc, title: inputTitle } = props;
  return (
    <>
      <div
        className={`card mx-2 my-2 bg-dark border-0 ${styles.card_article3}`}
      >
        <img
          crossorigin="anonymous"
          src={inputSrc || populerImg}
          className="card-img-top"
          alt="image"
        />
        <p className="fixed-bottom ms-3 text-light fw-bold">{inputTitle}</p>
      </div>
    </>
  );
}

export default ShowProductPicture;
