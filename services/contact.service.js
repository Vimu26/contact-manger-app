const model = require("../models/contact.model");

module.exports.getAllContacts = async (req) => {
  const contacts = await model.find({ user_id: req.user.sub });
  return contacts;
};

module.exports.getSingleContact = async (id) => {
  const contact = await model.findById(id);
  return contact;
};

module.exports.createContact = async (details) => {
  const data = new model({
    user_id: details.user.sub,
    name: details.body.name,
    contact_number: details.body.contact_number,
    email: details.body.email,
  });
  await data.save();
  return data;
};

module.exports.updateContact = async (userId, contactBody, contactId) => {
  const contact = await model.findById(contactId);
  if (!contact) {
    return {
      error: "Contact not found",
    };
  }
  if (userId !== contact.user_id.toString()) {
    return {
      error: "user don't have permission to edit this contact",
    };
  }
  const data = await model.findByIdAndUpdate(contactId, contactBody, {
    new: true,
  });
  return data;
};

module.exports.deleteContact = async (req) => {
  const contact = await model.findById(req.params.id);
  if (!contact) {
    return {
      error: "Contact not found",
    };
  }
  if (req.user.sub !== contact.user_id.toString()) {
    return {
      error: "user don't have permission to delete this contact",
    };
  }
  const data = await model.findByIdAndDelete(req.params.id);
  return data;
};
