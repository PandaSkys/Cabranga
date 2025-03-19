import { useState } from "react";
import { supabase } from "../supabaseClient";
import { useAuth } from "../hooks/useAuth";

const Settings = () => {
  const user = useAuth();
  const [image, setImage] = useState(null);

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
      <h1>settings</h1>
    </div>
  );
};

export default Settings;
