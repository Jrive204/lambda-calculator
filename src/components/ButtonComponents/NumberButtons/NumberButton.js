import React from "react";
import Numbers from "./Numbers";

const NumberButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <Numbers {... props}/>
    </>
  );
};
export default NumberButton