import SecureStorage from "react-secure-storage";

export const setToken = (key: string, token: string) => {
  SecureStorage.setItem(key, token);
};

export const getToken = (key: string) => {
  return SecureStorage.getItem(key);
};

export const removeToken = (key: string) => {
  SecureStorage.removeItem(key);
};
