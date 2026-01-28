export function validateReview(req, res, next) {
  const { review } = req.body;

  if (!review) {
    return res.status(400).json({ error: "Review required" });
  }

  next();
}

export default validateReview;
