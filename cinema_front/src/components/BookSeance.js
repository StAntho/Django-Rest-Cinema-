import { useEffect } from "react";
import axios from "axios";

export default function BookSeance() {
  const { id } = useParams();
  const [backendData, setBackendData] = useState([]);

  useEffect(() => {
    const list = async () => {
      const response = await axios.patch(
        `http://127.0.0.1:8000/reservation/seance/${id}`
      );
      setBackendData(response.data);
    };
    list();
  }, [id]);

  return (
    <div>
      <p></p>
    </div>
  );
}
