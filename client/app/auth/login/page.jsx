"use client";
import { Navigation } from "@/components/Navigation.component";
import AuthContext from "@/context/AuthContext";
import { useContext, useState } from "react";

export default function Login() {
  const { login, setUser } = useContext(AuthContext);
  const [role, setRole] = useState("Doctor");
  const [error, setError] = useState(null);
  const [credentials, setCredentials] = useState({
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (role === "Doctor") {
        const doctor = await fetch(`http://localhost:3000/api/doc/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: credentials.email,
            password: credentials.password,
          }),
        });
        const doctorResponse = await doctor.json();
        console.log(doctorResponse);
        login(doctorResponse.data);
        setUser(doctorResponse.data);
      } else {
        const patient = await fetch(`http://localhost:3000/api/pat/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: credentials.email,
            password: credentials.password,
          }),
        });
        const patientResponse = await patient.json();
        console.log(patientResponse);
        login(patientResponse.data);
        setUser(patientResponse.data);
      }
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div>
      <Navigation />
      <div className="container">
        <h2>Login as {role}</h2>
        <form onSubmit={handleSubmit}>
          <div className="card">
            <button
              className="btn btn-info"
              onClick={() => {
                toggleRole();
              }}
            >
              Login as {role === "Doctor" ? "Patient" : "Doctor"}
            </button>
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
            <button class="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}
