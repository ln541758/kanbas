import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
import { FaAlignJustify } from "react-icons/fa6";
import PeopleTable from "./People/Table";
import QuizEditor from "./QuizEditor";
import Quizzes from "./Quizzes";
import QuizDetailScreen from "./Quizzes/QuizDetailScreen";
import Previews from "./Quizzes/Previews";
import { useSelector } from "react-redux";

export default function Courses({ courses }: { courses: any[]; }) {
    const { cid } = useParams();
    const { pathname } = useLocation();
    const course = courses.find((course) => course.number === cid);
    const { currentUser } = useSelector((state: any) => state.accountReducer);

    return (
        <div id="wd-courses">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h2 className="text-danger mb-0">
                    <FaAlignJustify className="me-4 fs-4 mb-1" />
                    {course && course.name} &gt; {pathname.split("/")[4]}
                </h2>
                <button className="text-success btn btn-secondary">
                    {currentUser.role} version
                </button>
            </div>
            <hr />

            <div className="d-flex">
                <div className="d-none d-md-block">
                    <CoursesNavigation />
                </div>
                <div className="flex-fill">

                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Assignments/:assignmentId"
                            element={<AssignmentEditor />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Assignments"
                            element={<Assignments />} />
                        <Route path="Grades"
                            element={<Grades />} />
                        <Route path="People" element={<PeopleTable />} />
                        <Route path="People/:uid" element={<PeopleTable />} />
                        <Route path="Quizzes" element={<Quizzes />} />
                        <Route path="Quizzes/:qid/quizDetailScreen" element={<QuizDetailScreen />} />
                        <Route path="Quizzes/:qid/editing/*" element={<QuizEditor />} />
                        <Route path="Quizzes/:qid/Preview" element={<Previews />} />
                    </Routes>

                </div>
            </div>
        </div>
    );
}
