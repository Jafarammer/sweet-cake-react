import { Cookies } from "react-cookie";

const cookies = new Cookies();
const ACCESS_TOKEN_COOKIE_NAME = "token";

export const getAccessToken = () => {
  return cookies.get(ACCESS_TOKEN_COOKIE_NAME);
};

export const setAccessToken = (accessToken) => {
  cookies.set(ACCESS_TOKEN_COOKIE_NAME, accessToken, {
    path: "/",
    sameSite: "lax",
    maxAge: 15 * 60,
  });
};

export const removeAccessToken = () => {
  cookies.remove(ACCESS_TOKEN_COOKIE_NAME, {
    path: "/",
  });
};
