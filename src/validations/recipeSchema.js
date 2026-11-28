import * as Yup from "yup";

export const addRecipeSchema = Yup.object().shape({
  title: Yup.string().required("Title is required field!"),

  ingredients: Yup.string().required("Ingredients is required field!"),

  recipeCover: Yup.mixed()
    .nullable()
    .required("Cover is required!")
    .test("fileSize", "Maximum file size is 5MB", (file) => {
      if (!file || typeof file === "string") return true;

      return file.size <= 5 * 1024 * 1024;
    })
    .test("fileType", "Only JPG, PNG and WEBP are allowed", (file) => {
      if (!file || typeof file === "string") return true;

      return ["image/jpeg", "image/png", "image/webp"].includes(file.type);
    }),

  recipeVideos: Yup.array()
    .min(1, "Minimum 1 video is required!")
    .max(3, "Maximum 3 videos!")
    .of(
      Yup.mixed()
        .nullable()
        .required("Video is required!")
        .test("fileSize", "Maximum video size is 50MB", (file) => {
          if (!file) return true;

          // Video lama
          if (file.video_url) return true;

          // Video baru
          if (file instanceof File) {
            return file.size <= 50 * 1024 * 1024;
          }

          return false;
        })
        .test("fileType", "Only video files are allowed", (file) => {
          if (!file) return true;

          // Video lama
          if (file.video_url) return true;

          // Video baru
          if (file instanceof File) {
            return file.type.startsWith("video/");
          }

          return false;
        }),
    ),
});
