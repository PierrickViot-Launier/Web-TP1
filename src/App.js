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
      photo: "male_teacher.png",
    },
    {
      nom: "Bergeron",
      prenom: "Mathieu",
      dateEmbauche: "2023-01-01",
      cours: ["Environnement graphique"],
      photo: "male_teacher.png",
    },
  ]);

  function addProfessor(newProfessor) {
    setProfessors((prevProfessors) => {
      return prevProfessors.concat(newProfessor);
    });
  }

  const coursA21 = [
    {
      nom: "Algorithmie et programmation",
      discipline: "Informatique",
      eleves: [{ nom: "Labrèche", prenom: "Marc", DA: "20175061" }],
      nomProfesseur: "Leboeuf",
      prenomProfesseur: "Marcel",
    },
    {
      nom: "Arithmétique et logique",
      discipline: "Informatique",
      eleves: [{ nom: "Labrèche", prenom: "Marc", DA: "20175061" }],
      nomProfesseur: "Leboeuf",
      prenomProfesseur: "Marcel",
    },
    {
      nom: "Outils et profession",
      discipline: "Informatique",
      eleves: [{ nom: "Labrèche", prenom: "Marc", DA: "20175061" }],
      nomProfesseur: "Leboeuf",
      prenomProfesseur: "Marcel",
    },
    {
      nom: "Système d'exploitation Windows",
      discipline: "Informatique",
      eleves: [{ nom: "Labrèche", prenom: "Marc", DA: "20175061" }],
      nomProfesseur: "Leboeuf",
      prenomProfesseur: "Marcel",
    },
  ];

  const coursH22 = [
    {
      nom: "Environnements virtuels et réseau local",
      discipline: "Informatique",
      eleves: [{ nom: "Labrèche", prenom: "Marc", DA: "20175061" }],
      nomProfesseur: "Leboeuf",
      prenomProfesseur: "Marcel",
    },
    {
      nom: "Géométrie et statistiques",
      discipline: "Mathématique",
      eleves: [{ nom: "Labrèche", prenom: "Marc", DA: "20175061" }],
      nomProfesseur: "Leboeuf",
      prenomProfesseur: "Marcel",
    },
    {
      nom: "Programmation orientée objet",
      discipline: "Informatique",
      eleves: [{ nom: "Labrèche", prenom: "Marc", DA: "20175061" }],
      nomProfesseur: "Leboeuf",
      prenomProfesseur: "Marcel",
    },
    {
      nom: "Programmation structurée",
      discipline: "Informatique",
      eleves: [{ nom: "Labrèche", prenom: "Marc", DA: "20175061" }],
      nomProfesseur: "Leboeuf",
      prenomProfesseur: "Marcel",
    },
    {
      nom: "Système d'exploitation Linux",
      discipline: "Informatique",
      eleves: [{ nom: "Labrèche", prenom: "Marc", DA: "20175061" }],
      nomProfesseur: "Leboeuf",
      prenomProfesseur: "Marcel",
    },
  ];

  const coursA22 = [
    {
      nom: "Base de données",
      discipline: "Informatique",
      eleves: [{ nom: "Labrèche", prenom: "Marc", DA: "20175061" }],
      nomProfesseur: "Leboeuf",
      prenomProfesseur: "Marcel",
    },
    {
      nom: "Sécurité et éthique",
      discipline: "Informatique",
      eleves: [{ nom: "Labrèche", prenom: "Marc", DA: "20175061" }],
      nomProfesseur: "Leboeuf",
      prenomProfesseur: "Marcel",
    },
    {
      nom: "Structures de données",
      discipline: "Informatique",
      eleves: [{ nom: "Labrèche", prenom: "Marc", DA: "20175061" }],
      nomProfesseur: "Leboeuf",
      prenomProfesseur: "Marcel",
    },
    {
      nom: "Interface web",
      discipline: "Informatique",
      eleves: [{ nom: "Labrèche", prenom: "Marc", DA: "20175061" }],
      nomProfesseur: "Leboeuf",
      prenomProfesseur: "Marcel",
    },
    {
      nom: "Interface utilisateur",
      discipline: "Informatique",
      eleves: [{ nom: "Labrèche", prenom: "Marc", DA: "20175061" }],
      nomProfesseur: "Leboeuf",
      prenomProfesseur: "Marcel",
    },
  ];

  const [coursH23, setCoursH23] = useState([
    {
      nom: "Web et bases de données",
      discipline: "Informatique",
      dateDebut: "2023-01-01",
      dateFin: "2023-06-06",
      nomProfesseur: "Labranche",
      prenomProfesseur: "Sylvain",
      eleves: [{ nom: "Labrèche", prenom: "Marc", DA: "20175061" }],
    },
    {
      nom: "Environnement graphique",
      discipline: "Informatique",
      dateDebut: "2023-01-01",
      dateFin: "2023-06-06",
      nomProfesseur: "Bergeron",
      prenomProfesseur: "Mathieu",
      eleves: [{ nom: "Labrèche", prenom: "Marc", DA: "20175061" }],
    },
    {
      nom: "Objets connectés",
      discipline: "Informatique",
      dateDebut: "2023-01-01",
      dateFin: "2023-06-06",
      nomProfesseur: "",
      prenomProfesseur: "",
      eleves: [{ nom: "Labrèche", prenom: "Marc", DA: "20175061" }],
    },
    {
      nom: "Contexte professionnel",
      discipline: "Informatique",
      dateDebut: "2023-01-01",
      dateFin: "2023-06-06",
      nomProfesseur: "",
      prenomProfesseur: "",
      eleves: [{ nom: "Labrèche", prenom: "Marc", DA: "20175061" }],
    },
    {
      nom: "Analyse et conception de modèle",
      discipline: "Informatique",
      dateDebut: "2023-01-01",
      dateFin: "2023-06-06",
      nomProfesseur: "",
      prenomProfesseur: "",
      eleves: [{ nom: "Labrèche", prenom: "Marc", DA: "20175061" }],
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

  function addStudent(cours, eleve) {
    let indexCours;
    let dejaPresent = false;

    coursH23.map((coursItem, coursIndex) => {
      if (coursItem.nom === cours.nom) {
        indexCours = coursIndex;
      }
    });

    const filteredCourses = coursH23.filter(
      (course, courseIndex) => courseIndex !== indexCours
    );

    cours.eleves.map((eleveItem, eleveIndex) => {
      if (eleveItem.DA === eleve.DA) {
        dejaPresent = true;
      }
    });

    if (dejaPresent) {
      alert("Cet élève est déjà dans le cours");
    } else {
      cours.eleves = [...cours.eleves, eleve];

      const updatedCourses = [...filteredCourses, cours];

      setCoursH23(updatedCourses);
    }
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
                addStudent={addStudent}
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
