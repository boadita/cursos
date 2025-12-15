// types.ts

export interface Course {
  id: string;
  nombre: string;
  clases: number;
  etiqueta: string;
  categoria: string;
  subcategoria: string;
  descripcion: string;
  temario: {
    titulo: string;
    contenido: string[];
  }[];
}

export interface Filters {
  search: string;
  subcategory: string;
}

export interface CourseCardProps {
  course: Course;
  onSelect?: (course: Course) => void;
}

export interface CourseListProps {
  courses: Course[];
  onSelectCourse?: (course: Course) => void;
}

export interface CourseDetailProps {
  course: Course;
  onBack?: () => void;
}

export interface FilterBarProps {
  filters: Filters;
  subcategories: string[];
  onChange: (newFilters: Filters) => void;
}
