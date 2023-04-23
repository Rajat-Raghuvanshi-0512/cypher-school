const { statusCodes, messages } = require('../../../../constants')
const { authHelper } = require('../helpers')
const { authService } = require('../services')

exports.userLogin = async ({ body }, res, next) => {
  try {
    const { accessToken, refreshToken, sessionId } =
      await authService.userLogin(body)
    res = await authHelper.headerSet(res, accessToken, refreshToken)

    return authHelper.successResponse(
      res,
      statusCodes.OK,
      messages.USER_VERIFIED,
      {
        Session: sessionId,
      }
    )
  } catch (error) {
    next(error)
  }
}

exports.userRegister = async ({ body }, res, next) => {
  try {
    const { accessToken, refreshToken, sessionId } =
      await authService.userRegister(body)
    res = await authHelper.headerSet(res, accessToken, refreshToken)

    return authHelper.successResponse(
      res,
      statusCodes.OK,
      messages.USER_VERIFIED,
      {
        Session: sessionId,
      }
    )
  } catch (error) {
    next(error)
  }
}

exports.updatePassword = async ({ body, user }, res, next) => {
  try {
    await authService.updatePassword(body, user)

    return authHelper.successResponse(
      res,
      statusCodes.OK,
      messages.PASSWORD_CHANGED
    )
  } catch (error) {
    next(error)
  }
}
