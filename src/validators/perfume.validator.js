const Joi = require("joi");

const createPerfumeSchema = Joi.object({
  name: Joi.string().min(2).required(),
  brand: Joi.string().min(2).required(),
  type: Joi.string().min(2).optional().allow(""),
  season: Joi.string().min(2).optional().allow(""),
  intensity: Joi.string().min(2).optional().allow(""),
});

module.exports = { createPerfumeSchema };
