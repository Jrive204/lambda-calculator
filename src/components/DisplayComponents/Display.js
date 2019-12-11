import React from "react";

const Display = (props) => {
  
  const {displayStyle,children} = props
  

  return <div style = {displayStyle} className="display">{children}</div>;
};

export default Display

