const contactsOperations = require("../../models/contacts");
const { HttpError } = require("../../helpers");

const removeContactById = async (req, res, next) => {
  try {
    const { contactId=id } = req.params;
    const result = await contactsOperations.removeContact(contactId);
    if (!result) {
      throw HttpError(404, "Not found");
    }
    res.status(200).send({ message: "contact deleted" });
  } catch (error) {
    next(error);
  }
};
module.exports = removeContactById;
