import React, {useContext} from 'react';
import {CountContext} from "../../../App";

const ComponentD = () => {
    const countContext:any = useContext(CountContext)
    return (
        <div>
            ComponentD - {countContext.countState}
            <button onClick={() => countContext.countDispatch('increment')}>+</button>
            <button onClick={() => countContext.countDispatch('decrement')}>-</button>
            <button onClick={() => countContext.countDispatch('reset')}>reset</button>
        </div>
    );
}

export default ComponentD;
