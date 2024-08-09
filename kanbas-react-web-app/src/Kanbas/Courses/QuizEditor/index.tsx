import { Navigate, Route, Routes, useNavigate, useParams } from "react-router-dom";
import Tab from "./Tab";
import Questions from "./Questions";
import { useSelector } from "react-redux";


export default function QuizEditor() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { cid, qid } = useParams();
  const navigate = useNavigate();
  const quiz = useSelector((state: any) => state.quizzesReducer.quiz);

  // check the user's account type
  if (currentUser.role !== "FACULTY") {
    navigate(`/Kanbas/Courses/${cid}/Quizzes`);
  }

  return (
    <div className="container ms-4 p-1">
      <div className="row" id="wd-quiz-editor-tabs ">
        <div className="col-12 m-2 p-0">
          <h3 className="float-end me-5 p-1">Points: {quiz.points}</h3>
        </div>
        <div className="col-2">
          <div className="d-none d-md-block p-0">
            <Tab />
          </div>
        </div>
        <hr />
      </div>
      <div className="row">
        <div className="col-12">
          <Routes>
            <Route path="/" element={<Navigate to="Details" />} />
            <Route path="Details" element={<h1>Details</h1>} />
            <Route path="Questions" element={<Questions />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
