import type { FilterBarProps } from "../types";
export default function FilterBar({ filters, onChange }: FilterBarProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 bg-yellow-50 rounded-xl shadow mb-4">
      
      {/* Buscador */}
      <input
        type="text"
        placeholder="Buscar curso..."
        value={filters.search}
        onChange={e => onChange({ ...filters, search: e.target.value })}
        className="border p-2 rounded w-full md:w-1/3"
      />

      {/* Categorías */}
      <select
        value={filters.category}
        onChange={e => onChange({ ...filters, category: e.target.value })}
        className="border p-2 rounded w-full md:w-1/4"
      >
        <option value="">Todas las categorías</option>
        <option value="Framework de Frontend">Frontend</option>
        <option value="Framework de Backend">Backend</option>
        <option value="Desarrollo Web">Desarrollo Web</option>        
        <option value="Bases de Datos">Bases de datos</option>
        <option value="Lenguaje de programacion">Lenguaje de programación</option>
        <option value="Desarrollo y Control de Versiones">Desarrollo y Control de Versiones</option>
        <option value="Ofimatica">Ofimática</option>
      </select>

     </div>
  );
}