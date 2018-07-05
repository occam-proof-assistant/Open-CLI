'use strict';

const TIMEOUT = 10000,
      HOST_URL = 'https://openmathematics.org',
      POST_METHOD = 'POST',
      UTF_ENCODING = 'utf8',
      BASE64_ENCODING = 'base64',
      CLONE_URI = '/clone',
      LOGIN_URI = '/login',
      LOGOUT_URI = '/logout',
      PUBLISH_URI = '/publish',
      REGISTER_URI = '/register',
      DEPRECATE_URI = '/deprecate',
      RESET_PASSWORD_URI = '/resetPassword',
      CHANGE_PASSWORD_URI = '/changePassword',
      CONFIRM_EMAIL_ADDRESS_URI = '/confirmEmailAddress',
      RESEND_CONFIRMATION_CODE_URI = '/resendConfirmationCode';

const constants = {
  TIMEOUT,
  HOST_URL,
  POST_METHOD,
  UTF_ENCODING,
  BASE64_ENCODING,
  CLONE_URI,
  LOGIN_URI,
  LOGOUT_URI,
  PUBLISH_URI,
  REGISTER_URI,
  DEPRECATE_URI,
  RESET_PASSWORD_URI,
  CHANGE_PASSWORD_URI,
  CONFIRM_EMAIL_ADDRESS_URI,
  RESEND_CONFIRMATION_CODE_URI
};

module.exports = constants;
