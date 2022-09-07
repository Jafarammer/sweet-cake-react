import React from "react";
// css
import styles from "../../css/Home.module.css";
// image
import populerImg from "../../images/default.svg";

function ShowProductPicture(props) {
  const { src: inputSrc, title: inputTitle, onClick: inputOnclick } = props;
  return (
    <>
      {/* <div className="row row-cols-1 row-cols-md-3 g-6">
        <div className="col">
          <div className="card">
            <img src={populerImg} className="card-img-top" alt="image" />
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={populerImg} className="card-img-top" alt="image" />
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={populerImg} className="card-img-top" alt="image" />
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={populerImg} className="card-img-top" alt="image" />
          </div>
        </div>
      </div> */}

      <div
        className={`card mx-2 my-2 bg-dark border-0 ${styles.card_article3}`}
        onClick={inputOnclick}
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
