import "../styles/Home.css";

export default function Home() {
  console.log(localStorage.getItem("access_token"));
  return (
    <div>
      <h1>Home</h1>
      <div>
        <h2>Présentation du cinéma</h2>
      </div>
      <div>
        <h2>Deniers films à l'affiches</h2>
      </div>
      <div>
        <h2>Prochains films spécial</h2>
      </div>
    </div>
  );
}
