const model = require("../models/contact.model")

module.exports.getAllContacts = () => {
    return model.find().then((contacts) => {
      if (users.length === 0) {
        console.log("No contacts found");
      }
      return contacts;
    }).catch((error) => {
      throw error;
    });
  };

  module.exports.createContact = async (details) => {
    try {
      const data = new model({
        name: details.name,
        contact_number: details.contact_number,
        email: details.email,
      });
      await data.save();
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  module.exports.updateContact = async (id, details) => {
    try {
      const data = await userModel.findByIdAndUpdate(id, details, {
        new: true,
      });
      return data;
    } catch (error) {
      console.error("An error occurred during user update:", error);
      throw error;
    }
  };

