import { Cookies } from "react-cookie";
const cookies = new Cookies();

export const setCookie = (name, value) => {
  document.cookie = name +"=" + value+ "; http://3.39.164.180:8080"
  return cookies.set(name, value,{domain:"http://3.39.164.180:8080"});
};

export const getCookie = (name) => {
  return cookies.get(name);
};

export const deleteCookie = (name) => {
  return cookies.remove(name);
};
