import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FormulaireStudent({ nomCours, coursH23, addStudent }) {
  //   console.log(coursH23);

  //   console.log("nom cours", nomCours);

  //   console.log(nomCours);

  const [nom, setNom] = useState("");

  const [prenom, setPrenom] = useState("");

  const [DA, setDA] = useState("");

  const navigate = useNavigate();

  function nomHandler(event) {
    setNom(event.target.value);
  }

  function prenomHandler(event) {
    setPrenom(event.target.value);
  }

  function DAHandler(event) {
    setDA(event.target.value);
  }

  function newStudent(event) {
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
      eleves: coursH23[index].eleves,
      nomProfesseur: coursH23[index].nomProfesseur,
      prenomProfesseur: coursH23[index].prenomProfesseur,
    };

    const newEleve = {
      nom,
      prenom,
      DA,
    };

    addStudent(newCours, newEleve);

    navigate(`/CourseDetails/${newCours.nom}`, {
      state: {
        cours: newCours,
      },
    });
  }

  return (
    <React.Fragment>
      <div>
        <h3>Ajouter un élève</h3>
      </div>

      <form className="formEleve" onSubmit={newStudent}>
        <label>Nom</label>

        <div>
          <input type="text" onChange={nomHandler} value={nom} />
        </div>

        <label>Prénom</label>

        <div>
          <input type="text" onChange={prenomHandler} value={prenom} />
        </div>

        <label>DA</label>

        <div>
          <input type="text" onChange={DAHandler} value={DA} />
        </div>

        <div>
          <button type="submit">Ajouter</button>
        </div>
      </form>
    </React.Fragment>
  );
}
