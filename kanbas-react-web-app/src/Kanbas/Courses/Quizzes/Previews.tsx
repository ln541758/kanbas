import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios"; // Use axios for HTTP requests
import { useSelector } from "react-redux";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
const QUIZZES_API = `${REMOTE_SERVER}/api/quizzes`;

interface Question {
  questionId: number;
  questionType: string;
  questionPoints: string;
  questionContent: string;
  options?: string[];
  CorrectAns: string | boolean;
  questionDifficulty: string;
}

interface Quiz {
  _id: string;
  title: string;
  description: string;
  type: string;
  points: number;
  timeLimit: number;
  assignmentGroup: string;
  shuffleAnswers: boolean;
  multipleAttempts: boolean;
  viewResponses: string;
  showCorrectAnswers: string;
  oneQuestionAtATime: boolean;
  requireRespondusLockDown: boolean;
  browserRequired: boolean;
  requiredToViewQuizResults: boolean;
  webcamRequired: boolean;
  lockQuestionsAfterAnswering: boolean;
  availableFrom: string;
  availableUntil: string;
  due: string;
  questions: Question[];
  status: string;
  courses: string;
  howManyAttempts: number;
}

export default function QuizPreview() {
  // const [role, setRole] = useSSTUDENT"); // Set default role STUDENT
  // retrieve the current user from the Redux store
  const {currentUser} = useSelector((state: any) => state.accountReducer);
    const role = currentUser.role;
  const { cid, qid } = useParams<{ cid: string; qid: string  }>();
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [answers, setAnswers] = useState<{ [key: number]: string | boolean }>({});
  const [score, setScore] = useState<number | null>(null);
  const [attempts, setAttempts] = useState<number>(0);

  useEffect(() => {
    // Fetch quiz data from the server
    const fetchQuiz = async () => {
      try {
        const response = await axios.get(`${QUIZZES_API}/${qid}`);
        const quizData = response.data;
        setQuiz(quizData);
        console.log(cid);
        console.log(qid);

        //Fetch previous attempts and score
        const attemptsResponse = await axios.get(`${QUIZZES_API}/${qid}/attempts`);
        const attemptsData = attemptsResponse.data;

        if (attemptsData) {
          setAttempts(attemptsData.attempts);
          setScore(attemptsData.score);
        }
      } catch (error) {
        console.error("Error fetching quiz data:", error);
      }
    };

    fetchQuiz();
  }, [qid]);

  const handleAnswerChange = (questionId: number, value: string | boolean) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: value,
    }));
  };

  const handleSubmit = async () => {
    if (quiz && attempts < quiz.howManyAttempts) {
      try {
        // Calculate the score
        let calculatedScore = 0;
        quiz.questions.forEach((question) => {
          if (answers[question.questionId] === question.CorrectAns) {
            calculatedScore += parseInt(question.questionPoints);
          }
        });
        setScore(calculatedScore);

        // Submit the answers and score to the server
        await axios.post(`${QUIZZES_API}/${qid}/submit`, {
          answers,
          score: calculatedScore,
        });

        // Update the number of attempts
        setAttempts((prevAttempts) => prevAttempts + 1);
      } catch (error) {
        console.error("Error submitting quiz:", error);
      }
    } else {
      alert("You have exhausted your attempts.");
    }
  };

  const handleEditClick = () => {
    navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}/editing`);
  };

  if (!quiz) {
    return <div className="alert alert-danger">No quiz found</div>;
  }

  return (
    <div className="container">
      <h1>Quiz Preview: {quiz.title}</h1>
      {role === "FACULTY" && (
        <button onClick={handleEditClick} className="btn btn-secondary">
          Edit Quiz
        </button>
      )}
      <div>
        {quiz.questions.map((question) => (
          <div key={question.questionId} className="mb-3">
            <p>{question.questionContent}</p>
            {question.questionType === "Multiple Choice" && question.options ? (
              question.options.map((option, index) => (
                <label
                  key={index}
                  className={
                    score !== null
                      ? option === question.CorrectAns
                        ? "text-success"
                        : answers[question.questionId] === option
                        ? "text-danger"
                        : ""
                      : ""
                  }
                >
                  <input
                    type="radio"
                    name={`question-${question.questionId}`}
                    value={option}
                    checked={answers[question.questionId] === option}
                    onChange={() => handleAnswerChange(question.questionId, option)}
                    disabled={score !== null || role === "FACULTY"}
                  />
                  {option}
                </label>
              ))
            ) : (
              <input
                type="text"
                value={(answers[question.questionId] as string) || ""}
                onChange={(e) =>
                  handleAnswerChange(question.questionId, e.target.value)
                }
                disabled={score !== null || role === "FACULTY"}
              />
            )}
            {score !== null && (
              <span
                className={
                  answers[question.questionId] === question.CorrectAns
                    ? "text-success"
                    : "text-danger"
                }
              >
                {answers[question.questionId] === question.CorrectAns
                  ? "✓ Correct"
                  : "✗ Incorrect"}
              </span>
            )}
          </div>
        ))}
      </div>
      {role === "STUDENT" && (
        <>
          <button
            onClick={handleSubmit}
            disabled={score !== null || attempts >= quiz.howManyAttempts}
            className="btn btn-primary"
          >
            Submit
          </button>
          {score !== null && <div>Your score: {score}</div>}
          <div>Attempts left: {quiz.howManyAttempts - attempts}</div>
        </>
      )}
    </div>
  );
}
