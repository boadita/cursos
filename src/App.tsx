import { BrowserRouter as Router, Routes, Route, useParams, useNavigate } from "react-router-dom";
import Header from "./estructura/Header";
import Footer from "./estructura/Footer";
import Home from "./pages/Home";
import CourseDetail from "./components/CourseDetail";
import coursesData from "./data/courses.json";
import type { Course } from "./types";

function CourseDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const courses = coursesData as Course[];

  const course = courses.find(c => c.id === Number(id));

  if (!course) return <h2>Curso no encontrado</h2>;

  return <CourseDetail course={course} onBack={() => navigate(-1)} />;
}

function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-yellow-500 mx-auto">
      <div className="max-w-7xl mx-auto">
        <Router>
          < Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/curso/:id" element={<CourseDetailPage />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
