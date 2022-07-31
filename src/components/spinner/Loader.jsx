import React from "react";
import { Spinner } from "reactstrap";
function Loader() {
  return (
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
  );
}

export default Loader;
