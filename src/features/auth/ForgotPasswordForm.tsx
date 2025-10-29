import { Card, Form, Button } from "react-bootstrap";
import CustomInput from "@components/CustomInput";
import { RoutePath } from "@/routes/routes";
import { useFormik } from "formik";
import * as Yup from "yup";
import useAxios from "@/hooks/useAxios";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const ForgotPasswordForm = () => {
  const navigate = useNavigate();

  const { response, error, loading, fetchData } = useAxios();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      await fetchData({ url: "forgot-password", method: "post", data: values });
    },
  });

  useEffect(() => {
    if (response) {
      console.log(formik.values);
      navigate("/" + RoutePath.AUTH + "/" + RoutePath.RESET_PASSWORD, {
        state: { email: formik.values.email },
      });
    }
  }, [response, navigate]);

  return (
    <Card className="shadow-sm p-4">
      <Card.Body>
        <h3 className="text-center mb-4">Forgot Password</h3>
        <Form onSubmit={formik.handleSubmit}>
          <CustomInput
            name="email"
            label="Email"
            placeholder="Enter email address"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <div className="d-grid">
            <Button variant="primary" type="submit">
              Send Reset OTP
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

export default ForgotPasswordForm;
