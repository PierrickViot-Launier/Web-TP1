import React from "react";
import { useLocation } from "react-router-dom";

export default function CourseDetails() {
  const location = useLocation();

  return <div>{location.state.cours.nom}</div>;
}
