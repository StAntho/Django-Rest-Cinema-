import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";

export default function DeleteSpecial() {
  const { id } = useParams();
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/special/delete/${id}`)
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
    <Card>
      <Card.Body>La programmation spéciale a bien été supprimé</Card.Body>
    </Card>
  );
}
