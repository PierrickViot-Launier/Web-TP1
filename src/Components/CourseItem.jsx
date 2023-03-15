import React from "react";

import { Card, CardContent, Typography, CardMedia } from "@mui/material";

import "./CourseItem.css";

import logo from "../Assets/Images/CollegeMontmorency_Logo.png";

export default function CourseItem({ nom, discipline, onClick, placesDispo }) {
  const card = (
    <div>
      <CardMedia component={"img"} image={logo} title="Logo Montmorency" />

      <CardContent style={{ textAlign: "center" }}>
        <Typography style={{ fontWeight: "bold" }}>{nom}</Typography>
        <br />
        <Typography>Places restantes:</Typography>
        <Typography>{placesDispo}</Typography>
      </CardContent>
    </div>
  );

  return (
    <div className="course-item" onClick={onClick}>
      <Card variant="outlined">{card}</Card>
    </div>
  );
}
