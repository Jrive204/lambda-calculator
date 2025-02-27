import React from "react";
import {operators} from '../../../data'


//import any components needed

//Import your array data to from the provided data file

const Operators = (props) => {
 const {updateFunction, buttonDivsStyle, buttonStyle} = props
  // STEP 2 - add the imported data to state
  return (
    <div style = {buttonDivsStyle}>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
              {operators.map((operator) => 
    <button style = {buttonStyle} onClick = {updateFunction} key = {operator.value} value = {operator.value} > {operator.char} </button>
     )}

    </div>
  );
};
export default Operators
