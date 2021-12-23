import { Notify } from "notiflix";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchToken } from "../../redux/auth/auth-selectors";

export const useAuth = () => {
  const token = useSelector(fetchToken);
  try {
      useEffect(() => {
    if (token) {
      return true;
    } else {
      return false;
    }
  }, [token]);
  return Boolean(token);
  } catch (error) {
    return Notify.failure("please log in");
  }

};

export default useAuth;
