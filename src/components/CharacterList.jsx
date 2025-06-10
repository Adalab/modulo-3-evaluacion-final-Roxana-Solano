import CharacterCard from "./CharacterCard";

function CharacterList({ characters }) {
  return (
    <>
      <ul className="character-list">
        {characters.map((char) => (
          <CharacterCard key={char.id} character={char} />
        ))}
      </ul>
    </>
  );
}

export default CharacterList;
