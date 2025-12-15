import type { FilterBarProps } from "../types";

export default function FilterBar({ filters, onChange, subcategories }: FilterBarProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">

      {/* Búsqueda */}
      <input
        type="text"
        placeholder="Buscar curso..."
        value={filters.search}
        onChange={e => onChange({ ...filters, search: e.target.value })}
        className="border p-2 rounded w-full md:w-1/3"
      />

      {/* Subcategorías dinámicas */}
      <select
        value={filters.subcategory}
        onChange={e => onChange({ ...filters, subcategory: e.target.value })}
        className="border p-2 rounded w-full md:w-1/4"
      >
        <option value="">Todas las subcategorías</option>

        {subcategories.map(sub => (
          <option key={sub} value={sub}>
            {sub}
          </option>
        ))}
      </select>
    </div>
  );
}
