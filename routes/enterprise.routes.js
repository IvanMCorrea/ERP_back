const express = require("express");
const router = express.Router();
const enterpriseController = require("../controllers/enterprise.controller");

router.get("/getEmployees", enterpriseController.getEmployees);

router.post("/getEmployeesPage/:page", enterpriseController.getEmployeesPage);
router.post("/inviteEmployee", enterpriseController.inviteEmployee);

module.exports = router;
