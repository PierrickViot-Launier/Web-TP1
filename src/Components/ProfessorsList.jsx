import React, { useState } from "react";
import NewProfessor from "./NewProfessor";
import ProfessorItem from "./ProfessorItem";

export default function ProfessorsList() {
  const [professors, setProfessors] = useState([
    {
      nom: "Labranche",
      prenom: "Sylvain",
      dateEmbauche: "2023-01-01",
      cours: ["Web", "React", "HTML"],
      photo: "",
    },
    {
      nom: "Walker",
      prenom: "Pierce",
      dateEmbauche: "2023-01-01",
      cours: ["Mobile", "React native", "JavaScript"],
      photo: "",
    },
  ]);

  function addProfessor(newProfessor) {
    setProfessors((prevProfessors) => {
      return prevProfessors.concat(newProfessor);
    });
  }

  // function addCourse(professeur, cours) {
  //   const index = professors.indexOf(professeur);

  //   const tempProf = professeur;

  //   tempProf.cours = [...professeur.cours, cours];

  //   const filteredProfessors = professors.filter(
  //     (professor, profIndex) => profIndex !== index
  //   );

  //   const updatedProfessors = [...filteredProfessors, tempProf];

  //   setProfessors(updatedProfessors);
  // }

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
