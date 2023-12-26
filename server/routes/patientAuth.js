const router = require("express").Router();

const { validatePatient, validateLoginPatient } = require("../models/Patient");
const validate = require("../middlewares/validate");
const {
  register_patient,
  login_patient,
} = require("../controllers/patient.controllers");

router.post("/register", [validate(validatePatient)], register_patient);

router.post("/login", [validate(validateLoginPatient)], login_patient);

module.exports = router;
