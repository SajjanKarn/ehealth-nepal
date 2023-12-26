const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Doctor } = require("../models/Doctor");

exports.register_doctor = async (req, res) => {
  const { name, age, email, password, experience, gender, specialization } =
    req.body;

  // check if doctor already exists
  const doctorAlreadyExists = await Doctor.findOne({ email });
  if (doctorAlreadyExists)
    return res.status(400).json({ error: "Doctor already exists" });

  // create a new doctor
  const hashedPassword = await bcrypt.hash(password, 10);

  const doctor = new Doctor({
    name,
    age,
    email,
    password: hashedPassword,
    experience,
    gender,
    specialization,
  });

  const result = await doctor.save();
  return res.status(201).json({
    ...result._doc,
    password: undefined,
  });
};

exports.login_doctor = async (req, res) => {
  const { email, password } = req.body;

  // check if the doctor already exitst
  const alreadyExits = await Doctor.findOne({ email });
  if (!alreadyExits) return res.status(400).json({ error: "Doctor not found" });

  // check if the password is correct
  const validPassword = await bcrypt.compare(password, alreadyExits.password);
  if (!validPassword)
    return res.status(400).json({ error: "Invalid password" });

  // create and assign a token
  const token = jwt.sign({ _id: alreadyExits._id }, process.env.TOKEN_SECRET);
  return res.status(200).json({
    token,
    ...alreadyExits._doc,
    password: undefined,
  });
};
