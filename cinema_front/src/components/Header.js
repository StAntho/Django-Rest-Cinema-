import { Link } from "react-router-dom";
import logo from "./logo.png";

export default function Header() {
  return (
    <div>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/film">Films à la programmation</Link>
          </li>
          <li>
            <Link to="/special">Programmation spéciale</Link>
          </li>
          <li>
            <Link to="/login">Connexion</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
