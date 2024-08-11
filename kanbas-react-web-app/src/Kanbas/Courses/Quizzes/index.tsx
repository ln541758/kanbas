import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import * as client from "./client";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaCheckCircle, FaRocket } from "react-icons/fa";
import { Link } from "react-router-dom";
import { setQuizzes, setQuiz, addQuiz, clearQuiz } from "./reducer";


export default function Quizzes() {

    const { cid } = useParams();
    const { quizzes } = useSelector((state: any) => state.quizzesReducer);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const [showOptions, setShowOptions] = useState(false);
    const [menueId, setMenueId] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const toggleOptions = (m: any) => {
        setShowOptions(!showOptions);
        setMenueId(m._id);
    };


    const fetchQuizzes = async () => {
        const quizzes = await client.findQuizzesForCourse(cid as string);
        dispatch(setQuizzes(quizzes));
    };

    const handleAddQuiz = async () => {
        dispatch(clearQuiz());
        dispatch(addQuiz(cid));
        navigate(`/Kanbas/Courses/${cid}/Quizzes/${cid}/editing`)
    };

    const handlePublishQuiz = async (quiz: any) => {
        const updatedQuiz = {
            ...quiz,
            published: !quiz.published,
        };
        const status = await client.updateQuiz(updatedQuiz);
        setShowOptions(false);
        fetchQuizzes();
    };

    const handleEditQuiz = async (m: any) => {
        navigate(`/Kanbas/Courses/${cid}/Quizzes/${m._id}/editing`);
        setShowOptions(false);
        dispatch(setQuiz(m));
    };

    const handleDeleteQuiz = async (m: any) => {
        const status = await client.deleteQuiz(m._id);
        setShowOptions(false);
        fetchQuizzes();
    }


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
                            {currentUser.role === "FACULTY" && (
                                <button className="btn btn-lg btn-danger text-black me-3 rounded-1 border"
                                    onClick={(e) => { handleAddQuiz() }}>
                                    Add Quiz
                                </button>)}
                        </div>
                    </div>
                </div>
                <ul className="wd-quiz-list-item list-group rounded-0 border-5 border-start border-success">
                    {quizzes.filter((m: any) => currentUser.role === "STUDENT" ? m.published === true : m)
                        .map((m: any) => (
                            <li className="wd-quiz-list-item list-group-item p-3 ps-1">
                                <div className="row align-items-center">
                                    <div className="col-1 d-flex justify-content-center align-items-center">
                                        <FaRocket className="fs-3 text-success" />
                                    </div>
                                    <div className="col-9 d-flex flex-column justify-content-center">
                                        <Link
                                            className="wd-quiz-link"
                                            to={`/Kanbas/Courses/${cid}/Quizzes/${m._id}/quizDetailScreen`}
                                            style={{ textDecoration: "none", color: "black", fontWeight: "bold", marginRight: '10px' }}
                                            onClick={() => dispatch(setQuiz(m))}>
                                            {m._id + " " + m.title}
                                        </Link>
                                        <p>
                                            <span style={{ color: "red" }}>{m.status}</span> |
                                            <span style={{ fontWeight: "bold" }}> Due</span> {m.due} | points: {m.points} | {m.questionsNum} questions
                                        </p>
                                    </div>
                                    <div className="col-2 d-flex justify-content-end align-items-center">
                                        {currentUser.role === "FACULTY" && (
                                            <div className="d-flex align-items-center">
                                                {m.published ? (
                                                    <FaCheckCircle className="text-success me-2 fs-4"
                                                        onClick={(e) => { handlePublishQuiz(m) }} />
                                                ) : (
                                                    <FaCheckCircle className="text-muted me-2 fs-4"
                                                        onClick={(e) => { handlePublishQuiz(m) }} />)}
                                                <IoEllipsisVertical
                                                    className="fs-3 text-muted cursor-pointer"
                                                    onClick={(e) => toggleOptions(m)}
                                                />
                                                {showOptions && menueId === m._id && (
                                                    <div className="dropdown-menu show">
                                                        <button className="dropdown-item" onClick={(e) => handleEditQuiz(m)}>
                                                            Edit
                                                        </button>
                                                        <button className="dropdown-item" onClick={(e) => handleDeleteQuiz(m)}>
                                                            Delete
                                                        </button>
                                                        <button className="dropdown-item" onClick={(e) => handlePublishQuiz(m)}>
                                                            {m.published ? "Unpublish" : "Publish"}
                                                        </button>
                                                    </div>
                                                )}
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
