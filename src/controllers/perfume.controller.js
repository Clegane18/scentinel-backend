const perfumeService = require("../services/perfume.service");

const createPerfume = async (req, res) => {
  try {
    const newPerfume = await perfumeService.createPerfume(req.body);
    res.status(201).json(newPerfume);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAllPerfumes = async (req, res) => {
  try {
    const perfumes = await perfumeService.getAllPerfumes();
    res.json(perfumes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getPerfumeById = async (req, res) => {
  try {
    const perfume = await perfumeService.getPerfumeById(req.params.id);
    if (!perfume) return res.status(404).json({ message: "Perfume not found" });
    res.json(perfume);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updatePerfume = async (req, res) => {
  try {
    const updated = await perfumeService.updatePerfume(req.params.id, req.body);
    if (!updated) return res.status(404).json({ message: "Perfume not found" });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deletePerfume = async (req, res) => {
  try {
    const deleted = await perfumeService.deletePerfume(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Perfume not found" });
    res.json({ message: "Perfume deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createPerfume,
  getAllPerfumes,
  getPerfumeById,
  updatePerfume,
  deletePerfume,
};
