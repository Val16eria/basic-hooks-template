import React, {useReducer } from 'react';
import './App.css';
//import {UseState} from "./components/hooks-template/test/UseState";
import {InputUseState} from "./components/hooks-template/useState-useReducer/InputUseState";
//import {UseRef} from "./components/hooks-template/test/UseRef";
//import {UseReducer} from "./components/hooks-template/test/UseReducer";
import {InputUseReducer} from "./components/hooks-template/useState-useReducer/InputUseReducer";
//import {UseCallback} from "./components/hooks-template/test/UseCallback";
import {InputUseRef} from "./components/hooks-template/useState-useRef/InputUseRef";
//import {UseEffect} from "./components/hooks-template/test/UseEffect";
import ComponentA from "./components/hooks-template/useContext-useReducer/ComponentA";
import ComponentB from "./components/hooks-template/useContext-useReducer/ComponentB";
import ComponentC from "./components/hooks-template/useContext-useReducer/ComponentC";

// @ts-ignore
export const CountContext = React.createContext()

const initialState = 0;
const reducer = (state:any, action:any) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}

function App() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div className="App">
            {/*<div style={{padding: "20px 0"}}>*/}
            {/*    <UseState />*/}
            {/*    <UseReducer />*/}
            {/*    <UseRef />*/}
            {/*    <UseCallback />*/}
            {/*    <UseEffect />*/}
            {/*</div>*/}

            <div style={{background: "lightpink", padding: "20px 0"}}>
                <InputUseState />
                <InputUseReducer />
                <InputUseRef />
                <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
                    <div>
                        <h1>useContext + useReducer</h1>
                        Count - {count}
                        <ComponentA />
                        <ComponentB />
                        <ComponentC />
                    </div>
                </CountContext.Provider>
            </div>
        </div>
    );
}

export default App;
