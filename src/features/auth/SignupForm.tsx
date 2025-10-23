import React, { useState } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import CustomInput from "@components/CustomInput";
import { RoutePath } from "@/routes/routes";

const SignupForm = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      setError("All fields are required.");
      setSuccess("");
      return;
    }

    // Simulate API call
    setTimeout(() => {
      setError("");
      setSuccess("Account created successfully!");
    }, 1000);
  };
  return (
    <Card className="shadow-sm p-4">
      <Card.Body>
        <h3 className="text-center mb-4">Create Account</h3>

        {error && <Alert variant="danger">{error}</Alert>}
        {success && <Alert variant="success">{success}</Alert>}

        <Form onSubmit={handleSubmit}>
          <CustomInput
            name="name"
            label="Full Name"
            placeholder="Enter your name"
            type="text"
            onChange={handleChange}
            value={form.name}
          />
          <CustomInput
            name="email"
            label="Email"
            placeholder="Enter email address"
            type="email"
            value={form.email}
            onChange={handleChange}
          />
          <CustomInput
            name="password"
            label="Password"
            placeholder="Create a password"
            type="password"
            onChange={handleChange}
            value={form.password}
          />

          <div className="d-grid">
            <Button variant="primary" type="submit">
              Sign Up
            </Button>
          </div>
        </Form>

        <p className="text-center mt-3 mb-0">
          Already have an account?{" "}
          <a href={RoutePath.LOGIN} className="text-decoration-none">
            Login
          </a>
        </p>
      </Card.Body>
    </Card>
  );
};

export default SignupForm;
