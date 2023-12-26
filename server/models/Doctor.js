const mongoose = require("mongoose");
const Joi = require("joi");

const DoctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  experience: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  specialization: {
    type: String,
    required: true,
  },
});

const Doctor = new mongoose.model("Doctor", DoctorSchema);

// validate the doctor schema
const validateDoctor = (doctor) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    age: Joi.number().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    experience: Joi.number().required(),
    gender: Joi.string().required(),
    specialization: Joi.string().required(),
  });
  return schema.validate(doctor);
};

// validator login
const validateLogin = (data) => {
  const schema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
  });

  return schema.validate(data);
  s;
};

module.exports = {
  Doctor,
  validateDoctor,
  validateLogin,
};
