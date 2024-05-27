import { useContext } from "react";
import StudentContext from "../context/StudentContext";

export default function StudentList() {
	const { students, deleteStudent } = useContext(StudentContext);

	return (
		<ul className="studentListContainer">
			<li className="studentList">
				<div>ID</div>
				<div>Name</div>
				<div>Grade</div>
			</li>
			{students.map((student) => (
				<li key={student.id} className="studentList">
					<div>{student.id}.</div>
					<div>{student.name}</div>
					<div>{student.grade}</div>
					<div>
						<button onClick={() => deleteStudent(student.id)}>Delete</button>
					</div>
				</li>
			))}
		</ul>
	);
}
