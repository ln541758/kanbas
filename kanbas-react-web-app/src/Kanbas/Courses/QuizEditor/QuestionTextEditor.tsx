import { useDispatch, useSelector } from "react-redux";
import { setQuestion } from "../Quizzes/reducer";

export default function QuestionTextEditor() {
    const dispatch = useDispatch();
    const newQuestion = useSelector((state: any) => state.quizzesReducer.newQuestion);

    return (
        <div id="wd-quizzes-add-question-text-editor">
            <h1 style={{fontSize: "2rem"}}>Question:</h1>
            <textarea className="form-control" style={{height: "100px"}}
            value={newQuestion.questionContent}
            onChange={(e:any) => dispatch(setQuestion({...newQuestion, questionContent: e.target.value})) }></textarea>
        </div>
    )
}