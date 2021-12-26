import { instance } from "./auth";

export const getSprints = () => {
  return instance.get("/projects/:id");
};
export const createSprint = ({projectId,newValue}) => {
  const newV = {projectId, ...newValue}
return   instance.post("./sprints", newV)
}
export const deleteSprint = (id) => instance.delete(`./sprints/${id}`);
export const getSprintById = (id) => instance.get(`./sprints/${id}`);
