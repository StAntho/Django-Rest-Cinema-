import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Special() {
  const [programmations, setProgrammations] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // A modifier en fonction de la gestion de l'authentification

  useEffect(() => {
    fetch("http://127.0.0.1:8000/special")
      .then((response) => response.json())
      .then((data) => setProgrammations(data))
      .catch((error) =>
        console.error(
          "Erreur lors de la récupération des programmations:",
          error
        )
      );
  }, []);
  console.log(programmations);
  return (
    <div className="container">
      <h1>Programmations spéciales</h1>

      {programmations.length === 0 && (
        <p className="no-programmation">Aucune programmation à venir prévue</p>
      )}

      {programmations.map((programmation) => (
        <Link to={`/special/${programmation.id}`} key={programmation.id}>
          <div className="programmation-card">
            <img src={programmation.image} alt={programmation.name} />
            <h2>{programmation.name}</h2>
            <p>
              <strong>Synopsis:</strong> {programmation.synopsis}
            </p>
            <p>
              <strong>Prix unique:</strong> {programmation.price} €
            </p>
            <p>
              <strong>Surcoût 3D:</strong>{" "}
              {programmation.additionnal_price ? "3.20€" : "Sans surcoût"}
            </p>
            <p>
              <strong>Salle:</strong> {programmation.salle}
            </p>
            <p>
              <strong>Places restantes:</strong> {programmation.limit_place}
            </p>
            <p>
              <strong>Âge minimum:</strong>{" "}
              {programmation.limit_age === 0
                ? "Pas de limite d'age"
                : programmation.limit_age}{" "}
              ans
            </p>
            <p>
              <strong>Type:</strong> {programmation.type}
            </p>
            {isLoggedIn && <button>Réserver</button>}
          </div>
        </Link>
      ))}
    </div>
  );
}
