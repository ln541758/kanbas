import { CiFilter } from "react-icons/ci";
import GradesControl from "./GradeControl";
import { FaSearch } from "react-icons/fa";

export default function Grades() {
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
              <th scope="col" style={{ textAlign: "center" }}>
                A1 SETUP <br /> Out of 100
              </th>
              <th scope="col" style={{ textAlign: "center" }}>
                A2 HTML <br /> Out of 100
              </th>
              <th scope="col" style={{ textAlign: "center" }}>
                A3 CSS <br /> Out of 100
              </th>
              <th scope="col" style={{ textAlign: "center" }}>
                A4 BOOTSTRAP <br /> Out of 100
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <th scope="row" className="text-danger ps-5">
                Jane Adams
              </th>
              <td style={{ textAlign: "center" }}>100%</td>
              <td style={{ textAlign: "center" }}>96.67%</td>
              <td style={{ textAlign: "center" }}>92.18%</td>
              <td style={{ textAlign: "center" }}>66.22%</td>
            </tr>
            <tr>
              <th scope="row" className="text-danger ps-5">
                Christina Allen
              </th>
              <td style={{ textAlign: "center" }}>100%</td>
              <td style={{ textAlign: "center" }}>100%</td>
              <td style={{ textAlign: "center" }}>100%</td>
              <td style={{ textAlign: "center" }}>100%</td>
            </tr>
            <tr>
              <th scope="row" className="text-danger ps-5">
                Samreen Ansari
              </th>
              <td style={{ textAlign: "center" }}>100%</td>
              <td style={{ textAlign: "center" }}>100%</td>
              <td style={{ textAlign: "center" }}>100%</td>
              <td style={{ textAlign: "center" }}>100%</td>
            </tr>
            <tr>
              <th scope="row" className="text-danger ps-5">
                Han Bao
              </th>
              <td style={{ textAlign: "center" }}>100%</td>
              <td style={{ textAlign: "center" }}>100%</td>
              <td style={{ textAlign: "center" }}>
                <input
                  type="text"
                  className="border-1 rounded-2 border-danger"
                  value="88.03%"
                  style={{ textAlign: "center" }}
                ></input>
              </td>
              <td style={{ textAlign: "center" }}>98.99%</td>
            </tr>
            <tr>
              <th scope="row" className="text-danger ps-5">
                Mahi Sai Srinivas Bobbilii
              </th>
              <td style={{ textAlign: "center" }}>100%</td>
              <td style={{ textAlign: "center" }}>96.69%</td>
              <td style={{ textAlign: "center" }}>98.37%</td>
              <td style={{ textAlign: "center" }}>100%</td>
            </tr>
            <tr>
              <th scope="row" className="text-danger ps-5">
                Siran Cao
              </th>
              <td style={{ textAlign: "center" }}>100%</td>
              <td style={{ textAlign: "center" }}>100%</td>
              <td style={{ textAlign: "center" }}>100%</td>
              <td style={{ textAlign: "center" }}>100%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
