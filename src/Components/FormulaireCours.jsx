import React, { useState } from "react";

export default function FormulaireCours({ addCourse }) {
  const [nom, setNom] = useState("");

  const [discipline, setDiscipline] = useState("");

  const [dateDebut, setDateDebut] = useState("");

  const [dateFin, setDateFin] = useState("");

  function nomHandler(event) {
    setNom(event.target.value);
  }

  function disciplineHandler(event) {
    setDiscipline(event.target.value);
  }

  function dateDebutHandler(event) {
    setDateDebut(event.target.value);
  }

  function dateFinHandler(event) {
    setDateFin(event.target.value);
  }

  function newCourse(event) {
    event.preventDefault();

    const course = {
      nom,
      discipline,
      dateDebut,
      dateFin,
    };

    if (nom && discipline && dateDebut && dateFin) {
      addCourse(course);

      setNom("");

      setDiscipline("");

      setDateDebut("");

      setDateFin("");
    } else if (!nom) {
      alert("Veuillez saisir le nom du cours");
    } else if (!discipline) {
      alert("Veuillez saisir la discipline");
    } else if (!dateDebut) {
      alert("Veuillez saisir la date de début");
    } else if (!dateFin) {
      alert("Veuillez saisir la date de fin");
    }
  }

  return (
    <React.Fragment>
      <h2>Ajouter un cours</h2>

      <form onSubmit={newCourse}>
        <label>Nom</label>

        <div>
          <input type="text" onChange={nomHandler} value={nom} />
        </div>

        <label>Discipline</label>

        <div>
          <input type="text" onChange={disciplineHandler} value={discipline} />
        </div>

        <label>Date de début</label>

        <div>
          <input type="date" onChange={dateDebutHandler} value={dateDebut} />
        </div>

        <label>Date de fin</label>

        <div>
          <input type="date" onChange={dateFinHandler} value={dateFin} />
        </div>

        <div>
          <button type="submit">Ajouter</button>
        </div>
      </form>
    </React.Fragment>
  );
}
