// import { json } from "body-parser";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// css
import styles from "../css/DetailRecipe.module.css";
// image
import defaultImg from "../images/default.svg";

function DetailRecipe() {
  const params = useParams();
  const [dataRecipe, setDataRecipe] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://sweetcakechef-production.up.railway.app/recipe/id/${params.id}`
      )
      .then((res) => setDataRecipe(res.data.data));
  }, []);
  return (
    <div className={styles.content}>
      <div className={`container ${styles.d_container}`}>
        <h1 className="text-center text-muted m-5">Loream Sandwich</h1>
        <div className="d-flex justify-content-center px-5">
          <div className={`card border-0 pe-2 py-2 mx-5 ${styles.d_card}`}>
            <img
              src={dataRecipe[0]?.photo || defaultImg}
              alt="image"
              crossorigin="anonymous"
            />
            <div className="position-absolute fixed-bottom d-flex justify-content-end mb-5">
              <h1 className="border border-warning ms-3 me-5 p-2 bg-warning text-light">
                <i className="bi bi-bookmark"></i>
              </h1>
              <h1 className="border border-warning ms-3 me-5 p-2 bg-warning text-light">
                <i class="bi bi-hand-thumbs-up"></i>
              </h1>
            </div>
          </div>
        </div>
        <h1 className="mt-5 text-muted">Ingredients</h1>

        <p
          dangerouslySetInnerHTML={{
            __html: dataRecipe[0]?.ingredients?.split("\n").join("<br />"),
          }}
        />
        <h1 className="text-muted mt-5">Video Step</h1>
        <div className="d-flex align-items-start flex-column">
          <button
            className="btn btn-warning text-light fs-3 px-5 mt-4"
            disabled
          >
            <i className="bi bi-play-fill mx-5"></i>
          </button>
          <button
            className="btn btn-warning text-light fs-3 px-5 mt-4"
            disabled
          >
            <i className="bi bi-play-fill mx-5"></i>
          </button>
        </div>
        <form className="my-5 text-center">
          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style={{ height: "200px" }}
            ></textarea>
            <label for="floatingTextarea2" className="text-start ms-4">
              Comments
            </label>
          </div>
          <button className="btn btn-warning text-light mt-5 py-2 px-5 fw-bold">
            Send
          </button>
        </form>
        {/* result comment */}
        <h1 className="my-5">Comment</h1>
        <div className="d-flex align-items-center mb-5">
          <div className="flex-shrink-0 rounded-circle border border-warning">
            <img
              src={defaultImg}
              alt="image"
              className={`${styles.img_comment} rounded-circle`}
            />
          </div>
          <div className="flex-grow-1 ms-3">
            This is some content from a media component. You can replace this
            with any content and adjust it as needed.
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailRecipe;
