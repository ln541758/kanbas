import QuestionTextEditor from "./QuestionTextEditor";
import "./QuestionEditor.css";
import { LuArrowBigRight } from "react-icons/lu";
import FillInBlankAns from "./FillInBlankAns";
import MCQAns from "./MCQAns";
import { useDispatch, useSelector } from "react-redux";
import { setQuestion, setQuiz, clearQuestion } from "../Quizzes/reducer";

export default function QuestionEditor() {

    const quiz = useSelector((state: any) => state.quizzesReducer.quiz);
    const newQuestion = useSelector((state: any) => state.quizzesReducer.newQuestion);
    const dispatch = useDispatch();

    const addOrUpdateQuestion = async (quiz: any, newQuestion: any) => {
        const existingQuestionIndex = quiz.questions.findIndex(
            (question: any) => question.questionId === newQuestion.questionId
        );

        let updatedQuestions;
        let totalPoints = 0;

        if (existingQuestionIndex !== -1) {
            // Update the existing question
            updatedQuestions = quiz.questions.map((question: any, index: number) => {
                if (index === existingQuestionIndex) {
                    return { ...question, ...newQuestion };
                }
                return question;
            });
        } else {
            // Add new question
            const questionsLength = quiz.questions.length + 1;
            const updatedQuestion = {
                ...newQuestion,
                questionId: questionsLength,
            };
            updatedQuestions = [...quiz.questions, updatedQuestion];
        }

        // Recalculate total points
        updatedQuestions.forEach((question: any) => {
            totalPoints += Number(question.questionPoints);
        });

        const updatedQuiz = {
            ...quiz,
            questions: updatedQuestions,
            points: totalPoints,
            questionsNum: updatedQuestions.length,
        };

        dispatch(setQuiz(updatedQuiz));
        dispatch(clearQuestion());
    };


    function getQuestionType() {
        switch (newQuestion.questionType) {
            case "Multiple Choice":
                return (
                    <div id="wd-quizzes-multiple-choice-question">
                        Enter your questions and multiple answers, then select the correct answer.
                        <QuestionTextEditor />
                        <h1 style={{ fontSize: "2rem" }}>Answers:</ h1>
                        <div className="col-8">
                            <MCQAns />
                        </div>
                    </div>
                );
            case "True/False":
                return (
                    <div id="wd-quizzes-true-false-question">
                        Enter your question text, then select if True or False is the correct answer
                        <QuestionTextEditor />
                        <h1 style={{ fontSize: "2rem" }}>Answers:</h1>
                        <div className="form-check">
                            <input
                                className="form-check-input wd-quizzes-add-question-custom-radio"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                                value="true"
                                onChange={(e: any) =>
                                    dispatch(setQuestion({ ...newQuestion, CorrectAns: e.target.value === "true" }))
                                }
                            />
                            <label className="form-check-label wd-quizzes-add-question-custom-label" htmlFor="flexRadioDefault1">
                                <LuArrowBigRight className="wd-add-question-custom-arrow" />
                                True
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input wd-quizzes-add-question-custom-radio"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault2"
                                value="false"
                                onChange={(e: any) =>
                                    dispatch(setQuestion({ ...newQuestion, CorrectAns: e.target.value === "true" }))
                                }
                            />
                            <label className="form-check-label wd-quizzes-add-question-custom-label" htmlFor="flexRadioDefault2">
                                <LuArrowBigRight className="wd-add-question-custom-arrow" />
                                False
                            </label>
                        </div>
                    </div>
                );
            case "Fill in Blank":
                return (
                    <div id="wd-quizzes-fill-in-the-blank-question">
                        Enter your question text, then define all possible correct answers for the blank.<br />
                        Students will see the question followed by a small text box to type their answer.
                        <QuestionTextEditor />
                        <h1 style={{ fontSize: "2rem" }}>Answers:</h1>
                        <div className="col-8">
                            <FillInBlankAns />
                        </div>
                    </div>
                );
        }
    }



    return (
        <div id="wd-add-question-dialog" className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">{quiz && quiz.questions.some((question: any) => question.questionId === newQuestion.questionId)
                                ? 'Update Question'
                                : 'Add Question'}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div className="modal-body">
                        <div className="clearfix">
                            <div className="d-inline me-3 float-start">
                                <select
                                    className="form-select"
                                    value={newQuestion.questionDifficulty}
                                    onChange={(e: any) =>
                                        dispatch(setQuestion({ ...newQuestion, questionDifficulty: e.target.value }))
                                    }
                                >
                                    <option selected value="easy">Easy Question</option>
                                    <option value="medium">Medium Question</option>
                                    <option value="difficult">Difficult Question</option>
                                </select>
                            </div>
                            <div className="d-inline me-1 float-start">
                                <select
                                    className="form-select"
                                    value={newQuestion.questionType}
                                    onChange={(e: any) =>
                                        dispatch(setQuestion({ ...newQuestion, questionType: e.target.value }))
                                    }
                                >
                                    <option value="Multiple Choice" selected>Multiple Choice</option>
                                    <option value="True/False">True/False</option>
                                    <option value="Fill in Blank">Fill in Blank</option>
                                </select>
                            </div>
                            <div className="d-flex me-1 float-end align-items-center">
                                <label className="mb-0 me-1">Points</label>
                                <input
                                    type="number"
                                    className="ms-2 form-control"
                                    style={{ width: '100px' }}
                                    value={newQuestion.questionPoints}
                                    onChange={(e) =>
                                        dispatch(setQuestion({ ...newQuestion, questionPoints: parseInt(e.target.value) }))
                                    }
                                />
                            </div>
                        </div>
                        <div className="col" id="wd-quizzes-question-editor-body">
                            <hr />
                            {getQuestionType()}
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                            onClick={(e: any) => dispatch(clearQuestion())}
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            data-bs-dismiss="modal"
                            className="btn btn-danger"
                            onClick={() => addOrUpdateQuestion(quiz, newQuestion)}
                        >
                            {quiz && quiz.questions.some((question: any) => question.questionId === newQuestion.questionId)
                                ? 'Update Question'
                                : 'Add Question'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
