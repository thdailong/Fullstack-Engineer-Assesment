const express = require("express");
const app = express();
const axios = require("axios");
const PORT = 4000;
const cors = require("cors");

app.use(cors()); // Enable CORS for all routes

// "/repos" endpoint to get repository data
app.get("/repos", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.github.com/users/freeCodeCamp/repos"
    );
    let repositories = response.data; // Access the data from the response
    repositories?.filter((r) => r?.fork === false && r?.forks > 5);
    res.json(repositories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/repos/:repoName", async (req, res) => {
  try {
    const { repoName } = req.params;
    const response = await axios.get(
      `https://api.github.com/repos/freeCodeCamp/${repoName}`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
