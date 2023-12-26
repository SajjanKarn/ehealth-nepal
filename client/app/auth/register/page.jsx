"use client";
import { Navigation } from "@/components/Navigation.component";
import { useState } from "react";

export default function Register() {
  const [role, setRole] = useState("Doctor");
  const [credentials, setCredentials] = useState({
    name: "",
    age: "",
    gender: "",
    expereince: "",
    specialization: "",
    address: "",
    phone: "",
    email: "",
    password: "",
  });

  const toggleRole = () => {
    if (role === "Doctor") {
      setRole("Patient");
    } else {
      setRole("Doctor");
    }
  };

  const handleInputChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(credentials);
  };

  return (
    <div>
      <div className="container">
        <div className="card">
          <h3>Register as {role}</h3>
          <button class="btn btn-secondary" onClick={toggleRole}>
            Register as {role === "Doctor" ? "Patient" : "Doctor"}
          </button>
          <form onSubmit={handleSubmit}>
            <div class="input-group">
              <label>Enter Your Name</label>
              <input
                type="text"
                placeholder="Enter Your Name"
                class="form-control"
                name="name"
                onChange={handleInputChange}
                value={credentials.name}
              />
              <p class="form-control-subheading">
                We won't share your details to anyone.
              </p>
            </div>
            <div class="input-group">
              <input
                type="number"
                placeholder="age: Ex: 17"
                class="form-control"
                name="age"
                onChange={handleInputChange}
                value={credentials.age}
              />
            </div>
            {/* gender  */}
            <div className="input-group">
              <p>Gender</p>
              Male: {"  "}
              <input
                type="radio"
                name="gender"
                value="male"
                onChange={handleInputChange}
              />
              <br />
              Female:{"  "}
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={handleInputChange}
              />
            </div>
            {role === "Doctor" && (
              <>
                <div class="input-group">
                  <input
                    type="text"
                    placeholder="Experience Years"
                    class="form-control"
                    name="experience"
                    onChange={handleInputChange}
                    value={credentials.experience}
                  />
                </div>
                <div class="input-group">
                  <input
                    type="text"
                    placeholder="Specialization"
                    class="form-control"
                    name="specialization"
                    onChange={handleInputChange}
                    value={credentials.specialization}
                  />
                </div>
              </>
            )}
            {role === "Patient" && (
              <>
                <div class="input-group">
                  <input
                    type="text"
                    placeholder="Address"
                    class="form-control"
                    name="address"
                    onChange={handleInputChange}
                    value={credentials.address}
                  />
                </div>
                <div class="input-group">
                  <input
                    type="text"
                    placeholder="Phone"
                    class="form-control"
                    name="phone"
                    onChange={handleInputChange}
                    value={credentials.phone}
                  />
                </div>
              </>
            )}
            <div class="input-group">
              <input
                type="email"
                placeholder="abc@example.com"
                class="form-control"
                name="email"
                onChange={handleInputChange}
                value={credentials.email}
              />
            </div>
            <div class="input-group">
              <input
                type="text"
                placeholder="Your Password"
                className="form-control"
                name="password"
                onChange={handleInputChange}
                value={credentials.password}
              />
            </div>
            <button class="btn btn-primary" type="submit">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
