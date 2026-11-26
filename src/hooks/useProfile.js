import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { getMyRecipeThunk } from "../store/thunk/recipeThunk";
import {
  updatePersonalInformationThunk,
  getProfileThunk,
  updatePhotoProfileThunk,
} from "../store/thunk/userThunk";
import {
  personalInformationSchema,
  securitySchema,
} from "../validations/profileSchema";
import useMessage from "./useMessage";
import useLogout from "./useLogout";
import { updateSecurity } from "../service/authService";

const useProfile = () => {
  const user = JSON.parse(localStorage.getItem("userId"));

  const dispatch = useDispatch();
  const { myRecipe, loading } = useSelector((state) => state.recipe);
  const { currentUser } = useSelector((state) => state.user);

  const notify = useMessage();
  const logout = useLogout();

  const [isUpdateProfile, setIsUpdateProfile] = useState(false);
  const [loadingFile, setLoadingFile] = useState(false);
  const [progress, setProgress] = useState(0);
  const [params, setParams] = useState({
    page: 1,
    limit: 10,
  });

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

        const result = await dispatch(updatePersonalInformationThunk(payload));
        notify("Update personal information successfuly", "success");

        if (result?.data?.reLogin) {
          setTimeout(() => {
            logout();
          }, 3000);
        }
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
      try {
        const payload = {
          currentPassword: values.currentPassword,
          newPassword: values.newPassword,
          confirmPassword: values.confirmPassword,
        };

        const result = await updateSecurity(payload);

        notify("Change password successfully", "success");

        if (result.reLogin) {
          setTimeout(() => {
            logout();
          }, 3000);
        }
      } catch (error) {
        notify("Change password failed", "error");
      }
    },
  });

  const onSelectFile = async (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
      notify("Only JPG, PNG, and WEBP are allowed", "error");
      event.target.value = "";
      return;
    }

    if (file > 2 * 1024 * 1024) {
      notify("Maximum photo size is 2 MB", "error");
      event.target.value = "";
      return;
    }

    const formData = new FormData();

    formData.append("photo", file);

    try {
      setLoadingFile(true);
      setProgress(0);

      await dispatch(
        updatePhotoProfileThunk(formData, (percent) => {
          setProgress(percent);
        }),
      );

      notify("Profile photo updated successfully", "success");
    } catch (error) {
      notify(
        error.response?.data?.message || "Failed to update photo profile",
        "error",
      );
    } finally {
      setLoadingFile(false);
      setProgress(0);
      event.target.value = "";
    }
  };

  useEffect(() => {
    dispatch(getProfileThunk());
    dispatch(getMyRecipeThunk(params));
  }, [dispatch, params]);

  return {
    myRecipe,
    formikPersonalInformation,
    formikSecurity,
    currentUser,
    isUpdateProfile,
    setIsUpdateProfile,
    onSelectFile,
    progress,
    loadingFile,
  };
};

export default useProfile;
