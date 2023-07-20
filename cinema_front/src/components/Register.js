import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation de base (à améliorer selon les besoins)
    if (formData.password !== formData.confirmPassword) {
      alert('Les mots de passe ne correspondent pas!');
      return;
    }

    // Appeler l'API pour l'inscription
    fetch('http://your-api-endpoint/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert('Inscription réussie! Veuillez vous connecter.');
      } else {
        alert(data.message);
      }
    })
    .catch(error => console.error('Erreur lors de l\'inscription:', error));
  };

  return (
    <div className="register-root">
      <div className="register-container">
        <h1>Inscription</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Nom d'utilisateur"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Mot de passe"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirmer le mot de passe"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
          />
          <button type="submit">S'inscrire</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
