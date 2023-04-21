const { userLogin, userRegister } = require('../controllers/authController')
const { registerUserValidation } = require('../validations/authValidation')

const router = require('express').Router()

router.route('/login').post(userLogin)
router.post('/register', registerUserValidation, userRegister)

module.exports = router
