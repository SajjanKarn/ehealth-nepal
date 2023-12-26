const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Patient } = require("../models/Patient");

exports.register_patient = async (req, res) => {
  const { name, age, email, password, gender, address, phone } = req.body;

  // check if patient already exists
  const doesPatientAlreadyExits = await Patient.findOne({ email });
  if (doesPatientAlreadyExits)
    return res
      .status(400)
      .json({ error: "Patient with that record already exists" });

  // create a new patient
  const hashedPassword = await bcrypt.hash(password, 10);

  const patient = new Patient({
    name,
    age,
    email,
    password: hashedPassword,
    gender,
    address,
    phone,
  });

  const result = await patient.save();
  return res.status(201).json({
    ...result._doc,
    password: undefined,
  });
};

exports.login_patient = async (req, res) => {
  const { email, password } = req.body;

  // check if the patient already exitst
  const alreadyExits = await Patient.findOne({ email });
  if (!alreadyExits)
    return res.status(400).json({ error: "Patient not found" });

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
