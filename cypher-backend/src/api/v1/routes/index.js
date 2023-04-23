const router = require('express').Router()

router.use('/auth', require('./authRoutes'))
router.use('/profile', require('./profileRoutes'))

module.exports = router
