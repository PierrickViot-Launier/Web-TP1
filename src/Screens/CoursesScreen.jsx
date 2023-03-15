import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CourseItem from "../Components/CourseItem";
import FormulaireCours from "../Components/FormulaireCours";

import "./CoursesScreen.css";

export default function CoursesScreen({
  addCourse,
  coursA21,
  coursH22,
  coursA22,
  coursH23,
}) {
  const navigate = useNavigate();

  const [session, setSession] = useState("Hiver 2023");

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
    navigate(`/CourseDetails/${cours.nom}`, {
      state: {
        cours: cours,
      },
    });
  }

  function sessionSwitch() {
    switch (session) {
      case "Automne 2021":
        return (
          <div className="cours-liste">
            {orderedSession(coursA21).map((cours) => (
              <div className="cours" key={cours.nom}>
                <CourseItem
                  nom={cours.nom}
                  discipline={cours.discipline}
                  onClick={() => navigateToDetails(cours)}
                />
              </div>
            ))}
          </div>
        );

      case "Hiver 2022":
        return (
          <div className="cours-liste">
            {orderedSession(coursH22).map((cours) => (
              <div className="cours" key={cours.nom}>
                <CourseItem
                  nom={cours.nom}
                  discipline={cours.discipline}
                  onClick={() => navigateToDetails(cours)}
                />
              </div>
            ))}
          </div>
        );

      case "Automne 2022":
        return (
          <div className="cours-liste">
            {orderedSession(coursA22).map((cours) => (
              <div className="cours" key={cours.nom}>
                <CourseItem
                  nom={cours.nom}
                  discipline={cours.discipline}
                  onClick={() => navigateToDetails(cours)}
                />
              </div>
            ))}
          </div>
        );

      case "Hiver 2023":
        return (
          <div>
            <div className="cours-liste">
              {orderedSession(coursH23).map((cours) => (
                <div className="cours" key={cours.nom}>
                  <CourseItem
                    nom={cours.nom}
                    discipline={cours.discipline}
                    listeEleves={cours.eleves}
                    onClick={() => navigateToDetails(cours)}
                  />
                </div>
              ))}
            </div>

            <div className="formulaire">
              <FormulaireCours addCourse={addCourse} />
            </div>
          </div>
        );

      default:
        return null;
    }
  }

  return (
    <div>
      <div className="combo-box">
        <div>
          <h2 htmlFor="session">Choisissez une session:</h2>
        </div>

        <select id="session" value={session} onChange={sessionHandler}>
          <option value="Automne 2021">Automne 2021</option>

          <option value="Hiver 2022">Hiver 2022</option>

          <option value="Automne 2022">Automne 2022</option>

          <option value="Hiver 2023">Hiver 2023</option>
        </select>
      </div>

      <div>{sessionSwitch()}</div>
    </div>
  );
}
