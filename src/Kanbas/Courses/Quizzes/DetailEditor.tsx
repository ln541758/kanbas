import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setQuiz, setQuizzes } from "./reducer";
import * as client from "./client";
import quizzes from "../../Database/quizzes.json";
import {
  BtnBold,
  BtnItalic,
  Editor,
  EditorProvider,
  Toolbar,
  BtnUnderline,
  BtnBulletList,
  BtnClearFormatting,
  BtnLink,
  BtnStyles,
} from "react-simple-wysiwyg";

export default function DetailEditor() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cid, qid } = useParams();
  const quiz = quizzes.find((quiz: any) => quiz._id === qid);
  const [title, setTitle] = useState(quiz && quiz.title);
  const [instruction, setInstruction] = useState(quiz && quiz.description);
  const [points, setPoints] = useState(quiz && quiz.points);
  const [type, setType] = useState(quiz && quiz.type);
  const [group, setGroup] = useState(quiz && quiz.assignmentGroup);
  const [shuffle, setShuffle] = useState(quiz && quiz.shuffleAnswers);
  const [showCorrect, setShowCorrect] = useState(
    quiz && quiz.showCorrectAnswers
  );
  const [timeEnabled, setTimeEnabled] = useState(false);
  const [time, setTime] = useState(quiz && quiz.timeLimit);
  const [multiple, setMultiple] = useState(quiz && quiz.multipleAttempts);
  const [attempt, setAttempt] = useState(quiz && quiz.attemptsAllowed);
  const [code, setCode] = useState(quiz && quiz.accessCode);
  const [oneQuestion, setOneQuestion] = useState(
    quiz && quiz.oneQuestionAtATime
  );
  const [webcamRequired, setWebcamRequired] = useState(
    quiz && quiz.webcamRequired
  );
  const [lockQuestion, setLockQuestion] = useState(
    quiz && quiz.lockQuestionsAfterAnswering
  );
  const [due, setDue] = useState(quiz && quiz.due);
  const [from, setFrom] = useState(quiz && quiz.availableFrom);
  const [until, setUntil] = useState(quiz && quiz.availableUntil);
  const newQuiz = {
    _id: qid,
    title: title,
    description: instruction,
    type: type,
    points: points,
    timeLimit: time,
    assignmentGroup: group,
    shuffleAnswers: shuffle,
    multipleAttempts: multiple,
    availableFrom: from,
    availableUntil: until,
    due: due,
  };

  useEffect(() => {
    if (quiz) {
      setTimeEnabled(quiz.timeLimit > 0);
    }
  }, [quiz]);

  const handleQuizTypeChange = (event: any) => {
    setType(event.target.value);
  };

  const handleQuizGroupChange = (event: any) => {
    setGroup(event.target.value);
  };

  const saveQuiz = async (quiz: any) => {
    const updateQuiz = await client.updateQuiz(quiz);
    dispatch(setQuiz(updateQuiz));
  };

  const publishQuiz = async (courseId: any) => {
    const publishQuiz = await client.findQuizzesForCourse(courseId);
    dispatch(setQuizzes(publishQuiz));
  };

  const handleInstructionChange = (event: any) => {
    setInstruction(event.target.value);
  };

  return (
    <div className="container">
      <input
        value={title}
        className="border rounded-3 p-3 mb-4"
        style={{ width: "100%" }}
        onChange={(e) => setTitle(e.target.value)}
      />

      <div className="mb-4">
        <EditorProvider>
          <Editor
            value={instruction}
            onChange={handleInstructionChange}
            style={{ height: "300px" }}
          >
            <Toolbar>
              <BtnBold style={{ marginRight: "6px" }} />
              <BtnItalic style={{ marginRight: "6px" }} />
              <BtnUnderline style={{ marginRight: "6px" }} />
              <BtnBulletList style={{ marginRight: "6px" }} />
              <BtnClearFormatting style={{ marginRight: "6px" }} />
              <BtnLink style={{ marginRight: "6px" }} />
              <BtnStyles style={{ marginRight: "6px" }} />
            </Toolbar>
          </Editor>
        </EditorProvider>
      </div>

      <div className="row mb-4 d-flex justify-content-end">
        <label
          htmlFor="wd-quiz-point-input"
          className="d-flex col-form-label col-sm-2 me-3 align-items-center justify-content-end"
        >
          Points
        </label>
        <div
          id="wd-quiz-point-input"
          className="d-flex col-sm-9"
          contentEditable="true"
        >
          <input
            id="wd-name"
            value={points}
            className="border rounded-3 p-3"
            style={{ width: "100%" }}
            onChange={(e) => setPoints(Number(e.target.value))}
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
            value={type}
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
            value={group}
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
            checked={shuffle}
            onChange={() => setShuffle(!shuffle)}
          />{" "}
          Shuffle Answers
        </div>

        <div id="wd-quiz-one-question" className="d-flex col-sm-9 mb-2">
          <input
            type="checkbox"
            className="me-2"
            checked={oneQuestion}
            onChange={() => setOneQuestion(!oneQuestion)}
          />{" "}
          One Question at a Time
        </div>

        <div id="wd-quiz-webcam-question" className="d-flex col-sm-9 mb-2">
          <input
            type="checkbox"
            className="me-2"
            checked={webcamRequired}
            onChange={() => setWebcamRequired(!webcamRequired)}
          />{" "}
          Webcam Required
        </div>

        <div id="wd-quiz-lock-question" className="d-flex col-sm-9 mb-2">
          <input
            type="checkbox"
            className="me-2"
            checked={lockQuestion}
            onChange={() => setLockQuestion(!lockQuestion)}
          />{" "}
          Lock Questions After Answering
        </div>

        <div
          id="wd-quiz-correct-answers"
          className="d-flex col-sm-9 justify-content-between"
        >
          <div>
            <input
              type="checkbox"
              className="me-2"
              checked={showCorrect === "Immediately"}
              onChange={() =>
                setShowCorrect(
                  showCorrect === "Immediately" ? "Later" : "Immediately"
                )
              }
            />{" "}
            <label htmlFor="wd-quiz-correct-answers">
              Show Correct Answers:
            </label>
          </div>
          <div className="input-group w-50 mb-2 float-end">
            <input
              id="wd-quiz-correct-answers-input"
              value={showCorrect}
              className="form-control"
              onChange={(e) => setAttempt(Number(e.target.value))}
            />
          </div>
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
              checked={timeEnabled}
              onChange={() => setTimeEnabled(!timeEnabled)}
            />{" "}
            <label htmlFor="wd-quiz-time-limit" className="form-check-label">
              Time Limit
            </label>
          </div>
          <div className="input-group w-50 mb-2">
            <input
              id="wd-quiz-time-input"
              value={time}
              className="form-control"
              onChange={(e) => setTime(Number(e.target.value))}
              disabled={!timeEnabled}
            />
            <span className="input-group-text">Minutes</span>
          </div>
        </div>
        <div className="d-flex col-sm-9 border rounded-3 p-3 justify-content-between">
          <div>
            <input
              type="checkbox"
              className="me-2"
              checked={multiple}
              onChange={() => setMultiple(!multiple)}
            />{" "}
            <label htmlFor="wd-quiz-multiple-attempts">
              Allow Multiple Attempts
            </label>
          </div>
          <div className="input-group w-50 mb-2 float-end">
            <input
              id="wd-attempt-time-input"
              value={attempt}
              className="form-control"
              onChange={(e) => setAttempt(Number(e.target.value))}
              disabled={!multiple}
            />
            <span className="input-group-text">Times</span>
          </div>
        </div>

        <div className="d-flex col-sm-9 rounded-3 p-3 justify-content-between">
          <div>
            <input
              type="checkbox"
              className="me-2"
              checked={code !== ""}
              onChange={() => setCode(code === "" ? "1234" : "")}
            />{" "}
            <label htmlFor="wd-quiz-multiple-attempts">Access Code</label>
          </div>
          <div className="input-group w-50 mb-2 float-end">
            <input
              id="wd-attempt-time-input"
              value={code}
              className="form-control"
              onChange={(e) => setAttempt(Number(e.target.value))}
              disabled={code === " "}
            />
          </div>
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
              ></input>
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
                value={due}
                style={{ marginBottom: "10px" }}
                onChange={(e) => setDue(e.target.value)}
              ></input>
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
                  value={from}
                  style={{ marginBottom: "10px" }}
                  onChange={(e) => setFrom(e.target.value)}
                ></input>
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
                  value={due}
                  style={{ marginBottom: "10px" }}
                  onChange={(e) => setUntil(e.target.value)}
                ></input>
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
          className="btn btn-lg btn-danger text-white me-3 rounded-1 border"
          onClick={() => {
            saveQuiz({ ...quiz, ...newQuiz });
            navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}`);
          }}
        >
          Save
        </button>

        <button
          id="wd-save-quiz-btn"
          className="btn btn-lg btn-danger text-white me-3 rounded-1 border"
          onClick={() => {
            saveQuiz({ ...quiz, ...newQuiz });
            publishQuiz({ cid });
            navigate(`/Kanbas/Courses/${cid}/Quizzes`);
          }}
        >
          Save and Publish
        </button>
      </div>
    </div>
  );
}
