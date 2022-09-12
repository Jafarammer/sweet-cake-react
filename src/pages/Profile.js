import React, { useEffect, useState, useContext } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
// context
import { ProfileContext } from "../context";
// components
import Tabs from "../components/oorganism/Tabs";
// css
import styles from "../css/Profile.module.css";
// image
import avatarImg from "../images/avatar.jpg";

function Profile() {
  const userData = useContext(ProfileContext);
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [photo, setPhoto] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // cek localstorage
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
      // window.location.href = "/login";
    } else {
      axios
        .get(`http://localhost:8000/users/id/${userData.id}`)
        .then((res) => setData(res.data.data));
    }
  }, []);

  const userUpdate = () => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append("photo", photo);

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    const url = `https://sweet-cake-chef.herokuapp.com/users/edit/${userData.id}`;
    console.log(url);
    axios
      .patch(url, formData, config)
      .then((res) => {
        Swal.fire({
          icon: "success",
          text: `Update photo profile successfully`,
        });
        navigate("/profile");
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          text: `${error?.response.data}`,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const onInputFile = (e) => {
    setPhoto(e.target.files[0]);
  };

  const addDefaultSrc = (e) => {
    e.target.src = avatarImg;
  };
  return (
    <>
      <div className={styles.content}>
        <NavLink to="/" className="text-decoration-none">
          <p className="text-warning fw-bold fs-5 ms-5 mt-5">Back</p>
        </NavLink>
        {/* content */}
        <div
          className={`card d-flex justify-content-center align-items-center border-0 ${styles.card_header}`}
        >
          <img
            src={data[0]?.photo || avatarImg}
            onError={addDefaultSrc}
            alt="image"
            className="rounded-circle border border-2 border-warning"
            crossorigin="anonymous"
          />
          <form
            className="text-center mb-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="file"
              className={`${styles.hide_file}`}
              onChange={onInputFile}
            />
            <h3 className="text-muted fw-bold mt-3">
              <i className="bi bi-camera-fill"></i>
            </h3>
            <p className="mt-3 fw-bold fs-5">{userData?.name || "Name"}</p>
            <button
              type="submit"
              className="btn btn-primary px-5 py-2"
              onClick={userUpdate}
              disabled={isLoading}
            >
              {isLoading && (
                <span className="spinner-border spinner-border-sm me-2"></span>
              )}
              {isLoading ? "Loading..." : "Update photo profile"}
            </button>
          </form>
        </div>
        {/* Tabs */}
        <Tabs />
        {/* end content */}
      </div>
    </>
  );
}

export default Profile;
