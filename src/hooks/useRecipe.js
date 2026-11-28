import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addRecipeSchema } from "../validations/recipeSchema";
import { addRecipe, updateRecipe } from "../service/recipeService";
import {
  getDetailRecipeThunk,
  getMyRecipeThunk,
} from "../store/thunk/recipeThunk";
import { deleteRecipe } from "../service/recipeService";
import useMessage from "./useMessage";

const useRecipe = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const dispatch = useDispatch();
  const { detailRecipe, myRecipe } = useSelector((state) => state.recipe);

  const notify = useMessage();

  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const [params, setParams] = useState({ page: 1, limit: 10 });
  const [deletedData, setDeletedData] = useState({ id: 0, title: "" });
  const [confirmDelete, setConfirmDelete] = useState(false);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: id ? detailRecipe.title_recipe : "",
      ingredients: id ? detailRecipe.ingredients : "",
      recipeCover: id ? detailRecipe.photo : null,
      recipeVideos: id ? detailRecipe.videos : [null],
    },
    validationSchema: addRecipeSchema,
    onSubmit: async (values) => {
      try {
        setLoading(true);
        setProgress(0);
        const formData = new FormData();

        formData.append("titleRecipe", values.title);
        formData.append("ingredients", values.ingredients);

        if (values.recipeCover instanceof File) {
          formData.append("photo", values.recipeCover);
        }

        const existingVideo = values.recipeVideos
          .filter((video) => video && video.id)
          .map((video) => ({ id: video.id }));

        const newVideo = values.recipeVideos.filter(
          (video) => video instanceof File,
        );

        formData.append("existingVideo", JSON.stringify(existingVideo));

        newVideo.forEach((vidoe) => {
          formData.append("videos", vidoe);
        });

        if (!id) {
          await addRecipe(formData, (percent) => {
            setProgress(percent);
          });
        } else {
          await updateRecipe(id, formData);
        }

        notify(
          !id ? "Create recipe successfully" : "Update recipe successfully",
          "success",
        );

        navigate("/home");
      } catch (error) {
        notify(
          !id ? "Failed to create recipe" : "Failed to update recipe",
          "error",
        );
      } finally {
        setLoading(false);
        setProgress(0);
      }
    },
  });

  const openConfirmDelete = (id, title) => {
    setDeletedData({ id, title });
    setConfirmDelete(true);
  };

  const closeConfirmDelete = () => {
    setDeletedData({ id: 0, title: "" });
    setConfirmDelete(false);
  };

  const onDeleteRecipe = async (id) => {
    try {
      setLoading(true);
      await deleteRecipe(deletedData.id);
      notify("Deleted recipe successfully", "success");
      closeConfirmDelete();
      dispatch(getMyRecipeThunk(params));
    } catch (error) {
      notify("Deleted recipe failed", "error");
    } finally {
      setLoading(false);
    }
  };

  const onDetailEdit = async (id) => {
    try {
      await dispatch(getDetailRecipeThunk(id));
      navigate(`/updateRecipe/${id}`);
    } catch (error) {
      notify("Edit data failed", "error");
    }
  };

  useEffect(() => {
    dispatch(getMyRecipeThunk(params));
    dispatch(getDetailRecipeThunk(id));
  }, [dispatch, params, id]);

  return {
    formik,
    detailRecipe,
    progress,
    loading,
    myRecipe,
    onDeleteRecipe,
    confirmDelete,
    openConfirmDelete,
    closeConfirmDelete,
    deletedData,
    onDetailEdit,
    id,
  };
};

export default useRecipe;
