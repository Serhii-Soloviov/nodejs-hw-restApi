const express = require("express");
const ctrl = require("../../controllers");
const { validateBody, ctrlWrapper } = require("../../middlewares");
const schemas = require("../../schemas/schemas");
const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAllContacts));

router.get("/:contactId", ctrlWrapper(ctrl.getContactById));

router.post(
  "/",
  validateBody(schemas.schemaPost),
  ctrlWrapper(ctrl.addContact)
);

router.delete("/:contactId", ctrlWrapper(ctrl.removeContactById));

router.put(
  "/:contactId",
  validateBody(schemas.schemaPut),
  ctrlWrapper(ctrl.updateContactById)
);

module.exports = router;
