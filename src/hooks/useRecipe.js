import { useEffect } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addRecipeSchema } from "../validations/recipeSchema";
import { addRecipe } from "../service/recipeService";
import { getDetailRecipeThunk } from "../store/thunk/recipeThunk";

const useRecipe = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const dispatch = useDispatch();
  const { detailRecipe, loading } = useSelector((state) => state.recipe);

  const formik = useFormik({
    initialValues: {
      title: "",
      ingredients: "",
      recipeCover: null,
      recipeVideos: [null],
    },
    validationSchema: addRecipeSchema,
    onSubmit: async (values) => {
      try {
        const formData = new FormData();
        const user = JSON.parse(localStorage.getItem("userId"));

        formData.append("title_recipe", values.title);
        formData.append("ingredients", values.ingredients);

        if (values.recipeCover) {
          formData.append("photo", values.recipeCover);
        }

        values.recipeVideos.forEach((video) => {
          if (video) {
            formData.append("videos", video);
          }
        });

        // unutk update data
        // if (values.photo instanceof File) {
        //   formData.append("photo", values.photo);
        // }

        // values.videos.forEach((video) => {
        //   if (video instanceof File) {
        //     formData.append("videos", video);
        //   }
        // });

        formData.append("user_id", user.id);

        await addRecipe(formData);

        navigate("/home");
      } catch (error) {
        console.log(error);
      }
    },
  });

  useEffect(() => {
    dispatch(getDetailRecipeThunk(id));
  }, [dispatch, id]);

  return {
    formik,
    detailRecipe,
  };
};

export default useRecipe;
