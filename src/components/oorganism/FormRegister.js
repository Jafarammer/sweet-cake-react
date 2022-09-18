import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// axios
import Swal from "sweetalert2";
import axiosInstance from "../../helper/axios";
// atom
import CheckBox from "../atom/CheckBox";

function FormRegister() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = () => {
    setIsLoading(true);
    axiosInstance
      .post("/register", {
        name,
        email,
        phone_number,
        password,
        confirmPassword,
      })
      .then((res) => {
        Swal.fire({
          icon: "success",
          text: "Register successfully ",
        });
        setTimeout(() => {
          navigate("/login");
        }, 1200);
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
    <form
      autoComplete="off"
      className="px-5"
      onSubmit={(e) => e.preventDefault()}
    >
      {/* Name */}
      <div className="mb-3 px-5 mx-5">
        <label className="form-label mb-3" htmlFor="inputName">
          Name
        </label>
        <input
          type="text"
          className="form-control py-3 ps-4"
          id="inputName"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      {/* Email */}
      <div className="mb-3 px-5 mx-5">
        <label className="form-label mb-3" htmlFor="inputEmail">
          Email
        </label>
        <input
          type="email"
          className="form-control py-3 ps-4"
          id="inputEmail"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      {/* Phone number */}
      <div className="mb-3 px-5 mx-5">
        <label className="form-label mb-3" htmlFor="inputPhone">
          Phone number
        </label>
        <input
          type="number"
          className="form-control py-3 ps-4"
          id="inputPhone"
          placeholder="08xxxxxxxxxx"
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      {/* Create new password */}
      <div className="mb-3 px-5 mx-5">
        <label className="form-label mb-3" htmlFor="inputNewPass">
          Create new password
        </label>
        <input
          type="password"
          className="form-control py-3 ps-4"
          id="inputNewPass"
          placeholder="Create new password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {/* Confirm password */}
      <div className="mb-3 px-5 mx-5">
        <label className="form-label mb-3" htmlFor="inputConfirmPass">
          Confirm password
        </label>
        <input
          type="password"
          className="form-control py-3 ps-4"
          id="inputConfirmPass"
          placeholder="Confirm password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <CheckBox type="checkbox" label="I agree to terms & conditions" />
      <div className="d-grid gap-2 px-5">
        <button
          className="btn btn-warning text-white fw-bold mx-5 py-3"
          type="reset"
          disabled={isLoading}
          onClick={handleRegister}
        >
          {isLoading && (
            <span className="spinner-border spinner-border-sm me-2" />
          )}
          {isLoading?.loading ? "Loading..." : "Register Account"}
        </button>
        <p className="text-center mt-3">
          Already have account ?
          <Link to="/login" className="text-decoration-none">
            <small className="text-warning fw-bold fs-6 ms-2">
              Login in here
            </small>
          </Link>
        </p>
      </div>
    </form>
  );
}

export default FormRegister;
