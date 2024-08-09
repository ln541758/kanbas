import { IoEllipsisVertical } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa6";
import { FaPencil } from "react-icons/fa6";

export default function ModuleControlButtons({ moduleId, deleteModule, editModule}:
  { moduleId: string; deleteModule: (moduleId: string) => void;
    editModule: (moduleId: string) => void }) {
  return (
    <div className="float-end">
      <FaPencil onClick={() => editModule(moduleId)} className="text-primary me-2" />
      <FaTrash className="text-danger me-2" onClick={() => deleteModule(moduleId)}/>
      <FaCheckCircle className="text-success me-2"/>
      <FaPlus className="me-2"/>
      <IoEllipsisVertical className="fs-4" />
    </div>
);}
