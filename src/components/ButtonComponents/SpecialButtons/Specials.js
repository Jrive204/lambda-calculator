import React from "react";
import {specials} from '../../../data'

//import any components needed

//Import your array data to from the provided data file

const Specials = (props) => {
  const {updateFunction, buttonStyleSp , buttonDivsStyle} = props
  // STEP 2 - add the imported data to state
  // const {updateFunction} = props

  return (
    <div style = {buttonDivsStyle}>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {specials.map((special) => {
         return <button style = {buttonStyleSp} onClick = {updateFunction} key = {special} value = {special} > {special} </button>

       })}

    </div>
  );
};
export default Specials