import express from "express";
import validateAnime from "./middleware/validateAnime.js";
import validateReview from "./middleware/validateReview.js";

const app = express();
const PORT = 3000;

/* ---------- MIDDLEWARE ---------- */
app.use(express.json());
app.use(express.static("views"));

app.use(express.urlencoded({ extended: true }));
app.set("views", "./views");
app.set("view engine", "html");
app.use(express.static("./styles"));

/* ---------- FAKE DATABASE ---------- */
let animeList = [
  {
    id: 1,
    title: "Attack on Titan",
    genre: "Action",
    reviews: ["Masterpiece", "Crazy story"],
  },
  {
    id: 2,
    title: "Naruto",
    genre: "Adventure",
    reviews: ["Classic ninja anime"],
  },
];

/* ---------- ROUTES ---------- */

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: "views" });
});

/* GET ALL anime */
app.get("/anime", (req, res) => {
  res.json(animeList);
});

/* GET one anime */
app.get("/anime/:id", (req, res) => {
  const anime = animeList.find((a) => a.id == req.params.id);

  if (!anime) {
    return res.status(404).json({ message: "Anime not found" });
  }

  res.json(anime);
});

/* ADD anime */
app.post("/anime", validateAnime, (req, res) => {
  const { title, genre } = req.body;

  const newAnime = {
    id: Date.now(),
    title,
    genre,
    reviews: [],
  };

  animeList.push(newAnime);
  res.status(201).json(newAnime);
});

/* UPDATE anime */
app.put("/anime/:id", validateAnime, (req, res) => {
  const anime = animeList.find((a) => a.id == req.params.id);

  if (!anime) {
    return res.status(404).json({ message: "Anime not found" });
  }

  anime.title = req.body.title;
  anime.genre = req.body.genre;

  res.json(anime);
});

/* DELETE anime */
app.delete("/anime/:id", (req, res) => {
  const index = animeList.findIndex((a) => a.id == req.params.id);

  if (index === -1) {
    return res.status(404).json({ message: "Anime not found" });
  }

  const deleted = animeList.splice(index, 1);
  res.json({ message: "Deleted", deleted });
});

/* ADD review */
app.post("/anime/:id/reviews", validateReview, (req, res) => {
  const anime = animeList.find((a) => a.id == req.params.id);

  if (!anime) {
    return res.status(404).json({ message: "Anime not found" });
  }

  anime.reviews.push(req.body.review);
  res.json(anime);
});

/* START SERVER */
app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});
