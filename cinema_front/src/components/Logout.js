import { useEffect } from "react";
import Button from "react-bootstrap/esm/Button";
import { Link, useNavigate } from "react-router-dom";

export default function Logout() {
  useEffect(() => {
    localStorage.removeItem("access_token");
    alert("Déconnexion réussie!");
    navigate("/");
  }, []);

  const navigate = useNavigate();
  return (
    <div>
      <h1>Vous êtes bien déconnecté</h1>
      <Link to={`/`}>
        <Button variant="secondary">Retour à l'accueil</Button>
      </Link>
    </div>
  );
}
