import { Card, Form, Button } from "react-bootstrap";
import CustomInput from "@components/CustomInput";
import { RoutePath } from "@/routes/routes";
import { useFormik } from "formik";
import * as Yup from "yup";
import useAxios from "@/hooks/useAxios";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const LoginForm = () => {
  const navigate = useNavigate();

  const loginApi = useAxios();
  const appointmentApi = useAxios();

  if (loginApi.error) {
    console.log("Login error:", loginApi.error);
  }

  useEffect(() => {
    if (loginApi.response) {
      console.log("Login successful:", loginApi.response);
      appointmentApi.fetchData({ url: "appointment", method: "get" });
    }
  }, [loginApi.response, navigate]);

  useEffect(() => {
    if (appointmentApi.response) {
      console.log("Appointment successful:", appointmentApi.response);
    }
  }, [appointmentApi.response, navigate]);

  useEffect(() => {
    if (loginApi.error) {
      console.log("Login error:", loginApi.error);
    }
  }, [loginApi.error, navigate]);

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      await loginApi.fetchData({ url: "login", method: "post", data: values });
    },
  });
  return (
    <Card className="shadow-sm p-4">
      <Card.Body>
        <h3 className="text-center mb-4">Login Account</h3>

        <Form onSubmit={formik.handleSubmit}>
          <CustomInput
            name="email"
            label="Email"
            placeholder="Enter email address"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <CustomInput
            name="password"
            label="Password"
            placeholder="Create a password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />

          <div className="d-grid">
            <Button variant="primary" type="submit">
              Login
            </Button>
          </div>
        </Form>

        <p className="text-center mt-3 mb-0">
          Dont have a account?{" "}
          <a href={RoutePath.REGISTER} className="text-decoration-none">
            Signup
          </a>
        </p>
      </Card.Body>
    </Card>
  );
};

export default LoginForm;
