import axios from "axios";

const client = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});

export const getRepoData = async () => {
  const response = await client.get("/repos");
  return response;
};

export const getCommits = async (repoName) => {
  const response = await client.get(`/repos/${repoName}`);
  return response;
};
