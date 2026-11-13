import api from "./api";

export const loginUser = async (payload) => {
  const res = await api.post("/login", payload);

  return res.data;
};

export const registerUser = async (payload) => {
  const res = await api.post("/register", payload);

  return res.data;
};
