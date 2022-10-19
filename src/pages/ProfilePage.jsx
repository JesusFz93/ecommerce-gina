import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Title from "../components/Title";

const ProfilePage = () => {
  const { auth } = useContext(AuthContext);

  return (
    <>
      <Title titulo="Perfil de usuario" />
      <main className="row">
        <div className="card text-center">
          <div className="card-header">
            {auth.id}
          </div>
          <div className="card-body">
            <img src="https://static.thenounproject.com/png/363633-200.png" alt="user-photo" />
            <h5 className="card-title">{auth.username}</h5>
            <p className="card-text">{auth.email}</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProfilePage;
