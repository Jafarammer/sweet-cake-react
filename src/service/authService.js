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

export const updatePhotoProfile = async (formData, progress) => {
  const res = await api.patch("/auth/profile/photo-profile", formData, {
    onUploadProgress: (event) => {
      if (event.total) {
        const percent = Math.round((event.loaded * 100) / event.total);
        progress(percent);
      }
    },
  });

  return res.data;
};

export const updateSecurity = async (payload) => {
  const res = await api.patch("/auth/profile/change-password", payload);

  return res.data;
};

export const logout = async () => {
  const res = await api.post("/auth/logout");

  return res.data;
};
