const {
  updateAboutMe,
  setSocialMedia,
  setEducation,
  setInterests,
} = require('../controllers/profileController')
const { checkAuth } = require('../middleware/authMiddleware')
const {
  socialMediaValidation,
  aboutMeValidation,
  educationValidation,
  interestsValidation,
} = require('../validations/profileValidation')

const router = require('express').Router()

router.use(checkAuth)

router.route('/aboutMe').post(aboutMeValidation, updateAboutMe)
router.route('/social-media').post(socialMediaValidation, setSocialMedia)
router.route('/education').post(educationValidation, setEducation)
router.route('/interests').post(interestsValidation, setInterests)

module.exports = router
