import React from "react";
import { useNavigate } from "react-router-dom";

export default function IntroScreen() {
  const navigate = useNavigate();

  function test() {
    navigate("/Professors");
  }

  function test2() {
    navigate("/Courses");
  }

  return (
    <React.Fragment>
      <div>IntroScreen</div>
      <button onClick={test}>Professeur</button>

      <button onClick={test2}>Cours</button>
    </React.Fragment>
  );
}
