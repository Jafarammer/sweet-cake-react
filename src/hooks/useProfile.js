import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { getMyRecipeThunk } from "../store/thunk/recipeThunk";
import {
  updatePersonalInformationThunk,
  getProfileThunk,
} from "../store/thunk/userThunk";
import {
  personalInformationSchema,
  securitySchema,
} from "../validations/profileSchema";
import useMessage from "./useMessage";

const useProfile = () => {
  const user = JSON.parse(localStorage.getItem("userId"));

  const dispatch = useDispatch();
  const { myRecipe, loading } = useSelector((state) => state.recipe);
  const { currentUser } = useSelector((state) => state.user);
  const [isUpdateProfile, setIsUpdateProfile] = useState(false);

  const notify = useMessage();

  const formikPersonalInformation = useFormik({
    initialValues: {
      name: currentUser?.name ?? "",
      email: currentUser?.email ?? "",
      phoneNumber: currentUser?.phoneNumber ?? "",
    },
    validationSchema: personalInformationSchema,
    onSubmit: async (values) => {
      try {
        const payload = {
          name: values.name,
          email: values.email,
          phoneNumber: values.phoneNumber,
        };

        await dispatch(updatePersonalInformationThunk(payload));

        notify("Update personal information successfuly", "success");
      } catch (error) {
        notify("Update failed!", "error");
      } finally {
        setIsUpdateProfile(!isUpdateProfile);
      }
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
    dispatch(getProfileThunk());
    dispatch(getMyRecipeThunk(user?.id));
  }, [dispatch, user?.id]);

  return {
    myRecipe,
    formikPersonalInformation,
    formikSecurity,
    currentUser,
    isUpdateProfile,
    setIsUpdateProfile,
  };
};

export default useProfile;
