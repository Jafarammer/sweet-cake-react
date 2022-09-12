// import { json } from "body-parser";
import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
// context
import { ProfileContext } from "../context";
// organism
import CardComment from "../components/oorganism/CardComment";
// css
import styles from "../css/DetailRecipe.module.css";
// image
import defaultImg from "../images/default.svg";

function DetailRecipe() {
  const navigate = useNavigate();
  const userData = useContext(ProfileContext);
  const params = useParams();
  const [dataRecipe, setDataRecipe] = useState([]);
  const [comment_message, setCommentMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/recipe/id/${params.id}`)
      .then((res) => setDataRecipe(res.data.data));
  }, []);

  const handleComment = async () => {
    setIsLoading(true);
    if (!localStorage.getItem("token")) {
      setTimeout(() => {
        Swal.fire({
          icon: "error",
          text: "You are not logged in",
        });
        navigate("/login");
      }, 3000);
    } else {
      await axios
        .post(
          `http://localhost:8000/comment/add`,
          {
            comment_message: comment_message,
            user_id: userData.id,
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
              crossorigin="anonymous"
            />
            <div
              className={`position-absolute fixed-bottom d-flex justify-content-end mb-5 ${styles.d_icon}`}
            >
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
            <label for="floatingTextarea2" className="text-start ms-4">
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
              <span className="spinner-border spinner-border-sm me-2"></span>
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
