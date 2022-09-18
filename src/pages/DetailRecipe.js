// import { json } from "body-parser";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
// redux
import { useSelector } from "react-redux";
// axios
import axiosInstance from "../helper/axios";
import Swal from "sweetalert2";
// organism
import CardComment from "../components/oorganism/CardComment";
// css
import styles from "../css/DetailRecipe.module.css";
// image
import defaultImg from "../images/default.svg";

function DetailRecipe() {
  const { profile } = useSelector((state) => state?.auth);
  const { token } = useSelector((state) => state?.auth);
  const navigate = useNavigate();
  const params = useParams();
  const [dataRecipe, setDataRecipe] = useState([]);
  const [comment_message, setCommentMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axiosInstance
      .get(`/recipe/id/${params.id}`)
      .then((res) => setDataRecipe(res.data.data));
  }, []);

  const handleComment = async () => {
    setIsLoading(true);
    if (!token) {
      setTimeout(() => {
        Swal.fire({
          icon: "error",
          text: "You are not logged in",
        });
        navigate("/login");
      }, 2000);
    } else {
      await axiosInstance
        .post(
          "/comment/add",
          {
            comment_message,
            user_id: profile?.id,
            recipe_id: params.id,
          },
          []
        )
        .then((res) => {
          Swal.fire({
            icon: "success",
            text: res.data.message,
          });
          setTimeout(() => {
            navigate(0);
          }, 700);
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            text: `${error?.response.data}`,
          });
          console.log(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  return (
    <div className={styles.content}>
      <div className={`container ${styles.d_container}`}>
        <h1 className="text-center text-muted m-5">
          {dataRecipe[0]?.title_recipe}
        </h1>
        <div className="d-flex justify-content-center px-5">
          <div className={`card border-0 pe-2 py-2 mx-5 ${styles.d_card}`}>
            <img
              src={dataRecipe[0]?.photo || defaultImg}
              alt="image"
              crossOrigin="anonymous"
            />
            <div
              className={`position-absolute fixed-bottom d-flex justify-content-end mb-5 ${styles.d_icon}`}
            >
              <h1 className="border border-warning ms-3 me-5 p-2 bg-warning text-light">
                <i className="bi bi-bookmark" />
              </h1>
              <h1 className="border border-warning ms-3 me-5 p-2 bg-warning text-light">
                <i className="bi bi-hand-thumbs-up" />
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
            <i className="bi bi-play-fill mx-5" />
          </button>
          <button
            className="btn btn-warning text-light fs-3 px-5 mt-4"
            disabled
          >
            <i className="bi bi-play-fill mx-5" />
          </button>
        </div>
        <form className="my-5 text-center" onSubmit={(e) => e.preventDefault()}>
          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style={{ height: "200px" }}
              // value={commentMessage}
              onChange={(e) => setCommentMessage(e.target.value)}
            />
            <label htmlFor="floatingTextarea2" className="text-start ms-4">
              Comments
            </label>
          </div>
          <button
            className="btn btn-warning text-light mt-5 py-2 px-5 fw-bold"
            onClick={handleComment}
            type="submit"
            disabled={isLoading}
          >
            {isLoading && (
              <span className="spinner-border spinner-border-sm me-2" />
            )}
            {isLoading ? "Loading..." : "Send"}
          </button>
        </form>
        {/* result comment */}
        <h1 className="my-5">Comment</h1>
        <CardComment />
      </div>
    </div>
  );
}

export default DetailRecipe;
