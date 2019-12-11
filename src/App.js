
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
  const [display, setDisplay] = useState(``);

const updateFunction = e => {
    if (e.target.value === "C") {
      setDisplay(``);
    } else if (display === `0`) {
      setDisplay(e.target.value);
    } else if (display !== `0`) {
      setDisplay(`${display}${e.target.value}`);
    }
    if (e.target.value === `+/-`){
      setDisplay(`-${display}`)
      
      if(display === `-${display}`){
        setDisplay(`+ ${display}`)

      }
    }
  };


  const appstyle = {
    display: `flex`,
    flexWrap: `wrap`,
  }

  const displayStyle = {
    marginLeft: `4%`,
  }

  const logostyle = {
    paddingTop : `5%`,
    paddingLeft: `5%`
  }

  const divstyle = {
    height: '88vh',

  }

  const buttonStyle = {
    width: `18%`,
    margin: `10px`,
    height: `10vh`,
    marginRight: `5%`,
    borderRadius: `50%`,
    fontSize: `2.5rem`,
    backgroundColor: `blue`,
    color: `white`,
  }

  const buttonDivsStyleOp = {
    justifyContent: `space-around`,
    height: `10vh`,
    display: `flex`,
    flexWrap: `wrap`,
    width: `100%`,
    padding: `2%`,
    paddingTop: `3%`,
    flexDirection:`column`,
    

  }
  const buttonStyleSp = {
    width: `18%`,
    margin: `10px`,
    height: `10vh`,
    marginRight: `5%`,
    borderRadius: `50%`,
  }

  const buttonStyleOp = {
    
    width: `13%`,
    margin: `10px`,
    height: `10vh`,
    marginRight: `5%`,
    borderRadius: `50%`,
    fontSize: `2.5rem`,
    backgroundColor: `skyblue`,
    color: `white`,
  }

  const buttonDivsStyle = {
   
    justifyContent: `space-around`,
    height: `10vh`,
    display: `flex`,
    flexWrap: `wrap`,
    width: `100%`,
    padding: `2%`,
    paddingTop: `3%`,

  }

  const buttonDivsStyleSP = {
   
    height: `8vh`,
    display: `flex`,
    flexWrap: `wrap`,
    width: `100%`,
    padding: `2%`,
    paddingTop: `2%`,

  }
  
  

  

  


  
  return (
    <div style={divstyle} className="container">
      <Logo logostyle = {logostyle} />
      <Display display = {display} displayStyle = {displayStyle}>
        {display}

        </Display>
      
      <div style = {appstyle} className="App">
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
        <SpecialButton updateFunction = {e => updateFunction(e)} buttonStyleSp = {buttonStyle} buttonDivsStyle = {buttonDivsStyle}/>
        <OperatorButton updateFunction = {e => updateFunction(e)} buttonDivsStyle = {buttonDivsStyle} buttonStyle = {buttonStyleOp}/>
        <NumberButton updateFunction ={e => updateFunction(e)} buttonDivsStyle = {buttonDivsStyle} buttonStyle = {buttonStyle}/>
      </div>
    </div>
  );
}

export default App;