const express = require("express");
const { getAllStudents } = require("../controller/studentController");
const authenticateJWT = require("../middleware/authenticateJWT");
const roleBasedAccess = require("../middleware/roleBasedAccess");

const router = express.Router();

router.get(
  "/students",
  authenticateJWT,
  roleBasedAccess("admin"),
  getAllStudents
);

module.exports = router;
