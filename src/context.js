import React from "react";

export const ProfileContext = React.createContext({
  id: 1,
  name: "jafar",
  email: "example@mail.com",
  phone_number: "123456",
  password: null,
  photo: null,
});
