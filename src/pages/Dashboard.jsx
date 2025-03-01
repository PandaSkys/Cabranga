import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient"; // Assurez-vous d'importer correctement votre client Supabase
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router"; // Utilisation de useNavigate pour React Native

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser(); // Utilisation de getUser()

      if (!user) {
        // Redirige l'utilisateur s'il n'est pas connecté
        navigate("/login");
      } else {
        setUser(user);
      }
    };

    fetchUser();
  }, [navigate]);

  if (!user) return null; // Affiche rien pendant le chargement ou si non connecté

  return (
    <div>
      <Sidebar />
    </div>
  );
};

export default Dashboard;
