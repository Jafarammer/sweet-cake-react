import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// redux
import { connect } from "react-redux";
import { authLogin } from "../../redux/reducers/authReducer";
// css
import styles from "../../css/Logout.module.css";

function Logout(props) {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      props.setLogout();
      navigate("/login");
    }, 2000);
  });

  return (
    <div
      className={`d-flex align-items-center justify-content-center ${styles.d_loading}`}
    >
      <div className="spinner-grow text-warning" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});
const mapDispatchToProps = (dispatch) => ({
  setLogout: () => dispatch({ type: "SET_LOGOUT" }),
  authRequestLogin: (data) => dispatch(authLogin(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
