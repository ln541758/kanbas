import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { useEffect } from "react";
import * as client from "./client";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaCheckCircle, FaRocket } from "react-icons/fa";
import { Link } from "react-router-dom";
import { setQuizzes, setQuiz } from "./reducer";


export default function Quizzes() {

    const { cid } = useParams();
    const { quizzes } = useSelector((state: any) => state.quizzesReducer);

    const dispatch = useDispatch();
    const { currentUser } = useSelector((state: any) => state.accountReducer);

    const fetchQuizzes = async () => {
        const quizzes = await client.findQuizzesForCourse(cid as string);
        dispatch(setQuizzes(quizzes));
    };


    useEffect(() => {
        fetchQuizzes();
    }, []);


    return (
        <div id="wd-quizzes">

            <li className="wd-quizzes-list list-group-item p-0 m-5 fs-5 border-gray ">
                <div className="wd-title p-3 ps-2 bg-secondary align-items-center">
                    <div className="icon-container">
                        <div className="left-icons">
                            <span style={{ fontWeight: "bold" }}>Quizzes</span>
                        </div>
                        <div className="right-icons">
                        </div>
                    </div>
                </div>
                <ul className="wd-quiz-list-item list-group rounded-0 border-5 border-start border-success">
                    {quizzes.filter((quiz: any) => currentUser.role === "STUDENT" ? quiz.published === true : quiz)
                        .map((quiz: any) => (
                            <li className="wd-quiz-list-item list-group-item p-3 ps-1">
                                <div className="row align-items-center">
                                    <div className="col-1 d-flex justify-content-center align-items-center">
                                        <FaRocket className="fs-3 text-success" />
                                    </div>
                                    <div className="col-9 d-flex flex-column justify-content-center">
                                        <Link
                                            className="wd-quiz-link"
                                            to={`/Kanbas/Courses/${cid}/Quizzes/${quiz._id}/quizDetailScreen`}
                                            style={{ textDecoration: "none", color: "black", fontWeight: "bold", marginRight: '10px' }}
                                            onClick={() => dispatch(setQuiz(quiz))}>

                                            {quiz._id + " " + quiz.title}
                                        </Link>
                                        <p>
                                            <span style={{ color: "red" }}>{quiz.status}</span> |
                                            <span style={{ fontWeight: "bold" }}> Due</span> {quiz.due} | points: {quiz.points} | {quiz.questionsNum} questions
                                        </p>
                                    </div>
                                    <div className="col-2 d-flex justify-content-end align-items-center">
                                        {currentUser.role === "FACULTY" && (
                                            <div className="d-flex align-items-center">
                                                {quiz.published ? (
                                                    <FaCheckCircle className="text-success me-2 fs-4" />
                                                ) : (
                                                    <FaCheckCircle className="text-muted me-2 fs-4"/>)}
                                                <IoEllipsisVertical className="fs-3 text-muted" />
                                            </div>
                                        )}
                                    </div>


                                </div>
                            </li>
                        ))}
                </ul>
            </li>
        </div>
    );
}
