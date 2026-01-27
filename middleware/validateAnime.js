export function validateAnime(req, res, next) {
  const { title, genre } = req.body;

  if (!title || !genre) {
    return res.status(400).json({ error: "Title and genre required" });
  }

  next();
}

// export function validateAnime(req, res, next) {
//   const { title, genre } = req.body;

//   if (!title || !genre) {
//     return res.status(400).json({
//       error: "Title and genre are required",
//     });
//   }

//   if (typeof title !== "string" || typeof genre !== "string") {
//     return res.status(400).json({
//       error: "Title and genre must be text",
//     });
//   }

//   if (title.trim().length < 2) {
//     return res.status(400).json({
//       error: "Title must be at least 2 characters",
//     });
//   }

//   next(); // data is valid, continue to route
// }

export default validateAnime;
