import { useEffect, useState } from "react";
import "../styles/Home.css";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [backendData, setBackendData] = useState([{}]);
  useEffect(() => {
    const list = async () => {
      const response = await axios.get(`http://127.0.0.1:8000/home/`);
      setBackendData(response.data);
    };
    list();
  }, []);
  console.log(backendData);
  console.log(localStorage.getItem("access_token"));
  const film = backendData.films;
  const special = backendData.specials;
  console.log(backendData.films);
  console.log(film);
  console.log(special);
  return (
    <div className="home-root">
      <h1>Bienvenue sur Mon Siège à Rêve.</h1>
      <div>
        <h2>Présentation du cinéma</h2>
      </div>
      <div>
        <h2>Derniers films à l'affiche</h2>
        {film && film.length > 0 ? (
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            {film.map((f, i) => (
              <Link to={`/film/${f.id}`} key={f.id}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={f.image} alt={f.name} />
                  <Card.Title>{f.name}</Card.Title>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
      <div>
        <h2>Prochains sélection spécial</h2>
        {special && special.length > 0 ? (
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            {special.map((f, i) => (
              <Link to={`/special/${f.id}`} key={f.id}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={f.image} alt={f.name} />
                  <Card.Title>{f.name}</Card.Title>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
