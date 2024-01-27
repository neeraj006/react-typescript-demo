import "./App.css";
import { Students } from "./components/Component.types";
import Greet from "./components/Greet";

function App() {
  const teacher = {
    firstName: "Neeraj",
    lastName: "Dagar",
  };

  const students: Students = Array.from({ length: 10 }, (_, index) => ({
    name: `Student ${index + 1}`,
    marks: Math.floor(Math.random() * 100),
  }));

  return (
    <div className="App">
      <Greet name="John Doe" teacher={teacher} students={students} />
    </div>
  );
}

export default App;
