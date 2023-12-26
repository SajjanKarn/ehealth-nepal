const Joi = require("joi");
const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
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
  gender: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

const Patient = new mongoose.model("Patient", patientSchema);

const validatePatient = (data) => {
  const schema = Joi.object({
    name: Joi.string().required("name is required"),
    age: Joi.number().integer().min(0).required("age is required"),
    email: Joi.string().email().required("email is required"),
    password: Joi.string().required("password is required"),
    gender: Joi.string()
      .valid("male", "female", "other")
      .required("gendre is required"),
    address: Joi.string().required("address is required"),
    phone: Joi.string().required("phone is required"),
  });

  return schema.validate(data);
};

const validateLoginPatient = (data) => {
  const schema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
  });

  return schema.validate(data);
};

module.exports = {
  Patient,
  validatePatient,
  validateLoginPatient,
};
