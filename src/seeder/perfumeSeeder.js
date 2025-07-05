const sequelize = require("../config/sequelize");
const Perfume = require("../models/perfume.model");

const perfumes = [
  {
    name: "MYSLF",
    brand: "Yves Saint Laurent",
    type: "EDP",
    season: "All-season",
    intensity: "Fresh Floral, Woody, Musky",
  },
  {
    name: "Luna Rossa Ocean",
    brand: "Prada",
    type: "EDT",
    season: "Spring/Summer",
    intensity: "Fresh, Aromatic, Aquatic, Fougere",
  },
  {
    name: "YSL Y",
    brand: "Yves Saint Laurent",
    type: "EDP",
    season: "Year-round",
    intensity: "Fresh, Aromatic, Woody, Spicy",
  },
  {
    name: "L’Homme Prada",
    brand: "Prada",
    type: "EDP",
    season: "Year-round",
    intensity: "Iris, Amber, Powdery, Woody",
  },
  {
    name: "Versace Pour Homme",
    brand: "Versace",
    type: "EDT",
    season: "Spring/Summer",
    intensity: "Citrus, Aromatic, Fresh Spicy",
  },
  {
    name: "Bleu De Chanel",
    brand: "Chanel",
    type: "EDP",
    season: "All-season",
    intensity: "Citrus, Woody, Aromatic, Incense",
  },
  {
    name: "Sedley",
    brand: "Parfums de Marly",
    type: "EDP",
    season: "Spring/Summer",
    intensity: "Fresh, Aquatic, Aromatic, Woody",
  },
  {
    name: "Stronger With You Intensely",
    brand: "Emporio Armani",
    type: "EDP",
    season: "Fall/Winter",
    intensity: "Sweet, Warm Spicy, Vanilla, Amber",
  },
  {
    name: "Aventus Cologne",
    brand: "Creed",
    type: "EDP",
    season: "All-season",
    intensity: "Citrus, Woody, Fresh Spicy, Musky",
  },
  {
    name: "Greenley",
    brand: "Parfums de Marly",
    type: "EDP",
    season: "Spring/Summer",
    intensity: "Green Apple, Woody, Fresh Spicy, Citrus",
  },
  {
    name: "Gentleman Givenchy Réserve Privée",
    brand: "Givenchy",
    type: "EDP",
    season: "Fall/Winter",
    intensity: "Warm Spicy, Woody, Amber, Powdery",
  },
];

const seed = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    await Perfume.bulkCreate(perfumes);
    console.log("✅ Perfumes seeded successfully");
    process.exit(0);
  } catch (error) {
    console.error("🛑 Seeding failed:", error);
    process.exit(1);
  }
};

seed();
