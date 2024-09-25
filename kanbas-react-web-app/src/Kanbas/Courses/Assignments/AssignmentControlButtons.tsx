import { IoEllipsisVertical } from "react-icons/io5";
import { FaTrash } from "react-icons/fa6";
import { BsCheckCircleFill } from "react-icons/bs";
import { useDispatch } from "react-redux";

export default function AssignmentControlButtons({ assignmentId, deleteAssignment}:
    { assignmentId: string; deleteAssignment: (assignmentId: string) => void}){
        const dialogId = `wd-delete-assignment-dialog-${assignmentId}`;

    return (
        <div className="float-end">
            <FaTrash className="text-danger me-3"
            data-bs-toggle="modal"
        data-bs-target={`#${dialogId}`}/>
            <BsCheckCircleFill className="text-success me-2"/>
            <IoEllipsisVertical className="fs-4" />

            <div id={dialogId} className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">
                                Delete Assignment </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                            <p>Are you sure you want to delete this assignment?</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                NO </button>
                            <button onClick={() => deleteAssignment(assignmentId)} type="button"  data-bs-dismiss="modal" className="btn btn-danger">
                                YES </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


);}