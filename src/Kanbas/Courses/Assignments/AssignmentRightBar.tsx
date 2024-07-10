import React from "react";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaTrash } from "react-icons/fa";
import { useDispatch} from "react-redux";


export default function LessonControlButtons({
  floatEnd, assignmentsName, deleteAssignment
}: {
  floatEnd: boolean;
  assignmentsName: string;
  deleteAssignment: (assignmentsName: string) => any;
}) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    const isConfirmed = window.confirm("Do you want to delete this assignment?");
        if (isConfirmed) {
            dispatch(deleteAssignment(assignmentsName));
        }
  }
  return (
    <div
      className={`d-flex ${
        floatEnd ? "float-end" : "ms-auto"
      } align-items-center`}
    >
      <FaTrash
        className="text-danger me-2 mb-1"
        onClick={() => {handleDelete()}}
        style = {{cursor: "pointer"}}
      />
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
