import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation de base (à améliorer selon les besoins)
    // if (formData.password !== formData.confirmPassword) {
    //   alert("Les mots de passe ne correspondent pas!");
    //   return;
    // }
    console.log(formData);
    axios
      .post("http://127.0.0.1:8000/inscription/", formData)
      .then((response) => {
        console.log(response);
        alert("Inscription réussie!");
      })
      .catch((error) => console.error("Erreur lors de l'inscription:", error));
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
