const Models = require('../database/models')

exports.setAboutMe = async (body, user) => {
  try {
    let { aboutMe } = body
    const curUser = await Models.Users.findById(user.id)
    curUser.aboutMe = aboutMe
    await curUser.save()
  } catch (error) {
    throw error
  }
}

exports.setSocialMedia = async (body, user) => {
  try {
    let { facebook, twitter, instagram, linkedin, github, website } = body
    await Models.Users.findByIdAndUpdate(
      user.id,
      {
        socialMedia: {
          facebook,
          twitter,
          instagram,
          linkedin,
          github,
          website,
        },
      },
      { new: true }
    )
  } catch (error) {
    throw error
  }
}

exports.setEducation = async (body, user) => {
  try {
    let { education, role } = body
    await Models.Users.findByIdAndUpdate(
      user.id,
      {
        professionalInfo: {
          education,
          role,
        },
      },
      { new: true }
    )
  } catch (error) {
    throw error
  }
}

exports.addInterests = async (body, user) => {
  try {
    let { interests } = body
    await Models.Users.findByIdAndUpdate(
      user.id,
      {
        interests,
      },
      { new: true }
    )
  } catch (error) {
    throw error
  }
}
