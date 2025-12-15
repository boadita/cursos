import { useNavigate } from "react-router-dom";
import escolares from "../assets/escolares.png";
import pre from "../assets/pre.png";
import univ from "../assets/univ.png";
import ingles from "../assets/ingles.png";
import info from "../assets/info.png";
import prog from "../assets/prog.png";

const categorias = [
  { id: "escolares", nombre: "Escolares", img: escolares },
  { id: "preuniversitarios", nombre: "Preuniversitarios", img: pre },
  { id: "universitarios", nombre: "Universitarios", img: univ },
  { id: "ingles", nombre: "Inglés", img: ingles },
  { id: "informatica", nombre: "Informática", img: info },
  { id: "programacion", nombre: "Programación", img: prog },
];

export default function Portada() {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10">
      {categorias.map(cat => (
        <div
          key={cat.id}
          onClick={() => navigate(`/categoria/${cat.id}`)}
          className="cursor-pointer text-center hover:scale-105 transition"
        >
          <img src={cat.img} alt={cat.id} className="mx-auto w-48" />
          <h3 className="mt-4 text-xl font-bold">{cat.nombre}</h3>
        </div>
      ))}
    </div>
  );
}
