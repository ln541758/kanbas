import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import "./index.css";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { addAssignment } from "./reducer";


export default function AssignmentControl() {
    const { cid } = useParams();
    return (
      <div id="wd-assignments-controls" className="text-nowrap d-flex p-0 m-5 justify-content-between">
        <div className="search-bar-container form-control " id="wd-assignments-search-bar">
          <CiSearch id="wd-search-icon" style={{fontSize:"1.5rem"}}/>
          <input type="text" id="wd-search-bar" placeholder="Search" />
        </div>

        <div>
        <button id="wd-add-assignment-btn" className="btn btn-lg bg-secondary me-1">
            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
            Group
          </button>

          <Link key={`${cid}`} to={`${cid}`} >
          <button id="wd-add-assignment-btn" className="btn btn-lg btn-danger me-1">
            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
            Assignment
          </button>
          </Link>


        </div>
      </div>
    );
  }
