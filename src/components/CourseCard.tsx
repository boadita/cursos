import { Link } from "react-router-dom";
import type { CourseCardProps } from "../types";

const images: Record<string, string> = import.meta.glob("../assets/courses/*.png", {
  eager: true,
  import: "default",
}) as Record<string, string>;

export default function CourseCard({ course }: CourseCardProps) {
  const imgSrc = images[`../assets/courses/${course.etiqueta}.png`];
  return (
    <div className="p-4 shadow-lg rounded-xl bg-yellow-200 border hover:shadow-xl transition">

      <img src={imgSrc} alt={course.etiqueta} className="mx-auto w-40 h-40 md:w-48 md:h-48 object-contain aspect-square"/>

      <h2 className="text-xl font-bold text-gray-800">{course.nombre}</h2>
      <p className="text-gray-600 text-sm mt-1">
        Categoría: <span className="font-medium">{course.categoria}</span>
      </p>
      <p className="text-gray-500 text-sm">Clases: {course.clases}</p>

      <p className="text-gray-700 text-sm mt-2 line-clamp-3">
        {course.descripcion}
      </p>

      <Link
        to={`/curso/${course.id}`}
        className="text-blue-600 font-semibold mt-3 inline-block hover:underline"
      >
        Ver detalles →
      </Link>
    </div>
  );
}
