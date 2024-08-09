import { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa6";
import "./QuestionEditor.css";
import { useDispatch, useSelector } from "react-redux";
import { setCorrectAns } from "../Quizzes/reducer";

export default function FillInBlankAns() {
    const newQuestion = useSelector((state: any) => state.quizzesReducer.newQuestion);
    const [array, setArray] = useState<string[]>(newQuestion.CorrectAns || []);
    const dispatch = useDispatch();

    useEffect(() => {
        setArray(newQuestion.CorrectAns || []);
    }, [newQuestion.CorrectAns]);

    useEffect(() => {
        dispatch(setCorrectAns(array));
    }, [array, dispatch]);

    const addElement = () => {
        setArray([...array, ""]);
    };

    const deleteElement = (index: number) => {
        setArray(array.filter((_, i) => i !== index));
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const newArray = array.map((item, i) => (i === index ? event.target.value : item));
        setArray(newArray);
    };

    return (
        <div id="wd-add-question-array-state-variables">
            <ul className="list-group">
                <div className="row">
                    {array.map((item, index) => (
                        <div key={index}>
                            <li className="list-group-item col-12 mb-2 ms-5">
                                <div className="d-flex justify-content-between align-items-center">
                                    <label className="d-flex align-items-center mb-0">
                                        Possible Answer:
                                        <input
                                            type="text"
                                            className="form-control ms-2"
                                            style={{ width: '200px' }}
                                            value={item}
                                            onChange={(event) => handleInputChange(event, index)}
                                        />
                                    </label>
                                    <FaTrash
                                        className="ms-2"
                                        onClick={() => deleteElement(index)}
                                        id="wd-add-question-delete-element-click"
                                    />
                                </div>
                            </li>
                        </div>
                    ))}
                </div>
            </ul>

            <button className="btn btn-success mb-2 float-end" onClick={addElement}>
                Add Another Answer
            </button>
        </div>
    );
}
