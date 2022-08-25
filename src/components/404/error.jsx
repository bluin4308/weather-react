import React from "react";
const Error = ({ error }) => {
  return (
    <>
      <h1 style={{ color: "red" }}>400</h1>
      <p>{error}</p>
    </>
  );
};
export default Error;
