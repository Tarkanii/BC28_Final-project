// import id from "date-fns/esm/locale/id/index";
import { instance } from "./auth";

export const getSprints = (id) => {
  return instance.get(`/projects/${id}`)
}

export const createSprint = ({projectId,newValue}) => {
  const newV = {projectId, ...newValue}
return   instance.post("./sprints", newV)
}
export const deleteSprint = (id) => instance.delete(`./sprints/${id}`);
export const getSprintById = (id) => instance.get(`./sprints/${id}`);

export  function updateSprintName({sprintId,newValue}) {
  return instance.patch(`sprints/${sprintId}`, newValue);
}

export const createTask = ({sprintId,newValue}) => {
  const newV = {sprintId, ...newValue}
return   instance.post("./tasks", newV)
}

export const deleteTask = (id) => instance.delete(`./tasks/${id}`);