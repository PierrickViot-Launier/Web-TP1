import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import IntroScreen from "./Screens/IntroScreen";
import ProfessorsScreen from "./Screens/ProfessorsScreen";
import CoursesScreen from "./Screens/CoursesScreen";
import MainNavigation from "./Navigation/MainNavigation";
import CourseDetails from "./Screens/CourseDetails";

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" element={<IntroScreen />} />

          <Route path="/Professors" element={<ProfessorsScreen />} />

          <Route path="/Courses" element={<CoursesScreen />} />

          <Route path="/CourseDetails" element={<CourseDetails />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
