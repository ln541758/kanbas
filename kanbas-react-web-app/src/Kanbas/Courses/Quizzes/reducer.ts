import { createSlice } from "@reduxjs/toolkit";
import { time } from "console";


const initialState = {
  quizzes: [],
  quiz: {
    _id: "",
    title: "",
    description: "",
    type: "",
    points: 0,
    timeLimit: 0,
    assignmentGroup: "",
    shuffleAnswers: false,
    multipleAttempts: false,
    viewResponses: "",
    showCorrectAnswers: "",
    oneQuestionAtATime: false,
    requireRespondusLockDown: false,
    browserRequired: false,
    requiredToViewQuizResults: false,
    webcamRequired: false,
    lockQuestionsAfterAnswering: false,
    availableFrom: "",
    availableUntil: "",
    due: "",
    status: "",
    courses: "",
    howManyAttempts: 0,
    questions: [] as any[],
  },

  newQuestion: {
    questionId: 0,
    questionContent: "",
    questionType: "Multiple Choice",
    questionPoints: 0,
    questionDifficulty: "easy",
    options: [] as any[],
    CorrectAns: null,

  },
};
const quizzesSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: {
    setQuizzes: (state, action) => {
      state.quizzes = action.payload;
    },
    setQuiz: (state, action) => {
      state.quiz = action.payload;
    },
    addQuiz: (state, action) => {
      const cid = action.payload;
      const newQuiz = {
        ...state.quiz,
        _id: cid,
        courses: cid,
        title: "abc",
        shuffleAnswers: true,
        howManyAttempts: 1,
        timeLimit: 20,
        oneQuestionAtATime: true,
      }
      state.quiz = newQuiz;
      setQuiz(newQuiz);
    },
    clearQuiz(state) {
      state.quiz = {
        _id: "",
        title: "",
        description: "",
        type: "",
        points: 0,
        timeLimit: 0,
        assignmentGroup: "",
        shuffleAnswers: false,
        multipleAttempts: false,
        viewResponses: "",
        showCorrectAnswers: "",
        oneQuestionAtATime: false,
        requireRespondusLockDown: false,
        browserRequired: false,
        requiredToViewQuizResults: false,
        webcamRequired: false,
        lockQuestionsAfterAnswering: false,
        availableFrom: "",
        availableUntil: "",
        due: "",
        status: "",
        courses: "",
        howManyAttempts: 0,
        questions: [] as any[],
      };
    },

    clearQuestion: (state) => {
      state.newQuestion = {
        questionId: 0,
        questionContent: "",
        questionType: "Multiple Choice",
        questionPoints: 0,
        questionDifficulty: "easy",
        options: [],
        CorrectAns: null,

      };
    },
    setQuestionOptions: (state, action) => {
      state.newQuestion.options = action.payload;
    },

    setCorrectAns: (state, action) => {
      state.newQuestion.CorrectAns = action.payload;
    },

    setQuestion: (state, action) => {
      state.newQuestion = action.payload;
    },
  },
});
export const { setQuizzes, setQuiz, setQuestion,
  clearQuestion, setQuestionOptions,
  setCorrectAns, addQuiz,
  clearQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;
