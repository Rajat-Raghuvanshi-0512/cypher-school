const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const Models = require('../database/models')
const { authentications, globalConstant } = require('../../../../constants')
const tokenGenerate = require('./tokenGenerate')
// <-------------------------------------------------Success-Response----------------------------------------------->
exports.successResponse = (res, statusCode, message, data) => {
  return res.status(statusCode).json({
    message: message,
    data: data,
  })
}

// <----------------------------------------------------Jwt-Signing-------------------------------------------------->
exports.jwtSign = (user) => {
  try {
    const payload = {
      _id: user._id,
    }
    return jwt.sign(payload, process.env.JWT_SECRET_KEY)
  } catch (error) {
    return error
  }
}

// <---------------------------------------------------Jwt-Verification----------------------------------------------->
exports.jwtVerify = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET_KEY)
  } catch (error) {
    return error
  }
}
// <--------------------------------------------------Hash password----------------------------------------------->

exports.hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
  } catch (error) {
    return error
  }
}
exports.sessionCreate = async (deviceID, deviceType, userObj) => {
  try {
    const { accessToken, refreshToken, sessionId } = await tokenGenerate(
      userObj._id
    )
    const date = new Date()
    const logoutDate = new Date()
    logoutDate.setDate(logoutDate.getDate() + authentications.SESSION_EXPIRY)
    const session = new Models.Session({
      tokenId: sessionId,
      userID: userObj._id,
      loginTime: date,
      logoutTime: logoutDate,
      deviceID: deviceID,
    })
    await session.save()
    return { accessToken, refreshToken, sessionId }
  } catch (error) {
    throw error
  }
}

exports.headerSet = (res, accessToken, refreshToken) => {
  const path = '/v1'

  res.setHeader('Set-Cookie', [
    `accessToken=${accessToken}; HttpOnly; path= ${path}; sameSite=strict; secure=true; Max-Age=${authentications.ACCESS_TOKEN_COOKIE_EXPIRY}`,
    `refreshToken=${refreshToken}; HttpOnly; path=${path}; sameSite=strict; secure=true; Max-Age=${authentications.REFRESH_TOKEN_COOKIE_EXPIRY}`,
  ])
  return res
}

exports.faceBookLogin = async (req, _, __, profile, done) => {
  const { email, name, id } = profile._json
  const isObject = await Models.User.findOne({ email })

  // To fetch s3 key of default avatar
  const defaultAvatar = await Models.DefaultImages.findOne({
    imageUniqueNumber: globalConstant.DEFAULT_AVATAR,
  })
  // After deleting profilePhoto, again set the default image to user profile
  const defaultProfilePhoto = !isObject
    ? await Models.Attachments.create({
        fileName: `${globalConstant.DEFAULT_AVATAR}.png`,
        isPublic: true,
        size: 1200,
        mediaType: 'image',
        url: `${globalConstant.DEFAULT_PIC_URL}${defaultAvatar.key}`,
      })
    : null

  // Find the object Id for fan type user
  const { _id } = await Models.UserType.findOne({
    userUniqueNumber: globalConstant.USER_TYPE_IS_FAN,
  })

  const userObj = !isObject
    ? await Models.User.create({
        phone: null,
        userName: null,
        email,
        profilePhoto: defaultProfilePhoto._id,
        userType: _id,
        isEmailVerified: true,
        fullName: name,
      })
    : isObject

  const { accessToken, refreshToken, sessionId } = await tokenGenerate(
    userObj._id
  )
  const date = new Date()
  const logoutDate = new Date()
  logoutDate.setDate(logoutDate.getDate() + authentications.SESSION_EXPIRY)
  const session = new Models.Session({
    tokenId: sessionId,
    userID: userObj._id,
    loginTime: date,
    logoutTime: logoutDate,
    deviceID: id,
  })
  await session.save()

  done(null, profile, { accessToken, refreshToken })
}
