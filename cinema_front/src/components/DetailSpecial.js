import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function DetailSpecial() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { id } = useParams();
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/special/${id}`)
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
  return (
    <div className="container">
      <h1>Programmations spéciales</h1>
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
      <div className="programmation-card">
        <h2>Horaires</h2>
        <p>
          <strong>Heure de programmation:</strong> {backendData.heure}
        </p>
        <p>
          <strong>Date de programmation:</strong> {backendData.date}
        </p>
        <p>
          <strong>Durée:</strong> {backendData.duree} minutes
        </p>
        <p>
          <strong>Type:</strong> {backendData.type}
        </p>
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
          Etes vous sûr de bien vouloir Supprimer cette programmation!?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Annuler
          </Button>
          <Link to={`/special/delete/${backendData.id}`}>
            <Button variant="danger">Supprimer</Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
