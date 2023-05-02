const bcrypt = require("bcrypt");
const { User } = require("../../models/user");
const { HttpError, sendEmail } = require("../../helpers");
const gravatar = require("gravatar");
const { nanoid } = require("nanoid");


const { BASE_URL } = process.env;
const signUp = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw HttpError(409, "Email in use");
  }
  const verificationToken = nanoid();
  const avatarURL = gravatar.url(email);
  const createHashPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({
    ...req.body,
    password: createHashPassword,
    avatarURL,
    verificationToken,
  });
  const verifyEmail = {
    to: email,
    subject: "Please Verify email",
    html: `<a target="_blank" href="${BASE_URL}/api/users/verify/${verificationToken}">Click To verify email</a>`,
  };

  await sendEmail(verifyEmail);
  res.status(201).json({
    user: {
      email: newUser.email,
      password: newUser.password,
    },
  });
};
module.exports = signUp;
