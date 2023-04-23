const Joi = require('joi')
const { validateSchema } = require('./validationFunction.js')

exports.aboutMeValidation = (req, res, next) => {
  const schema = Joi.object({
    aboutMe: Joi.string().max(150).required(),
  })

  try {
    const validated = validateSchema(req.body, schema)
    if (validated) next()
  } catch (error) {
    res.status(400).json({
      message: error.message,
    })
  }
}

exports.socialMediaValidation = (req, res, next) => {
  const schema = Joi.object({
    linkedin: Joi.string(),
    github: Joi.string(),
    facebook: Joi.string(),
    twitter: Joi.string(),
    instagram: Joi.string(),
    website: Joi.string(),
  }).min(1)

  try {
    const validated = validateSchema(req.body, schema)
    if (validated) next()
  } catch (error) {
    res.status(400).json({
      message: error.message,
    })
  }
}

exports.educationValidation = (req, res, next) => {
  const schema = Joi.object({
    education: Joi.string().valid(
      'primary',
      'secondary',
      'higher secondary',
      'graduation',
      'post graduation'
    ),
    role: Joi.string().valid(
      'schooling',
      'college student',
      'teaching',
      'job',
      'freelancing'
    ),
  }).min(1)

  try {
    const validated = validateSchema(req.body, schema)
    if (validated) next()
  } catch (error) {
    res.status(400).json({
      message: error.message,
    })
  }
}
exports.interestsValidation = (req, res, next) => {
  const schema = Joi.object({
    interests: Joi.array().required(),
  })

  try {
    const validated = validateSchema(req.body, schema)
    if (validated) next()
  } catch (error) {
    res.status(400).json({
      message: error.message,
    })
  }
}
