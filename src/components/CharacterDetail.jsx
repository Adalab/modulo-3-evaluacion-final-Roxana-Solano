import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

function CharacterDetail() {
  const { id } = useParams();
  // Recupera personajes del localStorage

  const [caracterDetail, setCaracterDetail] = useState([]);
  useEffect(() => {
    fetch(`https://hp-api.onrender.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setCaracterDetail({
          id: data[0].id,
          name: data[0].name,
          image: data[0].image,
          species: data[0].species,
          house: data[0].house,
          gender: data[0].gender,
          alive: data[0].alive,
          alternateNames: data[0].alternate_names,
        });
      })
      .catch((error) => {
        console.error("Error fetching characters:", error);
      });
  }, [id]);

  if (caracterDetail.length === 0) {
    return (
      <div>
        <p className="mensaje">El personaje que buscas no existe</p>
        <Link to="/" className="detail-btn">
          ⬅️ Volver al listado
        </Link>
      </div>
    );
  }

  return (
    <div className="character-detail">
      <img
        src={
          caracterDetail.image ||
          "https://placehold.co/210x295/1a1a1d/ccc?text=No+Image"
        }
        alt={caracterDetail.name}
      />
      <h2>{caracterDetail.name}</h2>
      <p>Casa: {caracterDetail.house || "Desconocida"}</p>
      <p>Estado: {caracterDetail.alive ? "Vivo 🟢" : "Muerto ⚰️"}</p>
      <p>Género: {caracterDetail.gender}</p>
      <p>Especie: {caracterDetail.species}</p>
      {caracterDetail.alternateNames &&
        caracterDetail.alternateNames.length > 0 && (
          <div>
            <strong>Otros nombres:</strong>
            <ul>
              {caracterDetail.alternateNames.map((name, idx) => (
                <li key={idx}>{name}</li>
              ))}
            </ul>
          </div>
        )}
      <Link to="/" className="detail-btn">
        ⬅️ Volver al listado
      </Link>
    </div>
  );
}

export default CharacterDetail;
