const express = require("express");
const dotenv = require("dotenv");
const { connectDB, sequelize } = require("./config/db");
const User = require("./models/User"); // Ensure the model is imported to sync it

dotenv.config();

connectDB(); // Connect to PostgreSQL

const app = express();
app.use(express.json());

// Sync all models with the database
sequelize
  .sync()
  .then(() => console.log("Database synced"))
  .catch((err) => console.error("Error syncing database:", err));

app.use("/api/auth", require("./routes/auth"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
