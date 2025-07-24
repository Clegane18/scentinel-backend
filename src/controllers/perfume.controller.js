const perfumeService = require("../services/perfume.service");

const createPerfume = async (req, res) => {
  try {
    const result = await perfumeService.createPerfume(req.body, req.file);
    return res.status(result.status).json(result);
  } catch (error) {
    console.error("Error in createPerfume controller:", error);
    return res
      .status(error.status || 500)
      .json(error.data || { message: "An unexpected error occurred" });
  }
};

const getAllPerfumes = async (req, res) => {
  try {
    const result = await perfumeService.getAllPerfumes();
    return res.status(result.status).json(result);
  } catch (error) {
    return res
      .status(error.status || 500)
      .json(error.data || { message: "Unexpected error" });
  }
};

const getPerfumeById = async (req, res) => {
  try {
    const result = await perfumeService.getPerfumeById(req.params.id);
    return res.status(result.status).json(result);
  } catch (error) {
    return res
      .status(error.status || 500)
      .json(error.data || { message: "Unexpected error" });
  }
};

const updatePerfume = async (req, res) => {
  try {
    const result = await perfumeService.updatePerfume(
      req.params.id,
      req.body,
      req.file
    );
    return res.status(result.status).json(result);
  } catch (error) {
    return res
      .status(error.status || 500)
      .json(error.data || { message: "Unexpected error" });
  }
};

const deletePerfume = async (req, res) => {
  try {
    const result = await perfumeService.deletePerfume(req.params.id);
    return res.status(result.status).json(result);
  } catch (error) {
    return res
      .status(error.status || 500)
      .json(error.data || { message: "Unexpected error" });
  }
};

module.exports = {
  createPerfume,
  getAllPerfumes,
  getPerfumeById,
  updatePerfume,
  deletePerfume,
};
