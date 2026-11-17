import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { getMyRecipeThunk } from "../store/thunk/recipeThunk";
import {
  personalInformationSchema,
  securitySchema,
} from "../validations/profileSchema";

const useProfile = () => {
  const user = JSON.parse(localStorage.getItem("userId"));

  const dispatch = useDispatch();
  const { myRecipe, loading } = useSelector((state) => state.recipe);

  const formikPersonalInformation = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
    },
    validationSchema: personalInformationSchema,
    onSubmit: async (values) => {
      console.log(values);
    },
  });
  const formikSecurity = useFormik({
    initialValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: securitySchema,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  useEffect(() => {
    dispatch(getMyRecipeThunk(user?.id));
  }, [dispatch, user?.id]);

  return {
    myRecipe,
    formikPersonalInformation,
    formikSecurity,
  };
};

export default useProfile;
