import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import IntroScreen from "./Screens/IntroScreen";
import ProfessorsScreen from "./Screens/ProfessorsScreen";
import CoursesScreen from "./Screens/CoursesScreen";
import MainNavigation from "./Navigation/MainNavigation";
import CourseDetails from "./Screens/CourseDetails";
import React, { useState } from "react";

function App() {
  const [professors, setProfessors] = useState([
    {
      nom: "Labranche",
      prenom: "Sylvain",
      dateEmbauche: "2023-01-01",
      cours: ["Web et bases de données"],
      photo: "",
    },
    {
      nom: "Bergeron",
      prenom: "Mathieu",
      dateEmbauche: "2023-01-01",
      cours: ["Environnement graphique"],
      photo: "",
    },
  ]);

  function addProfessor(newProfessor) {
    setProfessors((prevProfessors) => {
      return prevProfessors.concat(newProfessor);
    });
  }

  const coursA21 = [
    { nom: "Algorithmie et programmation", discipline: "Informatique" },
    { nom: "Arithmétique et logique", discipline: "Informatique" },
    { nom: "Outils et profession", discipline: "Informatique" },
    { nom: "Système d'exploitation Windows", discipline: "Informatique" },
  ];

  const coursH22 = [
    {
      nom: "Environnements virtuels et réseau local",
      discipline: "Informatique",
    },
    { nom: "Géométrie et statistiques", discipline: "Mathématique" },
    { nom: "Programmation orientée objet", discipline: "Informatique" },
    { nom: "Programmation structurée", discipline: "Informatique" },
    { nom: "Système d'exploitation Linux", discipline: "Informatique" },
  ];

  const coursA22 = [
    { nom: "Base de données", discipline: "Informatique" },
    { nom: "Sécurité et éthique", discipline: "Informatique" },
    { nom: "Structures de données", discipline: "Informatique" },
    { nom: "Interface web", discipline: "Informatique" },
    { nom: "Interface utilisateur", discipline: "Informatique" },
  ];

  const [coursH23, setCoursH23] = useState([
    {
      nom: "Web et bases de données",
      discipline: "Informatique",
      dateDebut: "2023-01-01",
      dateFin: "2023-06-06",
      nomProfesseur: "Labranche",
      prenomProfesseur: "Sylvain",
    },
    {
      nom: "Environnement graphique",
      discipline: "Informatique",
      dateDebut: "2023-01-01",
      dateFin: "2023-06-06",
      nomProfesseur: "Bergeron",
      prenomProfesseur: "Mathieu",
    },
    {
      nom: "Objets connectés",
      discipline: "Informatique",
      dateDebut: "2023-01-01",
      dateFin: "2023-06-06",
      nomProfesseur: "",
      prenomProfesseur: "",
    },
    {
      nom: "Contexte professionnel",
      discipline: "Informatique",
      dateDebut: "2023-01-01",
      dateFin: "2023-06-06",
      nomProfesseur: "",
      prenomProfesseur: "",
    },
    {
      nom: "Analyse et conception de modèle",
      discipline: "Informatique",
      dateDebut: "2023-01-01",
      dateFin: "2023-06-06",
      nomProfesseur: "",
      prenomProfesseur: "",
    },
  ]);

  function addCourse(newCourse) {
    setCoursH23((prevCourses) => {
      return prevCourses.concat(newCourse);
    });
  }

  function addCourseToProfessor(professor, cours) {
    let index;

    professors.map((professorItem, profIndex) => {
      if (professorItem.nom === professor.nom) {
        index = profIndex;
      }
    });

    const tempProf = professor;

    tempProf.cours = [...professor.cours, cours];

    const filteredProfessors = professors.filter(
      (professor, profIndex) => profIndex !== index
    );

    const updatedProfessors = [...filteredProfessors, tempProf];

    setProfessors(updatedProfessors);
  }

  function addProfessorToCourse(cours) {
    let index;

    coursH23.map((coursItem, coursIndex) => {
      if (coursItem.nom === cours.nom) {
        index = coursIndex;
      }
    });

    const filteredCourses = coursH23.filter(
      (course, courseIndex) => courseIndex !== index
    );

    const updatedCourses = [...filteredCourses, cours];

    setCoursH23(updatedCourses);
  }

  return (
    <Router>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" element={<IntroScreen />} />

          <Route
            path="/Professors"
            element={
              <ProfessorsScreen
                addProfessor={addProfessor}
                professors={professors}
              />
            }
          />

          <Route
            path="/Courses"
            element={
              <CoursesScreen
                addCourse={addCourse}
                coursA21={coursA21}
                coursH22={coursH22}
                coursA22={coursA22}
                coursH23={coursH23}
              />
            }
          />

          <Route
            path="/CourseDetails/:nom"
            element={
              <CourseDetails
                professors={professors}
                addCourseToProfessor={addCourseToProfessor}
                addProfessorToCourse={addProfessorToCourse}
                coursH23={coursH23}
              />
            }
          />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
