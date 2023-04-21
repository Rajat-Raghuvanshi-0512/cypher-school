const path = require('path')
const dotenv = require('dotenv')

dotenv.config({
  path: path.resolve(__dirname, `./${process.env.NODE_ENV}.env`),
})

module.exports = {
  NODE_ENV: process.env.NODE_ENV || './dev',
  HOST: process.env.HOST || 'localhost',
  PORT: process.env.PORT || 3001,
  DB_URL: process.env.DB_URL || 'mongodb://localhost:27017/cypher',
  CLOUDINARY_USERNAME: process.env.CLOUDINARY_USERNAME,
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
}
