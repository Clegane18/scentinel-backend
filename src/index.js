const express = require("express");
const cors = require("cors");
require("dotenv").config();
const path = require("path");

const sequelize = require("./config/sequelize");
const perfumeRoutes = require("./routes/perfume.routes");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));

// Register all routes
app.use("/api/perfumes", perfumeRoutes);
app.get("/ping", (req, res) => {
  console.log("✅ Ping route hit!");
  res.send("Pong");
});

// Initialize the app (connect DB, sync models, start server)
const init = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected to PostgreSQL DB successfully.");

    await sequelize.sync();
    console.log("Sequelize models synced.");

    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(" DB connection failed:", error.message);
    process.exit(1);
  }
};

init();
