const { v4: uuidv4 } = require('uuid')
const constants = require('../../../../constants')
const jwt = require('jsonwebtoken')

const tokenGenerate = (userID, sessionId) => {
  return new Promise((resolve) => {
    if (!sessionId) sessionId = uuidv4()

    let accessToken = jwt.sign(
      { _id: userID, sessionId },
      constants.authentications.ACCESS_TOKEN_SECRET,
      {
        expiresIn: constants.authentications.ACCESS_TOKEN_EXPIRY,
      }
    )

    let refreshToken = jwt.sign(
      { _id: userID, sessionId },
      constants.authentications.REFRESH_TOKEN_SECRET,
      {
        expiresIn: constants.authentications.REFRESH_TOKEN_EXPIRY,
      }
    )

    return resolve({
      accessToken,
      refreshToken,
      sessionId,
    })
  })
}

module.exports = tokenGenerate
