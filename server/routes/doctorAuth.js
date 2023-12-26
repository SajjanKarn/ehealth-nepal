const router = require("express").Router();

const {
  register_doctor,
  login_doctor,
} = require("../controllers/doctor.controllers");
const { validateDoctor, validateLogin } = require("../models/Doctor");
const validate = require("../middlewares/validate");

router.post("/register", [validate(validateDoctor)], register_doctor);

router.post("/login", [validate(validateLogin)], login_doctor);

module.exports = router;
