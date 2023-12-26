const router = require("express").Router();

const { validatePatient, validateLoginPatient } = require("../models/Patient");
const validate = require("../middlewares/validate");
const {
  register_patient,
  login_patient,
  get_patients,
} = require("../controllers/patient.controllers");

router.post("/register", [validate(validatePatient)], register_patient);

router.post("/login", [validate(validateLoginPatient)], login_patient);

router.get("/list", get_patients)

module.exports = router;
