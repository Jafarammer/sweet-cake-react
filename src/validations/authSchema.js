import * as Yup from "yup";
import { isValidPhoneNumber } from "libphonenumber-js";

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format!")
    .required("Email is required field!"),
  password: Yup.string().required("Password is required field!"),
});

export const registerSchema = Yup.object().shape({
  name: Yup.string().required("Name is required field!"),
  email: Yup.string()
    .email("Invalid email format!")
    .required("Email is required field!"),
  phoneNumber: Yup.string()
    .required("Phone number is required!")
    .test("valid-phone", "Invalid phone number", (value) => {
      if (!value) return false;
      try {
        return isValidPhoneNumber(value, "ID");
      } catch (error) {
        return false;
      }
    }),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
      "Password must contain uppercase, lowercase, and number",
    ),
  confirmPassword: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("password")], "Passwords do not match"),
});
