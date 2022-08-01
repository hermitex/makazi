import React from "react";
import { Spinner, Col } from "reactstrap";
function Loader() {
  return (
    <Col md={12}>
      <Spinner
        style={{
          height: "3rem",
          width: "3rem",
          color: "orange",
        }}
        type="grow"
      >
        Loading...
      </Spinner>
    </Col>
  );
}

export default Loader;
