import React, { useState } from "react";

export default function NewCourse({ addCourse }) {
  const [cours, setCours] = useState("");

  function courseHandler(event) {
    setCours(event.target.value);
  }

  function ajouterCours(event) {
    event.preventDefault();

    if (cours) {
      addCourse(cours);

      setCours("");
    } else {
      alert("Veuillez saisir un nom de cours");
    }
  }

  return (
    <form onSubmit={ajouterCours}>
      <label>Ajouter un cours</label>
      <br />

      <input type="text" onChange={courseHandler} value={cours} />
      <button type="submit">Ajouter</button>
    </form>
  );
}
