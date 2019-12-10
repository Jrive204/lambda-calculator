import React from "react";
import {numbers} from '../../../data'

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

const Numbers = ({numbuttons}) => {
  // STEP 2 - add the imported data to state

    // props.numbuttons = numbers.map((number) => 
    // <button> {number} </button>
    //  );
  
  return (
    <div>      
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {numbuttons = numbers.map((number) => 
    <button> {number} </button>
     )}
    </div>
  );
};
export default Numbers