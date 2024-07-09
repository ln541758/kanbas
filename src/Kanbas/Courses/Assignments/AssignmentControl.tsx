import { FaPlus, FaSearch } from "react-icons/fa";
import { useNavigate} from "react-router";

export default function AssignmentControl() {
  const navigate = useNavigate();
  return (
    <div id="wd-assignment-control" className="mb-5">
      <button
        id="wd-add-assignment-btn"
        className="btn btn-lg btn-danger me-1 float-end button-height rounded-1"
        onClick={() => {
          navigate("newAssignments");
        }}
      >
        <FaPlus
          className="position-relative me-2"
          style={{ bottom: "1px" }}
        />
        Assignment
      </button>

      <button
        id="wd-assignment-btn"
        className="btn btn-lg btn-secondary me-1 float-end button-height rounded-1 me-2"
      >
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Group
      </button>

      <div id="wd-assignment-search-box" className="d-flex rounded-1">
        <span className="gray position-absolute ms-3 mt-2">
          <FaSearch />
        </span>
        <div className="col-sm-8 ">
          <input
            type="text"
            className="border-1 form-control button-height ps-5"
            id="wd-search-assignment"
            placeholder="Search..."
          />
        </div>
      </div>

    </div>
  );
}
