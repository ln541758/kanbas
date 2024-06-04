import { TbFileExport, TbFileImport } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";

export default function GradesControl() {
  return (
    <div
      id="wd-grades-control"
      className="d-flex justify-content-end mt-5 me-2"
    >
      <button className="btn btn-secondary me-2">
        <TbFileImport className="me-2" size="24" />
        Import
      </button>
      <button
        className="btn btn-secondary me-1 dropdown-toggle"
        data-bs-toggle="dropdown"
      >
        <TbFileExport className="me-2" size="24" />
        Export
      </button>
      <ul className="dropdown-menu">
        <li className="dropdown-item">Export selected</li>
        <li className="dropdown-item">Export all</li>
      </ul>
      <button className="btn btn-secondary">
        <IoMdSettings size="24" />
      </button>
    </div>
  );
}
