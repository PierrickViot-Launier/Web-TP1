import React, { useState } from "react";

import "./FormulaireCours.css";

export default function FormulaireCours({ addCourse }) {
  const [nom, setNom] = useState("");

  const [discipline, setDiscipline] = useState("");

  const [dateDebut, setDateDebut] = useState("");

  const [dateFin, setDateFin] = useState("");

  const eleves = [];

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
      eleves,
    };

    if (nom && discipline && dateDebut && dateFin) {
      addCourse(course);

      setNom("");

      setDiscipline("");

      setDateDebut("");

      setDateFin("");
    } else {
      alert("Veuillez remplir tous les champs");
    }
  }

  return (
    <React.Fragment>
      <h2>Ajouter un cours</h2>

      <form className="formCours" onSubmit={newCourse}>
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
          <input
            type="date"
            onChange={dateDebutHandler}
            value={dateDebut}
            min="2023-01-01"
            max="2023-06-01"
          />
        </div>

        <label>Date de fin</label>

        <div>
          <input
            type="date"
            onChange={dateFinHandler}
            value={dateFin}
            min="2023-01-01"
            max="2023-06-01"
          />
        </div>

        <div>
          <button type="submit">Ajouter</button>
        </div>
      </form>
    </React.Fragment>
  );
}
