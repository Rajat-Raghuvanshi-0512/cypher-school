const config = require('../config')
module.exports = {
  type: {
    EMAIL: 'email',
    PHONE: 'phone',
  },

  MESSAGE_LENGTH: 300,
  size: {
    PROFILE_SIZE: 5242880,
    PROFILE_VIDEO: 10485760,
  },

  // Become a creator flow status changer object
  STATUS_ARRAY: [
    { name: 'setProfile', status: false },
    { name: 'connectSocialMedia', status: false },
    { name: 'paymentMethod', status: false },
    {
      name: 'setupYourCharges',
      status: false,
      children: [
        { name: 'recordCharges', status: false },
        { name: 'advertisementCharges', status: false },
        { name: 'superChatCharges', status: false },
        { name: 'myClubCharges', status: false },
        { name: 'callingCharges', status: false },
      ],
    },
    { name: 'setYourGoal', status: false },
    { name: 'startYourFansClub', status: false },
  ],

  //mapping algorithms for truecallers
  ALGO_MAP: {
    SHA512withRSA: 'RSA-SHA512',
  },
  // In order to create dummy social-media in db
  DUMMY_USER_SOCIAL_MEDIA: {
    followersCount: null,
    profilePictureUrl: null,
    channelUrl: null,
    socialMediaId: null,
    userId: null,
    refreshToken: null,
  },

  // Default user profile pic
  DEFAULT_PIC_URL: config.S3_URL,

  // Used objectIds
  USER_TYPE_IS_FAN: 0,
  USER_TYPE_IS_CREATOR: 1,
  USER_TYPE_IS_COMPANY: 2,
  USER_TYPE_IS_SUPER_ADMIN: 3,
  USER_TYPE_IS_MARKETER: 4,

  // Payment-GatewaysIds
  PAYTM_GATEWAY_ID: 0,
  STRIPE_GATEWAY_ID: 1,

  // Request typeIds
  REQUEST_TYPE_SEND_TOKEN: 0,
  REQUEST_TYPE_SUPER_CHAT: 1,
  REQUEST_TYPE_RECORDED: 2,
  REQUEST_TYPE_LIVE_CALL: 3,
  REQUEST_TYPE_JOIN_MY_CLUB: 4,
  REQUEST_TYPE_BOOK_ME: 5,
  REQUEST_TYPE_MENTION_OR_TAG: 14,
  REQUEST_TYPE_PRODUCT_PHOTOSHOOT: 15,
  REQUEST_TYPE_BRAND_VIDEO: 16,
  REQUEST_TYPE_BRAND_VIDEO_AND_POST: 17,
  REQUEST_TYPE_MOVIE: 18,
  REQUEST_TYPE_EVENT_PROMOTION: 19,

  // Notification typeIds
  NOTIFICATION_TYPE_DONATION: 0,
  NOTIFICATION_TYPE_RECORDED_MEDIA: 1,
  NOTIFICATION_TYPE_LIVE_REQUEST: 2,
  NOTIFICATION_TYPE_SUPERCHAT: 3,
  NOTIFICATION_TYPE_POST: 4,
  NOTIFICATION_TYPE_COMMENT: 5,
  NOTIFICATION_TYPE_SUBSCRIPTION: 6,
  NOTIFICATION_TYPE_MOVIE_REQUEST: 7,
  NOTIFICATION_TYPE_EVENT_PROMOTION: 8,
  NOTIFICATION_TYPE_MENTION_OR_TAG: 9,
  NOTIFICATION_TYPE_PRODUCT_PHOTOSHOOT: 10,
  NOTIFICATION_TYPE_BRAND_VIDEO: 11,
  NOTIFICATION_TYPE_BRAND_VIDEO_AND_POST: 12,
  NOTIFICATION_TYPE_BOOK_ME: 13,
  NOTIFICATION_TYPE_NEW_POST: 14,

  // Media typeIds
  MEDIA_TYPE_IMAGE: 0,
  MEDIA_TYPE_AUDIO: 1,
  MEDIA_TYPE_VIDEO: 2,

  // Default Images
  DEFAULT_AVATAR: 0,

  INSTAGRAM: 'Instagram',

  TRANSACTION_SUCCEEDED: 'TXN_SUCCESS',
  TRANSACTION_FAILED: 'TXN_FAILURE',

  ADMIN_EMAIL: 'admin@tiobu.com',
}
