import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CourseItem from "../Components/CourseItem";
import FormulaireCours from "../Components/FormulaireCours";

export default function CoursesScreen({
  addCourse,
  coursA21,
  coursH22,
  coursA22,
  coursH23,
}) {
  const navigate = useNavigate();

  const [session, setSession] = useState("");

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
          <React.Fragment>
            <FormulaireCours addCourse={addCourse} />

            <ul>
              {orderedSession(coursH23).map((cours) => (
                <CourseItem
                  key={cours.nom}
                  nom={cours.nom}
                  onClick={() => navigateToDetails(cours)}
                />
              ))}
            </ul>
          </React.Fragment>
        );

      default:
        return null;
    }
  }

  return (
    <React.Fragment>
      <div>
        <label htmlFor="session">Choisissez une session:</label>
      </div>

      <div>
        <select id="session" value={session} onChange={sessionHandler}>
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
