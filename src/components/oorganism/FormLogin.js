import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
// sweet alert
import Swal from "sweetalert2";
//atom
// import InputText from "../atom/InputText"; problem =  if make inputtext component not value
import CheckBox from "../atom/CheckBox";
// css
import styles from "../../css/Login.module.css";

function FormLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoading(true);
    axios
      .post("http://localhost:8000/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        localStorage.setItem("token", res?.data?.token);
        localStorage.setItem("user", JSON.stringify(res?.data?.user));
        localStorage.setItem("message", res?.data?.message);
        Swal.fire({
          icon: "success",
          text: localStorage.getItem("message"),
        });
        setTimeout(() => {
          navigate("/");
        }, 1000);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          text: `${err?.response.data}`,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <form className="px-5" onSubmit={(e) => e.preventDefault()}>
        {/* Email */}
        <div className="mb-3 px-5 mx-5">
          <label className="form-label mb-3" for="inputEmail">
            E-Mail
          </label>
          <input
            type="email"
            className="form-control py-3 ps-4"
            id="inputEmail"
            placeholder="examplexxx@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {/* Password */}
        <div className="mb-3 px-5 mx-5">
          <label className="form-label mb-3" for="inputPassword">
            Password
          </label>
          <input
            type="password"
            className="form-control py-3 ps-4"
            id="inputPassword"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <CheckBox type="checkbox" label="I agree to terms & conditions" />
        <div className="d-grid gap-2 px-5">
          <button
            className="btn btn-warning text-white fw-bold mx-5 py-3"
            type="submit"
            disabled={isLoading}
            onClick={handleLogin}
          >
            {isLoading && (
              <span className="spinner-border spinner-border-sm me-2"></span>
            )}
            {isLoading ? "Loading..." : "Login"}
          </button>
          <p className={`text-end text-muted px-5 ${styles.text_forgot}`}>
            Forgot Password ?
          </p>
          <p className="text-center mt-3">
            Don't have an account ?{" "}
            {/* <a
              href="/register"
              className="text-warning fw-bold text-decoration-none ms-2"
            >
              Sign Up
            </a> */}
            <Link to="/register" className="text-decoration-none">
              <small className="text-warning fw-bold ms-2 fs-6">Sign Up</small>
            </Link>
          </p>
        </div>
      </form>
    </>
  );
}

export default FormLogin;
