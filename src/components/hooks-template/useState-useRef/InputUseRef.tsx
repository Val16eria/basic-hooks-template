import React, {useCallback, useRef, useState} from 'react';

export const InputUseRef = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    const [count, setCount] = useState(0);
    const addTwo = useCallback(() => setCount(prev => prev + 2), []);

    //console.log(inputRef?.current);
    //console.log(inputRef?.current?.value);
    return (
        <div>
            <h1>InputUseRef and useCallback</h1>
            {/*useCallback*/}
            <p>{count}</p>
            <button onClick={addTwo}>
                Add
            </button>
            <br />
            {/*useRef*/}
            <input type="text" ref={inputRef}/>
            <p>Содержание: {inputRef?.current?.value}</p>
        </div>
    );
}
