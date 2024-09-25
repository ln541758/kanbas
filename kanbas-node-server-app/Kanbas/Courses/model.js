import mongoose from "mongoose";
import schema from "./schema.js";

const courses = mongoose.model("CourseModel", schema);

export default courses;