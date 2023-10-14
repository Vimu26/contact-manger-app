const express = require('express');
const validateToken = require('../middleware/validateToken');

const router = express.Router();
module.exports = router;
const contactController = require('../controllers/contact.controller');

router.get("/", validateToken.validateToken,contactController.getAllContacts);
router.post("/",validateToken.validateToken,contactController.createContact);
router.patch("/:id",validateToken.validateToken,contactController.updateContact);
router.delete("/:id",validateToken.validateToken,contactController.deleteContact);

// router.get("/:id",contactController.getcontactControllersFunction);

// router.use(validateToken.validateToken)