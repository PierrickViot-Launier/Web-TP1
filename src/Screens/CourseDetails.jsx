import React from "react";
import { useLocation } from "react-router-dom";

export default function CourseDetails() {
  const location = useLocation();

  const nom = location.state.cours.nom;
  const discipline = location.state.cours.discipline;
  const dateDebut = location.state.cours.dateDebut;
  const dateFin = location.state.cours.dateFin;

  return (
    <React.Fragment>
      <div>{nom}</div>
      <div>Discipline: {discipline}</div>
      {dateDebut && dateFin && (
        <div>
          <div>Date de début: {dateDebut}</div>
          <div>Date de fin: {dateFin}</div>
        </div>
      )}
    </React.Fragment>
  );
}
