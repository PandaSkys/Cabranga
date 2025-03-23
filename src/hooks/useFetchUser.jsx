import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser, setLoading } from "../redux/features/userSlice";
import { supabase } from "../supabaseClient";

export const useFetchUser = () => {
  // Utilisation de `export const` au lieu de `export default`
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      dispatch(setLoading(true)); // Début du chargement

      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (error) {
        console.error(
          "Erreur lors de la récupération de l'utilisateur :",
          error
        );
        dispatch(setUser(null));
      } else {
        dispatch(setUser(user));
      }

      dispatch(setLoading(false)); // Fin du chargement
    };

    fetchUser();
  }, [dispatch]);
};
