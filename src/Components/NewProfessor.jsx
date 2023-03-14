import React, { useState } from "react";

export default function NewProfessor({ addProfessor }) {
  const [nom, setNom] = useState("");

  const [prenom, setPrenom] = useState("");

  const [dateEmbauche, setDateEmbauche] = useState("");

  const [photo, setPhoto] = useState("");

  const cours = [];

  function nameHandler(event) {
    setNom(event.target.value);
  }

  function surnameHandler(event) {
    setPrenom(event.target.value);
  }

  function photoHandler(event) {
    setPhoto(event.target.value);
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
      photo,
    };

    if (nom && prenom && dateEmbauche && photo) {
      addProfessor(newProfessor);

      setNom("");

      setPrenom("");

      setPhoto("");

      setDateEmbauche("");
    } else if (!nom) {
      alert("Veuillez saisir le nom du professeur");
    } else if (!prenom) {
      alert("Veuillez saisir le prenom du professeur");
    } else if (!dateEmbauche) {
      alert("Veuillez saisir la date d'embauche");
    } else if (!photo) {
      alert("Veuillez choisir une photo");
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

        <label htmlFor="photo">Photo</label>

        <div>
          <select id="photo" value={photo} onChange={photoHandler}>
            <option value="">--Veuillez choisir une photo--</option>

            <option value="male_teacher.png">Homme</option>

            <option value="female-teacher.png">Femme</option>
          </select>
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
