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

  module.exports.updateContact = async (req, details) => {
    try {
      const contact = await model.findById(req.params.id);
      if(!contact) {
        return {
          error : 'Contact not found'
        }
      }
      if(req.user.userExist.id !== contact.user_id.toString()) {
        return {
          error :"user don't have permission to edit this contact"
        }
      }
      const data = await model.findByIdAndUpdate(req.params.id, details, {
        new: true,
      });
      return data;
    } catch (error) {
      console.error("An error occurred during user update:", error);
      throw error;
    }
  };

  module.exports.deleteContact = async (req) => {
    try {
      const contact = await model.findById(req.params.id);
      if(!contact) {
        return {
          error : 'Contact not found'
        }
      }
      if(req.user.userExist.id !== contact.user_id.toString()) {
        return {
          error :"user don't have permission to delete this contact"
        }
      }
      const data = await model.findByIdAndDelete(req.params.id);
      return data;
    } catch (error) {
      console.error("An error occurred during user Delete:", error);
      throw error;
    }
  };

