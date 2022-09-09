import axios from "axios";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserType } from "../type/api/UserType";

export const useAuth = () => {
  const navigate = useNavigate();
  const [loading, setLoding] = useState(false);
  const login = useCallback((id: string) => {
    setLoding(true);
    axios
      .get<UserType>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        if (res.data) {
          navigate("/home");
        } else {
          alert("ユーザーが見つかりません");
        }
      })
      .catch(() => alert("ログインできません"))
      .finally(() => setLoding(false));
  }, []);
  return { login,loading };
};
