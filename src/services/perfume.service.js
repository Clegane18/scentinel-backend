const Perfume = require("../models/perfume.model");
const path = require("path");
const fs = require("fs");

const createPerfume = async (data, file) => {
  try {
    const photoPath = file ? `uploads/perfumes/${file.filename}` : null;

    const perfumePayload = {
      ...data,
      photo: photoPath,
    };

    const newPerfume = await Perfume.create(perfumePayload);

    return {
      status: 201,
      message: "Perfume created successfully.",
      perfume: newPerfume,
    };
  } catch (error) {
    console.error("Error in createPerfume service:", error);
    throw {
      status: 500,
      data: { message: "Failed to create perfume", error: error.message },
    };
  }
};

const getAllPerfumes = async () => {
  try {
    const perfumes = await Perfume.findAll({
      order: [["id", "ASC"]],
    });
    return {
      status: 200,
      message: "Perfumes retrieved successfully",
      perfumes,
    };
  } catch (error) {
    console.error("Error in getAllPerfumes service:", error);
    throw {
      status: 500,
      data: { message: "Failed to retrieve perfumes", error: error.message },
    };
  }
};

const getPerfumeById = async (id) => {
  try {
    const perfume = await Perfume.findByPk(id);
    if (!perfume) {
      return {
        status: 404,
        data: { message: "Perfume not found" },
      };
    }
    return {
      status: 200,
      message: "Perfume retrieved successfully",
      perfume,
    };
  } catch (error) {
    console.error("Error in getPerfumeById service:", error);
    throw {
      status: 500,
      data: { message: "Failed to retrieve perfume", error: error.message },
    };
  }
};

const updatePerfume = async (id, updates, file) => {
  try {
    const perfume = await Perfume.findByPk(id);
    if (!perfume) {
      return {
        status: 404,
        data: { message: "Perfume not found" },
      };
    }

    // Build new photo path if a new file is uploaded
    if (file) {
      updates.photo = `uploads/perfumes/${file.filename}`;
    }

    await perfume.update(updates);

    return {
      status: 200,
      message: "Perfume updated successfully",
      perfume,
    };
  } catch (error) {
    console.error("Error in updatePerfume service:", error);
    throw {
      status: 500,
      data: { message: "Failed to update perfume", error: error.message },
    };
  }
};

const deletePerfume = async (id) => {
  try {
    const perfume = await Perfume.findByPk(id);
    if (!perfume) {
      return {
        status: 404,
        data: { message: "Perfume not found" },
      };
    }

    if (perfume.photo) {
      const photoPath = path.join("uploads", "perfumes", perfume.photo);
      fs.unlink(photoPath, (err) => {
        if (err) {
          console.warn("Failed to delete photo file:", err.message);
        }
      });
    }

    await perfume.destroy();

    return {
      status: 200,
      message: "Perfume deleted successfully",
      perfume,
    };
  } catch (error) {
    console.error("Error in deletePerfume service:", error);
    throw {
      status: 500,
      data: { message: "Failed to delete perfume", error: error.message },
    };
  }
};

module.exports = {
  createPerfume,
  getAllPerfumes,
  getPerfumeById,
  updatePerfume,
  deletePerfume,
};
