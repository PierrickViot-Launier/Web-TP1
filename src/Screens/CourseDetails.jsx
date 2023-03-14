import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import FormulaireProfesseur from "../Components/FormulaireProfesseur";

export default function CourseDetails({
  professors,
  addCourseToProfessor,
  addProfessorToCourse,
  coursH23,
}) {
  const location = useLocation();

  const nom = location.state.cours.nom;
  const discipline = location.state.cours.discipline;
  const dateDebut = location.state.cours.dateDebut;
  const dateFin = location.state.cours.dateFin;
  let nomProfesseur = location.state.cours.nomProfesseur;
  let prenomProfesseur = location.state.cours.prenomProfesseur;

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

  useEffect(() => {}, [location.state.cours]);

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

      {prenomProfesseur && nomProfesseur ? (
        <div>
          Cours enseigné par {nomProfesseur}, {prenomProfesseur}
        </div>
      ) : (
        <React.Fragment>
          <div>Aucun enseignant assigné</div>

          {!coursAutresSessions.includes(nom) && (
            <FormulaireProfesseur
              professors={professors}
              nomCours={nom}
              addCourseToProfessor={addCourseToProfessor}
              addProfessorToCourse={addProfessorToCourse}
              coursH23={coursH23}
            />
          )}
        </React.Fragment>
      )}
    </React.Fragment>
  );
}
