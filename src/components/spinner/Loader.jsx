import React from "react";
import { Spinner } from "reactstrap";
function Loader() {
  return (
    <Spinner
      color="primary"
      style={{
        height: "3rem",
        width: "3rem",
      }}
      type="grow"
    >
      Loading...
    </Spinner>
  );
}

export default Loader;
