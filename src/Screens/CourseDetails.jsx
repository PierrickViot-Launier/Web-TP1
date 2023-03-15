import React from "react";
import { useLocation } from "react-router-dom";
import FormulaireProfesseur from "../Components/FormulaireProfesseur";
import FormulaireStudent from "../Components/FormulaireStudent";

import "./CourseDetails.css";

export default function CourseDetails({
  professors,
  addCourseToProfessor,
  addProfessorToCourse,
  addStudent,
  coursH23,
}) {
  const location = useLocation();

  const nom = location.state.cours.nom;
  const discipline = location.state.cours.discipline;
  const dateDebut = location.state.cours.dateDebut;
  const dateFin = location.state.cours.dateFin;
  let nomProfesseur = location.state.cours.nomProfesseur;
  let prenomProfesseur = location.state.cours.prenomProfesseur;
  let listeEleves = location.state.cours.eleves;

  const coursAutresSessions = [
    "Algorithmie et programmation",
    "Arithmétique et logique",
    "Outils et profession",
    "Système d'exploitation Windows",
    "Environnements virtuels et réseau local",
    "Géométrie et statistiques",
    "Programmation orientée objet",
    "Programmation structurée",
    "Système d'exploitation Linux",
    "Base de données",
    "Sécurité et éthique",
    "Structures de données",
    "Interface web",
    "Interface utilisateur",
  ];

  return (
    <div className="body-course-details">
      <h1>{nom}</h1>
      <h3>Discipline: {discipline}</h3>

      {dateDebut && dateFin && (
        <div className="body-course-details">
          <h4>Date de début: {dateDebut}</h4>
          <h4>Date de fin: {dateFin}</h4>
        </div>
      )}

      <h4>Description du cours:</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum quidem
        placeat aperiam quae vero, magni rem ad saepe magnam illo eligendi
        distinctio sit sapiente! Vel soluta quidem sit nam in! Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Ipsam quae, suscipit aspernatur
        nulla minima perspiciatis accusantium neque nihil mollitia deserunt
        dolores consectetur qui eum beatae natus illum, ex inventore eos! Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Aliquam totam, nemo
        voluptates sint rem asperiores distinctio neque eos sit temporibus
        deleniti debitis. Harum molestias reiciendis iure iste quam sunt
        doloribus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
        veniam asperiores pariatur maxime ratione dignissimos impedit, nisi
        sequi dicta aperiam facere magnam repudiandae natus beatae dolor
        eligendi! Placeat, accusamus quos?
      </p>

      {prenomProfesseur && nomProfesseur ? (
        <h4 className="body-course-details">
          Cours enseigné par {nomProfesseur}, {prenomProfesseur}
        </h4>
      ) : (
        <div className="body-course-details">
          <h4>Aucun enseignant assigné</h4>

          {!coursAutresSessions.includes(nom) && (
            <FormulaireProfesseur
              professors={professors}
              nomCours={nom}
              addCourseToProfessor={addCourseToProfessor}
              addProfessorToCourse={addProfessorToCourse}
              coursH23={coursH23}
            />
          )}
        </div>
      )}

      <h4>Liste des élèves:</h4>
      {listeEleves.map((eleve) => (
        <p className="eleve" key={eleve.DA}>
          {eleve.prenom} {eleve.nom} {eleve.DA}
        </p>
      ))}

      {!coursAutresSessions.includes(nom) && (
        <FormulaireStudent
          nomCours={nom}
          coursH23={coursH23}
          addStudent={addStudent}
        />
      )}
    </div>
  );
}
