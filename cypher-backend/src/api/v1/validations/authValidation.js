const Joi = require('joi')
const { validateSchema } = require('./validationFunction.js')

// Register new user validation
exports.registerUserValidation = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    Fname: Joi.string().required(),
    Lname: Joi.string().required(),
    password: Joi.string()
      .min(8)
      .max(15)
      .regex(/^[a-zA-Z0-9]{3,30}$/)
      .required(),
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

// Login user validation
exports.loginUserValidation = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
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

// Update password validation
exports.upPasswordValidation = (req, res, next) => {
  const schema = Joi.object({
    oldpass: Joi.string()
      .min(8)
      .max(15)
      .regex(/^[a-zA-Z0-9]{3,30}$/)
      .required(),
    newpass: Joi.string()
      .min(8)
      .max(15)
      .regex(/^[a-zA-Z0-9]{3,30}$/)
      .required(),
    confirmpass: Joi.string()
      .min(8)
      .max(15)
      .regex(/^[a-zA-Z0-9]{3,30}$/)
      .required(),
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
