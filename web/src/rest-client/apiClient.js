import axios from "axios";

export const getRepoData = async () => {
  const response = await axios.get("http://localhost:4000/repos");
  return response;
};
