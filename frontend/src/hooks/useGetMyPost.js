import axios from "axios";
import { API_URL } from "../util/API_URL";
import { getCookie, deleteCookie } from "../util/cookie";
import { setUser, setUserInfo } from "../slice/userSlice";
import { useEffect, useState } from "react";
export default function useGetMyPost(dispatch, navigate) {
  const [post, setPost] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(API_URL + "/myPost", {
          headers: {
            Authorization: `${getCookie("jwtToken")}`,
          },
        });
        if (res.data.code === 1) {
          setPost(res.data.data);
        } else if (res.data.code === 2) {
          const nextRes = await axios.get(API_URL + "/myPost", {
            headers: { Authorization: `${getCookie("refreshToken")}` },
          });
          if (nextRes.data.code === 2 || nextRes.data.code === -1) {
            deleteCookie(["jwtToken"]);
            deleteCookie(["refreshToken"]);
            dispatch(setUserInfo([]));
            dispatch(setUser([]));
            alert("잘못된 접근입니다. 다시 로그인 해주세요.");
            navigate("/");
          } else if (nextRes.data.code !== -1) {
            console.log("refresh token 으로 로그인");
          }
        }
      } catch (err) {
        throw new Error(err);
      }
    }
    fetchData();
  }, []);
  return { post, setPost };
}
