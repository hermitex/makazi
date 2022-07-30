import { useFormik } from "formik";
import React, { useState } from "react";
import {
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Col,
  Button,
  Container,
} from "reactstrap";
import "./Login.css";
import { Link } from "react-router-dom";
import axios from "axios";

// const {Login} = useAuth();

const url = "http://localhost:8002/users";

const initialValues = {
  password: "",
  email: "",
};

const validate = ({ password, email }) => {
  let errors = {};

  if (!email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = "Invalid email format";
  }

  if (!password) {
    errors.password = "Required";
  }

  return errors;
};

function isValidUser(email, password, users) {
 return users.filter((user) => email === user.email && password === user.password) 
}

async function onSubmit({ email, password }) {
  let result = await axios.get(url);
  let users = result.data;
  if (isValidUser(email, password, users).length) {
    window.location = "/";
  } else {
    alert("Invalid email or password provided");
  }
}

function Login() {
  // const [error, setError] = useState(null)
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  return (
    <Container>
      <Form onSubmit={formik.handleSubmit}>
        <Row>
          <Col md={12}>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                placeholder="Email Address"
                type="email"
                {...formik.getFieldProps("email")}
              />

              {formik.touched.email && formik.errors.email ? (
                <em style={{ color: "red", fontSize: 0.9 + "rem" }}>
                  {formik.errors.email}
                </em>
              ) : null}
            </FormGroup>
          </Col>
          <Col md={12}>
            <FormGroup>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                placeholder="Password"
                type="password"
                {...formik.getFieldProps("password")}
              />
              {formik.touched.password && formik.errors.password ? (
                <em style={{ color: "red", fontSize: 0.9 + "rem" }}>
                  {formik.errors.password}
                </em>
              ) : null}
            </FormGroup>
          </Col>
        </Row>

        <Button type="submit">Sign In</Button>
        {/* <div>
          <Link to="/signup">Fogort password</Link>
        </div> */}

        <div>
          <span>Don't an account? </span>
          <Link to="/signup">Signup</Link>
        </div>
      </Form>
    </Container>
  );
}

export default Login;
