import React from "react";

function Hit({ hit }) {
  return (
    <div class="hit">
      <h2>{hit.name}</h2>
      <p>Birth Year: {hit.birth_year}</p>
      <p>Gender: {hit.gender}</p>
      <p>Eye Color: {hit.eye_color}</p>
      <p>Hair Color: {hit.hair_color}</p>
    </div>
  );
}

export default Hit;
