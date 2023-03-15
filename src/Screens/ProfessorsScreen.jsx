import React from "react";
import ProfessorItem from "../Components/ProfessorItem";
import NewProfessor from "../Components/NewProfessor";
import "./ProfessorsScreen.css";

export default function ProfessorsScreen({ addProfessor, professors }) {
  function orderedProfessors() {
    return professors.sort((a, b) => {
      const nameA = a.nom.toUpperCase();
      const nameB = b.nom.toUpperCase();

      if (nameA < nameB) {
        return -1;
      }

      if (nameA > nameB) {
        return 1;
      }

      return 0;
    });
  }

  return (
    <div className="body">
      <NewProfessor addProfessor={addProfessor} />

      <h2>Liste des professeurs</h2>

      {orderedProfessors().map((professor) => (
        <div className="item" key={professor.nom}>
          <ProfessorItem
            nom={professor.nom}
            prenom={professor.prenom}
            dateEmbauche={professor.dateEmbauche}
            listeCours={professor.cours}
            photo={professor.photo}
          />
        </div>
      ))}
    </div>
  );
}
