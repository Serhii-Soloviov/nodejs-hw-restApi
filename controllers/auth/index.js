const getCurrent = require("./getCurrent");
const login = require("./login");
const logout = require("./logout");
const resendEmail = require("./resendEmail");
const signUp = require("./signUp");
const updateAvatar = require("./updateAvatar");
const subscription = require("./updateSubscription");
const verifyUserEmail = require("./verifyUserEmail");

module.exports = {
  signUp,
  login,
  getCurrent,
  logout,
  subscription,
  updateAvatar,
  verifyUserEmail,
  resendEmail,
};
