import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment, setAssignment,clearAssignment } from "./reducer";
import * as client from "./client";


export default function AssignmentEditor() {
    const { cid, assignmentId } = useParams();
    // the assignment we are editing
    const assignment = useSelector((state: any) => state.assignmentsReducer.assignment);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const createAssignment = async (assignment: any) => {
        const newAssignment =  client.createAssignment(
            cid as string, assignment);
        dispatch(addAssignment(newAssignment));
    };

    const saveAssignment = async (assignment: any) => {
        const status = await client.updateAssignment(assignment);
        dispatch(updateAssignment(assignment));
    }


    const handleSaveClick = (e: any) => {
    if (assignmentId === cid) {
        createAssignment({...assignment, course: cid});
    } else{
        saveAssignment((assignment));
    }
        dispatch(clearAssignment());
        navigate(`/Kanbas/Courses/${cid}/Assignments`);
    };

    const handleCancelClick = (e: any) => {
            dispatch(clearAssignment());
            navigate(`/Kanbas/Courses/${cid}/Assignments`);
        };

    return (
        <div id="wd-assignments-editor" className="m-5" style={{ width: '800px' }}>
            <div className="d-felx flex-column p-1 m-1 ">

                <div className="mb-3">
                    <label htmlFor="wd-name" className="mb-3"
                        style={{ fontWeight: 'bold' }}>Assignment Name</label>
                    <input id="wd-name" className="form-control"
                        placeholder="Assignment Name"
                        value={assignment?.title || ""}
                        onChange={(e) => dispatch(setAssignment({ ...assignment, title: e.target.value.toString()}))} />
                </div>

                <div className="mb-3">
                    <textarea id="wd-description" className="form-control" rows={10}
                        placeholder="Description"
                        value={assignment?.description || ""}
                        onChange={(e) => dispatch(setAssignment({ ...assignment, description: e.target.value }))}>
                    </textarea>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="wd-points" className="col-sm-3 col-formlabel"
                        style={{ fontWeight: 'bold' }}>Points</label>
                    <div className="col-sm-9">
                        <input id="wd-points"
                            placeholder="100"
                            className="form-control"
                            value={assignment?.points || 0}
                            onChange={(e) => dispatch(setAssignment({ ...assignment, points: parseInt(e.target.value) }))} />
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="wd-assign-to" className="col-sm-3 col-formlabel "
                        style={{ fontWeight: 'bold' }}>
                        Assign</label>
                    <div className="col-sm-9">
                        <div className="form-control">
                            <label htmlFor="wd-due-date" className="mb-1 p-0" style={{ fontWeight: 'bold' }}>Due</label><br />
                            <input type="date" className=" form-control m-2 p-0"
                                id="wd-due-date"
                                value={assignment?.dueDate || ""}
                                onChange={(e) => dispatch(setAssignment({ ...assignment, dueDate: e.target.value.toString() }))} />
                            <div className="row">
                                <div className="col-sm-6">
                                    <label htmlFor="wd-available-from" style={{ fontWeight: "bold" }}>Available from</label>

                                    <input type="date" className=" form-control m-2 p-0 "
                                        id="wd-available-from"
                                        value={assignment?.availableDate || ""}
                                        onChange={(e) => dispatch(setAssignment({ ...assignment, availableDate: e.target.value.toString() }))} />
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="wd-available-until" style={{ fontWeight: "bold" }}>Until</label>

                                    <input type="date" className=" form-control m-2 p-0 col-sm-4"
                                        id="wd-available-until"
                                        value={assignment?.dueDate || ""}
                                        onChange={(e) => dispatch(setAssignment({ ...assignment, dueDate: e.target.value.toString() }))} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr />
                <div className="text-nowrap d-flex p-0 m-2 float-end">
                    <button id="wd-add-assignment-btn"
                        className="btn btn-xs bg-secondary me-1"
                        onClick={handleCancelClick}>
                        Cancel</button>

                    <button id="wd-add-assignment-btn"
                        className="btn btn-lg btn-danger me-1"
                        onClick={handleSaveClick}>
                        Save</button>
                </div>


            </div>
        </div>
    )
    }
