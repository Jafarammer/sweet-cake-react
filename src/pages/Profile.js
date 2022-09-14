import React, { useState, useEffect, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
// axios
import axiosInstance from "../helper/axios";
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
  const userDataContext = useContext(ProfileContext);
  const [dataProfile, setDataProfile] = useState("");
  const navigate = useNavigate();
  const [photo, setPhoto] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      // navigate("/login");
      window.location.href = "/login";
    } else {
      axiosInstance
        .get(`/users/id/${userDataContext.id}`)
        .then((res) => setDataProfile(res.data.data));
    }
  }, []);

  const userUpdate = async () => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append("photo", photo);
    await axiosInstance
      .patch(`/users/edit/${dataProfile[0]?.id}`, formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        Swal.fire({
          icon: "success",
          text: `Update photo profile successfully`,
        });
        setTimeout(() => {
          navigate(0);
        }, 1000);
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
            src={dataProfile[0]?.photo || avatarImg}
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
            <p className="mt-3 fw-bold fs-5">{dataProfile[0]?.name}</p>
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
