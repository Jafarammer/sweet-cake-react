import api from "./api";

export const loginUser = async (payload) => {
  const res = await api.post("/auth/login", payload);

  return res.data;
};

export const registerUser = async (payload) => {
  const res = await api.post("/auth/register", payload);

  return res.data;
};

export const updatePersonalInformation = async (payload) => {
  const res = await api.patch("/auth/profile", payload);

  return res.data;
};

export const getProfile = async () => {
  const res = await api.get("/auth/profile");

  return res.data;
};
