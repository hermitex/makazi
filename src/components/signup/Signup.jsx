import { useFormik } from "formik";
import React from "react";
import { Form, FormGroup, Input, Label, Row, Col, Button } from "reactstrap";
import "./signup.css";
import { Link } from "react-router-dom";

const initialValues = {
  firstName: "",
  lastName: "",
  password: "",
  accountType: "",
  agreement: "",
  email: "",
};

const validate = ({
  firstName,
  lastName,
  password,
  accountType,
  agreement,
  email,
}) => {
  let errors = {};
  if (!firstName) {
    errors.firstName = "Required";
  }

  if (!lastName) {
    errors.lastName = "Required";
  }

  if (!email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = "Invalid email format";
  }

  if (!password) {
    errors.password = "Required";
  }

  if (!agreement.checked) {
    errors.agreement = "Confirm Agreement";
  }

  return errors;
};

function Signup() {
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log(values);
    },

    validate,
  });

  return (
    <>
      <Form onSubmit={formik.handleSubmit} style={{width: '30vw'}}>
        <Row>
          <Col md={12}>
            <FormGroup>
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                name="firstName"
                placeholder="First Name"
                type="text"
                {...formik.getFieldProps("firstName")}
              />

              {formik.touched.firstName && formik.errors.firstName ? (
                <em style={{ color: "red", fontSize: 0.9 + "rem" }}>
                  {formik.errors.firstName}
                </em>
              ) : null}
            </FormGroup>
          </Col>
          <Col md={12}>
            <FormGroup>
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                type="text"
                {...formik.getFieldProps("lastName")}
              />

              {formik.touched.lastName && formik.errors.lastName ? (
                <em style={{ color: "red", fontSize: 0.9 + "rem" }}>
                  {formik.errors.lastName}
                </em>
              ) : null}
            </FormGroup>
          </Col>
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
        <FormGroup>
          <Label htmlFor="accountType">Acount Type</Label>
          <Input
            id="accountType"
            name="accountType"
            type="select"
            {...formik.getFieldProps("accountType")}
          >
            <option>User</option>
            <option>Agent</option>
            <option>Admin</option>
          </Input>

          {formik.touched.accountType && formik.errors.accountType ? (
            <em style={{ color: "red", fontSize: 0.9 + "rem" }}>
              {formik.errors.accountType}
            </em>
          ) : null}
        </FormGroup>

        <FormGroup check>
          <Input
            id="agreement"
            name="agreement"
            type="checkbox"
            {...formik.getFieldProps("agreement")}
          />
          <Label check htmlFor="agreement">
            I accept the terms and conditions.
          </Label>

          {formik.touched.agreement === "Yes" && formik.errors.agreement ? (
            <em style={{ color: "red", fontSize: 0.9 + "rem" }}>
              {formik.errors.agreement}
            </em>
          ) : null}
        </FormGroup>
        <Button type="submit">Sign Up</Button>
        <div>
          <span>Have an account? </span>
          <Link to="/login">Sign In</Link>
        </div>
      </Form>
    </>
  );
}

export default Signup;
