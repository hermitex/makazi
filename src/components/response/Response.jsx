import React from "react";

function Response({ messageClass }) {
  return (
    <div className={"text-light mb-2 py-2 px-1 bg-" + messageClass}>
      <small>
        {messageClass === "success"
          ? "Listing added successfully!"
          : "Listing add failed!"}
      </small>
    </div>
  );
}

export default Response;
