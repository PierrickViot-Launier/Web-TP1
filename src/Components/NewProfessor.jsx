import React, { useState } from "react";

export default function NewProfessor({ addProfessor }) {
  const [nom, setNom] = useState("");

  const cours = ["PHP", "Java"];

  function nameHandler(event) {
    setNom(event.target.value);
  }

  function addTeacher(event) {
    event.preventDefault();

    const newProfessor = {
      nom,
      cours,
    };

    addProfessor(newProfessor);
  }

  return (
    <React.Fragment>
      <div>Ajouter un professeur</div>

      <form onSubmit={addTeacher}>
        <label>Nom</label>
        <br />

        <input type="text" onChange={nameHandler} value={nom} />
        <button type="submit">Ajouter</button>
      </form>
    </React.Fragment>
  );
}