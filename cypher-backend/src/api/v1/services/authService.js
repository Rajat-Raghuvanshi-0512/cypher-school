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

    const userObj = await Models.Users.findOne({ email })

    if (!userObj) {
      throw new AppError(messages.USER_NOT_EXIST, statusCodes.BAD_REQUEST)
    }

    const passMatch = await userObj.comparePassword(password)
    if (!passMatch) {
      throw new AppError(messages.INVALID_PASSWORD, statusCodes.BAD_REQUEST)
    }
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

exports.updatePassword = async (body, user) => {
  try {
    const { oldpass, newpass, confirmpass } = body
    const userObj = await Models.Users.findOne({ _id: user._id })

    const passMatch = await userObj.comparePassword(oldpass)
    if (!passMatch) {
      throw new AppError(messages.INVALID_PASSWORD, statusCodes.BAD_REQUEST)
    }
    if (newpass !== confirmpass) {
      throw new AppError(
        messages.PASSWORDS_DO_NOT_MATCH,
        statusCodes.BAD_REQUEST
      )
    }
    userObj.password = newpass
    await userObj.save()
  } catch (error) {
    throw error
  }
}
