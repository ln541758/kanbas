import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: String,
    email: String,
    lastName: String,
    dob: Date,
    role: {
      type: String,
      enum: ["STUDENT", "FACULTY", "ADMIN", "USER"],
      default: "USER",
    },
    loginId: String,
    section: String,
    lastActivity: Date,
    totalActivity: String,
    record: [
      {
        quizId: String,
        attempts: Number,
        score: Number,
        answers: {
          type: Map,
          of: {
            type: mongoose.Schema.Types.Mixed, // Allows either String or Boolean
          },
          default: {}, // Default value is an empty object
        },
      },
    ],
  },
  { collection: "users" }
);

export default userSchema;
