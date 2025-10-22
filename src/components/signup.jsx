import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Alert,
} from "react-bootstrap";

import CustomInput from "./CustomInput";

const PRODUCT_PRICE = 10;

const SignupPage = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form, "form data");

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
    <Container
      fluid
      className="vh-100 d-flex justify-content-center align-items-center bg-light"
    >
      <Row className="w-100 justify-content-center">
        <Col md={5} lg={4}>
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
                />

                <div className="d-grid">
                  <Button variant="primary" type="submit">
                    Sign Up
                  </Button>
                </div>
              </Form>

              <p className="text-center mt-3 mb-0">
                Already have an account?{" "}
                <a href="/login" className="text-decoration-none">
                  Login
                </a>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SignupPage;
