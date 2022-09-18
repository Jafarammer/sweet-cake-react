import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
// axios
import axiosInstance from "../../helper/axios";
import Swal from "sweetalert2";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
// redux
import { useSelector } from "react-redux";
// context
import { ProfileContext } from "../../context";
// images
import defaultImg from "../../images/comingSoon.svg";
// css
import styles from "../../css/Profile.module.css";

function Tabs() {
  const navigate = useNavigate();
  const { profile } = useSelector((state) => state?.auth);
  const userData = useContext(ProfileContext);
  const [toggleState, setToggleState] = useState(1);
  const [dataRecipe, setDataRecipe] = useState([]);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  // cek localstorage
  useEffect(() => {
    axiosInstance
      .get(`/recipe/recipebyuser/${profile?.id}`)
      .then((res) => setDataRecipe(res.data.recipe));
  }, []);
  const handleDeleteRecipe = () => {
    axiosInstance
      .delete(`/recipe/delete/${dataRecipe[0]?.id}`)
      .then((res) => {
        Swal.fire({
          icon: "success",
          text: `Delete ${dataRecipe[0]?.title_recipe} successfully`,
        });
        setTimeout(() => {
          navigate(0);
        }, 1500);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          text: `${error?.response.data}`,
        });
      });
  };
  return (
    <>
      <div>
        <ul className="nav nav-pills nav-fill border border-2 border-bottom border-top-0 border-start-0 border-end-0">
          <li className="nav-item">
            <button
              className={
                toggleState === 1
                  ? "nav-link active bg-light text-warning fw-bold"
                  : "nav-link text-muted fw-bold"
              }
              onClick={() => toggleTab(1)}
            >
              My Recipe
            </button>
          </li>
          <li className="nav-item">
            <button
              className={
                toggleState === 2
                  ? "nav-link active bg-light text-warning fw-bold"
                  : "nav-link text-muted fw-bold"
              }
              onClick={() => toggleTab(2)}
            >
              Saved Recipe
            </button>
          </li>
          <li className="nav-item">
            <button
              className={
                toggleState === 3
                  ? "nav-link active bg-light text-warning fw-bold"
                  : "nav-link text-muted fw-bold"
              }
              onClick={() => toggleTab(3)}
            >
              Liked Recipe
            </button>
          </li>
        </ul>
      </div>

      <div className={`container mt-5 ${styles.d_container}`}>
        {/* conten my recipe */}
        <div className={toggleState === 1 ? "d-block" : "d-none"}>
          <div className="row">
            <Swiper
              freeMode
              grabCursor
              modules={[FreeMode]}
              className="mySwiper"
              slidesPerView={4}
              spaceBetween={40}
            >
              {dataRecipe.map((item) => (
                <SwiperSlide>
                  <div className={`card bg-dark ${styles.card_myRecipe}`}>
                    <img
                      src={item?.photo || defaultImg}
                      alt="image"
                      crossOrigin="anonymous"
                    />
                    <i
                      className="bi bi-trash-fill ms-3 mt-2 fs-4"
                      onClick={handleDeleteRecipe}
                    ></i>
                    <p className="fixed-bottom ms-3 text-light">
                      {item?.title_recipe}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        {/* content save recipe */}
        <div className={toggleState === 2 ? "d-block" : "d-none"}>
          <h1>Coming soon save recipe</h1>
        </div>
        {/* content like recipe */}
        <div className={toggleState === 3 ? "d-block" : "d-none"}>
          <h1>Coming soon like recipe</h1>
        </div>
      </div>
    </>
  );
}

export default Tabs;
