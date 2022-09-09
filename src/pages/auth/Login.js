import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
// molecules
import TextHeader from "../../components/molecules/TextHeader";
// organism
import FormLogin from "../../components/oorganism/FormLogin";
// image
import loginImg from "../../images/login.png";
// css
import styles from "../../css/Login.module.css";

function Login() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      Swal.fire({
        icon: "error",
        text: "You have login!!!",
      });
      navigate("/");
    }
  });
  return (
    <>
      <div className="overflow-hidden p-0 m-0">
        <div className="row">
          <div className={`col-sm-12 col-lg-6 px-5 border ${styles.col_left}`}>
            <NavLink to="/" className="text-decoration-none">
              <p className="text-warning fw-bold fs-5 ms-2">Back</p>
            </NavLink>
            <TextHeader
              title="Welcome"
              desc="Log in into your exiting account"
            />
            <div className="card border-0 px-5">
              <FormLogin />
            </div>
          </div>
          <div className={`col-sm-0 col-lg-6 px-0 ${styles.col_right}`}>
            <img src={loginImg} className={styles.show_image} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
