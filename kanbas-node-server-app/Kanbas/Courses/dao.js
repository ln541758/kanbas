import courses from "./model.js";

export const createCourse = (course) => {
    delete course._id
  return courses.create(course);
}

export const findAllCourses = () => courses.find();

export const updateCourse = (courseId, course) =>  courses.updateOne({ number: courseId }, { $set: course });

export const deleteCourse = (courseId) => courses.deleteOne({ _id: courseId });