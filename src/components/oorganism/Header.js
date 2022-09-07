import React from "react";
// css
import styles from "../../css/Home.module.css";
// image
import homeImg from "../../images/1.jpg";

function Header() {
  return (
    <>
      <div className={styles.content}>
        <div className="row">
          <div
            className={` col-sm-12 col-md-9 col-lg-9 px-5 d-flex align-items-center ${styles.col_left_header}`}
          >
            <div className={`card px-5 border-0 ${styles.d_text_header}`}>
              <p className="ms-3">Discover Recipe</p>
              <p className="ms-3">
                <b className="text-warning">&</b> Delicious Food
              </p>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control mt-5 py-3 px-5 ms-3"
                  placeholder="Search Restaurant, Food"
                  aria-label="Search Restaurant, Food"
                  aria-describedby="button-addon2"
                />
                <button
                  className="btn btn-lg btn-warning text-white fw-bold mt-5"
                  type="button"
                  id="button-addon2"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
          <div
            className={`col-sm-0 col-md-3 col-lg-3 bg-warning ${styles.col_right_header}`}
          >
            <div className="card">
              <img src={homeImg} className="card-img-top" alt="image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
