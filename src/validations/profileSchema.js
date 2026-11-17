import * as Yup from "yup";
import { isValidPhoneNumber } from "libphonenumber-js";

export const personalInformationSchema = Yup.object().shape({
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
});

export const securitySchema = Yup.object().shape({
  currentPassword: Yup.string().required("Current Password is required field!"),
  newPassword: Yup.string()
    .required("New password is required field!")
    .min(8, "New password must be at least 8 characters!")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
      "New password must contain uppercase, lowercase, and number",
    ),
  confirmPassword: Yup.string()
    .required("Confirm password is required field!")
    .oneOf([Yup.ref("newPassword")], "Passwords do not match!"),
});
