import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { loginSchema } from "../validations/authSchema";
import { loginUser } from "../service/authService";
import { setAccessToken } from "../utils/token";

const useLogin = () => {
  const navigate = useNavigate();

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

        const response = await loginUser(payload);
        setAccessToken(response.token);
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
