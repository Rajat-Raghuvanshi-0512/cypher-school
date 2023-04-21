const {
  statusCodes,
  messages,
  authentications,
} = require('../../../../constants')
const Models = require('../database/models')
const { AppError } = require('../helpers/appError')
const tokenGenerate = require('../helpers/tokenGenerate')

exports.userRegister = async (body) => {
  try {
    let { email, Fname, Lname, profilePhoto, password } = body
    const isUser = await Models.Users.findOne({ email })

    if (isUser) {
      throw new AppError(messages.EMAIL_ALREADY_EXIST, statusCodes.BAD_REQUEST)
    }
    const userObj = await Models.Users.create({
      email,
      Fname,
      Lname,
      password,
      profilePhoto,
    })
    const { accessToken, refreshToken, sessionId } = await tokenGenerate(
      userObj._id
    )
    const date = new Date()
    const logoutDate = new Date()
    logoutDate.setDate(logoutDate.getDate() + authentications.SESSION_EXPIRY)
    const session = new Models.Sessions({
      tokenId: sessionId,
      userID: userObj._id,
      loginTime: date,
      logoutTime: logoutDate,
      deviceID: body.deviceID,
    })
    await session.save()
    return { accessToken, refreshToken, sessionId }
  } catch (error) {
    throw error
  }
}

exports.userLogin = async (body) => {
  try {
    const { email, password } = body

    const userObj = await Models.User.findOne({ email })

    if (!userObj) {
      throw new AppError(messages.USER_NOT_EXIST, statusCodes.BAD_REQUEST)
    }

    // const userObj = await Models.User.create({
    //   phone: null,
    //   userName: null,
    //   email,
    //   profilePhoto: defaultProfilePhoto._id,
    //   userType: _id,
    //   isEmailVerified: true,
    // })
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
      deviceID: body.deviceID,
    })
    await session.save()
    return { accessToken, refreshToken, sessionId }
  } catch (error) {
    throw error
  }
}
