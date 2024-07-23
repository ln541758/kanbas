import { FaEdit } from "react-icons/fa";
import AssignmentControl from "./AssignmentControl";
import { BsGripVertical } from "react-icons/bs";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAssignments, deleteAssignment } from "./reducer";
import AssignmentRightBar from "./AssignmentRightBar";
import * as client from "./client";
import { useEffect } from "react";

export default function Assignments() {
  const { cid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentReducer);
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fetchAssignments = async () => {
    const assignments = await client.findAssignmentsForCourse(cid as string);
    dispatch(setAssignments(assignments));
  };
  useEffect(() => {
    fetchAssignments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const removeAssignment = async (assignmentId: string) => {
    await client.deleteAssignment(assignmentId);
    dispatch(deleteAssignment(assignmentId));
  };

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

          {assignments &&
            assignments
              .filter((assignment: any) => assignment.course === cid)
              .map((assignment: any) => (
                <ul
                  id="wd-assignment-info"
                  className="wd-lessons list-group rounded-0"
                >
                  <li className="d-flex wd-lesson list-group-item p-3 ps-1 align-items-center">
                    <BsGripVertical className="me-2 fs-3" />
                    <FaEdit
                      className="me-2 fs-3"
                      style={{ color: "green", cursor: "pointer" }}
                      onClick={() => navigate(`${pathname}/${assignment._id}`)}
                    />
                    <div className="text-muted ms-3">
                      <Link
                        to={`${pathname}/${assignment._id}`}
                        className="assignment-title text-dark"
                      >
                        <h5 className="mb-1 fs-5 fw-bold">{assignment.name}</h5>
                      </Link>
                      <div className="fs-6">
                        <span className="text-danger">{assignment.title}</span>
                        <span> | </span>
                        <span className="fw-bold">Not available until</span>
                        <span> {assignment.available} | </span>
                        <br />
                        <span className="fw-bold">Due</span>
                        <span>
                          {" "}
                          {assignment.due} | {assignment.points} pts
                        </span>
                      </div>
                    </div>
                    <AssignmentRightBar
                      floatEnd={false}
                      assignmentsName={assignment._id}
                      deleteAssignment={removeAssignment}
                    />
                  </li>
                </ul>
              ))}
        </li>
      </ul>
    </div>
  );
}
