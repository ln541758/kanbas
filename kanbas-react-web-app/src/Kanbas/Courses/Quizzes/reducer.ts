import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  quizzes: [],
  quiz: {
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
  setCorrectAns, } = quizzesSlice.actions;
export default quizzesSlice.reducer;
