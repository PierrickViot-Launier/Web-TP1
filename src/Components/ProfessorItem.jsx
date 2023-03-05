import React from "react";

export default function ProfessorItem({ nom, listeCours }) {
  return (
    <div>
      <h2>{nom}</h2>

      <ul>
        {listeCours.map((cours) => (
          <li key={cours}>{cours}</li>
        ))}
      </ul>
    </div>
  );
}
