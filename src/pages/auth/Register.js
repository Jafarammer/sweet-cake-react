import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
// molecules
import TextHeader from "../../components/molecules/TextHeader";
// oraganism
import FormRegister from "../../components/oorganism/FormRegister";
// css
import styles from "../../css/Register.module.css";
// image
import registerImg from "../../images/register.png";

function Register() {
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
          <div className={`col-6 px-5 ${styles.col}`}>
            <NavLink to="/" className="text-decoration-none">
              <p className="text-warning fw-bold fs-5 ms-2">Back</p>
            </NavLink>
            <TextHeader
              title="Let's Get Started"
              desc="Create new account to access all features"
            />
            <div className="card border-0 px-5">
              <FormRegister />
            </div>
          </div>
          <div className={`col-6 px-0 ${styles.col}`}>
            <img src={registerImg} className={styles.show_image} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
