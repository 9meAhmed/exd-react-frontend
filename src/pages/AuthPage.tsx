import { Container, Row, Col } from "react-bootstrap";
import { Outlet } from "react-router";

const AuthPage = () => {
  return (
    <Container
      fluid
      className="vh-100 d-flex justify-content-center align-items-center bg-light"
    >
      <Row className="w-100 justify-content-center">
        <Col md={5} lg={4} xl={7}>
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
};

export default AuthPage;
