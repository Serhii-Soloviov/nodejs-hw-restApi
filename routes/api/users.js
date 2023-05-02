const express = require("express");
const { controllersAuth: ctrl } = require("../../controllers");
const {
  validateBody,
  ctrlWrapper,
  authenticate,
  upload,
} = require("../../middlewares");
const { schemas } = require("../../models/user");
const router = express.Router();

router.get("/verify/:verificationToken", ctrlWrapper(ctrl.verifyUserEmail));
router.post(
  "/verify",
  validateBody(schemas.verifyEmailSchema),
  ctrlWrapper(ctrl.resendEmail)
);

router.post(
  "/register",
  validateBody(schemas.registerSchema),
  ctrlWrapper(ctrl.signUp)
);
router.post(
  "/login",
  validateBody(schemas.loginSchema),
  ctrlWrapper(ctrl.login)
);

router.get("/current", authenticate, ctrlWrapper(ctrl.getCurrent));
router.post("/logout", authenticate, ctrlWrapper(ctrl.logout));

router.patch(
  "/",
  authenticate,
  validateBody(schemas.subscriptionSchema),
  ctrlWrapper(ctrl.subscription)
);
router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrlWrapper(ctrl.updateAvatar)
);
module.exports = router;
