import api from "./api";

export const addRecipe = async (payload, progress) => {
  const res = await api.post("/recipe/create", payload, {
    onUploadProgress: (event) => {
      if (event.total) {
        const percent = Math.round((event.loaded * 100) / event.total);
        progress(percent);
      }
    },
  });

  return res.data;
};

export const updateRecipe = async (id, payload) => {
  const res = await api.patch(`/recipe/update/${id}`, payload);

  return res.data;
};

export const getAllRecipe = async () => {
  const res = await api.get("/recipe/all");
  return res.data;
};

export const getDetailRecipe = async (id) => {
  const res = await api.get(`/recipe/detail/${id}`);
  return res.data;
};

export const getMyRecipe = async (params) => {
  const res = await api.get(`/recipe/my-recipe`, { params: params });
  return res.data;
};

export const deleteRecipe = async (id) => {
  const res = await api.delete(`/recipe/delete/${id}`);

  return res.data;
};
