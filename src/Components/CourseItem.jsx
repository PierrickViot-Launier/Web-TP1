import React from "react";

export default function CourseItem({ nom, onClick }) {
  return <li onClick={onClick}>{nom}</li>;
}
