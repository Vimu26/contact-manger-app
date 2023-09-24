const express = require('express');

const router = express.Router();
module.exports = router;
const contactController = require('../controllers/contact.controller');

router.get("/",contactController.getAllContacts);
router.post("/",contactController.createContact);
router.patch("/:id",contactController.updateContact);
// router.delete("/:id",contactController.deleteContact);

// router.get("/:id",contactController.getcontactControllersFunction);