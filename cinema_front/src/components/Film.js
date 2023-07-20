import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Film.css";

const Film = () => {
  const [programmations, setProgrammations] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // A modifier en fonction de la gestion de l'authentification

  useEffect(() => {
    fetch("http://127.0.0.1:8000/film")
      .then((response) => response.json())
      .then((data) => setProgrammations(data))
      .catch((error) =>
        console.error(
          "Erreur lors de la récupération des programmations:",
          error
        )
      );
  }, []);

  return (
    <div className="container">
      <h1>Programmations du jour</h1>

      {programmations.length === 0 && (
        <p className="no-programmation">
          Aucune programmation pour aujourd'hui.
        </p>
      )}

      {programmations.map((programmation) => (
        <Link to={`/film/${programmation.id}`} key={programmation.id}>
          <div className="programmation-card">
            <img src={programmation.image} alt={programmation.name} />
            <h2>{programmation.name}</h2>
            <p>
              <strong>Synopsis:</strong> {programmation.synopsis}
            </p>
            {/* <p>
            <strong>Durée:</strong> {programmation.duree} minutes
          </p> */}
            {/* <p>
            <strong>Heure de programmation:</strong> {programmation.heure}
          </p> */}
            <p>
              <strong>Prix:</strong> {programmation.price} €
            </p>
            <p>
              <strong>Âge minimum:</strong>{" "}
              {programmation.limit_age == 0
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
};

export default Film;
