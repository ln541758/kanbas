import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { useEffect } from "react";
import * as client from "./client";
import { BsGripVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaRocket } from "react-icons/fa";
import { Link } from "react-router-dom";
import { setQuizzes, setQuiz } from "./reducer";


export default function Quizzes() {

    const { cid } = useParams();
    const { quizzes } = useSelector((state: any) => state.quizzesReducer);
    const dispatch = useDispatch();

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
                            <BsGripVertical className="me-2 fs-3" />
                            <span style={{ fontWeight: "bold" }}>Quizzes</span>
                        </div>
                        <div className="right-icons">

                            <FaPlus className="position-relative me-2 ms-2" />
                            <IoEllipsisVertical className="fs-4" />
                        </div>
                    </div>

                </div>
                <ul className="wd-quiz-list-item list-group rounded-0 border-5 border-start border-success">
                    {quizzes.filter((quiz: any) => quiz.courses === cid).map((quiz: any) => (
                        <li className="wd-quiz-list-item list-group-item p-3 ps-1">
                            <div className="row align-items-center">
                                <div className="col-1">
                                    <BsGripVertical className="me-2 fs-3" />
                                    <FaRocket className="me-0 fs-3 text-success" />
                                </div>
                                <div className="col-9 d-flex flex-column justify-content-center">
                                    <Link
                                        className="wd-quiz-link"
                                        to={`/Kanbas/Courses/${cid}/Quizzes/${quiz._id}/quizDetailScreen`}
                                        style={{ textDecoration: "none", color: "black", fontWeight: "bold", marginRight: '10px' }}
                                        onClick={()=>dispatch(setQuiz(quiz)) }>

                                        {quiz._id + " " + quiz.title}
                                    </Link>
                                    <p>
                                        <span style={{ color: "red" }}>MultAssignments</span> |
                                        <span style={{ fontWeight: "bold" }}> Not Available</span> until {quiz.availableFrom} |<br />
                                        <span style={{ fontWeight: "bold" }}>Due</span> {quiz.due} | points: {quiz.points}
                                    </p>
                                </div>
                                <div className="col-2">
                                    <IoEllipsisVertical className="me-2 fs-3 float-end" />
                                </div>
                            </div>

                        </li>
                    ))}

                </ul>
            </li>


        </div>
    );
}
