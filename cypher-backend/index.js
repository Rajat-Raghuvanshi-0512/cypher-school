const app = require('./app')
const config = require('./config')
const connectToDB = require('./src/api/v1/database/connection')
const errorController = require('./src/api/v1/helpers/errorController')
const cloudinary = require('cloudinary')

connectToDB()
cloudinary.config({
  cloud_name: config.CLOUDINARY_USERNAME,
  api_key: config.CLOUDINARY_API_KEY,
  api_secret: config.CLOUDINARY_API_SECRET,
})

app.use(errorController)

app.listen(config.PORT, config.HOST, () => {
  console.log(`APP LISTENING ON https://${config.HOST}:${config.PORT}`)
})
