import React from 'react';
import './App.css';
//import {UseState} from "./components/hooks-template/test/UseState";
import {InputUseState} from "./components/hooks-template/useState-useReducer/InputUseState";
//import {UseRef} from "./components/hooks-template/test/UseRef";
//import {UseReducer} from "./components/hooks-template/test/UseReducer";
import {InputUseReducer} from "./components/hooks-template/useState-useReducer/InputUseReducer";

function App() {
  return (
    <div className="App">
        <div style={{padding: "20px 0"}}>
            {/*<UseState />*/}
            {/*<UseRef />*/}
            {/*<UseReducer />*/}
        </div>

        <div style={{background: "lightpink", padding: "20px 0"}}>
            <InputUseState />
            <InputUseReducer />
        </div>
    </div>
  );
}

export default App;
