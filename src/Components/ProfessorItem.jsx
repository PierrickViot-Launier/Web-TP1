import React from "react";
import {
  Card,
  CardHeader,
  Avatar,
  CardContent,
  Typography,
} from "@mui/material";

import maleTeacher from "../Assets/Images/male_teacher.png";
import femaleTeacher from "../Assets/Images/female-teacher.png";

import "./ProfessorItem.css";

export default function ProfessorItem({
  nom,
  prenom,
  dateEmbauche,
  listeCours,
  photo,
}) {
  function picture() {
    if (photo === "male_teacher.png") {
      return maleTeacher;
    }

    if (photo === "female-teacher.png") {
      return femaleTeacher;
    }
  }

  const card = (
    <div>
      <CardHeader
        avatar={
          <Avatar
            alt="teacher"
            src={picture()}
            sx={{ width: 65, height: 65 }}
          />
        }
        title={`${nom}, ${prenom}`}
        subheader={`Date d'embauche: ${dateEmbauche}`}
      />

      <CardContent>
        <Typography variant="h6">Cours de l'enseignant:</Typography>

        {listeCours.map((cours) => (
          <Typography variant="body1" key={cours}>
            {cours}
          </Typography>
        ))}
      </CardContent>
    </div>
  );

  return <Card variant="outlined">{card}</Card>;
}
