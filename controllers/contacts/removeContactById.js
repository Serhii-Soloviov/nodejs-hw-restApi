const contactsOperations = require("../../models/contacts");
const { HttpError } = require("../../helpers");

const removeContactById = async (req, res, next) => {
    const { contactId=id } = req.params;
    const result = await contactsOperations.removeContact(contactId);
    if (!result) {
      throw HttpError(404, "Not found");
    }
    res.status(200).send({ message: "contact deleted" });

};
module.exports = removeContactById;
