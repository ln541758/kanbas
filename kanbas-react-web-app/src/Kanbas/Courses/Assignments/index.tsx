import { BsGripVertical } from "react-icons/bs";
import AssignmentControl from "./AssignmentControl";
import { FaPlus } from "react-icons/fa6";
import { IoEllipsisVertical } from "react-icons/io5";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { GiNotebook } from "react-icons/gi";
import "./index.css";
import { useParams } from "react-router";
import { deleteAssignment, setAssignment, setAssignments } from "./reducer";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as client from "./client";
import { useEffect } from "react";

export default function Assignments() {
    const { cid } = useParams();
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);
    const dispatch = useDispatch();


    const fetchAssignments = async () => {
        const assignments = await client.findAssignmentsForCourse(cid as string);
        dispatch(setAssignments(assignments));
    };

    const removeAssignment = async (assignmentId: string) => {
           client.deleteAssignment(assignmentId);
         dispatch(deleteAssignment(assignmentId));
    }

    useEffect(() => {
        fetchAssignments();
    }, []);


    return (
        <div id="wd-assignments">

            <AssignmentControl />
            <li className="wd-assignment-list list-group-item p-0 m-5 fs-5 border-gray ">
                <div className="wd-title p-3 ps-2 bg-secondary align-items-center">
                    <div className="icon-container">
                        <div className="left-icons">
                            <BsGripVertical className="me-2 fs-3" />
                            <span style={{ fontWeight: "bold" }}>ASSIGNMENTS</span>
                        </div>
                        <div className="right-icons">
                            <span className="wd-assignment-rounded-corners-all-around
                        wd-assignment-border-thin wd-assignment-border-black
                        wd-assignment-border-solid p-1">
                                40% of Total
                            </span>
                            <FaPlus className="position-relative me-2 ms-2" />
                            <IoEllipsisVertical className="fs-4" />
                        </div>
                    </div>

                </div>
                <ul className="wd-assignment-list-item list-group rounded-0 border-5 border-start border-success">
                    {assignments.filter((assignment: any) => assignment.course === cid).map((assignment: any) => (
                        <li className="wd-assignment-list-item list-group-item p-3 ps-1">
                            <div className="row align-items-center">
                                <div className="col-1">
                                    <BsGripVertical className="me-2 fs-3" />
                                    <GiNotebook className="me-0 fs-3 text-success" />
                                </div>
                                <div className="col-9 d-flex flex-column justify-content-center">
                                    <Link
                                        className="wd-assignment-link"
                                        to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                                        style={{ textDecoration: "none", color: "black", fontWeight: "bold", marginRight: '10px' }}
                                        onClick={()=>dispatch(setAssignment(assignment)) }>
                                        {assignment._id + " " + assignment.title}
                                    </Link>
                                    <p>
                                        <span style={{ color: "red" }}>MultAssignments</span> |
                                        <span style={{ fontWeight: "bold" }}> Not Available</span> until {assignment.availableDate} |<br />
                                        <span style={{ fontWeight: "bold" }}>Due</span> {assignment.dueDate} | points: {assignment.points}
                                    </p>
                                </div>
                                <div className="col-2">
                                    <AssignmentControlButtons
                                        assignmentId={assignment._id}
                                        deleteAssignment={(assignmentId) => removeAssignment(assignmentId)} />
                                </div>
                            </div>

                        </li>
                    ))}

                </ul>
            </li>


        </div>
    );
}
