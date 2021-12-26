import { instance } from "./auth";

export async function getAllProjects() {
  const { data } = await instance.get("/projects");
  return data;
}
export async function getProjectById(id) {
  const { data } = await instance.post(`projects/${id}`);
  return data;
}
export async function postProject(credentials) {
  const { data } = await instance.post("/projects", credentials);
  return data;
}
export async function deleteProject(id) {
  const { data } = await instance.delete(`projects/${id}`);
  return data;
}
export async function updateProjectName({projectId,newValue}) {
  console.log(newValue);
  return instance.patch(`projects/${projectId}`, newValue);
}
export async function updateMembers(id, credentials) {
  const { data } = await instance.post(`projects/${id}`, credentials);
  return data;
}

export const participants = ({projectId,data}) => {
  console.log(data);
return  instance.patch(`./projects/updateParticipants/${projectId}`, data);
}

