import { useState, useEffect } from "react";
import CharacterList from "./CharacterList";
import FilterByName from "./FilterByName";
import FilterByHouse from "./FilterByHouse";
/* import characterDeatail from "./CharacterDetail"; */
import "../styles/App.scss";

function App() {
  const [characters, setCharacters] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [house, setHouse] = useState("");
  /* const placehold = "https://placehold.co/210x295/1a1a1d/ccc?text=No+Image"; */

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters")
      .then((response) => response.json())
      .then((data) => {
        const cleanCharacters = data.map((character) => {
          return {
            id: character.id,
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

  const filteredCharacters = characters
    .filter((character) => !house || character.house === house)
    .filter((character) =>
      character.name.toLowerCase().includes(searchName.toLowerCase())
    );

  return (
    <div className="app_container">
      <header className="header">
        <h1 className="title">Wizarding World Directory</h1>
      </header>

      <main className="main_content">
        <h2 className="lisper">Lista de Personajes</h2>
        <FilterByHouse
          house={house}
          onChange={(ev) => setHouse(ev.target.value)}
        />
        <FilterByName
          searchName={searchName}
          onChange={(ev) => setSearchName(ev.target.value)}
        />

        <CharacterList characters={filteredCharacters} />
      </main>

      <footer className="footer">
        <p>&copy; 2025 React Project by Roxana Solano</p>
      </footer>
    </div>
  );
}

export default App;
