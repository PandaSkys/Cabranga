import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../redux/features/authSlice";
import { useNavigate } from "react-router";

export const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, status } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user && status === "idle") {
      dispatch(fetchUser());
    } else if (status === "succeeded" && !user) {
      navigate("/login");
    }
  }, [user, status, dispatch, navigate]);

  return user;
};
