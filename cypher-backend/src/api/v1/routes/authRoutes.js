const {
  userLogin,
  userRegister,
  updatePassword,
} = require('../controllers/authController')
const {
  registerUserValidation,
  loginUserValidation,
  upPasswordValidation,
} = require('../validations/authValidation')
const { checkAuth } = require('../middleware/authMiddleware')

const router = require('express').Router()

router.route('/login').post(loginUserValidation, userLogin)
router.post('/register', registerUserValidation, userRegister)
router.put('/password', checkAuth, upPasswordValidation, updatePassword)

module.exports = router
