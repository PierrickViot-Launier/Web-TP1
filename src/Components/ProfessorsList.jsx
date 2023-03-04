import React, { useState } from "react";
import NewProfessor from "./NewProfessor";
import ProfessorItem from "./ProfessorItem";

export default function ProfessorsList() {
  const [professors, setProfessors] = useState([
    {
      nom: "Sylvain Labranche",
      cours: ["Web", "React", "HTML"],
    },
    {
      nom: "Sylvain Labranche",
      cours: ["Mobile", "React native", "JavaScript"],
    },
  ]);

  function addProfessor(newProfessor) {
    setProfessors((prevProfessors) => {
      return prevProfessors.concat(newProfessor);
    });
  }

  return (
    <React.Fragment>
      <NewProfessor addProfessor={addProfessor} />

      <div>
        <h1>Liste des profs</h1>
      </div>

      {professors.map((professor) => (
        <ProfessorItem nom={professor.nom} listeCours={professor.cours} />
      ))}
    </React.Fragment>
  );
}
