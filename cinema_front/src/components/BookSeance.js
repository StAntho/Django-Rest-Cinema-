import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function BookSeance() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [backendData, setBackendData] = useState([]);

  useEffect(() => {
    const list = async () => {
      const response = await axios.patch(
        `http://127.0.0.1:8000/reservation/seance/${id}/`
      );
      setBackendData(response.data);
      alert("Réservation réussie!");
      navigate("/");
    };
    list();
  }, [id]);

  return (
    <div>
      <p></p>
    </div>
  );
}
