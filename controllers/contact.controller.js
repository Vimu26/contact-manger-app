const contactService = require("../services/contact.service");

const getAllContacts = async (req, res) => {
  try {
    const contacts = await contactService.getAllContacts(req);
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
    const status = await contactService.createContact(req);
    if (status) {
      res.json({
        status: true,
        message: " contact Created Successfully",
        data: status,
      });
    } else {
      res.json({ status: false, message: " contact Not Created" });
    }
  } catch (error) {
    console.error("An error occurred:", error.message);
    res.status(500).json({ status: false, message: error.message });
  }
};

const updateContact = async (req, res) => {
  try {
    console.log(req.params.id);
    const contact = await contactService.updateContact(
      req.user.sub,
      req.body,
      req.params.id,
    );
    if (contact.error) {
      res.json({ status: false, message: contact.error });
    } else {
      res.json({
        status: true,
        message: " Updated Successfully",
        data: contact,
      });
    }
  } catch (error) {
    console.error("An error occurred:", error);
    res.status(500).json({ status: false, message: "An error occurred" });
  }
};

const deleteContact = async (req, res) => {
  try {
    const success = await contactService.deleteContact(req);
    if (success.error) {
      res.json({ status: false, message: "No Contact Found" });
    } else {
      res.json({ status: true, message: " Deleted Successfully" });
    }
  } catch (error) {
    console.error("An error occurred:", error);
    res.status(500).json({ status: false, message: "An error occurred" });
  }
};
const getSingleContact = async (req, res) => {
  try {
    const contact = await contactService.getSingleContact(req.params.id);
    res.json({
      status: false,
      message: "Contact Found Successfully",
      data: contact,
    });
  } catch (error) {
    console.error("An error occurred:", error);
    res.status(500).json({ status: false, message: "An error occurred" });
  }
};

module.exports = {
  getAllContacts,
  createContact,
  updateContact,
  deleteContact,
  getSingleContact,
};
