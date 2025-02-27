import { supabase } from "../supabaseClient";

export const fetchUsersAPI = async () => {
  const { data, error } = await supabase.from("users").select("*");
  console.log("Données récupérées:", data); // Vérification
  if (error) throw new Error(error.message);
  return data;
};
