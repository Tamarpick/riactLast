import { useContext } from "react";
import "./App.css";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import { StudentContext, StudentProvider } from "./context/StudentContext";

function App() {
	const studentsContext = useContext(StudentContext);
	return (
		<StudentProvider>
			<div className="App">
				<StudentForm />
				<StudentList />
			</div>
		</StudentProvider>
	);
}

export default App;
