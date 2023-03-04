import React from "react";

export default function ProfessorItem({ nom, listeCours }) {
  return (
    <div>
      <h1>{nom}</h1>

      <ul>
        {listeCours.map((cours) => (
          <li>{cours}</li>
        ))}
      </ul>
    </div>
  );
}
