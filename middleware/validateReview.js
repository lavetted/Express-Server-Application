export function validateReview(req, res, next) {
  const { review } = req.body;

  if (!review) {
    return res.status(400).json({ error: "Review required" });
  }

  next();
}

// export function validateReview(req, res, next) {
//   const { review } = req.body;

//   if (!review) {
//     return res.status(400).json({
//       error: "Review text required",
//     });
//   }

//   if (review.trim().length < 3) {
//     return res.status(400).json({
//       error: "Review must be at least 3 characters",
//     });
//   }

//   next();
// }

export default validateReview;
