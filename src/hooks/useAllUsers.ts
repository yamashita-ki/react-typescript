import { useState } from "react";
import axios from "axios";
import { UserType } from "../type/api/UserType";
import { UserProfileType } from "../type/UserProfileType";

export const useAllUsers = () => {
  const [userProfiles, setUserProfiles] = useState<Array<UserProfileType>>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchUsers = () => {
    setLoading(true);
    setError(false);
    axios
      .get<Array<UserType>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const data = res.data.map((user) => ({
          id: user.id,
          name: `${user.name}(${user.username})`,
          email: user.email,
          address: `${user.address.city}${user.address.suite}${user.address.street}`,
        }));
        setUserProfiles(data);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
    };
    return { fetchUsers, userProfiles, loading, error };
};
