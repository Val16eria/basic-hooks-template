import React from 'react';
import './App.css';
import {UseState} from "./components/hooks-template/test/UseState";
import {InputUseState} from "./components/hooks-template/useState-useReducer/InputUseState";
import {UseRef} from "./components/hooks-template/test/UseRef";

function App() {
  return (
    <div className="App">
        <div style={{background: "lightblue"}}>
            <h1>useState from "test"</h1>
            <UseState />
            <h1>useRef from "test"</h1>
            <UseRef />
        </div>

        <div style={{background: "lightpink"}}>
            <h1>useState and useReducer</h1>
            <InputUseState />
        </div>
    </div>
  );
}

export default App;
