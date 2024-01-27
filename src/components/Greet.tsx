import Button from "./Button";
import { Name, Students } from "./Component.types";
import StudentComponent from "./Student";

type GreetProps = {
  name: string;
  teacher: Name;
  students: Students;
};
// create array of students with mock name and marks of 10 length

export default function Greet({ name, teacher, students = [] }: GreetProps) {
  return (
    <div>
      <h2>Welcome {name}</h2>
      <h2>
        Teacher: {teacher.firstName} {teacher.lastName}
      </h2>
      {students.map((student) => (
        <StudentComponent
          style={{ fontWeight: "bolder", color: "Highlight" }}
          key={student.name}
        >
          <span>
            {student.name}-{student.marks}
          </span>
        </StudentComponent>
      ))}
      <Button handleClick={(event) => console.log("clicked", event)} />
    </div>
  );
}
