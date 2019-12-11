import React from "react";
import {numbers} from '../../../data'

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

const Numbers = (props) => {
  // STEP 2 - add the imported data to state
const {updateFunction,buttonDivsStyle, buttonStyle} = props

    // props.numbuttons = numbers.map((number) => 
    // <button> {number} </button>
    //  );
    // function HandleOnClick(event){
    //   return handle(console.log(event.number))
    // }
  
  return (
    <div style = {buttonDivsStyle}>      
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}

      {numbers.map((number) => {console.log(number)
      return <button style = {buttonStyle} onClick = {updateFunction} key = {number} value = {number} > {number} </button> 
       })};

       
    
    </div>
  );
};

export default Numbers 