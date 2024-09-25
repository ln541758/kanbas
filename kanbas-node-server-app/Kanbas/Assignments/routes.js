import courses from "../Database/courses.js";
import db from "../Database/index.js";

export default function AssignmentRoutes(app) {

    app.get("/api/courses/:cid/assignments", (req, res) => {
        const {cid} = req.params;
        const assignments = db.assignments.filter((m) => m.course === cid);
        res.json(assignments);
    });

    app.post("/api/courses/:cid/assignments", (req, res) => {
        const {cid} = req.params;
        const newAssignment = {
            ...req.body,
            _id: new Date().getTime().toString(),
            course: cid,
        };
        db.assignments.push(newAssignment);
        res.send(newAssignment);
    });

    app.delete("/api/assignments/:assignmentId", (req, res) => {
        const {assignmentId} = req.params;
        db.assignments = db.assignments.filter((m) => m._id !== assignmentId);
        res.sendStatus(200);
    });

    app.put("/api/assignments/:assignmentId", (req, res) => {
        const {assignmentId} = req.params;
        const assignmentIndex = db.assignments.findIndex(
            (m) => m._id === assignmentId);
        db.assignments[assignmentIndex] = {
            ...db.assignments[assignmentIndex],
            ...req.body
        };
        res.sendStatus(204);
    })
}