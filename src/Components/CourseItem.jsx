import React from "react";

import {
  Card,
  CardHeader,
  Avatar,
  Box,
  CardContent,
  Typography,
  CardMedia,
} from "@mui/material";

import "./CourseItem.css";

import logo from "../Assets/Images/CollegeMontmorency_Logo.png";

export default function CourseItem({ nom, discipline, onClick, listeEleves }) {
  const card = (
    <div>
      <CardMedia component={"img"} image={logo} title="Logo Montmorency" />

      <CardContent style={{ textAlign: "center" }}>
        <Typography style={{ fontWeight: "bold" }}>{nom}</Typography>
        <br />
        <Typography>Discipline:</Typography>
        <Typography>{discipline}</Typography>
      </CardContent>
    </div>
  );

  return (
    <div className="course-item" onClick={onClick}>
      <Card style={{ backgroundColor: "#29cfd5" }}>{card}</Card>
    </div>
  );
}
