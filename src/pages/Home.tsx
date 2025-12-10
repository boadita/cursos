import { useState } from "react";
import CourseList from "../components/CourseList";
import FilterBar from "../components/FilterBar";
import type { Filters, Course } from "../types";
import coursesData from "../data/courses.json";

export default function Home() {
  // Estado tipado correctamente
  const [filters, setFilters] = useState<Filters>({
    search: "",
    category: "",
    level: "",
  });

  // Convertimos el JSON a tipo Course (si corresponde)
  const courses = coursesData as Course[];

  // 🔥 APLICAR FILTROS AQUÍ
  const filteredCourses = courses.filter(course => {
    // Filtro de búsqueda por nombre
    const matchesSearch = course.nombre
      .toLowerCase()
      .includes(filters.search.toLowerCase());

    // Filtro por categoría
    const matchesCategory =
      filters.category === "" || course.categoria === filters.category;

    return matchesSearch && matchesCategory;
  });
  
  return (
    <div className="bg-yellow-500 text-black text-center font-bold p-6 w-full max-w-screen-xl mx-auto overflow-x-hidden">

      {/* Componente de filtros */}
      <FilterBar
        filters={filters}
        onChange={(newFilters) => setFilters(newFilters)}
      />

      {/* Lista de cursos */}
      <CourseList
        courses={filteredCourses}
        onSelectCourse={(course) => console.log("Curso seleccionado:", course)}
      />
    </div>
  );
}
