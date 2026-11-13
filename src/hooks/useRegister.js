import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { registerSchema } from "../validations/authSchema";
import { registerUser } from "../service/authService";

const useRegister = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: registerSchema,
    onSubmit: async (values) => {
      try {
        const payload = {
          name: values.name,
          email: values.email,
          phoneNumber: values.phoneNumber,
          password: values.password,
          confirmPassword: values.confirmPassword,
        };
        await registerUser(payload);
        navigate("/login");
      } catch (error) {
        console.log(error);
      }
    },
  });

  return {
    formik,
  };
};

export default useRegister;
