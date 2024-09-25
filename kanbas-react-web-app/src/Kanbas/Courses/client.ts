import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;

export const fetchAllCourses = async () => {
    const { data } = await axios.get(COURSES_API);
    return data;
};

export const createCourse = async (course: any) => {
    const response = await axios.post(COURSES_API, course);
    return response.data;
};

export const deleteCourse = async (courseId: any) => {
    const response = await axios.delete(`${COURSES_API}/${courseId}`);
    return response.data;
};

export const updateCourse = async (course: any) => {
    const response = await axios.put(`${COURSES_API}/${course.number}`, course);
    return response.data;
  };
