export function validateAnime(req, res, next) {
  const { title, genre } = req.body;

  if (!title || !genre) {
    return res.status(400).json({ error: "Title and genre required" });
  }

  next();
}

export default validateAnime;
