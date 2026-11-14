import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { addRecipeSchema } from "../validations/recipeSchema";
import { addRecipe } from "../service/recipeService";

const useRecipe = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      title: "",
      ingredients: "",
      recipeCover: null,
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

        formData.append("user_id", user.id);

        await addRecipe(formData);

        navigate("/home");
      } catch (error) {
        console.log(error);
      }
    },
  });

  return {
    formik,
  };
};

export default useRecipe;
