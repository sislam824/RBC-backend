const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const logMiddleware = require("./middleware/logMiddleware");
const bookRoutes = require("./routes/bookRoutes");
const userRoutes = require("./routes/userRoutes");

dotenv.config();

connectDB();

const app = express();
app.use(express.json());
app.use(logMiddleware);

app.use("/api/books", bookRoutes);
app.use("/api/users", userRoutes);
app.get("/", (req, res) => {
  res.send("hello world");
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
