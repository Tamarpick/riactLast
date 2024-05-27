import React, { useContext, useRef } from "react";
import StudentContext from "../context/StudentContext";

export default function StudentForm() {
	const studentsContext = useContext(StudentContext);
	const nameRef = useRef();
	const gradeRef = useRef();
	const handleSubmit = (e) => {
		const name = nameRef.current.value.trim();
		const grade = parseInt(gradeRef.current.value.trim(), 10);
		if (name === "" || isNaN(grade) || grade < 0 || grade > 100) {
			alert(
				"Name must not be empty and grade must be a number between 0 and 100"
			);
			return;
		}
		const student = {
			name,
			grade,
		};
		studentsContext.addStudent(student);
		nameRef.current.value = "";
		gradeRef.current.value = "";
		e.preventDefault();
	};
	return (
		<div className="studentFormContainer">
			<h2>Students</h2>
			<form onSubmit={handleSubmit}>
				<label>Name:</label>
				<input type="text" ref={nameRef} />
				<label>Grade:</label>
				<input type="number" min="0" max="100" ref={gradeRef} />
				<button type="submit">Add</button>
			</form>
		</div>
	);
}
