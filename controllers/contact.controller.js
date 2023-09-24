const contactService = require("../services/contact.service");

const getAllContacts = async (req, res) => {
  try {
    const contacts = await contactService.getAllContacts();
    res.json({
      status: true,
      message: "contacts Found Successfully",
      data: contacts,
    });
  } catch (error) {
    console.error("An error occurred :", error);
    res.status(500).json({ status: false, message: "An error occurred" });
  }
};

const createContact = async (req, res) => {
    try {
        const status = await contactService.createContact(req.body);
        if (status) {
          res.json({ status: true, message: " contact Created Successfully" , data : status });
        } else {
          res.json({ status: false, message: " contact Not Created" });
        }
      } catch (error) {
        console.error("An error occurred:", error);
        res.status(500).json({ status: false, message: "An error occurred" });
      }
};

const updateContact = async (req, res) => {
    try {
        const success = await contactService.updateContact(
          req.params.id,
          req.body
        );
    
        if (success) {
          res.json({ status: true, message: " Updated Successfully" , data :success });
        } else {
          res.json({ status: false, message: " Not Updated" });
        }
      } catch (error) {
        console.error("An error occurred:", error);
        res.status(500).json({ status: false, message: "An error occurred" });
      }

};

// const deleteContact;

module.exports = {
  getAllContacts,
  createContact,
  updateContact,
//   deleteContact,
};
