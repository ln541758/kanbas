import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuiz } from "../Quizzes/reducer";
import * as client from "../Quizzes/client";

export default function DetailEditor() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cid, qid } = useParams();
  const { quizzes, quiz } = useSelector((state: any) => state.quizzesReducer);


  const fetchQuiz = async (id: string) => {
    try {
      const fetchedQuiz = await client.findQuizById(id);
      if (fetchedQuiz) {
        dispatch(setQuiz(fetchedQuiz));
      } else {
        console.warn("Quiz not found");

      }
    } catch (error) {
      console.error("Error fetching quiz:", error);

    }
  };

  useEffect(() => {
    if (cid !== qid) {
      fetchQuiz(qid as string);
    }
  }, [cid, qid]);

  const handleQuizTypeChange = (event: any) => {
    dispatch(setQuiz({ ...quiz, type: event.target.value }));
  };

  const handleQuizGroupChange = (event: any) => {
    dispatch(setQuiz({ ...quiz, assignmentGroup: event.target.value }));
  };
console.log(quizzes.length);

const saveQuiz = async (quiz: any) => {
  try {
    if (quiz._id === cid) {
      const newQuizId = quizzes.length + "a";
      const aQuiz = { ...quiz, _id: newQuizId };
      const createdQuiz = await client.createQuiz(aQuiz);
      dispatch(setQuiz(createdQuiz));
      navigate(`/Kanbas/Courses/${cid}/Quizzes/${newQuizId}/quizDetailScreen`);
      window.location.reload();
    } else {
      const updatedQuiz = await client.updateQuiz(quiz);
      dispatch(setQuiz(updatedQuiz));
      navigate(`/Kanbas/Courses/${cid}/Quizzes/${quiz._id}/quizDetailScreen`);
      window.location.reload();
    }
  } catch (error) {
    console.error("Error saving quiz:", error);
  }
};

  return (
    <div className="container">
      <input
        value={quiz?.title || ""}
        className="border rounded-3 p-3 mb-4"
        style={{ width: "100%" }}
        onChange={(e) => dispatch(setQuiz({ ...quiz, title: e.target.value }))}
      />

      <div className="mb-4">
        <label htmlFor="wd-quiz-instruction">Quiz Instructions:</label>
        <textarea
          id="wd-quiz-instruction"
          className="form-control border rounded-3 p-3"
          value={quiz?.description || ""}
          onChange={(e) =>
            dispatch(setQuiz({ ...quiz, description: e.target.value }))
          }
          style={{ height: "150px" }}
        />
      </div>

      <div className="row mb-4 d-flex justify-content-end">
  <label
    htmlFor="wd-quiz-point-input"
    className="d-flex col-form-label col-sm-2 me-3 align-items-center justify-content-end"
  >
    Points
  </label>
  <div id="wd-quiz-point-input" className="d-flex col-sm-9">
    <input
      id="wd-name"
      type="number"
      value={quiz?.points || ""}
      className="border rounded-3 p-3"
      style={{ width: "100%" }}
      onChange={(e) =>
        dispatch(setQuiz({ ...quiz, points: Number(e.target.value) }))
      }
    />
  </div>
</div>


      <div className="row mb-4 d-flex justify-content-end">
        <label
          htmlFor="wd-quiz-type-select"
          className="d-flex col-form-label col-sm-2 me-3 align-items-center justify-content-end"
        >
          Quiz Type
        </label>
        <div id="wd-quiz-type-select" className="d-flex col-sm-9 ">
          <select
            className="form-select border rounded-3 p-3"
            value={quiz?.type || ""}
            onChange={handleQuizTypeChange}
          >
            <option value="GRADEQUIZ">Graded Quiz</option>
            <option value="PRACTICEQUIZ">Practice Quiz</option>
            <option value="GRADEDSURVEY">Graded Survey</option>
            <option value="UNGRADEDSURVEY">Ungraded Survey</option>
          </select>
        </div>
      </div>

      <div className="row mb-4 d-flex justify-content-end">
        <label
          htmlFor="wd-quiz-group-select"
          className="d-flex col-form-label col-sm-2 me-3 align-items-center justify-content-end"
        >
          Assignment Group
        </label>
        <div id="wd-quiz-group-select" className="d-flex col-sm-9 ">
          <select
            className="form-select border rounded-3 p-3"
            value={quiz?.assignmentGroup || ""}
            onChange={handleQuizGroupChange}
          >
            <option value="QUIZZES">Quizzes</option>
            <option value="ASSIGNMENTS">Assignments</option>
            <option value="EXAMS">Exams</option>
            <option value="PROJECT">Project</option>
          </select>
        </div>

        <div
          id="wd-quiz-options"
          className="mt-4 mb-2 md-flex col-sm-9 fw-bold"
        >
          Options
        </div>
        <div id="wd-quiz-shuffle-answers" className="d-flex col-sm-9 mb-2">
          <input
            type="checkbox"
            className="me-2"
            checked={quiz?.shuffleAnswers || false}
            onChange={() =>
              dispatch(
                setQuiz({ ...quiz, shuffleAnswers: !quiz?.shuffleAnswers })
              )
            }
          />{" "}
          Shuffle Answers
        </div>
        <div
          id="wd-quiz-time-limit"
          className="d-flex justify-content-between col-sm-9 mb-2"
        >
          <div>
            {" "}
            <input
              type="checkbox"
              className="form-check-input me-2"
              checked={quiz?.timeLimit > 0}
              onChange={() =>
                dispatch(
                  setQuiz({ ...quiz, timeLimit: quiz?.timeLimit > 0 ? 0 : 30 })
                )
              }
            />{" "}
            <label htmlFor="wd-quiz-time-limit" className="form-check-label">
              Time Limit
            </label>
          </div>
          <div className="input-group w-50 mb-2">
            <input
              id="wd-quiz-time-input"
              value={quiz?.timeLimit || 0}
              className="form-control"
              onChange={(e) =>
                dispatch(
                  setQuiz({ ...quiz, timeLimit: Number(e.target.value) })
                )
              }
              disabled={quiz?.timeLimit === 0}
            />
            <span className="input-group-text">Minutes</span>
          </div>
        </div>
        <div className="d-flex flex-column col-sm-9 border rounded-3 p-3">
          <div className="d-flex align-items-center">
            <input
              type="checkbox"
              className="me-2"
              checked={quiz?.multipleAttempts || false}
              onChange={() =>
                dispatch(
                  setQuiz({
                    ...quiz,
                    multipleAttempts: !quiz?.multipleAttempts,
                  })
                )
              }
            />
            <label htmlFor="wd-quiz-multiple-attempts">
              Allow Multiple Attempts
            </label>
          </div>

          {quiz?.multipleAttempts && (
            <div className="mt-3">
              <label htmlFor="attempts-input" className="form-label">
                How Many Attempts
              </label>
              <input
                type="number"
                className="form-control"
                id="attempts-input"
                placeholder="Enter number of attempts"
                aria-label="Number of attempts"
                value={quiz?.howManyAttempts || 0}
                onChange={(e) =>
                  dispatch(
                    setQuiz({
                      ...quiz,
                      howManyAttempts: Number(e.target.value),
                    })
                  )
                }
              />
            </div>
          )}
        </div>
      </div>

      <div
        id="wd-assignment-assign-list"
        className="row mb-4 d-flex justify-content-end mb-5"
      >
        <label className="d-flex col-form-label col-sm-2 me-3 justify-content-end">
          Assign
        </label>
        <div className="d-flex col-sm-9">
          <div
            className="border rounded-3 p-3"
            style={{ width: "100%", height: "300px" }}
          >
            <div>
              <label
                htmlFor="assign-to"
                className="d-flex col-form-label align-items-center fw-bold"
                style={{ marginBottom: "10px" }}
              >
                Assign to
              </label>
              <input
                type="text"
                className="form-control"
                id="assign-to"
                value="Everyone"
                data-role="tagsinput"
              />
            </div>

            <div>
              <label
                htmlFor="due-date"
                className="d-flex col-form-label align-items-center fw-bold"
                style={{ marginBottom: "10px" }}
              >
                Due
              </label>
              <input
                type="text"
                className="form-control"
                id="due-date"
                value={quiz?.due || ""}
                style={{ marginBottom: "10px" }}
                onChange={(e) =>
                  dispatch(setQuiz({ ...quiz, due: e.target.value }))
                }
              />
            </div>

            <div className="d-flex">
              <div className="col-sm-6 pe-2">
                <label
                  htmlFor="start-date"
                  className="col-form-label align-items-center fw-bold"
                  style={{ marginBottom: "10px" }}
                >
                  Available from
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="start-date"
                  value={quiz?.availableFrom || ""}
                  style={{ marginBottom: "10px" }}
                  onChange={(e) =>
                    dispatch(setQuiz({ ...quiz, availableFrom: e.target.value }))
                  }
                />
              </div>

              <div className="col-sm-6 ps-2">
                <label
                  htmlFor="end-date"
                  className="col-form-label align-items-center fw-bold"
                  style={{ marginBottom: "10px" }}
                >
                  Until
                </label>
                <input
                  type="text"
                  className="form-control "
                  id="end-date"
                  value={quiz?.availableUntil || ""}
                  style={{ marginBottom: "10px" }}
                  onChange={(e) =>
                    dispatch(setQuiz({ ...quiz, availableUntil: e.target.value }))
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div id="wd-quiz-buttons" className="d-flex justify-content-end mb-5">
        <button
          id="wd-cancel-quiz-btn"
          className="btn btn-lg btn-secondary me-2 rounded-1 border"
          onClick={() => navigate(`/Kanbas/Courses/${cid}/Quizzes`)}
        >
          Cancel
        </button>

        <button
          id="wd-save-quiz-btn"
          className="btn btn-lg btn-danger text-white me-2 rounded-1 border"
          onClick={() => {
            saveQuiz(quiz);
          }}
        >
          Save
        </button>

        <button
          id="wd-save-quiz-publish-btn"
          className="btn btn-lg btn-danger text-white me-3 rounded-1 border"
          onClick={() => {
            saveQuiz({ ...quiz, published: true });
          }}
        >
          Save & Publish
        </button>
      </div>
    </div>
  );
}
