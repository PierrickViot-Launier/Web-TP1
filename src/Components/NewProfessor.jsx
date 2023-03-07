import React, { useState } from "react";

export default function NewProfessor({ addProfessor }) {
  const [nom, setNom] = useState("");

  const [prenom, setPrenom] = useState("");

  const [dateEmbauche, setDateEmbauche] = useState("");

  const cours = [];

  function nameHandler(event) {
    setNom(event.target.value);
  }

  function surnameHandler(event) {
    setPrenom(event.target.value);
  }

  function dateHandler(event) {
    setDateEmbauche(event.target.value);
  }

  function addTeacher(event) {
    event.preventDefault();

    const newProfessor = {
      nom,
      cours,
      prenom,
      dateEmbauche,
    };

    if (nom && prenom && dateEmbauche) {
      addProfessor(newProfessor);

      setNom("");

      setPrenom("");

      setDateEmbauche("");
    } else if (!nom) {
      alert("Veuillez saisir le nom du professeur");
    } else if (!prenom) {
      alert("Veuillez saisir le prenom du professeur");
    } else if (!dateEmbauche) {
      alert("Veuillez saisir la date d'embauche");
    }
  }

  return (
    <React.Fragment>
      <h1>Ajouter un professeur</h1>

      <form onSubmit={addTeacher}>
        <label>Nom</label>

        <div>
          <input type="text" onChange={nameHandler} value={nom} />
        </div>

        <label>Prénom</label>

        <div>
          <input type="text" onChange={surnameHandler} value={prenom} />
        </div>

        <label>Date d'embauche</label>

        <div>
          <input type="date" onChange={dateHandler} value={dateEmbauche} />
        </div>

        <div>
          <button type="submit">Ajouter</button>
        </div>
      </form>
    </React.Fragment>
  );
}
