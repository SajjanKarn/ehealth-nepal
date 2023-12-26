const router = require("express").Router();

const validate = require("../middlewares/validate");
const { Appointment, validateAppointment } = require("../models/Appointment");

// get all appointments
router.get("/appointment", async (req, res) => {
  const appointments = await Appointment.find();
  return res.status(200).json({ appointments });
});

// get appointment by id
router.get("/appointment/:id", async (req, res) => {
  const appointment = await Appointment.findById(req.params.id);
  if (!appointment)
    return res.status(404).json({ message: "appointment not found" });
  return res.status(200).json({ appointment });
});

// create appointment
router.post(
  "/appointment",
  [validate(validateAppointment)],
  async (req, res) => {
    const appointment = await Appointment.create(req.body);
    return res.status(201).json({ appointment });
  }
);

module.exports = router;
