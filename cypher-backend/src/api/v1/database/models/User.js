const { Schema, model } = require('mongoose')
const bcrypt = require('bcrypt')

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
    interests: [],
  },
  { versionKey: false, timestamps: true }
)

User.pre('save', async function (next) {
  try {
    if (!this.isModified('password')) return next()
    const salt = await bcrypt.genSalt(10)

    // hash the password using our new salt
    const hashPass = await bcrypt.hash(this.password, salt)
    this.password = hashPass
    next()
  } catch (error) {
    return next(error)
  }
})
User.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password)
}

module.exports = model('user', User)
