import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSchema } from "../validations/authSchema";
import { loginUser } from "../service/authService";
import { setAccessToken } from "../utils/token";
import { loginThunk } from "../store/thunk/userThunk";
import useMessage from "./useMessage";

const useLogin = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const notify = useMessage();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      try {
        const payload = {
          email: values.email,
          password: values.password,
        };

        await dispatch(loginThunk(payload));

        notify("Login successfully", "success");

        navigate("/home");
      } catch (error) {
        notify("Login failed", "error");
      }
    },
  });

  return {
    formik,
  };
};

export default useLogin;
