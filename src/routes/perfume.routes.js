const express = require("express");
const router = express.Router();

const perfumeController = require("../controllers/perfume.controller");
const validateRequest = require("../middlewares/validateRequest");
const { createPerfumeSchema } = require("../validators/perfume.validator");
const upload = require("../middlewares/upload");

router
  .route("/")
  .post(
    upload.single("photo"),
    validateRequest(createPerfumeSchema),
    perfumeController.createPerfume
  )
  .get(perfumeController.getAllPerfumes);

router
  .route("/:id")
  .get(perfumeController.getPerfumeById)
  .put(upload.single("photo"), perfumeController.updatePerfume)
  .delete(perfumeController.deletePerfume);

module.exports = router;
