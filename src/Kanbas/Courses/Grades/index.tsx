import { CiFilter } from "react-icons/ci";
import GradesControl from "./GradeControl";
import { FaSearch } from "react-icons/fa";
import { useParams } from "react-router";
import { assignments, enrollments, grades, users } from "../../Database";

export default function Grades() {
  const { cid } = useParams();

  const enrollment = enrollments.filter(
    (enrollment: any) => enrollment.course === cid
  );
  const assignment = assignments.filter(
    (assignment: any) => assignment.course === cid
  );

  return (
    <div id="wd-grades" className="container">
      <GradesControl />

      <div className="d-flex mt-3">
        <div id="wd-grade-student-name" className="col-sm-6 pe-4">
          <label className="fw-bold">Student Names</label>
          <div className="mt-2 ">
            <span className="mt-1 gray position-absolute ms-3">
              {" "}
              <FaSearch />{" "}
            </span>
            <select
              className="form-select border-1 text-secondary ps-5"
              id="wd-student-names"
            >
              <option value="Search Students" selected>
                Search Students
              </option>
              <option>Student 1</option>
              <option>Student 2</option>
              <option>Student 3</option>
            </select>
          </div>
        </div>

        <div id="wd-grade-assignment-name" className="col-sm-6">
          <label className="fw-bold">Assignment Names</label>
          <div className="mt-2">
            <span className="col-sm-1 mt-1 gray position-absolute ms-3">
              {" "}
              <FaSearch />{" "}
            </span>
            <select
              className="form-select border-1 text-secondary ps-5"
              id="wd-student-names"
            >
              <option value="Search Students" selected>
                Search Assignments
              </option>
              <option>Assignment 1</option>
              <option>Assignment 2</option>
              <option>Assignment 3</option>
            </select>
          </div>
        </div>
      </div>

      <button className="btn btn-secondary mt-3 mb-3">
        <CiFilter className="me-2" size="24" />
        Apply Filters
      </button>

      <div>
        <table className="table table-bordered table-striped ">
          <thead>
            <tr>
              <th scope="col" className="ps-5 pb-3">
                Student Name
              </th>
              {assignment.map((assignment) => (
                <th scope="col" style={{ textAlign: "center" }}>
                  {assignment.title} <br /> Out of 100
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {enrollment.map((enroll) => {
              const user = users.find((user) => user._id === enroll.user);
              return (
                <tr>
                  <th scope="row" className="text-danger ps-5">
                    {`${user?.firstName} ${user?.lastName}`}
                  </th>

                  {assignment.map((assign) => {
                    const grade = grades.find(
                      (grade) =>
                        grade.student === user?._id &&
                        grade.assignment === assign._id
                    );
                    return (
                      <th style={{ textAlign: "center" }} key={assign._id}>
                        {grade ? grade.grade : "N/A"}
                      </th>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
