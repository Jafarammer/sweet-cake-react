import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// redux
import { connect } from "react-redux";
import { authLogin } from "../../redux/reducers/authReducer";
// axios
import { Link } from "react-router-dom";
// atom
import CheckBox from "../atom/CheckBox";
// css
import styles from "../../css/Login.module.css";

function FormLogin(props) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (props.auth.token) {
      navigate("/");
    }
  }, [props.auth]);

  const handleLogin = (value) => {
    props.authRequestLogin({
      email: value?.email ?? email,
      password: value?.password ?? password,
    });
  };

  return (
    <form className="px-5" id="reset-form" onSubmit={(e) => e.preventDefault()}>
      {/* Email */}
      <div className="mb-3 px-5 mx-5">
        <label className="form-label mb-3" htmlFor="inputEmail">
          E-Mail
        </label>
        <input
          type="email"
          className="form-control py-3 ps-4"
          id="inputEmail"
          placeholder="examplexxx@gmail.com"
          autoComplete="off"
          autoSave="none"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      {/* Password */}
      <div className="mb-3 px-5 mx-5">
        <label className="form-label mb-3" htmlFor="inputPassword">
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
          type="reset"
          disabled={props.auth?.loading}
          onClick={handleLogin}
        >
          {props.auth?.loading && (
            <span className="spinner-border spinner-border-sm me-2" />
          )}
          {props.auth?.loading ? "Loading..." : "Login"}
        </button>
        <p className={`text-end text-muted px-5 ${styles.text_forgot}`}>
          Forgot Password ?
        </p>
        <p className="text-center mt-3">
          Don't have an account ?{" "}
          <Link to="/register" className="text-decoration-none">
            <small className="text-warning fw-bold ms-2 fs-6">Sign Up</small>
          </Link>
        </p>
      </div>
    </form>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});
const mapDispatchToProps = (dispatch) => ({
  setProfile: (data) => dispatch({ type: "SET_PROFILE", data: data }),
  authRequestLogin: (data) => dispatch(authLogin(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormLogin);
