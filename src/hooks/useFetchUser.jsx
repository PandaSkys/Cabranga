import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/features/userSlice";
import { supabase } from "../supabaseClient";

const useFetchUser = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        dispatch(setUser(user));
      }
    };

    fetchUser();
  }, [dispatch]);
};

export default useFetchUser;
