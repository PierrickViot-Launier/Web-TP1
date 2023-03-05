import React, { useState } from "react";
import NewCourse from "./NewCourse";
import NewProfessor from "./NewProfessor";
import ProfessorItem from "./ProfessorItem";

export default function ProfessorsList() {
  const [professors, setProfessors] = useState([
    {
      nom: "Sylvain Labranche",
      cours: ["Web", "React", "HTML"],
    },
    {
      nom: "Pierce Walker",
      cours: ["Mobile", "React native", "JavaScript"],
    },
  ]);

  function addProfessor(newProfessor) {
    setProfessors((prevProfessors) => {
      return prevProfessors.concat(newProfessor);
    });
  }

  function addCourse(professeur, cours) {
    const index = professors.indexOf(professeur);

    const tempProf = professeur;

    tempProf.cours = [...professeur.cours, cours];

    const filteredProfessors = professors.filter(
      (professor, profIndex) => profIndex !== index
    );

    const updatedProfessors = [...filteredProfessors, tempProf];

    setProfessors(updatedProfessors);
  }

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

      <h1>Liste des profs</h1>

      {orderedProfessors().map((professor) => (
        <React.Fragment key={professor.nom}>
          <ProfessorItem nom={professor.nom} listeCours={professor.cours} />

          <NewCourse addCourse={(cours) => addCourse(professor, cours)} />
        </React.Fragment>
      ))}
    </React.Fragment>
  );
}
