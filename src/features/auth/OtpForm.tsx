import { Card, Form, Button, Alert } from "react-bootstrap";
import CustomInput from "@components/CustomInput";
import { RoutePath } from "@/routes/routes";
import { useFormik } from "formik";
import * as Yup from "yup";
import useAxios from "@/hooks/useAxios";
import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react";

const OtpForm = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const { user } = state.user;

  console.log("User from state:", user);

  const { response, error, loading, fetchData } = useAxios();

  useEffect(() => {
    if (response) {
      navigate("/" + RoutePath.AUTH + "/" + RoutePath.LOGIN);
    }
  }, [response, navigate]);

  const validationSchema = Yup.object({
    otpCode: Yup.string().required("OTP Code is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });

  const formik = useFormik({
    initialValues: {
      otpCode: "",
      email: user.email,
    },
    validationSchema,
    onSubmit: async (values) => {
      await fetchData({ url: "verify-otp", method: "post", data: values });
    },
  });
  return (
    <Card className="shadow-sm p-4">
      <Card.Body>
        <h3 className="text-center mb-4">Verify OTP Code</h3>
        <Form onSubmit={formik.handleSubmit}>
          <CustomInput
            name="otpCode"
            label="OTP Code"
            placeholder="Enter OTP code"
            type="tel"
            value={formik.values.otpCode}
            onChange={formik.handleChange}
          />
          <div className="d-grid">
            <Button variant="primary" type="submit">
              Verify OTP
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

export default OtpForm;
