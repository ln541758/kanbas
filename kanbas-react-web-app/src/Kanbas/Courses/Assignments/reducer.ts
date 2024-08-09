import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  assignments: [],
  assignment: { _id: " ",course: "", title: " ", description: "", points: 0, dueDate: "", availableDate: ""},
};
const assignmentSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, { payload: assignment }) => {
      const newAssignment: any = {
        ...state.assignment,
        _id: new Date().getTime().toString(),
        course: assignment.course,
      };
      state.assignments = [...state.assignments, newAssignment] as any;
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (m: any) => m._id !== assignmentId);
    },
    updateAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((m: any) =>
        m._id === assignment._id ? assignment : m
      ) as any;
    },
    setAssignment: (state, { payload: assignment }) => {
      state.assignment = assignment;
    },
    setAssignments: (state, action) => {
      state.assignments = action.payload;
    },
    clearAssignment: (state) => {
      state.assignment = { course: "", title: "", description: "",
        points: 0, dueDate: "", availableDate: "", _id: "" };
    },
  },
});
export const { addAssignment, deleteAssignment, updateAssignment,
  setAssignment, clearAssignment, setAssignments } =
  assignmentSlice.actions;
export default assignmentSlice.reducer;
