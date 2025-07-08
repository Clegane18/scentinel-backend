const express = require("express");
const router = express.Router();
const perfumeController = require("../controllers/perfume.controller");
const validateRequest = require("../middlewares/validateRequest");
const { createPerfumeSchema } = require("../validators/perfume.validator");

router.post(
  "/",
  validateRequest(createPerfumeSchema),
  perfumeController.createPerfume
);
router.get("/", perfumeController.getAllPerfumes);
router.get("/:id", perfumeController.getPerfumeById);
router.put("/:id", perfumeController.updatePerfume);
router.delete("/:id", perfumeController.deletePerfume);

module.exports = router;
