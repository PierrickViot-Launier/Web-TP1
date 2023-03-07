import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import CourseItem from "./CourseItem";

export default function CoursesList() {
  const navigate = useNavigate();

  const [session, setSession] = useState("");

  const [coursA21, setCoursA21] = useState([
    { nom: "Algorithmie et programmation" },
    { nom: "Arithmétique et logique" },
    { nom: "Outils et profession" },
    { nom: "Système d'exploitation Windows" },
  ]);

  const [coursH22, setCoursH22] = useState([
    { nom: "Environnements virtuels et réseau local" },
    { nom: "Géométrie et statistiques" },
    { nom: "Programmation orientée objet" },
    { nom: "Programmation structurée" },
    { nom: "Système d'exploitation Linux" },
  ]);

  const [coursA22, setCoursA22] = useState([
    { nom: "Base de données" },
    { nom: "Sécurité et éthique" },
    { nom: "Structures de données" },
    { nom: "Interface web" },
    { nom: "Interface utilisateur" },
  ]);

  const [coursH23, setCoursH23] = useState([
    { nom: "Web et bases de données" },
    { nom: "Environnement graphique" },
    { nom: "Objets connectés" },
    { nom: "Contexte professionnel" },
    { nom: "Analyse et conception de modèle" },
  ]);

  function sessionHandler(event) {
    setSession(event.target.value);
  }

  function orderedSession(session) {
    return session.sort((a, b) => {
      const nameA = a.nom.toUpperCase();
      const nameB = b.nom.toUpperCase();

      if (nameA < nameB) {
        return -1;
      }

      if (nameA > nameB) {
        return 1;
      }

      return 0;
    });
  }

  function navigateToDetails(cours) {
    navigate("/CourseDetails", {
      state: {
        cours: cours,
      },
    });
  }

  function sessionSwitch() {
    switch (session) {
      case "Automne 2021":
        return (
          <ul>
            {orderedSession(coursA21).map((cours) => (
              <CourseItem
                key={cours.nom}
                nom={cours.nom}
                onClick={() => navigateToDetails(cours)}
              />
            ))}
          </ul>
        );

      case "Hiver 2022":
        return (
          <ul>
            {orderedSession(coursH22).map((cours) => (
              <CourseItem
                key={cours.nom}
                nom={cours.nom}
                onClick={() => navigateToDetails(cours)}
              />
            ))}
          </ul>
        );

      case "Automne 2022":
        return (
          <ul>
            {orderedSession(coursA22).map((cours) => (
              <CourseItem
                key={cours.nom}
                nom={cours.nom}
                onClick={() => navigateToDetails(cours)}
              />
            ))}
          </ul>
        );

      case "Hiver 2023":
        return (
          <ul>
            {orderedSession(coursH23).map((cours) => (
              <CourseItem
                key={cours.nom}
                nom={cours.nom}
                onClick={() => navigateToDetails(cours)}
              />
            ))}
          </ul>
        );

      default:
        return null;
    }
  }

  return (
    <React.Fragment>
      <div>
        <label htmlFor="combo-box">Choisissez une session:</label>
      </div>

      <div>
        <select id="combo-box" value={session} onChange={sessionHandler}>
          <option value="">--Veuillez choisir une session--</option>

          <option value="Automne 2021">Automne 2021</option>

          <option value="Hiver 2022">Hiver 2022</option>

          <option value="Automne 2022">Automne 2022</option>

          <option value="Hiver 2023">Hiver 2023</option>
        </select>
      </div>

      {sessionSwitch()}
    </React.Fragment>
  );
}
