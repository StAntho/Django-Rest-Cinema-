import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../styles/DetailFilm.css";
import Card from "react-bootstrap/Card";

export default function DetailFilm() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { id } = useParams();
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/film/${id}`)
      .then((response) => response.json())
      .then((data) => setBackendData(data))
      .catch((error) =>
        console.error(
          "Erreur lors de la récupération des programmations:",
          error
        )
      );
  }, []);
  console.log(backendData);
  console.log(backendData.seance);
  const seance = backendData.seance;
  return (
    <div className="container">
      <div className="programmation-card">
        <img src={backendData.image} alt={backendData.name} />
        <h2>{backendData.name}</h2>
        <p>
          <strong>Synopsis:</strong> {backendData.synopsis}
        </p>
        <p>
          <strong>Prix unique:</strong> {backendData.price} €
        </p>
        <p>
          <strong>Surcoût 3D:</strong>{" "}
          {backendData.additionnal_price ? "3.20€" : "Sans surcoût"}
        </p>
        <p>
          <strong>Salle:</strong> {backendData.salle}
        </p>
        <p>
          <strong>Places restantes:</strong> {backendData.limit_place}
        </p>
        <p>
          <strong>Âge minimum:</strong>{" "}
          {backendData.limit_age == 0
            ? "Pas de limite d'age"
            : backendData.limit_age}{" "}
          ans
        </p>
      </div>

      <div
        className="programmation-card"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {seance ? (
          <>
            {seance.map((s, i) => (
              <Card style={{ width: "18rem" }} key={i}>
                <Card.Body>
                  <Card.Title>Le {s.time}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {s.salle}
                  </Card.Subtitle>
                  <Card.Text>Places restantes: {s.limit_place}</Card.Text>
                  <Card.Link href="#">Réserver ma place</Card.Link>
                </Card.Body>
              </Card>
            ))}
          </>
        ) : (
          <p>Pas de séance pour ce film</p>
        )}
      </div>
      <Button variant="danger" onClick={handleShow}>
        Supprimer
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Suppression de <em>{backendData.name}</em>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Etes vous sûr de bien vouloir Supprimer cette programmation !?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Annuler
          </Button>
          <Link to={`/film/delete/${backendData.id}`}>
            <Button variant="danger">Supprimer</Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
