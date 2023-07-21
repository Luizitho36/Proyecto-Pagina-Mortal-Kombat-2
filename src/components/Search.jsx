import "./Search.css";
import { useState } from "react";

function Search() {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input className="inputSearch"
        placeholder="Escribe aquí..."
        onChange={(e) => console.log(e.target.value)}
      />
      <button className="buttonSearch">Buscar</button>
    </form>
  );
}

export default Search;
