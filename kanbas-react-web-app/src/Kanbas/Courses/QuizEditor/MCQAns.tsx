//
import { useEffect, useState } from "react";
import {  FaTrash } from "react-icons/fa6";
import "./QuestionEditor.css";
import { useDispatch, useSelector } from "react-redux";
import { setCorrectAns, setQuestionOptions } from "../Quizzes/reducer";

export default function MCQAns() {
    const newQuestion = useSelector((state: any) => state.quizzesReducer.newQuestion);
    const [answers, setAnswers] = useState(newQuestion.options || []);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const dispatch = useDispatch();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const newAnswers = answers.map((answer:any, i:any) =>
            i === index ? event.target.value : answer
        );
        setAnswers(newAnswers);
    };


    const addAnswer = () => {
        setAnswers([...answers, '']);
    };

    const deleteAnswer = (index: number) => {
        setAnswers(answers.filter((_:any, i:any) => i !== index));
    };

    const handleRadioChange = (index: number) => {
        setSelectedAnswer(index);
        dispatch(setCorrectAns(answers[index]));
    };

    useEffect(() => {
        setAnswers(newQuestion.options || []);
        setSelectedAnswer(newQuestion.CorrectAns || null);
    }, [newQuestion.options]);

    useEffect(() => {
        dispatch(setQuestionOptions(answers));
    }, [answers, dispatch]);

    return (
        <div id="wd-add-question-array-state-variables">
            <ul className="list-group">
                <div className="row">
                    {answers.map((answer:any, index:any) => (
                        <div key={index}>
                            <li className="list-group-item col-12 mb-2 ms-5">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <div className="d-flex align-items-center">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="gridRadios"
                                            id={`MCQ-ans-${index}`}
                                            value={answer}
                                            checked={selectedAnswer === index}
                                            onChange={() => handleRadioChange(index)}
                                        />
                                        <label className="form-check-label ms-2 mb-0" htmlFor={`MCQ-ans-${index}`}>
                                            Possible Answer
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control ms-2"
                                            style={{ width: '200px' }}
                                            value={answer}
                                            onChange={(event) => handleInputChange(event, index)}

                                        />
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <FaTrash
                                            className="ms-2"
                                            onClick={() => deleteAnswer(index)}
                                            id="wd-add-question-delete-element-click"
                                        />
                                    </div>
                                </div>
                            </li>
                        </div>
                    ))}
                </div>
            </ul>

            <button className="btn btn-success mb-2 float-end" onClick={addAnswer}>Add Another Answer</button>
        </div>
    );
}
