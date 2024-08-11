import { FaPlus } from "react-icons/fa6";
import QuestionEditor from "./QuestionEditor";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { setQuestion, setQuiz} from "../Quizzes/reducer";
import { useEffect } from "react";
import * as client from "../Quizzes/client";

export default function Questions() {
    const { cid, qid } = useParams();
    const dispatch = useDispatch();
    const { quiz } = useSelector((state: any) => state.quizzesReducer);

    const fetchQuiz = async () => {
        const quiz = await client.findQuizById(qid as string);
        dispatch(setQuiz(quiz));
    };

    const saveQuiz = async (quiz: any) => {
         const status = await client.updateQuiz(quiz);
         dispatch(setQuiz(quiz));
    };

    const deleteQuestion = async (question: any) => {
        const updatedQuiz = {
            ...quiz,
            questions: quiz.questions.filter((m: any) => m.questionId !== question.questionId),
            questionsNum: quiz.questions.length-1,
            points: quiz.points - Number(question.questionPoints)

        };
        dispatch(setQuiz(updatedQuiz));
    };

    const editQuestion = async (question: any) => {
        dispatch(setQuestion(question));
    }

    useEffect(() => {
        fetchQuiz();
    }, []);

    return (
        <div id="wd-quizzes-question" className="text-nowrap">
            <div className="row row-cols-1 row-cols-md-5 g-4">
                {quiz && quiz.questions.map((question: any) => (
                    <div className="wd-quiz-questionscreen col" style={{ width: "600px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <div className="card-body">
                                <p className="card-title" style={{ fontSize: "20px" }}>Question: {question.questionContent}{`(Points: ${question.questionPoints})`}</p>
                                <button className="btn btn-success btn-sm float-end"
                                data-bs-toggle="modal" data-bs-target="#wd-add-question-dialog"
                                onClick={() => editQuestion(question)}>Edit</button>
                                <button className="btn btn-danger btn-sm me-2 float-end"
                                onClick={()=>deleteQuestion(question)}>Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center">
                <button id="wd-add-questionn-btn" className="btn btn-lg btn-secondary m-1 mt-3"
                    data-bs-toggle="modal" data-bs-target="#wd-add-question-dialog">
                    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                    New Question
                </button>
                <hr />
                <button type="button" className="btn btn-secondary me-2"
                onClick={() => {fetchQuiz()}} >
                    Cancel
                </button>
                <button type="button" className="btn btn-danger me-2"
                onClick={() => {saveQuiz(quiz);
                    window.location.reload();}}>
                    Save </button>
            </div>
            <div >


            </div>
            <QuestionEditor />

        </div>
    );
}