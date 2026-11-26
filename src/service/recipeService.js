import api from "./api";

export const addRecipe = async (payload) => {
  const res = await api.post("/recipe/create", payload);

  return res.data;
};

export const getAllRecipe = async () => {
  const res = await api.get("/recipe/all");
  return res.data;
};

export const getDetailRecipe = async (id) => {
  const res = await api.get(`/recipe/id/${id}`);
  return res.data;
};

export const getMyRecipe = async (params) => {
  const res = await api.get(`/recipe/my-recipe`, { params: params });
  return res.data;
};
