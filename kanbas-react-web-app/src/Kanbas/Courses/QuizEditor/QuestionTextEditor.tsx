import { useDispatch, useSelector } from "react-redux";
import { setQuestion } from "../Quizzes/reducer";
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

export default function QuestionTextEditor() {
    const dispatch = useDispatch();
    const newQuestion = useSelector((state: any) => state.quizzesReducer.newQuestion);

    return (
        <div id="wd-quizzes-add-question-text-editor">
            <input type="text" className="form-control m-1 p-1" placeholder="Question Title"  />
            <h1 style={{fontSize: "2rem"}}>Question Content:</h1>
            <EditorProvider>
          <Editor
            value={newQuestion.questionContent}
            onChange={(e) =>
              dispatch(setQuestion({...newQuestion, questionContent: e.target.value}))}
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
    )
}