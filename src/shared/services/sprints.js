import { instance } from "./auth";

export const getSprints = () => {
  return instance.get("/projects/:id");
};
export const createSprint = (data) => instance.post("./sprints", data);
export const deleteSprint = (id) => instance.delete(`./sprints/${id}`);
export const getSprintById = (id) => instance.get(`./sprints/${id}`);
