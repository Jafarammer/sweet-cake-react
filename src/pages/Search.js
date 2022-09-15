import React, { useEffect, useState } from "react";
import axiosInstance from "../helper/axios";
import { useParams, useNavigate, NavLink } from "react-router-dom";
// css
import styles from "../css/Search.module.css";
// image
import notFoundImg from "../images/notFound2.svg";

function Search() {
  const navigate = useNavigate();
  const params = useParams();
  const [dataRecipe, setDataRecipe] = useState([]);
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");
  useEffect(() => {
    axiosInstance
      .get(`/recipe/name?title_recipe=${params.keyword}`)
      .then((res) => setDataRecipe(res.data.data))
      .catch((error) => {
        setIsError(true);
        setMessage(error.response.data);
      });
  });
  return (
    <div className={styles.content}>
      <div className="container pt-5 d-flex justify-content-center">
        {isError ? (
          <div>
            <h1 className="text-center text-muted mb-5">{message}</h1>
            <img src={notFoundImg} alt="image" />
          </div>
        ) : (
          <div>
            {dataRecipe.map((item) => (
              <div
                key={item.data?.id}
                className={`card mb-3 shadow ${styles.card_search}`}
              >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={item?.photo}
                      className="img-fluid rounded-start"
                      alt="image"
                      crossOrigin="anonymous"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">
                        {item?.title_recipe?.length > 20
                          ? item?.title_recipe?.substring(0, 20) + "..."
                          : item?.title_recipe}
                      </h5>
                      <p className="card-text mt-4">
                        {item?.ingredients?.length > 20
                          ? item?.ingredients.substring(0, 50) + "..."
                          : item?.ingredients}
                      </p>
                      <p className="card-text position-absolute fixed-bottom">
                        <button
                          className="btn btn-sm btn-primary float-end mb-2 me-3"
                          onClick={() => navigate(`/detail/${item?.id}`)}
                        >
                          <i className="bi bi-eye-fill me-2"></i> View Detail
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
