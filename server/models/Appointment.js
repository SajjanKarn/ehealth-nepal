const mongoose = require("mongoose");
const Joi = require("joi");

const appointmentSchema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
    required: true,
  },
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor",
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending",
  },
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

// validate appointment
const validateAppointment = (data) => {
  const schema = Joi.object({
    patientId: Joi.string().required(),
    doctorId: Joi.string().required(),
    date: Joi.date().required(),
    time: Joi.string().required(),
  });
  return schema.validate(data);
};

module.exports = {
  Appointment,
  validateAppointment,
};
