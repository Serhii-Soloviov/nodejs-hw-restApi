const {Contact} = require("../../models/contact");
const { HttpError } = require("../../helpers");

const removeContactById = async (req, res, next) => {
    const { contactId=id } = req.params;
    const result = await Contact.findByIdAndRemove(contactId);
    if (!result) {
      throw HttpError(404, "Not found");
    }
    res.status(200).send({ message: "Contact deleted" });

};
module.exports = removeContactById;
