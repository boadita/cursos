import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import type { CourseDetailProps } from "../types";

const images: Record<string, string> = import.meta.glob("../assets/courses/*.png", {
  eager: true,
  import: "default",
}) as Record<string, string>;

export default function CourseDetail({ course, onBack }: CourseDetailProps) {
  const imgSrc = images[`../assets/courses/${course.etiqueta}.png`];

  const generatePDF = async () => {
    const pdf = new jsPDF({
      unit: "pt",
      format: "a4",
    });

    const marginLeft = 50;
    let y = 50;

    // --- 1. Insertar imagen ---
    if (course.etiqueta) {
      const imgElement = document.getElementById("course-image") as HTMLImageElement;

      if (imgElement) {
        const canvas = await html2canvas(imgElement, {
          scale: 2,
          useCORS: true,
        });
        const imgData = canvas.toDataURL("image/png");

        pdf.addImage(imgData, "PNG", marginLeft, y, 120, 120);
        y += 150;
      }
    }

    // --- 2. Título del curso ---
    pdf.setFont("Helvetica", "bold");
    pdf.setFontSize(22);
    pdf.text(course.nombre, pdf.internal.pageSize.width / 2, y, {
      align: "center",
    });
    y += 40;

    // --- 3. Datos iniciales ---
    pdf.setFont("Helvetica", "normal");
    pdf.setFontSize(12);
    pdf.text(`Categoría: ${course.subcategoria}`, marginLeft, y);
    y += 20;
    pdf.text(`Clases: ${course.clases}`, marginLeft, y);
    y += 30;

    pdf.setFont("Helvetica", "bold");
    pdf.text("Descripción:", marginLeft, y);
    y += 20;
    pdf.setFont("Helvetica", "normal");

    const descLines = pdf.splitTextToSize(course.descripcion, 500);
    descLines.forEach((line: string) => {
      if (y > 750) {
        pdf.addPage();
        y = 50;
      }
      pdf.text(line, marginLeft, y);
      y += 18;
    });

    y += 20;

    // --- 4. TEMARIO ---
    pdf.setFont("Helvetica", "bold");
    pdf.setFontSize(16);
    pdf.text("Temario del Curso:", marginLeft, y);
    y += 30;

    pdf.setFont("Helvetica", "normal");
    pdf.setFontSize(12);

    course.temario.forEach((tema: any) => {
      if (y > 750) {
        pdf.addPage();
        y = 50;
      }

      pdf.setFont("Helvetica", "bold");
      pdf.text(`• ${tema.titulo}`, marginLeft, y);
      y += 20;

      pdf.setFont("Helvetica", "normal");

      tema.contenido.forEach((item: string) => {
        const itemLines = pdf.splitTextToSize(item, 450);

        itemLines.forEach((line: string) => {
          if (y > 750) {
            pdf.addPage();
            y = 50;
          }
          pdf.text(`- ${line}`, marginLeft + 20, y);
          y += 18;
        });

        y += 5;
      });

      y += 10;
    });

    pdf.save(`${course.nombre}.pdf`);
  };

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
        <img src={imgSrc} id="course-image" alt={course.etiqueta} className="w-40 h-50 object-contain mx-auto" />

        {/* Título */}
        <h2 className="text-4xl font-extrabold text-gray-800 text-center">{course.nombre}</h2>

        {/* Categoría */}
        <p className="text-lg text-gray-700 mt-2">
          <span className="font-semibold text-gray-900">Categoría:</span>{" "}
          {course.subcategoria}
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
        {/* Botón PDF */}
        <button
          onClick={generatePDF}
          className="mt-6 px-4 py-2 bg-black text-white rounded hover:bg-red-700 object-contain mx-auto"
        >
          📄 Ver contenido en PDF
        </button>
      </div>
    </div>
  );
}
