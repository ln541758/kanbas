import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
  _id: String,
  title: String,
  description: String,
  points: Number,
  timeLimit: Number,
  assignmentGroup: String,
  shuffleAnswers: Boolean,
  multipleAttempts: Boolean,
  viewResponses: String,
  showCorrectAnswers: String,
  oneQuestionAtATime: Boolean,
  requireRespondusLockDown: Boolean,
  browserRequired: Boolean,
  requiredToViewQuizResults: Boolean,
  webcamRequired: Boolean,
  lockQuestionsAfterAnswering: Boolean,
  availableFrom: String,
  availableUntil: String,
  due: String,
  questionsNum: Number,
  status: String,
  questions: Array,
  courses: String
},
    {collection: "quizzes"}
);

export default quizSchema;