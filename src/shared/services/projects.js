import { instance } from "./auth";

export const getProjects = () => {
  return instance.get("/projects/getAll");
};
export const createProject = (data) =>
  instance.post("./projects/createNew", data);
export const deleteProject = (id) => instance.delete(`./projects/${id}`);
export const getProjectById = (id) => instance.get(`./projects/${id}`);
