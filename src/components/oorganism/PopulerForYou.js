import React from "react";
// molecules
import HeadSection from "../molecules/HeadSection";
// css
import styles from "../../css/Home.module.css";
// image
import homeImg2 from "../../images/foryou.jpg";

function PopulerForYou() {
  return (
    <>
      <div className={`mb-5 ${styles.content}`}>
        {/* <HeadArticle className="row" label="Pupuler For You!" /> */}
        <HeadSection className="row mb-3" label="Populer For You!" />
        <div className="row">
          <div className="col-6 py-5 px-5">
            <div
              className={`card border border-3 border-warning mt-5 pb-5 ${styles.card_article1}`}
            >
              <img src={homeImg2} className="card-img-top" alt="image" />
            </div>
          </div>
          <div className={`col-5 px-5 ${styles.col_right_article1}`}>
            <h1 className="text-center">Healthy Waffle</h1>
            <h1 className="text-center border-bottom border-2 border-warning mb-4 py-3 px-5">
              (Quick & Easy)
            </h1>
            <p className="text-muted">Quick + Easy Waffle</p>
            <p className="text-muted">
              Healthy Waffle in a hurry ? That's right!
            </p>
            <button
              type="button"
              className="btn btn-warning text-white py-3 px-5 fw-bold mt-4"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PopulerForYou;
