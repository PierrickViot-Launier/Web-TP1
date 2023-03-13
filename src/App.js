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
      cours: ["Web", "React", "HTML"],
      photo: "",
    },
    {
      nom: "Walker",
      prenom: "Pierce",
      dateEmbauche: "2023-01-01",
      cours: ["Mobile", "React native", "JavaScript"],
      photo: "",
    },
  ]);

  function addProfessor(newProfessor) {
    setProfessors((prevProfessors) => {
      return prevProfessors.concat(newProfessor);
    });
  }

  const [coursH23, setCoursH23] = useState([
    {
      nom: "Web et bases de données",
      discipline: "Informatique",
      dateDebut: "2023-01-01",
      dateFin: "2023-06-06",
    },
    {
      nom: "Environnement graphique",
      discipline: "Informatique",
      dateDebut: "2023-01-01",
      dateFin: "2023-06-06",
    },
    {
      nom: "Objets connectés",
      discipline: "Informatique",
      dateDebut: "2023-01-01",
      dateFin: "2023-06-06",
    },
    {
      nom: "Contexte professionnel",
      discipline: "Informatique",
      dateDebut: "2023-01-01",
      dateFin: "2023-06-06",
    },
    {
      nom: "Analyse et conception de modèle",
      discipline: "Informatique",
      dateDebut: "2023-01-01",
      dateFin: "2023-06-06",
    },
  ]);

  function addCourse(newCourse) {
    setCoursH23((prevCourses) => {
      return prevCourses.concat(newCourse);
    });
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
              <CoursesScreen addCourse={addCourse} coursH23={coursH23} />
            }
          />

          <Route path="/CourseDetails/:nom" element={<CourseDetails />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
