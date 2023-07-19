import React, { useEffect, useState } from 'react';

const Home = () => {
  const [programmations, setProgrammations] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);  // A modifier en fonction de la gestion de l'authentification

  useEffect(() => {
    // Imaginons que vous ayez une API qui renvoie les programmations du jour.
    fetch('http://your-api-endpoint/programmations-du-jour')
      .then(response => response.json())
      .then(data => setProgrammations(data))
      .catch(error => console.error('Erreur lors de la récupération des programmations:', error));
  }, []);

  return (
    <div className="container">
      <h1>Programmations du jour</h1>

      {programmations.length === 0 && <p className="no-programmation">Aucune programmation pour aujourd'hui.</p>}

      {programmations.map(programmation => (
        <div key={programmation.id} className="programmation-card">
          <img src={programmation.imageUrl} alt={programmation.nom} />
          <h2>{programmation.nom}</h2>
          <p><strong>Synopsis:</strong> {programmation.synopsis}</p>
          <p><strong>Durée:</strong> {programmation.duree} minutes</p>
          <p><strong>Heure de programmation:</strong> {programmation.heure}</p>
          <p><strong>Prix:</strong> {programmation.prix} €</p>
          <p><strong>Âge minimum:</strong> {programmation.ageMinimum} ans</p>
          <p><strong>Type:</strong> {programmation.type}</p>
          {isLoggedIn && <button>Réserver</button>}
        </div>
      ))}
    </div>
  );
};

export default Home;
