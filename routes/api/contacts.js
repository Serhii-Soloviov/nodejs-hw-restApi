const express = require("express");
const { controllersContacts: ctrl } = require("../../controllers");
const {
  validateBody,
  ctrlWrapper,
  isValidId,
  authenticate,
} = require("../../middlewares");
const { schemas } = require("../../models/contact");
const router = express.Router();

router.get("/", authenticate, ctrlWrapper(ctrl.getAllContacts));

router.get(
  "/:contactId",
  authenticate,
  isValidId,
  ctrlWrapper(ctrl.getContactById)
);

router.post(
  "/",
  authenticate,
  validateBody(schemas.schemaPost),
  ctrlWrapper(ctrl.addContact)
);

router.delete(
  "/:contactId",
  authenticate,
  isValidId,
  ctrlWrapper(ctrl.removeContactById)
);

router.put(
  "/:contactId",
  authenticate,
  isValidId,
  validateBody(schemas.schemaPut),
  ctrlWrapper(ctrl.updateContactById)
);
router.patch(
  "/:contactId",
  authenticate,
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  ctrlWrapper(ctrl.updateStatusContact)
);
module.exports = router;
