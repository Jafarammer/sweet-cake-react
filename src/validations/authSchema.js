import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required field!"),
  password: Yup.string().required("Password is required field!"),
});
