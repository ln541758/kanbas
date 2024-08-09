import { useEffect } from "react";
import { useSelector } from "react-redux";
import { setQuiz } from "./reducer";
import * as client from "./client";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaPencilAlt } from "react-icons/fa";

export default function QuizDetailScreen() {
    const [role, setRole] = useState("faculty"); // Set role to facaulty by default
    const { cid, qid } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {quiz} = useSelector((state: any) => state.quizzesReducer);

    const fetchQuiz = async () => {
        const quiz = await client.findQuizById(qid as string);
        dispatch(setQuiz(quiz));
        };


    useEffect(() => {
        fetchQuiz();
    }, []);

    // return (
    //     <div id="wd-quiz-detail-screen">
    //         <div id="wd-quiz-detail-screen-buttons" className="text-center m-2 p-2">
    //             <button className="btn btn-secondary me-4">Preview</button>
    //             <Link
    //             className="wd-quiz-editor-link"
    //             to={`/Kanbas/Courses/${cid}/Quizzes/${quiz._id}/editing`}>
    //             <button className="btn btn-secondary">
    //             <FaPencil className="position-relative me-2" style={{ bottom: "1px" }} />
    //             Edit</button></Link>
    //             <hr/>

    //         </div>
    //         <div id="wd-quiz-detail-screen-right" className="text-center">
    //         {quiz._id + " " + quiz.title}

    //         </div>
    //     </div>
    // );



    // from Lin
    if (!quiz) {
        return <div className="alert alert-danger">No quiz found</div>;
      }
      const handleEditClick = () => {
        navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}/editing`); // Path to edit page
      };

      const handlePreviewClick = () => {
        navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}/Preview`); // Path to preview page
      };

      const handleQuizClick = () => {
        navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}`); // Path to quiz page
      };

      const renderFacultyControls = () => {
        return (
          <div className="container mt-4">
            <div className="d-flex justify-content-center">
              <button
                type="button"
                className="btn btn-secondary me-3"
                onClick={handlePreviewClick}
              >
                Preview
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleEditClick}
              >
                <FaPencilAlt style={{ marginRight: "8px" }} />
                Edit
              </button>
            </div>
            <br />
            <br />
            <div className="card" style={{ border: "none" }}>
              <hr style={{ margin: 0 }} />
              <div
                className="card-header"
                style={{ backgroundColor: "transparent", borderBottom: "none" }}
              >
                <h1 className="h3 fw-bold">{quiz.title}</h1>
              </div>
              <div className="card-body">
                {[
                  { label: "Quiz Type", value: quiz.type },
                  { label: "Points", value: quiz.points },
                  { label: "Assignment Group", value: quiz.assignmentGroup },
                  {
                    label: "Shuffle Answers",
                    value: quiz.shuffleAnswers ? "Yes" : "No",
                  },
                  { label: "Time Limit", value: `${quiz.timeLimit} Minutes` },
                  {
                    label: "Multiple Attempts",
                    value: quiz.multipleAttempts ? "Yes" : "No",
                  },
                  { label: "View Responses", value: quiz.viewResponses },
                  { label: "Show Correct Answers", value: quiz.showCorrectAnswers },
                  {
                    label: "One Question at a Time",
                    value: quiz.oneQuestionAtATime ? "Yes" : "No",
                  },
                  {
                    label: "Require Respondus LockDown Browser",
                    value: quiz.requireRespondusLockDown ? "Yes" : "No",
                  },
                  {
                    label: "Required to View Quiz Results",
                    value: quiz.requiredToViewQuizResults ? "Yes" : "No",
                  },
                  {
                    label: "Webcam Required",
                    value: quiz.webcamRequired ? "Yes" : "No",
                  },
                  {
                    label: "Lock Questions After Answering",
                    value: quiz.lockQuestionsAfterAnswering ? "Yes" : "No",
                  },
                ].map((item, index) => (
                  <div key={index} className="row mb-1">
                    <div className="col-md-3 text-end fw-bold">{item.label}</div>
                    <div className="col-md-6">{item.value}</div>
                  </div>
                ))}
                <br />
                <table className="table">
                  <thead>
                    <tr>
                      <th>Due</th>
                      <th>For</th>
                      <th>Available from</th>
                      <th>Until</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{quiz.due}</td>
                      <td>Everyone</td>
                      <td>{quiz.availableFrom}</td>
                      <td>{quiz.availableUntil}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      };

      const renderStudentControls = () => (
        <div className="d-flex justify-content-center">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleQuizClick}
          >
            Start Quiz
          </button>
        </div>
      );

      return (
        <div>
          {role === "faculty" ? renderFacultyControls() : renderStudentControls()}
        </div>
      );
}