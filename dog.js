import express from "express";
import axios from "axios";
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to Dog API! Use /dog or /dogs/:count");
});


app.get("/dog", async (req, res) => {
  try {
    const response = await axios.get("https://dog.ceo/api/breeds/image/random");
    res.json({ status: "success", image: response.data.message });
  } catch (error) {
    res.status(500).json({ status: "error", message: "Failed to fetch dog image" });
  }
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));






