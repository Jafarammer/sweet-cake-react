import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// css
import styles from "../../css/Home.module.css";
// image
import homeImg from "../../images/1.jpg";

function Header() {
  const navigate = useNavigate();
  const [key, setKeyword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (e) => {
    setIsLoading(true);
    e.preventDefault();
    setTimeout(() => {
      navigate(`/searchPage/${key}`);
      setIsLoading(false);
    }, 2000);
  };

  return (
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
            <form onSubmit={handleSearch}>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control mt-5 py-3 px-5 ms-3"
                  placeholder="Search Restaurant, Food"
                  aria-label="Search Restaurant, Food"
                  aria-describedby="button-addon2"
                  onChange={(e) => setKeyword(e.target.value)}
                />
                <button
                  className="btn btn-lg btn-warning text-white fw-bold mt-5"
                  type="submit"
                  id="button-addon2"
                  // onClick={handleSearch}
                  disabled={isLoading}
                >
                  {isLoading && (
                    <span className="spinner-border spinner-border-sm me-2" />
                  )}
                  {isLoading ? "Loading..." : "Search"}
                </button>
              </div>
            </form>
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
  );
}

export default Header;
