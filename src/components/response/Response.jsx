import React from "react";

function Response({ message, type, redirect }) {
  return (
    <div className={"py-2 px-1 bg-" + type}>
      <small> {message} </small>
    </div>
  );
}

export default Response;
