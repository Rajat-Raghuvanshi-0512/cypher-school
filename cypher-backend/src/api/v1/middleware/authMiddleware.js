const jwt = require('jsonwebtoken')
const { TokenExpiredError } = jwt
const constants = require('../../../../constants')
const { Sessions, Users } = require('../database/models')
const { tokenGenerate, authHelper } = require('../helpers')

const checkAuth = async (req, res, next) => {
  let token = req.cookies.accessToken
  let refreshToken = req.cookies.refreshToken

  let session

  if (!refreshToken) return res.sendStatus(401)

  try {
    const decodedRefreshToken = jwt.verify(
      refreshToken,
      constants.authentications.REFRESH_TOKEN_SECRET
    )
    session = await Sessions.findOne({ tokenId: decodedRefreshToken.sessionId })
    if (!session.isValid) return res.sendStatus(401)
    try {
      const decodedAccessToken = jwt.verify(
        token,
        constants.authentications.ACCESS_TOKEN_SECRET
      )
      const isUserObj = await Users.findOne({ _id: decodedAccessToken._id })
      // checking if isUserObj is null or not present
      if (!isUserObj) return res.sendStatus(401)
      req.user = isUserObj
      req.session = decodedAccessToken.sessionId
      next()
    } catch (err) {
      if (err instanceof TokenExpiredError || !token) {
        const newTokens = await tokenGenerate(
          decodedRefreshToken._id,
          session.tokenId
        )
        res = await authHelper.headerSet(
          res,
          newTokens.accessToken,
          newTokens.refreshToken
        )
        const isUserObj = await Users.findOne({ _id: decodedRefreshToken._id })
        req.user = isUserObj
        req.session = decodedRefreshToken.sessionId
        next()
      } else return res.sendStatus(401)
    }
  } catch (error) {
    console.log('error:', error)
    return res.sendStatus(401)
  }
}

module.exports = { checkAuth }
