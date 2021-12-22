import { instance } from "./auth";

export const getProjects = () => instance.get('/getAll');
export const createProject = (data) => instance.post('./createNew', data);
export const deleteProject = (id) => instance.delete(`./${id}`);
export const getProjectById = (id) => instance.get(`./${id}`);