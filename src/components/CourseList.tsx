import type { CourseListProps } from "../types";
import CourseCard from "./CourseCard";

export default function CourseList({ courses, onSelectCourse }: CourseListProps) {
  return (
    <div className="grid 
  grid-cols-1 
  sm:grid-cols-2 
  md:grid-cols-3 
  lg:grid-cols-4 
  gap-6 px-4 max-w-7xl mx-auto">
      {courses.map(course => (
        <CourseCard
          key={course.id}
          course={course}
          onSelect={onSelectCourse}
        />
      ))}
    </div>
  );
}
