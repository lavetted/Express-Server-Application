// Import
import express from "express";

// Setup
const app = express();
const PORT = 3000;

// Middleware
app.use(express.static("styles"));

// Routes

// Global Error Handler

// Server Listener
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
