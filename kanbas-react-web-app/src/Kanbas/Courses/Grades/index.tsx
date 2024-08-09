import { IoMdSettings } from "react-icons/io";
import { FaFileImport, FaSearch } from "react-icons/fa";
import { FaFileExport } from "react-icons/fa";
import { CiFilter } from "react-icons/ci";
import * as db from "../../Database";
import "./style.css"
import { useParams } from "react-router";

export default function Grades() {
    const { cid } = useParams();
    // retrieve the list of students id enrolled in the course
    const studentList = db.enrollments.filter((enrollment) => enrollment.course === cid);
    // retrieve the list of students' information from the user database using the student id
    const students = studentList.map(student => {
        const user = db.users.find(user => user._id === student.user);
        return user;
    });
    // retrieve the list of assignments in the course using the course id.
    const assignmentList = db.assignments.filter((assignment) => assignment.course === cid);


    return (
        <div id="wd-grades" className="d-flex flex-column text-nowrap pl-8" >
            <div className="row mb-3">
                <div className="mb-3 flex">
                    <button id="wd-grades-setting-buttons" className="btn btn-lg btn-secondary float-end me-1 text-dark">
                        <IoMdSettings />
                    </button>
                    <div className="dropdown d-inline me-1 float-end">
                        <button id="wd-grades-export-buttons" className="btn btn-lg btn-secondary dropdown-toggle"
                            type="button" data-bs-toggle="dropdown">
                            <FaFileExport className="me-2" />
                            Export
                        </button>
                        <ul className="dropdown-menu">
                            <li>
                                <a id="wd-grades-export-btn-items" className="dropdown-item" href="#">
                                    options
                                </a>
                            </li>
                        </ul>
                    </div>
                    <button id="wd-grades-import-buttons" className="btn btn-lg btn-secondary me-1 float-end text-dark">
                        <FaFileImport className="me-2" />
                        Import
                    </button>



                </div>
            </div>
            {/* studen names and assignment names */}
            <div className="row mb-3">
                <div className="wd-grades-student-name col-6 ">
                    <label htmlFor="wd-grades-student-name" className="mb-3 p-0" style={{ fontWeight: "bold" }}>Student Names</label>
                    <div style={{ position: 'relative', width: '590px' }}>
                        <FaSearch style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }} />
                        <input type="text" id="wd-grades-student-name"
                            className="form-control mb-2 pl-5" placeholder="Search Students" style={{ paddingLeft: "40px" }} />
                    </div>
                </div>
                <div className="wd-grades-assignment-name col-6 ">
                    <label htmlFor="wd-grades-assignment-name" className="mb-3 p-0" style={{ fontWeight: "bold" }}>Assignment Names</label>
                    <div style={{ position: 'relative', width: '590px' }}>
                        <FaSearch style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }} />
                        <input type="text" id="wd-grades-assignment-name"
                            className="form-control mb-2 pl-5" placeholder="Search Assignments" style={{ paddingLeft: "40px" }} />
                    </div>
                </div>
            </div>

            {/* filter button */}
            <div className="wd-filter-button d-flex row mb-3">
                <button id="wd-grades-import-buttons" className="btn btn-lg btn-secondary me-1 float-start text-dark" style={{ width: '200px' }}>
                    <CiFilter className="me-2" />
                    Apply Filter
                </button>

            </div>
            <div className="row mb-3">
                <div className="table-responsive ">
                    <table className="table table-bordered table-striped">
                        <tbody>
                            <tr style={{ fontWeight: 'bold' }}>
                                <td>Student Name</td>
                                {assignmentList.map((assignment) => (
                                    <td>{assignment?.title}</td>
                                ))}
                            </tr>
                            {students.map((student) => (
                                <tr>
                                    <td><span className="table-name-text">
                                        {student?.firstName} {student?.lastName}</span></td>
                                        {/* fill the table with the grades of the students for each assignment */}
                                    {Array(assignmentList.length).fill(null).map((_, index) => {
                                        const grade = db.grades.filter((grade) => grade.student === student?._id)[index];
                                        return (
                                            <td>
                                                {grade ? grade.grade : ''}
                                            </td>
                                        );
                                    })}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>

    );
}