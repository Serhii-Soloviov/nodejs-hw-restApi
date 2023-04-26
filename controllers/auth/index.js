const getCurrent = require("./getCurrent");
const login = require("./login");
const logout = require("./logout");
const signUp = require("./signUp");
const subscription = require("./updateSubscription");

module.exports = {
  signUp,
  login,
  getCurrent,
  logout,
  subscription,
};
