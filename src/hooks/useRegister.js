import { useFormik } from "formik";
import { registerSchema } from "../validations/authSchema";

const useRegister = () => {
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
      console.log(values);
    },
  });

  return {
    formik,
  };
};

export default useRegister;
