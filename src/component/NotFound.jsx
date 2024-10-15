// Profil.js
import React, { useState, useEffect } from "react";
//import avatar from "https://avatars.githubusercontent.com/u/19842736?v=4";
import avatar from "../assets/img/notfound.png";
const Profil = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    // Fetch profile data from GitHub API
    const fetchProfileData = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/github-john-doe"
        );
        if (response.ok) {
          const data = await response.json();
          setProfileData(data);
        } else {
          console.error("Error fetching profile data:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfileData();
  }, []);

  if (!profileData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="notfound">
      <div className="notfound_conteneur">
        <h1>Github user</h1>

        <h2>{profileData.name}</h2>
        <img src={avatar} alt=""></img>

        <p>{profileData.bio}</p>
        <p>Abonnés: {profileData.followers}</p>
        <p>Abonnements: {profileData.following}</p>
        <p>Crée le : {profileData.created_at}</p>
        <p>Mofifié le : {profileData.updated_at}</p>
        <p>URL repositories : {profileData.repos_url}</p>

        <button className="btn btn-primary">retouner à l'Accueil</button>
      </div>
    </div>
  );
};

export default Profil;
