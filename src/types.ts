// types.ts

export interface Course {
  id: number;
  nombre: string;
  clases: number;
  etiqueta: string;
  categoria: string;
  descripcion: string;
  temario: {
    titulo: string;
    contenido: string[];
  }[];
}

export interface Filters {
  search: string;
  category: string;
  level: string;
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
  onChange: (newFilters: Filters) => void;
}
