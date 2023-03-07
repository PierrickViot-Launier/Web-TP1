import React from "react";

export default function ProfessorItem({
  nom,
  prenom,
  dateEmbauche,
  listeCours,
  photo,
}) {
  return (
    <div>
      <h3>
        {nom}, {prenom}
      </h3>

      <p>Date d'embauche: {dateEmbauche}</p>

      <ul>
        {listeCours.map((cours) => (
          <li key={cours}>{cours}</li>
        ))}
      </ul>
    </div>
  );
}
