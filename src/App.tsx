import React from 'react';
import './App.css';
import {UseState} from "./components/hooks-template/test/UseState";
import {InputUseState} from "./components/hooks-template/useState-useReducer/InputUseState";
import {UseRef} from "./components/hooks-template/test/UseRef";
import {UseReducer} from "./components/hooks-template/test/UseReducer";
import {InputUseReducer} from "./components/hooks-template/useState-useReducer/InputUseReducer";
import {UseCallback} from "./components/hooks-template/test/UseCallback";
import {InputUseRef} from "./components/hooks-template/useState-useRef/InputUseRef";

function App() {
  return (
    <div className="App">
        <div style={{padding: "20px 0"}}>
            <UseState />
            <UseReducer />
            <UseRef />
            <UseCallback />
        </div>

        <div style={{background: "lightpink", padding: "20px 0"}}>
            <InputUseState />
            <InputUseReducer />
            <InputUseRef />
        </div>
    </div>
  );
}

export default App;
