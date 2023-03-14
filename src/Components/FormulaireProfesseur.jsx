import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FormulaireProfesseur({
  professors,
  addCourseToProfessor,
  addProfessorToCourse,
  coursH23,
  nomCours,
}) {
  const [selectedOption, setSelectedOption] = useState(orderedProfessors()[0]);

  const navigate = useNavigate();

  function professorHandler(event) {
    setSelectedOption(JSON.parse(event.target.value));
  }

  function addProfessor(event) {
    event.preventDefault();

    let index;

    coursH23.map((cours, coursIndex) => {
      if (cours.nom === nomCours) {
        index = coursIndex;
      }
    });

    const newCours = {
      nom: coursH23[index].nom,
      discipline: coursH23[index].discipline,
      dateDebut: coursH23[index].dateDebut,
      dateFin: coursH23[index].dateFin,
      nomProfesseur: selectedOption.nom,
      prenomProfesseur: selectedOption.prenom,
    };

    const newProf = {
      nom: selectedOption.nom,
      prenom: selectedOption.prenom,
      dateEmbauche: selectedOption.dateEmbauche,
      cours: selectedOption.cours,
      photo: selectedOption.photo,
    };

    addCourseToProfessor(newProf, nomCours);

    addProfessorToCourse(newCours);

    alert("Cours modifié avec succès");

    navigate("/Courses");
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
      <h3>Ajouter un professeur</h3>

      <form onSubmit={addProfessor}>
        <label htmlFor="professeur">Professeurs disponibles</label>

        <div>
          <select
            id="professeur"
            value={JSON.stringify(selectedOption)}
            onChange={professorHandler}
          >
            {orderedProfessors().map((professor) => (
              <option key={professor.nom} value={JSON.stringify(professor)}>
                {professor.nom}, {professor.prenom}
              </option>
            ))}
          </select>
        </div>

        <div>
          <button type="submit">Ajouter</button>
        </div>
      </form>
    </React.Fragment>
  );
}
