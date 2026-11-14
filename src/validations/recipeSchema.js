import * as Yup from "yup";

export const addRecipeSchema = Yup.object().shape({
  title: Yup.string().required("Title is required field!"),

  ingredients: Yup.string().required("Ingredients is required field!"),

  recipeCover: Yup.mixed()
    .nullable()
    .required("Cover is required")
    .test("fileSize", "Maximum file size is 5MB", (file) => {
      if (!file) return true;

      return file.size <= 5 * 1024 * 1024;
    })
    .test("fileType", "Only JPG, PNG and WEBP are allowed", (file) => {
      if (!file) return true;

      return ["image/jpeg", "image/png", "image/webp"].includes(file.type);
    }),
});
