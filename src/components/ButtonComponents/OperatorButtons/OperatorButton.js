import React from "react";
import Operators from "./Operators";

const OperatorButton = props => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <Operators {...props}/>
    </>
  );
};
export default OperatorButton