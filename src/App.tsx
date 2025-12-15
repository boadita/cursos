import { BrowserRouter as Router, Routes, Route, useParams, useNavigate } from "react-router-dom";
import Header from "./estructura/Header";
import Footer from "./estructura/Footer";
import Portada from "./pages/Portada";
import Home from "./pages/Home";
import CourseDetail from "./components/CourseDetail";

import escolares from "./data/escolares.json";
import preuniversitarios from "./data/preuniversitarios.json";
import universitarios from "./data/universitarios.json";
import ingles from "./data/ingles.json";
import informatica from "./data/informatica.json";
import programacion from "./data/programacion.json";

import type { Course } from "./types";

// 🔹 Unimos todos los cursos
const allCourses: Course[] = [
  ...(escolares as Course[]),
  ...(preuniversitarios as Course[]),
  ...(universitarios as Course[]),
  ...(ingles as Course[]),
  ...(informatica as Course[]),
  ...(programacion as Course[]),
];

function CourseDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const course = allCourses.find(c => c.id === id);

  if (!course) {
    return <h2 className="text-center text-xl font-bold">Curso no encontrado</h2>;
  }

  return (
    <CourseDetail
      course={course}
      onBack={() => navigate(-1)}
    />
  );
}

function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-yellow-500">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Portada />} />
          <Route path="/categoria/:categoriaId" element={<Home />} />
          <Route path="/curso/:id" element={<CourseDetailPage />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
