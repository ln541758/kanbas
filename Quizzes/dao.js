import QuizModel from "./model.js";

export const createQuiz = (quiz) => QuizModel.create(quiz);
export const deleteQuiz = (quizId) => QuizModel.deleteOne({ _id: quizId });
export const findQuizzesForCourse = (courseId) => QuizModel.find({ courses: courseId });
// Find a quiz by its ID
export const findQuizById = (quizId) => QuizModel.findById(quizId);
export const updateQuiz = (quizId, quiz) => QuizModel.updateOne({ _id: quizId }, { $set: quiz });
export const findAllQuizzes = () => QuizModel.find();