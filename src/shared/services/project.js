import axios from "axios";

export const instance = axios.create({
  // baseURL: "https://slimmom-backend.herokuapp.com/",
  baseURL: "http://localhost:3000/api/",
});

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
export async function updateProjectName(id, credentials) {
  const { data } = await instance.post(`projects/${id}`, credentials);
  return data;
}
export async function updateMembers(id, credentials) {
  const { data } = await instance.post(`projects/${id}`, credentials);
  return data;
}
