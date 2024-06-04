import { FaEdit, FaPlus } from "react-icons/fa";
import AssignmentControl from "./AssignmentControl";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <AssignmentControl />
      <ul id="wd-assignments-list" className="list-group rounded-0 ">
        <li className="d-inline list-group-item p-0 border-gray bg-secondary">
          <div className="dropdown wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            <button
              id="wd-assignments-btn"
              className="btn btn-lg btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
            >
              ASSIGNMENTS
            </button>
            <ul className="dropdown-menu">
              <li>
                <a
                  id="wd-publish-all-assignments-and-items-btn"
                  className="dropdown-item"
                  href="#"
                >
                  Publish all assignemnts and items
                </a>
              </li>
              <li>
                <a
                  id="wd-publish-assignments-only-button"
                  className="dropdown-item"
                  href="#"
                >
                  Publish assignment only
                </a>
              </li>
            </ul>
            <AssignmentControlButtons />
          </div>

          <ul
            id="wd-assignment-info"
            className="wd-lessons list-group rounded-0"
          >
            <li className="d-flex wd-lesson list-group-item p-3 ps-1 align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <FaEdit className="me-2 fs-3" style={{ color: "green" }} />
              <div className="text-muted ms-3">
                <a
                  className="assignment-title text-dark"
                  href="#/Kanbas/Courses/1234/Assignments/123"
                >
                  <h5 className="mb-1 fs-5 fw-bold">A1</h5>
                </a>
                <div className="fs-6">
                  <span className="text-danger">Multiple Modules</span>
                  <span> | </span>
                  <span className="fw-bold">Not available until</span>
                  <span> May 6 at 12:00am | </span>
                  <br />
                  <span className="fw-bold">Due</span>
                  <span> May 13 at 11:59pm | 100 pts</span>
                </div>
              </div>
              <LessonControlButtons floatEnd={false} />
            </li>
          </ul>

          <ul
            id="wd-assignment-info"
            className="wd-lessons list-group rounded-0"
          >
            <li className="d-flex wd-lesson list-group-item p-3 ps-1 align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <FaEdit className="me-2 fs-3" style={{ color: "green" }} />
              <div className="text-muted ms-3">
                <a
                  className="assignment-title text-dark"
                  href="#/Kanbas/Courses/1234/Assignments/123"
                >
                  <h5 className="mb-1 fs-5 fw-bold">A2</h5>
                </a>
                <div className="fs-6">
                  <span className="text-danger">Multiple Modules</span>
                  <span> | </span>
                  <span className="fw-bold">Not available until</span>
                  <span> May 13 at 12:00am | </span>
                  <br />
                  <span className="fw-bold">Due</span>
                  <span> May 20 at 11:59pm | 100 pts</span>
                </div>
              </div>
              <LessonControlButtons floatEnd={false} />
            </li>
          </ul>

          <ul
            id="wd-assignment-info"
            className="wd-lessons list-group rounded-0"
          >
            <li className="d-flex wd-lesson list-group-item p-3 ps-1 align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <FaEdit className="me-2 fs-3" style={{ color: "green" }} />
              <div className="text-muted ms-3">
                <a
                  className="assignment-title text-dark"
                  href="#/Kanbas/Courses/1234/Assignments/123"
                >
                  <h5 className="mb-1 fs-5 fw-bold">A3</h5>
                </a>
                <div className="fs-6">
                  <span className="text-danger">Multiple Modules</span>
                  <span> | </span>
                  <span className="fw-bold">Not available until</span>
                  <span> May 20 at 12:00am | </span>
                  <br />
                  <span className="fw-bold">Due</span>
                  <span> May 27 at 11:59pm | 100 pts</span>
                </div>
              </div>
              <LessonControlButtons floatEnd={false} />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
