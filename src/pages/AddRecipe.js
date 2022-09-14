import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// axios
import axiosInstance from "../helper/axios";
import Swal from "sweetalert2";
// context
import { ProfileContext } from "../context";
// css
import styles from "../css/AddRecipe.module.css";

function AddRecipe() {
  const userData = useContext(ProfileContext);
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // cek localstorage
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const saveRecipe = async () => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append("title_recipe", title);
    formData.append("ingredients", ingredients);
    formData.append("photo", file);
    formData.append("user_id", userData.id);
    await axiosInstance
      .post(
        "/recipe/add",
        formData,
        {
          headers: {
            "Content-type": "multipart/form-data",
          },
        },
        []
      )
      .then((res) => {
        Swal.fire({
          icon: "success",
          text: `Add Recipe successfully`,
        });
        setTimeout(() => {
          navigate("/");
        }, 2000);
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
  };

  return (
    <div className={styles.content}>
      <div className="container pt-5">
        <div className="row">
          <div className="col-6 py-5 px-3">
            <div className={`card shadow py-4 px-2 ${styles.d_card}`}>
              <form className="p-3" onSubmit={(e) => e.preventDefault()}>
                <input
                  className="form-control py-3 mb-4"
                  type="text"
                  placeholder="Title Recipe"
                  aria-label="default input example"
                  onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                  className="form-control mb-4"
                  id="floatingTextarea2"
                  rows="8"
                  placeholder="Ingredients"
                  onChange={(e) => setIngredients(e.target.value)}
                />
                <input
                  className="form-control form-control-lg mb-4"
                  type="file"
                  placeholder="Title Recipe"
                  aria-label="default input example"
                  onChange={loadImage}
                />
                <div className="text-center">
                  <button
                    className="btn btn-warning text-white fw-bold py-3 "
                    type="submit"
                    onClick={saveRecipe}
                    disabled={isLoading}
                  >
                    {isLoading && (
                      <span className="spinner-border spinner-border-sm me-2"></span>
                    )}
                    {isLoading ? "Loading..." : "Post"}
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-6 py-5 px-3">
            <h2 className="text-center text-muted">Show Image</h2>
            <hr className="mb-5" />
            {preview ? (
              <div
                className={`border border-4 border-warning card ${styles.d_card_show}`}
              >
                <img src={preview} alt="Preview Image" />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddRecipe;
