const { User } = require("../../models/user");

const subscription = async (req, res) => {
  const { _id } = req.user;
  const { subscription } = req.body;
  const updatedUser = await User.findByIdAndUpdate(
    _id,
    { subscription },
    { new: true }
  );
  res.status(200).json({
    user: {
      email: updatedUser.email,
      subscription: updatedUser.subscription,
    },
  });
};
module.exports = subscription;