import api from "./api";

export const addRecipe = async (payload) => {
  const res = await api.post("/recipe/add", payload, {
    headers: {
      "Content-type": "multipart/form-data",
    },
  });

  return res.data;
};
