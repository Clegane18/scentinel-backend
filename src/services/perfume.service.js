const Perfume = require("../models/perfume.model");

const createPerfume = async (data) => {
  return await Perfume.create(data);
};

const getAllPerfumes = async () => {
  return await Perfume.findAll();
};

const getPerfumeById = async (id) => {
  return await Perfume.findByPk(id);
};

const updatePerfume = async (id, updates) => {
  const perfume = await Perfume.findByPk(id);
  if (!perfume) return null;
  return await perfume.update(updates);
};

const deletePerfume = async (id) => {
  const perfume = await Perfume.findByPk(id);
  if (!perfume) return null;
  await perfume.destroy();
  return perfume;
};

module.exports = {
  createPerfume,
  getAllPerfumes,
  getPerfumeById,
  updatePerfume,
  deletePerfume,
};
