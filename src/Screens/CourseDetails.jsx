import React from "react";
import { useLocation } from "react-router-dom";
import FormulaireProfesseur from "../Components/FormulaireProfesseur";
import FormulaireStudent from "../Components/FormulaireStudent";

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

      <p>Liste des élèves:</p>
      {listeEleves.map((eleve) => (
        <div key={eleve.DA}>
          {eleve.prenom} {eleve.nom} {eleve.DA}
        </div>
      ))}
      <FormulaireStudent
        nomCours={nom}
        coursH23={coursH23}
        addStudent={addStudent}
      />
    </React.Fragment>
  );
}
