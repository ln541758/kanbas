import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
const axiosWithCredentials = axios.create({ withCredentials: true });

export const fetchAllCourses = async () => {
    const { data } = await axiosWithCredentials.get(COURSES_API);
    return data;
};
export const createCourse = async (course: any) => {
    const response = await axiosWithCredentials.post(COURSES_API, course);
    return response.data;
};
export const deleteCourse = async (id: string) => {
    const response = await axiosWithCredentials.delete(`${COURSES_API}/${id}`);
    return response.data;
};
export const updateCourse = async (course: any) => {
    const response = await axiosWithCredentials.put(`${COURSES_API}/${course._id}`, course);
    return response.data;
};

