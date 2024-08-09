import * as dao from "./dao.js"

export default function QuizRoutes(app) {
    const createQuiz = async (req, res) => {
        const quiz = await dao.createQuiz(req.body);
        res.json(quiz);
    };

    const deleteQuiz = async (req, res) => {
        const status = await dao.deleteQuiz(req.params.quizId);
        res.json(status);
    };


    // Find quizzes for a specific course by course ID
    const findQuizzesForCourse = async (req, res) => {
        const quizzes = await dao.findQuizzesForCourse(req.params.courseId);
        res.json(quizzes);
    };

    const findQuizById = async (req, res) => {
        const quiz = await dao.findQuizById(req.params.quizId);
        res.json(quiz);
    };

    const updateQuiz = async (req, res) => {
        const status = await dao.updateQuiz(req.params.quizId, req.body);
        res.json(status);
    };

    const findAllQuizzes = async (req, res) => {
        const quizzes = await dao.findAllQuizzes();
        res.json(quizzes);
    };

    app.get("/api/quizzes", findAllQuizzes);
    app.post("/api/quizzes", createQuiz);
    app.delete("/api/quizzes/:quizId", deleteQuiz);
    app.get("/api/quizzes/:quizId", findQuizById);
    app.get("/api/courses/:courseId/quizzes", findQuizzesForCourse);
    app.put("/api/quizzes/:quizId", updateQuiz);
}