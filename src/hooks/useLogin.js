import { useFormik } from "formik";
import { loginSchema } from "../validations/authSchema";

const useLogin = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  return {
    formik,
  };
};

export default useLogin;
