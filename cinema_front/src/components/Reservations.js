import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

const Reservations = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <h1>Mes réservations</h1>
          {/* Afficher les réservations ici */}
        </div>
      ) : (
        <p>Vous devez être connecté pour voir vos réservations.</p>
      )}
    </div>
  );
};

export default Reservations;
