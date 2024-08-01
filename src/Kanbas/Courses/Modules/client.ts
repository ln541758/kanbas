import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
const axiosWithCredentials = axios.create({ withCredentials: true });

export const findModulesForCourse = async (courseId: string) => {
  const response = await axiosWithCredentials
    .get(`${COURSES_API}/${courseId}/modules`);
  return response.data;
};

const MODULES_API = `${REMOTE_SERVER}/api/modules`;
export const deleteModule = async (moduleId: string) => {
  const response = await axiosWithCredentials
    .delete(`${MODULES_API}/${moduleId}`);
  return response.data;
};

export const createModule = async (courseId: string, module: any) => {
  const response = await axiosWithCredentials.post(`${COURSES_API}/${courseId}/modules`, module);
  return response.data;
};

export const updateModule = async (module: any) => {
  const response = await axiosWithCredentials.put(`${MODULES_API}/${module._id}`, module);
  return response.data;
};
