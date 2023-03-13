import React from "react";
import ProfessorItem from "../Components/ProfessorItem";
import NewProfessor from "../Components/NewProfessor";

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
    <React.Fragment>
      <NewProfessor addProfessor={addProfessor} />

      <h2>Liste des profs</h2>

      {orderedProfessors().map((professor) => (
        <React.Fragment key={professor.nom}>
          <ProfessorItem
            nom={professor.nom}
            prenom={professor.prenom}
            dateEmbauche={professor.dateEmbauche}
            listeCours={professor.cours}
            photo={professor.photo}
          />
        </React.Fragment>
      ))}
    </React.Fragment>
  );
}
