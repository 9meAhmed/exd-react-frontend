import { Card, Form, Button } from "react-bootstrap";
import CustomInput from "@components/CustomInput";
import { RoutePath } from "@/routes/routes";
import { useFormik } from "formik";
import * as Yup from "yup";
import useAxios from "@/hooks/useAxios";
import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react";

const ResetPasswordForm = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const { response, error, loading, fetchData } = useAxios();

  useEffect(() => {
    if (response) {
      navigate("/" + RoutePath.AUTH + "/" + RoutePath.LOGIN);
    }
  }, [response, navigate]);

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),

    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: state?.email || "",
      confirmPassword: "",
      password: "",
      otpCode: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      await fetchData({ url: "reset-password", method: "post", data: values });
    },
  });

  return (
    <Card className="shadow-sm p-4">
      <Card.Body>
        <h3 className="text-center mb-4">Reset Password</h3>

        <Form onSubmit={formik.handleSubmit}>
          <CustomInput
            name="otpCode"
            label="OTP Code"
            placeholder="Enter OTP code"
            type="tel"
            value={formik.values.otpCode}
            onChange={formik.handleChange}
          />
          <CustomInput
            name="password"
            label="Password"
            placeholder="Create a password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            isInvalid={!!formik.errors.password}
            validationMsg={formik.errors.password || ""}
          />

          <CustomInput
            name="confirmPassword"
            label="Confirm Password"
            placeholder="Confirm your password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
            isInvalid={!!formik.errors.confirmPassword}
            validationMsg={formik.errors.confirmPassword || ""}
          />

          <div className="d-grid">
            <Button variant="primary" type="submit">
              Reset Password
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

export default ResetPasswordForm;
