import type { CourseDetailProps } from "../types";

const images: Record<string, string> = import.meta.glob("../assets/courses/*.png", {
  eager: true,
  import: "default",
}) as Record<string, string>;

export default function CourseDetail({ course, onBack }: CourseDetailProps) {
  const imgSrc = images[`../assets/courses/${course.etiqueta}.png`];
  return (
    <div className="bg-yellow-500 p-6 justify-center">
      <div className="w-full bg-yellow-100 shadow-xl rounded-2xl p-8">

        {/* Botón Volver */}
        <button
          onClick={onBack}
          className="mb-6 inline-block text-blue-600 hover:text-blue-800 font-semibold"
        >
          ← Volver
        </button>

        {/* Imagen */}
        <img src={imgSrc} alt={course.etiqueta} className="w-40 h-50 object-contain mx-auto"/>

        {/* Título */}
        <h2 className="text-4xl font-extrabold text-gray-800 text-center">{course.nombre}</h2>

        {/* Categoría */}
        <p className="text-lg text-gray-700 mt-2">
          <span className="font-semibold text-gray-900">Categoría:</span>{" "}
          {course.categoria}
        </p>

        {/* Descripción */}
        <p className="mt-4 text-gray-700 leading-relaxed text-justify">
          {course.descripcion}
        </p>

        {/* Temario */}
        <h3 className="text-2xl mt-8 font-bold text-gray-900 border-b pb-2">
          Temario del curso:
        </h3>

        <div className="mt-4 space-y-6">
          {course.temario.map((t, i) => (
            <div
              key={i}
              className="bg-yellow-400 border rounded-xl p-4 shadow-sm hover:shadow-md transition"
            >
              <h4 className="font-bold text-lg text-gray-800">{t.titulo}</h4>

              <ul className="list-disc ml-6 mt-2 text-gray-700">
                {t.contenido.map((c, j) => (
                  <li key={j}>{c}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
