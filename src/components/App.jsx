import { useState, useEffect } from "react";
import CharacterList from "./CharacterList";
import "../styles/App.scss";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters")
      .then((response) => response.json())
      .then((data) => {
        const cleanCharacters = data.map((character) => {
          return {
            id: character.name,
            name: character.name,
            image: character.image,
            species: character.species,
            house: character.house,
            gender: character.gender,
            alive: character.alive,
            alternateNames: character.alternate_names,
          };
        });
        setCharacters(cleanCharacters);
      })
      .catch((error) => {
        console.error("Error fetching characters:", error);
      });
  }, []);

  return (
    <div className="app_container">
      <header className="header">
        <h1 className="title">Wizarding World Directory</h1>
      </header>

      <main className="main_contect">
        <h2>Lista de Personajes</h2>
        <CharacterList characters={characters} />
      </main>

      <footer className="footer">
        <p>&copy; 2025 React Project by Roxana Solano</p>
      </footer>
    </div>
  );
}

export default App;
