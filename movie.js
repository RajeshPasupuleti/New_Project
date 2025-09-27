import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const PORT = 5000;


app.use(cors());
console.log("rajesh");
app.use(express.json()); 


mongoose.connect("mongodb://127.0.0.1:27017/Movies")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));


const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  director: String
});
const Movie = mongoose.model("Movie", movieSchema);




app.get("/api/movies", async (req, res) => {
  const movies = await Movie.find();
  res.json(movies);
});


app.post("/api/movies", async (req, res) => {
  const newMovie = new Movie(req.body);
  await newMovie.save();
  res.json({ message: "Movie added", movie: newMovie });
});


app.put("/api/movies/:id", async (req, res) => {
  const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json({ message: "Movie updated", movie: updatedMovie });
});


app.delete("/api/movies/:id", async (req, res) => {
  await Movie.findByIdAndDelete(req.params.id);
  res.json({ message: "Movie deleted" });
});


app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));