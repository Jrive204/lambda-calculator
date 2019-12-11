import React from "react";

const Display = (props) => {
  
  const {displayStyle, display} = props
  

  return <div style = {displayStyle} className="display">{display}</div>;
};

export default Display

