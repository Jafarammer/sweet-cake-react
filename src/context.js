import React from 'react';

export const ProfileContext = React.createContext({
  id: null,
  name: 'jafar',
  email: 'example@mail.com',
  phone_number: '123456',
  password: null,
  photo: null,
});
