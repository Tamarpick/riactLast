import { createContext, useState, useEffect } from "react";

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
	const [students, setStudents] = useState(
		JSON.parse(localStorage.getItem("students")) || []
	);

	useEffect(() => {
		localStorage.setItem("students", JSON.stringify(students));
	}, [students]);

	const deleteStudent = (id) => {
		setStudents(students.filter((student) => student.id !== id));
	};

	const addStudent = (newStudent) => {
		newStudent.id = students.length + 1;
		setStudents([...students, newStudent]);
	};

	return (
		<StudentContext.Provider value={{ students, addStudent, deleteStudent }}>
			{children}
		</StudentContext.Provider>
	);
};

export default StudentContext;
