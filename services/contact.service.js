const model = require("../models/contact.model")

module.exports.getAllContacts = (req) => {
    return model.find({user_id : req.user.userExist.id}).then((contacts) => {
      if (contacts.length === 0) {
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
        user_id : details.user.userExist.id,
        name: details.body.name,
        contact_number: details.body.contact_number,
        email: details.body.email,
      });
      await data.save();
      return data;
    } catch (error) {
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

  module.exports.deleteContact = async (id) => {
    try {
      const data = await userModel.findByIdAndDelete(id);
      return true;
    } catch (error) {
      console.error("An error occurred during user Delete:", error);
      throw error;
    }
  };

