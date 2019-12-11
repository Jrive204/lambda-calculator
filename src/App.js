import React, { useState, useEffect }from "react";
import "./App.css";
import Numbers from './components/ButtonComponents/NumberButtons/Numbers'
import { numbers, operator, specials } from './data';

// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";
import NumberButton from "./components/ButtonComponents/NumberButtons/NumberButton";
import OperatorButton from "./components/ButtonComponents/OperatorButtons/OperatorButton";
import SpecialButton from "./components/ButtonComponents/SpecialButtons/SpecialButton";
import Display from "./components/DisplayComponents/Display";



function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props
  // const [numberState, setNumberState] = useState(numbers);
  const [display, setDisplay] = useState(0);


  const updateFunction = e => {
    if (e.target.value === "C") {
      setDisplay(0);
    } else if (display === 0) {
      setDisplay(e.target.value);
    } else if (display !== 0) {
      setDisplay(`${display}${e.target.value}`);
    }
    if (e.target.value === `+/=`){
      if(display !== 0){

      }
    }
  };


  


    // if (number === `C`) {
    //         setDisplay(0)

    // }
    // } else {
    // setDisplay(e.target.value)
    // }
    
  
  
  

  // const add = () => setNumberState(numberState + 1)
  
  return (
    <div className="container">
      <Logo />
      <Display>
        {display}

        </Display>
      
      <div className="App">
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
        <NumberButton updateFunction ={e => updateFunction(e)} />
        <OperatorButton updateFunction = {e => updateFunction(e)}/>
        <SpecialButton updateFunction = {e => updateFunction(e)}/>
      </div>
    </div>
  );
}

export default App;
