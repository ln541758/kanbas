import db from "../Database/index.js";

export default function QuizRoutes(app) {
    app.get("/api/courses/:cid/quizzes", (req, res) => {
        const {cid} = req.params;
        const quizzes = db.quizzes.filter((m) => m.courses === cid);
        res.json(quizzes);
    });

    app.get("/api/quizzes/:qid", (req, res) => {
        const {qid} = req.params;
        const quiz = db.quizzes.find((m) => m._id === qid);
        res.json(quiz);
    });

    app.put("/api/quizzes/:qid", (req, res) => {
        const {qid} = req.params;
        const quizIndex = db.quizzes.findIndex(
            (m) => m._id === qid);
        db.quizzes[quizIndex] = {
            ...db.quizzes[quizIndex],
            ...req.body
        };
        res.sendStatus(204);
    });
}