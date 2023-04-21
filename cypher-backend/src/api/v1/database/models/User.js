const { Schema, model } = require('mongoose')

const User = new Schema(
  {
    Fname: {
      type: String,
      required: true,
    },
    Lname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: String,
    password: {
      type: String,
      required: true,
    },
    aboutMe: String,
    image: {
      public_key: {
        type: String,
        default: 'avatar_gehm7u',
      },
      url: {
        type: String,
        default:
          'https://res.cloudinary.com/rajat0512/image/upload/v1642447946/E-commerce/avatar_gehm7u.jpg',
      },
    },
    socialMedia: {
      facebook: String,
      twitter: String,
      instagram: String,
      linkedin: String,
      github: String,
      website: String,
    },
    professionalInfo: {
      education: String,
      role: String,
    },
  },
  { versionKey: false, timestamps: true }
)

module.exports = model('user', User)
