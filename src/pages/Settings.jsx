import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient"; // Assurez-vous d'importer correctement votre client Supabase
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router"; // Utilisation de useNavigate pour React Native

const Settings = () => {
    const [user, setUser] = useState(null);
    const [userData, setUserData] = useState(null);
    const [image, setImage] = useState(null);
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
                const { data, error } = await supabase.auth.getSession();
                if (error) {
                    console.log(error);
                    return;
                } else {
                    setUserData(data.session.user.user_metadata);
                }
            }
        };

        fetchUser();
    }, [navigate]);
    if (!user) return null; // Affiche rien pendant le chargement ou si non connecté

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImage(file);
        }
    };

    const uploadImage = async () => {
        if (!image) return;

        const fileName = `profiles/${Date.now()}_${image.name}`;

        const { data, error } = await supabase.storage
            .from("avatars")
            .upload(fileName, image);

        if (error) {
            console.log(error);
            return;
        }
    };

    return (
        <div>
            <Sidebar username={userData && userData.name} />
            <input type="file" name="Avatar" onChange={handleFileChange} />
            <button onClick={uploadImage}>Submit</button>
        </div>
    );
};

export default Settings;
