import { useSelector } from "react-redux";
import Modules from "../Modules";
import CourseStatus from "./Status";

export default function Home() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  return (

    <div id="wd-home" className="d-flex">
      <div className="flex-fill me-5">
        <Modules />

      </div>
      {currentUser.role === "FACULTY" && (
      <div className="d-none d-xl-block">
        <CourseStatus />
      </div>)}
    </div>


  );
}
