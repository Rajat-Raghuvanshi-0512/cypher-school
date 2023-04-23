const { statusCodes, messages } = require('../../../../constants')
const { authHelper } = require('../helpers')
const { profileService } = require('../services')

exports.updateAboutMe = async ({ body, user }, res, next) => {
  try {
    await profileService.setAboutMe(body, user)
    return authHelper.successResponse(res, statusCodes.OK, messages.USER_UP)
  } catch (error) {
    next(error)
  }
}

exports.setSocialMedia = async ({ body, user }, res, next) => {
  try {
    await profileService.setSocialMedia(body, user)
    return authHelper.successResponse(res, statusCodes.OK, messages.USER_UP)
  } catch (error) {
    next(error)
  }
}

exports.setEducation = async ({ body, user }, res, next) => {
  try {
    await profileService.setEducation(body, user)
    return authHelper.successResponse(res, statusCodes.OK, messages.USER_UP)
  } catch (error) {
    next(error)
  }
}

exports.setInterests = async ({ body, user }, res, next) => {
  try {
    await profileService.addInterests(body, user)
    return authHelper.successResponse(res, statusCodes.OK, messages.USER_UP)
  } catch (error) {
    next(error)
  }
}
