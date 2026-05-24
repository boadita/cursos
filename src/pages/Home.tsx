import { useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CourseList from "../components/CourseList";
import FilterBar from "../components/FilterBar";
import type { Filters, Course } from "../types";
import escolares from "../data/escolares.json";
import preuniversitarios from "../data/preuniversitarios.json";
import universitarios from "../data/universitarios.json";
import ingles from "../data/ingles.json";
import informatica from "../data/informatica.json";
import programacion from "../data/programacion.json";
import ia from "../data/ia.json";

export default function Home() {
  const { categoriaId } = useParams();
  const navigate = useNavigate();

  const [filters, setFilters] = useState<Filters>({
    search: "",
    subcategory: "",
  });

  // Elegimos el JSON según la categoría
  const courses: Course[] = useMemo(() => {
    switch (categoriaId) {
      case "escolares":
        return escolares as Course[];
      case "preuniversitarios":
        return preuniversitarios as Course[];
      case "universitarios":
        return universitarios as Course[];
      case "ingles":
        return ingles as Course[];
      case "informatica":
        return informatica as Course[];
      case "programacion":
        return programacion as Course[];
      case "ia":
        return ia as Course[];
      default:
        return [];
    }
  }, [categoriaId]);

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.nombre
      .toLowerCase()
      .includes(filters.search.toLowerCase());

    const matchesSubcategory =
      filters.subcategory === "" ||
      course.subcategoria === filters.subcategory;

    return matchesSearch && matchesSubcategory;
  });

  const subcategories = useMemo(() => {
    return Array.from(
      new Set(courses.map(course => course.subcategoria))
    );
  }, [courses]);

  return (
    <div className="bg-yellow-500 text-black font-bold p-6 w-full max-w-screen-xl mx-auto">

      {/* Botón Volver */}
      <div className="flex flex-col md:flex-row items-stretch md:items-end gap-4">
        <button
          onClick={() => navigate(-1)}
          className="text-blue-700 hover:text-blue-900 font-semibold self-start"
        >
          ← Volver
        </button>

        <div className="flex-1">
          <FilterBar
            filters={filters}
            onChange={setFilters}
            subcategories={subcategories}
          />
        </div>

      </div>

      <CourseList
        courses={filteredCourses}
        onSelectCourse={(course) =>
          console.log("Curso seleccionado:", course)
        }
      />

    </div>
  );
}
