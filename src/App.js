import React, { useReducer }from 'react';
// import usereducer hook 

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

// import app reducer and initialState object
import reducer, { initialState } from './reducers/index';

//import addOne, applyNumber 
import {addOne, applyNumber, changeOperation, clearDisplay, changeMemory, addToMem, clearMem} from './actions/index';


function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  // create eventhandler
  const testHandler = e =>{
    // e.preventDefault(); dont need because nothing is being submitted for page refresh
    dispatch(addOne(e));
  }

  const numberInput = e => {
    dispatch(applyNumber(e));
  }

  const operation = e => {
    dispatch(changeOperation(e));
  }

  const clear = () => {
    dispatch(clearDisplay());
  }

  const memoryChange = () => {
    dispatch(changeMemory());
  }

  const memoryAdd = (e) => {
    dispatch(addToMem(e));
  }

  const memoryClear = () => {
    dispatch(clearMem());
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton onClick={()=>memoryChange(state.total)} value={"M+"}/>
              <CalcButton onClick={()=>memoryAdd(state.total)} value={"MR"}/>
              <CalcButton onClick={()=>memoryClear()} value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton onClick={()=>numberInput(1)} value={1}/>
              <CalcButton onClick={()=>numberInput(2)} value={2}/>
              <CalcButton onClick={()=>numberInput(3)} value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick={()=>numberInput(4)} value={4}/>
              <CalcButton onClick={()=>numberInput(5)} value={5}/>
              <CalcButton onClick={()=>numberInput(6)} value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick={()=>numberInput(7)} value={7}/>
              <CalcButton onClick={()=>numberInput(8)} value={8}/>
              <CalcButton onClick={()=>numberInput(9)} value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick={()=>operation("+")} value={"+"}/>
              <CalcButton onClick={()=>operation("*")} value={"*"}/>
              <CalcButton onClick={()=>operation("-")} value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton onClick={()=>clear()} value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
