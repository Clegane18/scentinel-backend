const express = require("express");
const cors = require("cors");
require("dotenv").config();

const sequelize = require("./config/sequelize");
const perfumeRoutes = require("./routes/perfume.routes");
const Perfume = require("./models/perfume.model"); // Include any models you want to sync

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Register all routes
app.use("/api/perfumes", perfumeRoutes);

// Initialize the app (connect DB, sync models, start server)
const init = async () => {
  try {
    await sequelize.authenticate();
    console.log("🟢 Connected to PostgreSQL DB successfully.");

    await sequelize.sync(); // Creates tables if they don’t exist
    console.log("🛠️  Sequelize models synced.");

    app.listen(PORT, () => {
      console.log(`🚀 Server is running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("🔴 DB connection failed:", error.message);
    process.exit(1); // Exit app if DB connection fails
  }
};

init();
