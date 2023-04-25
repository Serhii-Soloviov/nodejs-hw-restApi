const express = require("express");
const ctrl = require("../../controllers");
const { validateBody, ctrlWrapper, isValidId } = require("../../middlewares");
const { schemas } = require("../../models/contact");
const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAllContacts));

router.get("/:contactId", isValidId, ctrlWrapper(ctrl.getContactById));

router.post(
  "/",
  validateBody(schemas.schemaPost),
  ctrlWrapper(ctrl.addContact)
);

router.delete("/:contactId", isValidId, ctrlWrapper(ctrl.removeContactById));

router.put(
  "/:contactId",
  isValidId,
  validateBody(schemas.schemaPut),
  ctrlWrapper(ctrl.updateContactById)
);
router.patch(
  "/:contactId",
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  ctrlWrapper(ctrl.updateStatusContact)
);
module.exports = router;
