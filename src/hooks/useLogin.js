import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSchema } from "../validations/authSchema";
import { loginUser } from "../service/authService";
import { setAccessToken } from "../utils/token";
import { loginThunk } from "../store/thunk/userThunk";

const useLogin = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

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

        navigate("/home");
      } catch (error) {
        console.log(error);
      }
    },
  });

  return {
    formik,
  };
};

export default useLogin;
